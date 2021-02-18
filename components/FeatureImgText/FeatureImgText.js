import React from "react"
import {
    FeatureWrapper,
    Container,
    Img,
    TextDiv,
    IconDiv,
    Title,
    Text,
    Line,
    Quote,
    Quotee

} from "./Styles/Styles"
export default function FeatureImgText(props){
    return(
        <FeatureWrapper>
            <Container imageLeft={props.imageDir === "left"}>
                {
                    (props.imageDir==="right") ?
                    <>
                        <TextDiv imageLeft={props.imageDir === "left"}>
                            <IconDiv>
                                {props.icon}
                            </IconDiv>
                            <Title>
                                {props.title}
                            </Title>
                            <Text>
                                {props.text}
                            </Text>
                            <Line />
                            <Quote>
                                {props.quote}
                            </Quote>
                            <Quotee>
                                {props.quotee}
                            </Quotee>
                        </TextDiv>
                        <Img src={props.url}/>
                    </>
                    :
                    <>
                        <Img src ={props.url}/>
                        <TextDiv imageLeft={props.imageDir === "left"}>
                            <IconDiv>
                                
                            </IconDiv>
                            <Title>
                                {props.title}
                            </Title>
                            <Text>
                                {props.text}
                            </Text>
                            <Line />
                            <Quote>
                                {props.quote}
                            </Quote>
                            <Quotee>
                                {props.quotee}
                            </Quotee>
                        </TextDiv>
                    </>

                }
            </Container>
        </FeatureWrapper>
    )
}