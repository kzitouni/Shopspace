import React from "react"
import {
    Container,
    Title,
    Text,
    Button,
    Wrapper
} from "./Styles/Styles"

export default function MainBlock(props){
    return(
        <Wrapper id={props.name} first={props.first}>
            <Container>
                <Title>
                    {props.title} 
                </Title>
                <Text>
                    {props.text}
                </Text>
                {
                props.buttonDisplay ?
                    <Button href={props.href}>
                        {props.Button}
                    </Button>
                    :null
                }
            </Container>
        </Wrapper>
    )
}