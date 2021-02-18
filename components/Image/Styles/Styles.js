import Styled from "styled-components"

export const Wrapper = Styled.div`
    width:100%;
    height:auto;
    display:flex;
    justify-content:center;
    align-items: center;
    padding-top:100px;
    @media ${(props) => props.theme.laptop} {
    font-size: 48px;
    line-height: 54px
  }
  @media ${(props) => props.theme.tablet} {
    padding-top: 70px;
  }
  @media ${(props) => props.theme.mobile} {
    padding-top: 40px;
  }
`;

export const Container = Styled.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-left: 60px;
    margin-right: 60px;
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
  max-width: 1140px;

`;

export const ImageStyle = Styled.img`
    width:100%;
    display:flex;
    justify-content:center;
    border-radius: 25px;
`;

