import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { updateProfile } from 'firebase/auth';
import * as types from "./actionTypes"



const registerStart = () =>({
    type: types.REGISTER_START
})

const registerSuccess = (user) =>({
    type: types.REGISTER_SUCCESS,
    payload: user
})

const registerFailure = (error) =>({
    type: types.REGISTER_FAILURE,
    payload: error
})

const LoginStart = () =>({
    type: types.LOGIN_START
})

const LoginSuccess = (user) =>({
    type: types.LOGIN_SUCCESS,
    payload: user
})

const LoginFailure = (error) =>({
    type: types.LOGIN_FAILURE,
    payload: error
})

export const registerInitiate = (email, password, displayName) => {
    return function (dispatch) {
        dispatch(registerStart());
        createUserWithEmailAndPassword(auth, email, password, displayName)
        .then(async (res) => {
            const user = res.user;
            await updateProfile(user, {
                displayName: displayName,
            })
            dispatch(registerSuccess(user))
        })
        .catch((error) =>dispatch(registerFailure(error.message)))
    }
}

export const LoginInitiate = (email, password) => {
    return function (dispatch) {
        dispatch(LoginStart());
        signInWithEmailAndPassword(auth, email, password)
        .then(async (res) => {
            const user = res.user;
            dispatch(LoginSuccess(user))
            localStorage.setItem('parabellum_access_token', user.accessToken);
        })
        .catch((error) =>dispatch(LoginFailure(error.message)))
    }
}
