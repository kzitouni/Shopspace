import React from "react"
import {
    Wrapper,
    Container,
    PlatformBlock,
    Logo,
} from "./Styles/Styles"

export default function PlatformSelect(){
    return(
        <Wrapper>
           <Container>
                <PlatformBlock href="/Shopify">
                    <Logo src="https://assets-global.website-files.com/5e46eebdc58e17106fa817ed/5e97bc8623446901d5e01ff2_Shopify_logo_2018.svg"/>
                </PlatformBlock>
                <PlatformBlock href="/ShopifyPlus">
                    <Logo src="https://assets-global.website-files.com/5e46eebdc58e17106fa817ed/5e97bc86ee7196e525b66655_shopify-plus-logo.png"/>
                </PlatformBlock>
            </Container>
        </Wrapper>
    )
}