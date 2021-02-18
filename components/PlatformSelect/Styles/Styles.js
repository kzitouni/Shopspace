import Styled from "styled-components"

export const Wrapper = Styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    background:url('https://i.ibb.co/LNvvnj9/imageedit-2-3663984984.png');
    font-family: 'Open Sans', sans-serif;

`;

export const Container = Styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-left: 60px;
    margin-right: 60px;
    max-width: 1140px;
    @media ${(props) => props.theme.laptop} {
    margin-left: 50px;
    margin-right: 50px;
    flex-direction: column;
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

export const PlatformBlock = Styled.a`
    background:white;
    width: 350px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.2);
    -moz-box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.2);
    box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.2);
    transition: .25s 0s ease-in-out;
    &:hover{
        transform: translate(0px, -3px);
        -moz-transform: translate(0px, -3px);
    -ms-transform: translate(0px, -3px);
    -o-transform: translate(0px, -3px);
    -webkit-transform: translate(0px, -3px);
        -webkit-box-shadow: 0px 0px 5px 6px rgba(0,0,0,0.2);
        -moz-box-shadow: 0px 0px 5px 6px rgba(0,0,0,0.2);
        box-shadow: 0px 0px 5px 6px rgba(0,0,0,0.2);
    }
    @media ${(props) => props.theme.laptop} {
    margin-top: 25px;
  }
  @media ${(props) => props.theme.mobile} {
    width: 90%;

  }
`;

export const Logo = Styled.img`
    height:50px;
`;