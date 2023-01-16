import styled from "styled-components";

export const NavbarMain = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    background: transparent;

    .tab-1, .tab-2, .tab-3 {
        display: flex;
        /* flex-grow:2; */
    }
    .tab-1, .tab-3 {
        width: 117px;
        height: 50px;
        position: relative;
        margin-left: 5px;
        margin-right: 5px;
        display: flex;
        justify-content: space-between;
        /* flex-grow:2 ; */
    }
    .tab-3 {
        display: inline-flex;
        justify-content: space-between;
        min-width: 150px;
        /* flex-direction: row-reverse; */
        align-items: center;
    }
    .tab-3 p{
        font-size: 18px;
        color: white;
        white-space: nowrap;
        height: 30px;
        align-items: flex-start;
        flex-grow: 2;
        margin-right: 45px;
        padding-right: 10px;
    }
    .vid{
        margin-left: 15px;
        /* position: fixed; */
        flex-grow: 1;
        padding: 0;
       
    }
    .tab-1 p{
        position:absolute ;
        right: 5px;
        font-size: 20px;
        bottom: -4px;
        color: white;
        /* flex-grow: 1; */
    }
    .tab-2{
        background: transparent;
        width: 350px;
        height: 38px;
        position: relative;
       
    }
    .search-icon{
        position: absolute;
        right: 15px;
        top: 10px;
    }
    .search {
        padding-left: 10px;
        outline: none;
        width: 100%;
        padding: 12px;
        border: none;
        font-size: 16px;
        border: 1.5px solid white;
        background: transparent;
        border-radius: 4px;
        color: white;
    }
    input::-webkit-input-placeholder {
        color: white;
    }
    
`;