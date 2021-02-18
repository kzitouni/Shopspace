import React from "react"
import {
    CardsWrapper,
    Container,
    Card,
    Icon,
    Title,
    Text
} from "./Styles/Styles"
import {AiOutlineRise, AiOutlineClockCircle} from "react-icons/ai"
import {GiScales} from "react-icons/gi"

export default function FeatureCards(){
    return(
        <CardsWrapper>
            <Container>
                <Card>
                    <Icon>
                        <AiOutlineRise />
                    </Icon>
                    <Title>
                        No limits
                    </Title>
                    <Text>
                        Build Pages with templates or make your own. 
                    </Text>
                </Card>
                <Card>
                    <Icon>
                        <GiScales />
                    </Icon>
                    <Title>
                        Optimize
                    </Title>
                    <Text>
                        Discover what your customers enjoy the most.
                    </Text>
                </Card>
                <Card>
                    <Icon>
                        <AiOutlineClockCircle />
                    </Icon>
                    <Title>
                        Faster Development
                    </Title>
                    <Text>
                        Create/Edit pages swiftly without coding
                    </Text>
                </Card>
            </Container>
        </CardsWrapper>
    )
}