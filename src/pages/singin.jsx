import React, { useEffect, useState } from 'react';
import { LoginContainer, MainContainer, FormContainer } from './signup.style';
import { ReactComponent as Vector } from "assets/icons/vector.svg";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import PageLoader from 'component/Loader/loader';
import { LoginInitiate } from 'redux/action';


const Signin = () => {
    const [userInfo, setUserInfo]  = useState({
        email:'test@test.com',
        password:"qwerty"
    });
    const [loading, setLoading] = useState(false);
    const [checkError, setCheckError] = useState(false)

    const {error, currentUser} = useSelector(state => state);

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        if(currentUser?.uid){
            history.push("/")
        }
    }, [currentUser, history])

    useEffect(() => {
        if(error){
            setCheckError(true)
        }
    }, [error])

    const handleChange = (e) => {
        setUserInfo(prevState => ({...prevState, [e.target.name]: e.target.value}));
    }

    const disabled = Object.values(userInfo).some(text=> text ==='')

    const { email, password } = userInfo

    const login = (e) => {
        e.preventDefault();
        dispatch(LoginInitiate(email, password))
    };
   
    const redirect = () => {
        history.push('/user-signup')
    }

    return (
        <MainContainer>
                <LoginContainer>
                {checkError && <p className='invalid-user'>{error}</p>}
                <div className='icon-text'>
                    <Vector />
                    <h2 className='admin-h2'>Hi welcome</h2>
                </div>
                <p className='admin-text'>Please sign-in to your account and start your experience</p>
                <FormContainer className='form' onSubmit={login}>
                    <label className="label">
                        <input value={userInfo.email} className='input' type="email" name="email" onChange={handleChange} placeholder="email" />
                    </label>
                    <label className="label">
                        <input className='input' value={userInfo.password} type="password" name="password"  onChange={handleChange} placeholder="password"/>
                    </label>
                    <button className={disabled ? 'login-disable-btn':'login-btn'} disabled={ disabled }>{loading ? <PageLoader Farm={'loading...'} className='pageLoader-screens' />:"Login"}</button>
                   <p>Don't have an account? <span className='acc' onClick={redirect}>Register</span></p>
                </FormContainer>
            </LoginContainer>
        </MainContainer>
    )
}

export default Signin;