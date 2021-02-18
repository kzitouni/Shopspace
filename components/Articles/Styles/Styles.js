import Styled from "styled-components"

export const Wrapper = Styled.div`
    width : 100%;
    height:auto;
    display:flex;
    justify-content:center;
    align-items:center;
    font-family: 'Open Sans', sans-serif;
    margin-top:100px;
    background: url("https://i.ibb.co/sgfV4H4/imageedit-1-2712434806.png");
    @media ${(props) => props.theme.tablet} {
    margin-top: 70px;
  }
    @media ${(props) => props.theme.mobile} {
    margin-top: 40px;
  }
`;

export const Container = Styled.div`
    width:100%;
    display: flex;
    flex-wrap: wrap;
    max-width: 1140px;
    margin-left: 60px;
    margin-right: 60px;
    justify-content: space-around;
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

export const Article = Styled.div`
    width:320px;
    margin: 0px 10px 50px 0px;
    padding: 0px 10px 10px 10px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    transition:.3s 0s ease-in-out;
    background:white;
    border-radius:5px;
    cursor:pointer;
    &:hover{
        box-shadow: 3px 3px 50px 0px rgba(107,103,155,.1);
        transform: translate(0px, -3px);
        -moz-transform: translate(0px, -3px);
    -ms-transform: translate(0px, -3px);
    -o-transform: translate(0px, -3px);
    -webkit-transform: translate(0px, -3px);
    }
    @media ${(props) => props.theme.laptop} { 
    width: 40%;
  }
    @media ${(props) => props.theme.tablet} {
    width: 100%;

  }
  @media ${(props) => props.theme.mobile} {
    margin-top: 40px;
  }
`;

export const Img = Styled.img`
    height:200px;
    width:100%;
    object-fit: cover;
    @media ${(props) => props.theme.tablet} {
    width: 100%;
  }
`;

export const Title = Styled.h1`
    font-size:20px;
    font-weight:700;
    letter-spacing:.5px;
    margin-top:30px;
    margin-bottom: 30px;
`;

export const MiniFeatureDetail = Styled.div`
    display:flex;
    justify-content: flex-start;
    width:100%;
    height:auto;
    @media ${(props) => props.theme.laptop} { 
    flex-direction: column;
    width: unset;
    align-items: flex-start;
  }
`;


export const ShopifyCategory = Styled.div`
    text-align:center;
    background:rgba(149, 192, 71, 0.35);
    color:#95c047;
    padding:4px 8px;
    border-radius:5px;
    font-size:10px;
    line-height:15px;
    font-weight:700;
    letter-spacing: 1px;
`;


export const Date = Styled.h2`
    color: rgba(26,34,43,.5);
    margin-left: 80px;
    @media ${(props) => props.theme.laptop} { 
    margin-left: 0px;
    margin-top: 10px;
  }
`;