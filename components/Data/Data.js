import React from "react"
import {
    Wrapper,
    Container,
    TitleDiv,
    Title,
    DataDiv,
    Element,
    Value,
    Desc
} from "./Styles/Styles"

export default function Data(){
    return(
        <Wrapper>
            <Container>
                <TitleDiv>
                    <Title>
                        Our Numbers
                    </Title>
                </TitleDiv>
                <DataDiv>
                    <Element>
                        <Value>
                            3,500
                        </Value>
                        <Desc>
                            paying customers
                        </Desc>
                    </Element>
                    <Element>
                        <Value>
                            $250k
                        </Value>
                        <Desc>
                            in VC funding
                        </Desc>
                    </Element>
                    <Element>
                        <Value>
                            12
                        </Value>
                        <Desc>
                            team members
                        </Desc>
                    </Element>
                </DataDiv>
            </Container>
        </Wrapper>
    )
}