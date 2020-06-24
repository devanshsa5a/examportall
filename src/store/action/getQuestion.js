import * as actionTypes from './actionTypes';
import axios from 'axios';
let config = {
    headers: {
        'Authorization': `Bearer ${localStorage.getItem("tokenStudent")}`,
    }
}

export const initTest = () => {
    return async dispatch => {
        axios.get('https://bdcoe-api.herokuapp.com/questions/', config).then(res => {
            let responsedata = res.data;
            dispatch(getQuestion(responsedata.data));
            dispatch(baseQuestion());
        }).catch(err => {
            console.log(err);
        })
    }
}
export const baseQuestion = () => {
    return {
        type: actionTypes.INIT_QUESTION,
    };
}


export const getQuestion = (response) => {
    return dispatch => {
        let c = [];
        let java = [];
        let python = [];
        for (var i = 0; i < response.length; i++) {
            let details = response[i];
            let btn = {
                key: details.questionType + ":" + details.questionNo,
                name: details.questionNo,
                funcInput: details
            }
            if (response[i].questionType === '1') {
                c.push(btn);
            }
            else if (response[i].questionType === '2') {
                java.push(btn);
            } else {
                python.push(btn);
            }
        }// end of for loop
        dispatch(getQuest(c, java, python));
        // console.log(c)
    }
}

export const getQuest = (c, java, python) => {
    return {
        type: actionTypes.FETCH_QUESTION,
        c: c,
        java: java,
        python: python
    };
};

export const quesChanger = (payload) => {
    return {
        type: actionTypes.QUES_CHANGER,
        payload: payload
    }
}



export const final = (msg) => {
    return {
        type: actionTypes.RES_FINAL,
        msg: msg
    }
}


export const ansSubmiter = (response) => {
    return dispatch => {
        dispatch(final('Wait summit ans'));
        let data = {
            "questionNo": response.questionNo,
            "questionType": response.questionType,
            "correctOption": response.correctOption
        }
        axios.post('https://bdcoe-api.herokuapp.com/response/', data, config)
            .then(res => {
                if (res.data.response === "successfully saved ")
                {
                    dispatch(final('Response is Saved'));
                }else{
                    dispatch(final('Try Again'));
                }
            })
            .catch(err => {
                dispatch(final('Try Again'));
            })
    }
}

