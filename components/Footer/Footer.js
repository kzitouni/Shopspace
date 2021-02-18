import React from "react"
import { 
    Wrapper,
    Container,
    LOGOColumn,
    Column,
    Logo,
    Title,
    Item,
    RightContainer,
    LogoItem
} from "./Styles/Styles"

export default function footer(){
    return(
        <Wrapper>
            <Container>
                <LOGOColumn>
                    <LogoItem href="/">
                    <Logo src="/shopspace_logo.svg" />
                    </LogoItem>
                </LOGOColumn>
                <RightContainer>
                <Column>
                    <Title>
                        Products
                    </Title>
                    <Item href="/Platforms">
                        Page Builder
                    </Item>
                    <Title>
                        Platforms
                    </Title>
                    <Item href="/Shopify">
                        Shopify
                    </Item>
                    <Item href="/ShopifyPlus">
                        Shopify Plus
                    </Item>
                </Column>
                <Column>
                    <Title>
                        Resources
                    </Title>
                    <Item href="/Blog">
                        Blog
                    </Item>
                    <Title>
                        Partners
                    </Title>
                    <Item href="/Partner">
                        Become a Partner
                    </Item>
                </Column>
                <Column>
                    <Title>
                        Shopspace
                    </Title>
                    <Item href="/About">
                        About Us
                    </Item>
                    <Item href="/Careers">
                        Jobs
                    </Item>
                    <Item href="/Contact">
                        Contact Us
                    </Item>
                </Column>
                </RightContainer>
            </Container>
        </Wrapper>
    )
}