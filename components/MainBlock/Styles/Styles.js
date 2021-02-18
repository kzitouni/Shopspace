 import styled from "styled-components"

export const Wrapper = styled.div`
    padding-top: ${props => props.first ? "220px" : "140px"};
    width : 100%;
    display:flex;
    justify-content:center;
    align-items:center;
    font-family: 'Open Sans', sans-serif;
    @media ${(props) => props.theme.laptop} {
    padding-top: ${props => props.first === true ? "180px" : "120px"};
  }
    @media ${(props) => props.theme.tablet} {
    padding-top: ${props => props.first ? "160px" : "100px"};
  }
    @media ${(props) => props.theme.mobile} {
    padding-top: ${props => props.first ? "130px" : "60px"};
  }




    `;

export const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    height:100%;
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

export const Title = styled.h1`
    font-size:60px;
    font-weight:800;
    padding-bottom:50px;
    text-align:center;
    line-height: 66px;
    font-family: 'Open Sans', sans-serif;
    @media ${(props) => props.theme.laptop} {
    font-size: 48px;
    line-height: 54px
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

export const Text = styled.p`
    font-size:20px;
    padding-bottom:50px;
    letter-spacing:.5px;
    font-weight:400;
    line-height:32px;
    text-align:center;
  @media ${(props) => props.theme.mobile} {
    font-size: 18px;
    line-height: 24px
  }
`;

export const Button = styled.a`
    height:50px;
    width:160px;
    border:0;
    border-radius: 50px;
    color: white;
    font-size: 16px;
    font-weight:600;
    background-color:rgba(52, 152, 219, 1);
    text-decoration:none;
    display:flex;
    text-align:center;
    justify-content:center;
    align-items: center;
    transition: .5s 0s ease-in-out;
    &:hover{
        position:relative;
        opacity:.9;
        transition: .5s 0s ease-in-out;
        transform: scale(1.03)
    }
`;