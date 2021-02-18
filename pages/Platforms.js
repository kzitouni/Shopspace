import React from "react"
import NavBar from "../components/NavBar/NavBar"
import Footer from "../components/Footer/Footer"
import MainBlock from "../components/MainBlock/MainBlock"
import PlatFormSelect from "../components/PlatformSelect/PlatformSelect"

export default function Platform(){
    return(
        <>
            <NavBar display={true}/>
            <MainBlock 
                buttonDisplay = {false}
                title = "Add Shopspace to your store"
                text = "CHOOSE A PLATFORM"
                first
            />
            <PlatFormSelect />
            <Footer />
        </>
    )
}