import Styled from "styled-components"

export const Wrapper = Styled.div`
    margin-top:170px;
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
    flex-direction: column;
    height:100%;
    margin-left: 60px;
    margin-right: 60px;
    max-width: 1140px;
    width:100%;
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

export const TitleDiv = Styled.div`
    display:flex;
`;

export const Title = Styled.h1`
    font-size:60px;
    font-weight:700;
`;

export const DataDiv = Styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    margin-top: 50px;
    justify-content: space-between;
`;

export const Element = Styled.div`
    height:100%;
    margin-right: 0px;
`;

export const Value = Styled.h1`
    font-size:90px;
    font-weight:700;
    color:rgba(52,152,219,1);
`;

export const Desc = Styled.div`

`;