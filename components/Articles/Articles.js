import React from "react"
import {router} from 'next'
import {
    Wrapper,
    Container,
    Article,
    Img,
    Title,
    ShopifyCategory,
    MiniFeatureDetail,
    Date
} from "./Styles/Styles"
import Blogs from '../../Data/Blogs'
export default function Articles(){

    const onSelect = (blog) => {
        router.push(`/BlogPosts/${blog}`)
    }

    return(
        <Wrapper>
            <Container>
                {
                    Blogs.map((item, index) => {
                        return(           
                        <Article onClick={() => onSelect(item.Title)}>
                            <Img src={item.Image}/>
                            <Title>
                                {item.Title}
                            </Title>
                            <MiniFeatureDetail>
                                <ShopifyCategory>
                                    {item.Type}
                                </ShopifyCategory>
                                <Date>
                                    {item.Date_Published}
                                </Date>
                            </MiniFeatureDetail>
                        </Article>  )
                    })
                }
            </Container>
        </Wrapper>
    )
}