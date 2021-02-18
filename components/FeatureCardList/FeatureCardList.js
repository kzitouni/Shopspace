import React from "react"
import {
    CardsWrapper,
    Container,
    Card,
    Top,
    Icon,
    Title,
    Text
} from "./Styles/Styles"

export default function FeatureCards(){
    return(
        <CardsWrapper>
            <Container>
                <Card>
                    <Icon>
                        1
                    </Icon>
                    <Top>
                        <Title>
                            Work in the open
                        </Title>
                        <Text>
                            Operate with high integrity and choose what is right.
                            Be transparent with everyone at the company.
                        </Text>
                    </Top>
                </Card>
                <Card>
                    <Icon>
                        2
                    </Icon>
                    <Top>
                        <Title>
                            People are people
                        </Title>
                        <Text>
                            Treat everyone alike with dignity, empathy, and respect.
                            Start from the presumption of good intent with all.
                        </Text>
                    </Top>
                </Card>
                <Card>
                    <Icon>
                        3
                    </Icon>
                    <Top>
                        <Title>
                            Grow together
                        </Title>
                        <Text>
                            Strive to be the best both individually and as a team. Always support and
                            encourage one another.
                        </Text>
                    </Top>
                </Card>
            </Container>
        </CardsWrapper>
    )
}