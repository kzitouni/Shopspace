import React from "react"
import {
    Wrapper,
    Container,
    Card,
    Image,
    Title,
    Text,
} from "./Styles/Styles"

export default function MiniCard(){
    return(
        <Wrapper>
            <Container>
                    <Card>
                        <Image src="https://i.ibb.co/Fn7kgf7/the-cleanser.jpg"/>
                        <Title>
                            30+ Page Templates
                        </Title>
                        <Text>
                            Choose from a library of pre-built page templates designed for conversions, 
                            then simply customize them to your liking.
                        </Text>
                    </Card>
                    <Card>
                        <Image src="https://i.ibb.co/g4tYSH3/library-elements.png"/>
                        <Title>
                            Robust Library of Elements
                        </Title>
                        <Text>
                            Go beyond the basic building blocks with page elements 
                            like advanced forms, sliders, accordions, and countdown 
                            timers.
                        </Text>
                    </Card>
                    <Card>
                        <Image src="https://i.ibb.co/hFnRY9H/Clean.jpg"/>
                        <Title>
                            Design by Screen Size
                        </Title>
                        <Text>
                            Create fluid customer experiences for widescreen, 
                            laptop, tablet and mobile screen sizes.
                        </Text>
                    </Card>
                    <Card>
                        <Image src="https://i.ibb.co/HT2ZJrH/detail.png"/>
                        <Title>
                            Optimize for SEO
                        </Title>
                        <Text>
                            Easily optimize page titles, meta descriptions, 
                            open graph meta tags, and image alternate text 
                            on every page
                        </Text>
                    </Card>
                    <Card>
                        <Image src="https://i.ibb.co/HDD7ksH/css.png"/>
                        <Title>
                            Extendable + Dev Friendly
                        </Title>
                        <Text>
                            Technical team members can code custom reusable page 
                            elements for the rest of the ecommerce team to use.
                        </Text>
                    </Card>
                    <Card>
                        <Image src="https://i.ibb.co/gtk9TnY/profile.jpg"/>
                        <Title>
                            Team User Permissions
                        </Title>
                        <Text>
                            Control who on your team can make page edits and perform 
                            A/B tests with easy-to-use permissions controls.
                        </Text>
                    </Card>
            </Container>
        </Wrapper>
    )
}