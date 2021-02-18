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
    max-width: 1140px;
    margin-left: 60px;
    margin-right: 60px;
    justify-content: center;
    align-items: center;
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
    font-size:60px;
    font-weight:800;
    margin-bottom:40px;
    text-align:center;
    line-height: 66px;
    @media ${(props) => props.theme.laptop} {
    font-size: 48px;
    line-height: 54px
  }
  @media ${(props) => props.theme.tablet} {
    font-size: 42px;
    line-height: 48px;
    margin-bottom: 30px;
  }
  @media ${(props) => props.theme.mobile} {
    font-size: 32px;
    line-height: 42px;
    margin-bottom: 20px;
  }
`;

export const MiniFeatureDetail = Styled.div`
    display:flex;
    justify-content: flex-start;
    width:100%;
    height:auto;
    @media ${(props) => props.theme.laptop} { 
    flex-direction: column;
    width: unset;
    align-items: flex-start;
  }
`;


export const Category = Styled.div`
    text-align:center;
    background:rgba(149, 192, 71, 0.35);
    color:#95c047;
    padding:5px 10px;
    border-radius:5px;
    font-size:12px;
    line-height:15px;
    font-weight:700;
    letter-spacing: 1px;
    margin-bottom: 40px;
    max-width: 130px;
    margin-top: 100px;
`;

export const Date = Styled.h2`
    color: rgba(26,34,43,.5);
    font-weight: 600;
`;