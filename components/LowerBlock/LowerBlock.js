import React from "react"
import {
    Block,
    Title,
    Text,
    Button,
    BlockWrap
} from "./Styles/Styles"

export default function LowerBlock(props){
    return(
        <BlockWrap>
            <Block>
                <Title>
                    {props.title}
                </Title>
                <Text>
                    {props.text}
                </Text>
                {props.buttonDisplay ?
                    <Button href={props.href}>
                        {props.Button}
                    </Button>
                    :null
                }
            </Block>
        </BlockWrap>
    )
}