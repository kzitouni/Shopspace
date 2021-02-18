import React from "react"
import {
    ImageStyle,
    Wrapper,
    Container
} from "./Styles/Styles"

export default function Image(props){
    return(
        <Wrapper>
            <Container>
                <ImageStyle src={props.url}/>
            </Container>
        </Wrapper>
    )
}