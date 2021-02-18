import React from "react"
import {
    Wrapper,
    Container,
    Title,
    Body
} from "./Styles/Styles"
export default function BlogBody(props){


    return(
        <Wrapper>
            <Container>
                {
                    props.Data.map((item, index) => {
                        return(
                        <>
                        <Title>{item.title}</Title>
                        <Body>{item.body}</Body>
                        </>
                        )
                    })
                    }
            </Container>
        </Wrapper>
    )
}