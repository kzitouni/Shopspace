import React from "react"
import NavBar from "../components/NavBar/NavBar"
import Footer from "../components/Footer/Footer"
import MainBlock from "../components/MainBlock/MainBlock"
import LowerBlock from "../components/LowerBlock/LowerBlock"
import Articles from "../components/Articles/Articles"

export default function Blog(){
    return(
        <>
            <NavBar display={true}/>
            <MainBlock 
            first={true}
                buttonDisplay={false}
                title = "Shopspace Blog"
                text = "Stay in the know with exclusive advice, tools and marketing strategies at your fingertips"
            />
            <Articles />
            <LowerBlock
                buttonDisplay={true}
                title="Start building your store with Shopspace"
                text="Try Shopspace for free, and explore the tools designed to help you build a store your customers will love."
                Button= "Get Started"
                href='/Platforms'
            />
            <Footer />
        </>
    )
}