import Styled from "styled-components"

export const Wrapper = Styled.div`
    padding-top:50px;
    width : 100%;
    height:auto;
    display:flex;
    justify-content:center;
    align-items:center;
    font-family: 'Open Sans', sans-serif;
`;

export const Container = Styled.div`
    display:flex;
    justify-content: space-around;
    align-items:center;
    flex-direction: row;
    height:100%;
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

export const Element = Styled.div`
    width: 300px;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    margin-bottom: 40px;
`;

export const Img = Styled.img`
    height:200px;
    width:200px;
    border-radius:50%;
    margin-bottom:15px;
`;

export const Name = Styled.h1`
    font-size:25px;
    color:rgba(52,152,219,1);
    font-weight:700;
    margin-bottom:15px;
`;

export const Title = Styled.h2`
    font-weight:600;
`;