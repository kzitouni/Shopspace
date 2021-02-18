import React from "react"
import {
    FeatureWrapper,
    Container,
    Img,
    TextDiv,
    Title,
    Text,
    Button
} from "./Styles/Styles"
export default function ShopDisplay(props){
    return(
        <FeatureWrapper>
            <Container imageLeft={props.imageDir === "left"}>
                {
                    (props.imageDir==="right") ?
                    <>
                        <TextDiv imageLeft={props.imageDir === "left"}>
                            <Title>
                                {props.title}
                            </Title>
                            <Text>
                                {props.text}
                            </Text>
                            { props.buttonDisplay ?
                                <Button href={props.href}>
                                    {props.button}
                                </Button>
                                :null
                            }
                        </TextDiv>
                        <Img src={props.url}/>
                    </>
                    :
                    <>
                        <Img src ={props.url}/>
                        <TextDiv imageLeft={props.imageDir === "left"}>
                            <Title>
                                {props.title}
                            </Title>
                            <Text>
                                {props.text}
                            </Text>
                            { props.buttonDisplay ?
                                <Button>
                                    {props.button}
                                </Button>
                                :null
                            }
                        </TextDiv>
                    </>

                }
            </Container>
        </FeatureWrapper>
    )
}