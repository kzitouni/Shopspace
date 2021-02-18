import React from "react"
import NavBar from "../components/NavBar/NavBar"
import Footer from "../components/Footer/Footer"
import MainBlock from "../components/MainBlock/MainBlock"
import ShopDisplay from "../components/ShopDisplay/ShopDisplay"
import Team from "../components/Team/Team"
import Space from "../components/Space/Space"

export default function Landing(){
    return(
        <>
            <NavBar display={true}/>
            <MainBlock
            first={true}
                buttonDisplay = {false}
                title = "Our goal is to help brands make memorable ecommerce experiences."
            />
            <ShopDisplay 
                buttonDisplay = {false}
                imageDir = "right"
                title = "Customers first, always."
                text = "Everything we do starts with our customers and making their lives easier."
                url = "https://i.ibb.co/bzJdjyF/customer-service.png"
            />
            <MainBlock 
                buttonDisplay={false}
                title= "Our team"
            />
            <Team />
            <MainBlock 
                buttonDisplay={true}
                title="We are always open to good people joining our team"
                text="We are a tight knit talented team of people who enjoy improving ecommerce. If you're interested in joining our mission, we'd love to hear from you."
                Button = "Join Our Team"
                href='/Careers'
            />
            <Space />
            <Footer />
        </>
    )
}