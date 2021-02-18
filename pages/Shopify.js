import React from "react"
import NavBar from "../components/NavBar/NavBar"
import Footer from "../components/Footer/Footer"
import ShopDisplay from "../components/ShopDisplay/ShopDisplay"
import MainBlock from "../components/MainBlock/MainBlock"
import Space from "../components/Space/Space"
import MiniCards from "../components/MiniCards/MiniCards"
import LowerBlock from "../components/LowerBlock/LowerBlock"

export default function Shopify(){
    return(
        <>
            <NavBar display={true}/>
            <Space />
            <ShopDisplay 
                buttonDisplay = {false}
                imageDir = "right"
                title = "Create high quality Shopify pages"
                text = "Create pages for your Shopify store with tools for optimization and conversion."
                url = "https://i.ibb.co/4PfxBZ0/webPage.jpg"
            />
            <MainBlock 
                buttonDisplay = {false}
                title = "Build ecommerce pages quickly"
                text = "Design all kinds of pages with our editor. Optimize your store without burning out the team."
            />
            <ShopDisplay 
                buttonDisplay = {false}
                imageDir = "right"
                title = "Make anything you desire"
                text = "Make an unlimited number of pages with plenty of templates and a visual builder."
                url = "https://i.ibb.co/7SWm3yw/image.jpg"
            />
            <ShopDisplay 
                buttonDisplay = {false}
                imageDir = "left"
                title = "Run unlimited tests"
                text = "Convert more customers with built-in A/B testing."
                url = "https://i.ibb.co/cFvt9gQ/5eaadee34c1f3042acdf8211-ab-test.jpg"
            />
            <ShopDisplay 
                buttonDisplay = {false}
                imageDir = "right"
                title = "Track Performance"
                text = "Monitor key metrics with a detailed analytics dashboard."
                url = "https://i.ibb.co/8Y2xCgv/5eab51367dc3d1b1ddf34f07-analytics-2000x-100.jpg"
            />
            <ShopDisplay 
                buttonDisplay = {false}
                imageDir = "left"
                title = "Sync between online stores"
                text = "Manage many stores easily by syncing seamlessly between them."
                url = "https://i.ibb.co/BGLH5P5/5eaadecc0768419eb4e84554-sync.jpg"
            />
            <ShopDisplay 
                buttonDisplay = {false}
                imageDir = "right"
                title = "Reliable support"
                text = "Our global support team is always ready to help you solve any problem."
                url = "https://i.ibb.co/W08mjqM/2324fbjhsb2234c325c31g1fc.png"
            />
            <MainBlock 
                buttonDisplay = {false}
                title = "Better than your standard builder"
            />
            <MiniCards />
            <LowerBlock 
                buttonDisplay = {true}
                title = "Get started with Shopspace"
                text = "Try for free, and explore the tools to build a store people will remember."
                Button = "Get Started"
                href="/Contact"
            />
            <Footer />
        </>
    )
}