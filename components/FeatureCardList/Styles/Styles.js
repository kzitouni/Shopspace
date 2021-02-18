import Styled from "styled-components"

export const CardsWrapper = Styled.div`
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
    justify-content: space-between;
    align-items:center;
    flex-direction:row;
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
    width: 290px;
    height: auto;
    display:flex;
    align-items: flex-start;
    flex-direction:row;
    margin-top: 30px;
    justify-content: flex-start;
    @media ${(props) => props.theme.laptop} {
    width: 100%;
  }
`;

export const Top = Styled.div`
    width:100%;
    height:auto;
    display:flex;
    flex-direction:column;
    align-items:left;
    justify-content:left;
    text-align:left;
`;

export const Icon = Styled.div`
    font-size:30px;
    color:rgba(52, 152, 219, 1);
    padding-bottom:15px;
    padding-right:25px;
    font-weight:700;
`;

export const Title = Styled.h1`
    font-size:25px;
    font-weight:700;
    padding-bottom:5px;
    text-align:left;
`; 

export const Text = Styled.h2`
    padding-top:5px;
    font-size: 16px;
    line-height: 25px;
    letter-spacing: .5px;
`;