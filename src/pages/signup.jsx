import React, { useEffect, useState } from 'react';
import { LoginContainer, MainContainer, FormContainer } from './signup.style';
import { ReactComponent as Vector } from "assets/icons/vector.svg";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PageLoader from 'component/Loader/loader';
import { registerInitiate } from 'redux/action';


const Signup = () => {
    const [userInfo, setUserInfo]  = useState({
        displayName: 'test test',
        email:'test@test.com',
        password:"qwerty",
    });
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [checkError, setCheckError] = useState(false)
    const [registerError, setRegisterError] = useState(null)
    const {error, registerSuccess, currentUser, registerFaliure} = useSelector(state => state);
    // const a = useSelector(state => console.log(state, "reduser state"));
    const [disabledInput] = useState(false)
    // console.log(currentUser, "currentUsercurrentUser")

    useEffect(() => {
        if(currentUser?.uid && registerSuccess === 200){
            history.push("/user-signin")
        }
    }, [currentUser, registerSuccess, history])

    useEffect(() => {
        if(error === 'Firebase: Error (auth/email-already-in-use).' && registerFaliure === 401){
            setCheckError(true)
            setRegisterError('Email already in use')
        }
        if(error == 'Firebase: Error (auth/invalid-email).'){
            setCheckError(true)
            setRegisterError('Invalid email')
        }
    }, [error])
    

    const dispatch = useDispatch();
    
    const handleChange = (e) => {
        setUserInfo(prevState => ({...prevState, [e.target.name]: e.target.value}));
    }
    const disabled = Object.values(userInfo).some(text=> text ==='');
    
    const { email, displayName, password } = userInfo;
    
    const signup = (e) => {
        e.preventDefault();
        dispatch(registerInitiate(email, password, displayName))
    };
    
    

    const redirect = () => {
        history.push('/user-signin')
    }

    return (
        <MainContainer>
                <LoginContainer>
               {checkError && <p className='invalid-user'>{registerError}</p>}
                <div className='icon-text'>
                    <Vector />
                    <h2 className='admin-h2'>Hi welcome</h2>
                </div>
                <p className='admin-text'>Please sign-up to start your experience</p>
                <FormContainer className='form' onSubmit={signup}>
                <label className="label">
                        <input value={displayName} className='input' type="text" name="displayName" onChange={handleChange} placeholder="fullname" />
                    </label>
                    <label className="label">
                        <input value={email} className='input' type="email" name="email" onChange={handleChange} placeholder="email" />
                    </label>
                    <label className="label">
                        <input className='input' value={password} type="password" name="password" onChange={handleChange} placeholder="password"/>
                    </label>
                    <button className={disabled ? 'login-disable-btn':'login-btn'} disabled={ disabled }>{loading ? <PageLoader Farm={'loading...'} className='pageLoader-screens' />:"REGISTER"}</button>
                    <div className='already'><span>Already have an account?</span> <span className='acc' onClick={redirect}>Login</span></div>
                </FormContainer>
            </LoginContainer>
        </MainContainer>
    )
}

export default Signup;