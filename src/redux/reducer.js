import * as types from "./actionTypes"


const initialState = {
    currentUser: null,
    error: null,
    registerSuccess: null,
    registerFaliure: null,
    loginSuccess: null,
    loginFailure: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.REGISTER_START:
        case types.LOGIN_START:
         return { ...state }

        case types.REGISTER_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                registerSuccess: 200,  
            }
        case types.LOGIN_SUCCESS:
         return {
            ...state,
            currentUser: action.payload,
            loginSuccess: 200
         }
         case types.REGISTER_FAILURE:
             return {
                 ...state,
                 error: action.payload,
                 registerFaliure: 401,
                }
                case types.LOGIN_FAILURE:
             console.log(action.payload, "rederrr")
            return{
                ...state,
                error: action.payload,
                loginFailure: 401
         }
         case types.LOGOUT:
             return {
                ...state,
                currentUser: null,
                error: null,
                registerSuccess: null,
                registerFaliure: null,
                loginSuccess: null,
                loginFailure: null
                }

        default:
            return state;
    }
};

export default reducer;