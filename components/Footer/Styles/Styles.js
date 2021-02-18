import styled from "styled-components"

export const Wrapper = styled.footer`
    display:flex;
    justify-content: center;
    width:100%;
    height: 100%;
    align-items: center;
    font-family: 'Open Sans', sans-serif;
    margin-top: 100px;
`;

export const Container = styled.div`
    display:flex;
    justify-content: space-between;
    width: 100%;
    padding: 25px 0px;
    max-width: 1140px;
    margin-left: 60px;
    margin-right: 60px;
    
    @media ${(props) => props.theme.laptop} { 
    margin-left: 50px;
    margin-right: 50px;
    flex-wrap: wrap;
    justify-content: space-around;
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

export const LOGOColumn = styled.div`
    display:flex;
    flex-direction:column;
    margin-right: 150px;
    @media ${(props) => props.theme.laptop} {
    margin-right: 0px;
    margin-bottom: 50px;
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

export const Column = styled.div`
    display:flex;
    flex-direction:column;
    
    @media ${(props) => props.theme.laptop} {
    margin-right: 20px;
    text-align: center;
  }
`;

export const Logo = styled.img`
    width: 200px;
    @media ${(props) => props.theme.laptop} {
    width: 300px;
  }
  @media ${(props) => props.theme.mobile} {
    width: 200px;
  }
`;

export const Title = styled.h1`
    font-size:17px;
    font-weight:800;
    padding-bottom:25px;
    padding-top:5px;
`;

export const LogoItem = styled.a`


    &:hover {
      cursor: pointer;
    }
`;

export const Item = styled.a`
    font-size:17px;
    padding-bottom:25px;
    text-decoration:none;
    color: rgba(0,0,0,.70);
    line-height:20px;
    letter-spacing:1px;
    transition:.1s 0s ease-in-out;

    &:hover {
    transform: translate(3px, 0px);
        -moz-transform: translate(3px, 0px);
    -ms-transform: translate(3px, 0px);
    -o-transform: translate(3px, 0px);
    -webkit-transform: translate(3px, 0px);
    }
`;

export const BottomText = styled.h2`
    margin-right:45%;
    line-height: 26px;
    font-weight: 400;
    letter-spacing: .6px;
    color: rgba(0,0,0,.70);
`;

export const RightContainer = styled.div`
display: flex;
justify-content:space-between;
width: 100%;
flex-wrap: wrap;
@media ${(props) => props.theme.laptop} { 
    flex-wrap: wrap;
    justify-content: space-around;
  }
`