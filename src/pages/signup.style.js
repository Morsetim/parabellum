import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    position: fixed;

    .invalid-user{
        text-align: center;
        color: red;
        margin-bottom: 30px;
        font-size: 21px;
    }
`;
export const ImageContainer = styled.div`
    background: linear-gradient(to bottom, #55c7ed, #385cad);
    width: 50%;
    height: 100%;

    .icon-text{
        width: 100%;
        height: 100%;
        position: relative;
    }
    .image-container{
      position: relative;
      top: 75px;
      opacity: 0.3;
    }
    .farm-text{
        position: absolute;
        top: 300px;
        left: 105px;
        max-width: 500px;
        color: white;
        font-weight: 400;
        font-size: 56px;
        line-height: 78px;
        text-align: center;
        letter-spacing: 0.05px;
        z-index: 1;
    }
    .fs-text{
        position: absolute;
        bottom: 107px;
        left:54px;
        line-height: 1px;
        z-index: 1;
    }
    .fs-p{
        font-weight: 400;
        font-size: 40px;
        color: white;
        z-index: 1;
    }
    .help{
        color: white;
        font-weight: 400;
        font-size: 16px;
        margin-top: -10px;
        z-index: 1;
    }
`;

export const LoginContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    margin: auto;
    margin-top: 123px;

    .icon-text{
        align-self: center;
    }

    .admin-text{
        font-size: 19px;
        color: black;
        text-align: center;
    }
    .admin-h2{
        color: black
    }
    .forgot-password{
        width: 100%;
        display: flex;
        justify-content: flex-end;
        margin-top: 18px;
        color: #124829;
    }
`;

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    height: 400px;
    width: 412px;
    align-self: center;

    .label {
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        line-height: 24px;
        margin-top: 10px;
    }
    .input{
        border-radius: 5px;
        outline: none !important;
        border: 1px solid #E8E8E8;
        width: 400px;
        height: 53px;
        font-weight: 400;
        font-size: 16px;
        padding-left: 10px;
    }
    .already{
        margin: auto;
    }
    .login-btn{
        height: 45px;
        background: black;
        color: white;
        font-weight: 400;
        font-size: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid white;
        cursor: pointer;
        border-radius: 5px;
        margin-top: 20px;
    }
    .login-disable-btn {
        background: #648070;
        color: white;
        font-weight: 400;
        font-size: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid white;
        height: 45px;
        border-radius: 5px;
    }
    .pageLoader-screens {
        width: 100%;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    .acc{
        color: #B91C1C;
        font-weight: 500;
        font-family: 'Work Sans';
        cursor: pointer;
    }
      
`;