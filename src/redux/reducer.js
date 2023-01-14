import * as types from "./actionTypes"


const initialState = {
    currentUser: null,
    error: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.REGISTER_START:
        case types.LOGIN_START:
         return { ...state }

        case types.REGISTER_SUCCESS:
        case types.LOGIN_SUCCESS:
         return {
            ...state,
            currentUser: action.payload
         }
         case types.REGISTER_FAILURE:
         case types.LOGIN_FAILURE:
            return{
                ...state,
                error: action.payload
         }
        default:
            return state;
    }
};

export default reducer;