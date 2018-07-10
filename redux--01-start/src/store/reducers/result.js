import * as actionTypes from '../actions';

const initialState = {
    results: []
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: action.result})   // concat is immutable way to manipulate array
            };
        case actionTypes.DELETE_RESULT:
            const updatedArray = state.results.filter( result => result.id !== action.id); // delete elements in array in immutable ways
            return {
                ...state,
                results: updatedArray
            };
        default:
            return state;
    }


};

export default reducer;