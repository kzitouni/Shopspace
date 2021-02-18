import React from "react"
import {router} from 'next'
import {
    Wrapper,
    Container,
    Article,
    Img,
    Title,
    Category,
    ShopifyCategory,
    MiniFeatureDetail,
    Date
} from "./Styles/Styles"
export default function BlogTitle(props){


    return(
        <Wrapper>
            <Container>
                <Category>{props.type}</Category>
                <Title>{props.title}</Title>
                <Date>{props.date}</Date>
                
            </Container>
        </Wrapper>
    )
}