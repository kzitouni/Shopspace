import Styled from "styled-components"

export const Wrapper = Styled.div`
    width:100%;
    height: auto;
    display:flex;
    justify-content:center;
    align-items:center;
    font-family: 'Open Sans', sans-serif;
`;

export const Container = Styled.div`
    width: 100%;
    height: auto;
    display:flex;
    justify-content: space-around;
    align-items:center;
    flex-direction: row;
    flex-wrap: wrap;
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

export const Card = Styled.div`
    width: 300px; 
    display:flex;
    align-items:left;
    flex-direction:column;
    justify-content:left;
    margin-bottom: 50px;
    @media ${(props) => props.theme.tablet} {
    width: 100%;
  }
`;

export const Icon = Styled.div`
    font-size:50px;
    color:rgba(52, 152, 219, 1);
    padding-bottom:15px;
`;

export const Title = Styled.h1`
    font-size:25px;
    font-weight:700;
    padding-bottom:5px;
`; 

export const Text = Styled.h2`
    font-size: 18px; 
    line-height: 24px;
    letter-spacing: .5px;
`;

