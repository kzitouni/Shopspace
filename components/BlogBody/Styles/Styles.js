import Styled from "styled-components"

export const Wrapper = Styled.div`
    width : 100%;
    height:auto;
    display:flex;
    justify-content:center;
    align-items:center;
    font-family: 'Open Sans', sans-serif;
    margin-top:100px;
    @media ${(props) => props.theme.tablet} {
    margin-top: 70px;
  }
    @media ${(props) => props.theme.mobile} {
    margin-top: 40px;
  }
`;

export const Container = Styled.div`
    width:100%;
    display: flex;
    max-width: 880px;
    margin-left: 60px;
    margin-right: 60px;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
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



export const Title = Styled.h1`
    font-size:32px;
    font-weight:700;
    margin-bottom:30px;
    text-align:left;
    line-height: 38px;
  @media ${(props) => props.theme.mobile} {
    font-size: 24px;
    line-height: 30px
  }
`;

export const Body = Styled.p`
    font-size:18px;
    font-weight:500;
    margin-bottom:20px;
    text-align:left;
    line-height: 40px;
    color: #333;
    @media ${(props) => props.theme.mobile} {
    font-size: 14px;
    line-height: 24px
  }
`;

