import * as actionTypes from '../action/actionTypes';

const initialState = {
    c: null,
    python: null,
    java: null
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_QUESTION:
            return {
                ...state,
                c: action.c,
                java: action.java,
                python: action.python
            };
        default:
            return state;
    }
};

export default reducer;