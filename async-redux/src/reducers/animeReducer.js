import {
    FETCH_START,
    STOCK_SUCCESS,
    STOCK_FETCH_FAILURE, 
} from '../actions'; 

export const initialState = {
    anime: null, 
    fetch: false, 
    error: ""
}

const reducer = (state=initialState, action) => { 
    switch(action.type){
        case FETCH_START:
            return {
                ...state, 
                fetch: true
            }
        case STOCK_SUCCESS: 
            return {
                ...state, 
                anime: action.payload,
                fetch: false,
                error: ""
            }
        case STOCK_FETCH_FAILURE: 
            return {
                ...state, 
                error: action.payload
            }
        default: 
            return state;
    }
}

export default reducer;