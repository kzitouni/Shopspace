import React from "react"
import NavBar from "../components/NavBar/NavBar"
import Footer from "../components/Footer/Footer"
import MainBlock from "../components/MainBlock/MainBlock"
import ContactForm from "../components/ContactForm/ContactForm"

export default function Contact(){
    return(
        <>
            <NavBar display={true}/>
            <MainBlock 
            first={true}
                buttonDisplay={false}
                title= "Have questions or want to try Shopspace?"
                text="Get in touch and we will be with you soon."
            />
            <ContactForm />
            <Footer />
        </>
    )
}