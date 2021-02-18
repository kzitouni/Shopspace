import Styled from "styled-components"

export const Wrapper = Styled.div`
    width : 100%;
    height:auto;
    display:flex;
    justify-content:center;
    align-items:center;
    font-family: 'Open Sans', sans-serif;
`;

export const Container = Styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    height:100%;
    width: 100%;
    margin-left: 60px;
    margin-right: 60px;
    max-width: 1140px;
    @media ${(props) => props.theme.laptop} {
    margin-left: 50px;
    margin-right: 50px;
  }
  @media ${(props) => props.theme.tablet} {
    margin-left: 25px;
    margin-right: 25px;
  }
  @media ${(props) => props.theme.mobile} {
    margin-left: 13px;
    margin-right: 13px;
  }
`;

export const Form = Styled.form`
    width:100%;
    height:auto;
`;

export const Grid = Styled.div`
    width:100%;
    height:auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const FormLower = Styled.form`
    width:100%;
    height:auto;
    display:flex;
    justify-content:center;
`;

export const HalfInput = Styled.input`
    height:50px;
    width:46%;
    border-radius:5px;
    border:.5px lightgray solid;
    padding:10px;
    font-size:16px;
    font-weight:500;
    margin-bottom: 20px;
    outline-color: rgba(52, 152, 219, 1);
    @media ${(props) => props.theme.tablet} {
    width: 100%;
  }
`;

export const Empty = Styled.input`
    border:none;
    z-index:0;
    @media only screen and (max-width: 1000px){
        display:none;
    }
`;

export const Message = Styled.input`
    height:50px;
    width:100%;
    border-radius:5px;
    border:.5px lightgray solid;
    padding:10px;
    font-size:16px;
    font-weight:500;
    resize:both;
    outline-color: rgba(52, 152, 219, 1);
`;

export const ButtonWrap = Styled.div`
    width:70%
    height:auto;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:25px;
    @media only screen and (max-width: 1000px){
        width:100%;
    }
`;

export const Submit = Styled.a`
    height:50px;
    width:150px;
    border:0;
    border-radius: 25px;
    color: white;
    font-size: 16px;
    font-weight:600;
    background-color:rgba(52, 152, 219, 1);
    text-align:center;
    display:flex;
    align-items:center;
    justify-content:center;
    text-decoration:none;
    transition: .5s 0s ease-in-out;
    &:hover{
        position:relative;
        opacity:.9;
        transition: .5s 0s ease-in-out;
        transform: scale(1.03)
    }
`;

export const SuccessText = Styled.h2`
    font-size: 18px;
    line-height: 24px;
    letter-spacing: .5px;
    text-align: center;
    font-weight: 700;
`;