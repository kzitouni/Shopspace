import React from "react"
import NavBar from "../components/NavBar/NavBar"
import Footer from "../components/Footer/Footer"
import MainBlock from "../components/MainBlock/MainBlock"
import Space from "../components/Space/Space"
import Image from "../components/Image/Image"
import FeatureCardList from "../components/FeatureCardList/FeatureCardList"
import CareerCards from "../components/CareerCards/CareerCards"

export default function Careers(){
    return(
        <>
            <NavBar display={true}/>
            <Space />
            <MainBlock
                buttonDisplay={true}
                title = "Join us in creating a better ecommerce experience for all."
                text = "We're helping brands create the best ecommerce experiences in the world. If that sounds good to you, apply to join our completely distributed team of rockstars living around the globe."
                Button="View Positions"
                href='#position'
            />
            <Image
                url="https://www.elsevier.com/__data/assets/image/0014/1006412/team-meeting-on-zoom.jpg"
            />
            <MainBlock
                buttonDisplay={false}
                title = "Our Core Values"
                text = "People and values come first. We are building a community of support and positivity."
            />
            <FeatureCardList />
            <MainBlock
                buttonDisplay={false}
                title = "Working at Shopspace"
                text = "We appreciate everyone that has joined us to make Shopspace what it is today. To show our appreciation we offer perks such as:"
            />
            <CareerCards />
            <MainBlock 
                name="position"
                buttonDisplay={false}
                title="Open Positions"
                text="Currently no open positions"
            />
            <Space />
            <Footer />
        </>
    )
}