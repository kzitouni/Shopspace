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
    justify-content:space-around;
    align-items:center;
    flex-direction: row;
    height:auto;
    flex-start:start;
    margin-left: 60px;
    margin-right: 60px;
    max-width: 1140px;
    flex-wrap: wrap;
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

export const Card = Styled.div`
    display:flex;
    flex-direction:column;
    align-items: flex-start;
    justify-content:center;
    margin-right: 40px;
    margin-bottom: 20px;
    width: 290px;
    @media ${(props) => props.theme.tablet} {
    width: 100%;
  }
`;

export const Image = Styled.img`
    height:200px;
    margin-bottom: 15px;
    @media ${(props) => props.theme.tablet} {
    width: 100%;
    height: unset;
  }
`;

export const Title = Styled.h1`
    font-size:22px;
    font-weight:700;
    padding-bottom:15px;
`;

export const Text = Styled.h4`
    text-align:left;
    font-size:18px;
    line-height:24px;
    letter-spacing:1px;
`;