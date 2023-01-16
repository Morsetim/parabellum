import styled from "styled-components";
import Image from "assets/images/Poster.png"


export const FeaturedMain = styled.div`
    padding-left: 80px;
    padding-top: 20px;
    width: 100%vw;
    height: 600px;
    padding-right:40px;
    background: url(${Image}) repeat-x;
    object-fit: cover;
    position: relative;
    
`;
export const ImageContainer = styled.div`
  
`;

export const DescContainer = styled.div`
     height: calc(43vh - 100px);
     width: 404px;
     position: absolute;
     margin: 0;
     position: absolute;
     top: 50%;
     transform: translateY(-50%);
     display: flex;
     flex-direction: column;
     justify-content: space-between;

     .title{
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 56px;
        color: #FFFFFF;
        margin: 0;
     }
     .imdb{
        width: 220px;
        height: 25px;
        display: flex;
        justify-content: space-between;
     }
     .imdb-1{
        display:flex ;
        flex: 1;
        align-items: center;
        justify-content: space-between;
        height: inherit;
     }
     .imdb-p{
        background: gold;
        font-size: 14px;
        padding: 2.6px;
        font-weight: 700;
     }
     .imdb-price{
        color: white;
        font-size: 14px;
        margin: auto;
     }
     .imdb-2{
        display: flex;
        flex: 1;
        justify-content: center;
        margin-top: 2px;
     }
     
     .per{
        color: white;
        margin: 0;
        margin-left: 10px;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
     }
     .desc-text{
        color: white;
        margin-top: 10px;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 500;
        line-height: 18px;
     }
     .watch{
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 6px 16px;
        gap: 8px;
        width: 169px;
        height: 36px;
        background: #BE123C;
        border-radius: 6px;
        margin-top: 8px;
     }
     .watch p{
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 24px;
        text-transform: uppercase;
        color: #FFFFFF;
     }
`;