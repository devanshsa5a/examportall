import * as actionTypes from './actionTypes';
import axios from 'axios';


export const getQuest = (c, java, python) => {
    return {
        type: actionTypes.FETCH_QUESTION,
        c: c,
        java: java,
        python: python
    };
};


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
       
    }

}


export const quesChanger = (payload) => {
    return {
        type: actionTypes.QUES_CHANGER,
        payload: payload
    }
}

export const baseQuestion = () => {
    return {
        type: actionTypes.INIT_QUESTION,
    };
}

export const initTest = () => {
    return async dispatch => {
        let config = {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("tokenStudent")}`,
            }
        }
        // await setTimeout(() => {
        // 
        //     console.log('hello');
        // }, 10000)
        axios.get('https://bdcoe-api.herokuapp.com/questions/', config).then(res => {
            // console.log(res.data);
            let responsedata = res.data;
            console.log(responsedata.data)
            dispatch(getQuestion(responsedata.data));
            dispatch(baseQuestion());
        }).catch(err => {
            console.log(err);
        })


    }
    // fetch the question
    // slip the question in sections
    // save the cuurent question
}

// export const fetchOrders = () => {
//     return dispatch => {
//         dispatch(fetchOrdersStart());
//         axios.get( '/orders.json' )
//             .then( res => {
//                 const fetchedOrders = [];
//                 for ( let key in res.data ) {
//                     fetchedOrders.push( {
//                         ...res.data[key],
//                         id: key
//                     } );
//                 }
//                 dispatch(fetchOrdersSuccess(fetchedOrders));
//             } )
//             .catch( err => {
//                 dispatch(fetchOrdersFail(err));
//             } );
//     };
// }