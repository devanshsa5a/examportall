import * as actionTypes from './actionTypes';
import axios from 'axios';

const responsedata = [
    {
        "questionType": "1",
        "questionDesc": "what is question 1?",
        "questionOption": ["1", "2", "3", "4"],
        "questionNo": "1",
    },
    {
        "questionType": "2",
        "questionDesc": "what is question 1 type 2?",
        "questionOption": ["1", "2", "3", "4"],
        "questionNo": "1",
    },
    {
        "questionType": "3",
        "questionDesc": "what is question 1 type 3?",
        "questionOption": ["1", "2", "3", "4"],
        "questionNo": "1",
    },
    {
        "questionType": "1",
        "questionDesc": "what is question 2?",
        "questionOption": ["1", "2", "3", "4"],
        "questionNo": "2",
    },
    {
        "questionType": "1",
        "questionDesc": "what is question 3?",
        "questionOption": ["1", "2", "3", "4"],
        "questionNo": "3",
    },
    {
        "questionType": "2",
        "questionDesc": "what is question 2 type 2?",
        "questionOption": ["1", "2", "3", "4"],
        "questionNo": "2",
    },
    {
        "questionType": "3",
        "questionDesc": "what is question 2 typ 3?",
        "questionOption": ["1", "2", "3", "4"],
        "questionNo": "2",
    },
    {
        "questionType": "3",
        "questionDesc": "what is question 3 type 3?",
        "questionOption": ["1", "2", "3", "4"],
        "questionNo": "3",
    }
];


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

export const baseQuestion = () => {
    return {
        type: actionTypes.INIT_QUESTION,
    };
}

export const initTest = () => {
    return dispatch => {
        let config = {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("tokenStudent")}`,
            }
        }
        axios.get('https://bdcoe-api.herokuapp.com/questions/', config).then(res => {
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        })
        dispatch(getQuestion(responsedata));
        dispatch(baseQuestion());
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