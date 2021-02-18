import React from "react"
import {
    CardsWrapper,
    Container,
    Card,
    Icon,
    Title,
    Text
} from "./Styles/Styles"
import {BsHouseDoor} from "react-icons/bs"
import {BiCalendarAlt} from "react-icons/bi"
import {IoMdChatboxes} from "react-icons/io"

export default function PerksCards(){
    return(
        <CardsWrapper>
        <Container>
            <Card>
                <Icon>
                    <IoMdChatboxes />
                </Icon>
                <Title>
                Access support
                </Title>
                <Text>
                Connect directly with our team to have your needs met in a timely manner.
                </Text>
            </Card>
            <Card>
                <Icon>
                    <BsHouseDoor />
                </Icon>
                <Title>
                Join the family
                </Title>
                <Text>
                We like to see you as a part of our family and we will passionately support your business. 
                </Text>
            </Card>
            <Card>
                <Icon>
                    <BiCalendarAlt />
                </Icon>
                <Title>
                Partner up during events
                </Title>
                <Text>
                Meet our clients during the events we have for you.
                </Text>
            </Card>
        </Container>
    </CardsWrapper>

    )
}