import styled from "styled-components"

export const BlockWrap = styled.div`
    margin-top:80px;
    width : 100%;
    display:flex;
    justify-content:center;
    align-items:center;
    font-family: 'Open Sans', sans-serif;
    @media ${(props) => props.theme.tablet} {
    margin-top: 60px;

  }
  @media ${(props) => props.theme.mobile} {
    margin-top: 40px;
  }
`;

export const Block = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    height:100%;
    width:100%;
    background-color:rgba(52, 152, 219, 1);
    color:white;
    text-align:center;
    border-radius:25px;
    padding: 50px 60px;
    max-width: 1140px;
    margin-left: 60px;
    margin-right: 60px;
    @media ${(props) => props.theme.laptop} {
    margin-left: 50px;
    margin-right: 50px;
    padding: 50px 50px;

  }
  @media ${(props) => props.theme.tablet} {
    margin-left: 25px;
    margin-right: 25px;
    padding: 50px 25px;

  }
  @media ${(props) => props.theme.mobile} {
    margin-left: 13px;
    margin-right: 13px;
    padding: 50px 15px;
  }
`;

export const Title = styled.h1`
    font-size: 60px;
    font-weight:800;
    padding-bottom: 40px;
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

export const Text = styled.p`
    font-size:20px;
    padding-bottom:50px;
    letter-spacing:.5px;
    font-weight:500;
    line-height: 26px;
    @media ${(props) => props.theme.mobile} {
    font-size: 18px;
    line-height: 24px
  }
`;

export const Button = styled.a`
    height:50px;
    width:160px;
    border:0;
    border-radius: 25px;
    color: rgba(52, 152, 219, 1);
    font-size: 16px;
    font-weight:600;
    background-color:white;
    text-decoration:none;
    display:flex;
    text-align:center;
    align-items:center;
    justify-content:center;
    transition: .5s 0s ease-in-out;
    &:hover{
        position:relative;
        opacity:.9;
        transition: .5s 0s ease-in-out;
        transform: scale(1.03)
    }

`;