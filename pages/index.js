import React from "react"
import NavBar from "../components/NavBar/NavBar"
import Footer from "../components/Footer/Footer"
import MainBlock from "../components/MainBlock/MainBlock"
import Image from "../components/Image/Image"
import FeatureCards from "../components/FeatureCards/FeatureCards"
import FeatureImgText from "../components/FeatureImgText/FeatureImgText"
import LowerBlock from "../components/LowerBlock/LowerBlock"

export default function Landing(){
    return(
        <>
              <Head>
        <title>
         Shopspace: Empower your brand experience
        </title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
            <NavBar display={true}/>
            <MainBlock
                buttonDisplay = {true}
                title = "Create your store with ease."
                text = "Shopspace empowers brands to create the digital experience they want their customers to experience.  Creating that experience is easy with ShopSpace."
                Button = "Get Started"
                href='/Platforms'
                first={true}
            />
            <Image url="https://i.ibb.co/9r1f7Mc/fewfwe.webp"/>
            <MainBlock 
                buttonDisplay = {false}
                title = "Craft Engaging Pages"
                text = "Your customers will enjoy your site with a wide variety of tools."
            />
            <FeatureCards />
            <FeatureImgText 
                imageDir = "right"
                title = "Create pages confidently"
                text = "With 24/7 support we'll be there to help resolve any issue, any time."
                quote = '"The support experience was great. Shopspace was always with us."'
                quotee = "Matthias Richter"
                url = "https://ceblog.s3.amazonaws.com/wp-content/uploads/2018/08/28183850/home_post_2.gif"
            />
            <FeatureImgText 
                imageDir = "left"
                title = "Join an amazing community of leaders"
                text = "Be among the ecommerce agencies that use Shopspace daily."
                quote = '"Since we have been with shogun we have seen a 25% increase in conversion."'
                quotee = "Gabriella Santos"
                url = "https://www.womened.org/images/2020/01/31/networking-infographic.png"
            />
            <MainBlock 
                buttonDisplay = {false}
                title = "Boosting ecommerce Everywhere"
                text = "Businesses everywhere generate more in sales using Shopspace."
            />
            <LowerBlock 
                buttonDisplay={true}
                title="Get started with Shopspace"
                text="Try for free, and explore the tools to build a store people will remember."
                Button= "Get Started"
                href="/Platforms"
            />
            <Footer />
        </>
    )
}