import React from "react"
import NavBar from "../components/NavBar/NavBar"
import Footer from "../components/Footer/Footer"
import ShopDisplay from "../components/ShopDisplay/ShopDisplay"
import MainBlock from "../components/MainBlock/MainBlock"
import LowerBlock from "../components/LowerBlock/LowerBlock"
import Space from "../components/Space/Space"
import PerksCards from "../components/PerksCards/PerksCards"

export default function Partner(){
    return(
        <>
            <NavBar display={true}/>
            <Space />
            <ShopDisplay 
                buttonDisplay = {true}
                imageDir = "right"
                title = "Become a Partner"
                text = "Join Our Community of Ecommerce Clients."
                button = "Become a Partner"
                href = "/Contact"
                url = "https://i.ibb.co/sbPxsh6/Adobe-Stock-203199843.jpg"
            />
            <MainBlock 
                buttonDisplay = {false}
                title = "Improve the Way you Design"
                text = "Design and launch your client’s ecommerce sites faster than before without sacrificing quality or page speed."
            />
            
            <MainBlock 
                buttonDisplay={false}
                title="Some Great Perks"
            />
            <PerksCards />
            <LowerBlock 
                title='“We have seen a 30% reduction in development costs ”'
                text="Paul Miller"
                buttonDisplay={false}
            />
            <MainBlock 
                buttonDisplay={true}
                name="partner"
                title="Elevate your company."
                text="Join the Partner Program to enjoy all of the perks."
                Button = "Become a Partner"
                href='/Contact'
            />

            <Footer />
        </>
    )
}