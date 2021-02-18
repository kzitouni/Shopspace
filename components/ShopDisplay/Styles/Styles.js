import Styled from "styled-components"

export const FeatureWrapper = Styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:80px;
    font-family: 'Open Sans', sans-serif;
`;

export const Container = Styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:row;
    margin-left: 60px;
    margin-right: 60px;
    max-width: 1140px;
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
    width:50%;
    @media ${(props) => props.theme.laptop} {
        width: 100%;
        margin-top: 40px;
  }
  @media ${(props) => props.theme.tablet} {
    margin-top: 20px;

  }
  @media ${(props) => props.theme.mobile} {
    margin-top: 0px;

  }
`;

export const TextDiv = Styled.div`
    width:50%;
    margin: ${props => props.imageLeft ? "0px 0px 0px 20px" : "0px 20px 0px 0px"};
    @media ${(props) => props.theme.laptop} {
        text-align: center;
        width: 100%;
        display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

export const Title = Styled.h1`
    font-size: 60px;
    font-weight:800;
    line-height: 66px;
    @media ${(props) => props.theme.laptop} {
        width: 100%;
        text-align: center;
  }
  @media ${(props) => props.theme.tablet} {
    font-size: 42px;
    line-height: 48px;
  }
  @media ${(props) => props.theme.mobile} {
    font-size: 32px;
    line-height: 42px
  }
`;

export const Text = Styled.h3`
    font-size:20px;
    font-weight:500;
    letter-spacing: 1px;
    line-height:26px;
    margin: 25px 0px;
    @media ${(props) => props.theme.laptop} {
        text-align: center;
        width: 100%;
        margin: 40px 0px;

  }
    @media ${(props) => props.theme.mobile} {
    font-size: 14px;
    line-height: 20px;
    margin: 25px 0px;
  }
`;

export const Button = Styled.a`
    height:50px;
    width:200px;
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
    cursor:pointer;
    transition: .5s 0s ease-in-out;
    &:hover{
        position:relative;
        opacity:.9;
        transition: .5s 0s ease-in-out;
        transform: scale(1.03)
    }
`;
