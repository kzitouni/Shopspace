import Styled from "styled-components"

export const FeatureWrapper = Styled.div`
    width:100%;
    height:auto;
    display:flex;
    justify-content:center;
    align-items:center;
    font-family: 'Open Sans', sans-serif;
    margin-top:240px;
    @media ${(props) => props.theme.laptop} {
    margin-top: 160px;
  }
  @media ${(props) => props.theme.tablet} {
    margin-top: 120px;
  }
  @media ${(props) => props.theme.mobile} {
    margin-top: 100px;
  }
`;

export const Container = Styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:row;
    max-width: 1140px;
    margin-left: 60px;
    margin-right: 60px;
    @media ${(props) => props.theme.laptop} {
    margin-left: 50px;
    margin-right: 50px;
    flex-direction: ${props => props.imageLeft ? "column-reverse" : "column"};
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

export const Img = Styled.img`
    width:45%;
    height:auto;
    border-radius:25px;
    @media ${(props) => props.theme.laptop} {
    width: 100%;
    margin-top: ${props => props.imageLeft ? "0px" : "40px"};
    margin-bottom: ${props => props.imageLeft ? "40px" : "0px"};
  }
`;

export const TextDiv = Styled.div`
    width:50%;
    margin: ${props => props.imageLeft ? "0px 0px 0px 20px" : "0px 20px 0px 0px"};
    @media ${(props) => props.theme.laptop} {
    width: 100%;
    margin-right: 0px;
    margin-left: 0px;
  }
  @media ${(props) => props.theme.tablet} {
  }
  @media ${(props) => props.theme.mobile} {
  }
`;

export const IconDiv = Styled.div`

`;

export const Title = Styled.h1`
    font-size: 60px;
    font-weight:800;
    padding-bottom: 50px;
    line-height: 66px;
    @media ${(props) => props.theme.laptop} {

  }
  @media ${(props) => props.theme.tablet} {
    font-size: 42px;
    line-height: 48px;
    padding-bottom:30px;
  }
  @media ${(props) => props.theme.mobile} {
    font-size: 32px;
    line-height: 42px
  }
`;

export const Text = Styled.h3`
    font-size:20px;
    font-weight:500;
    letter-spacing: .5px;
    @media ${(props) => props.theme.mobile} {
    font-size: 18px;
    line-height: 24px
  }
`;

export const Line = Styled.img`

`;

export const Quote = Styled.h4`
    font-size: 18px;
    padding-bottom:25px;
    letter-spacing:.5px;
`;

export const Quotee = Styled.h3`
    font-weight: 600;
`;