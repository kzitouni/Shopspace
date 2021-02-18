import React, {useState} from "react"
import{
    Wrapper,
    Container,
    Grid,
    HalfInput,
    Message,
    ButtonWrap,
    Submit,
    SuccessText
}from "./Styles/Styles"

export default function ContactForm(){

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [company, setCompany] = useState("")
    const [message, setMessage] = useState("")
    const [submitted, setSubmitted] = useState(false)
    const onSubmit = () => {
        setFirstName("")
        setLastName("")
        setEmail("")
        setCompany("")
        setMessage("")
        setSubmitted(true)
    }


    return(
        <Wrapper>
            <Container>
                {
                            submitted ? <SuccessText>Thank You! We will get back to you within 24 hours.</SuccessText> :
                            <>
                    <Grid>
                        <HalfInput value={firstName} onChange={(text) => setFirstName(text.value)} type="text" placeholder="First Name"/>
                        <HalfInput value={lastName} onChange={(text) => setLastName(text.value)} type="text" placeholder="Last Name"/>
                        <HalfInput value={email} onChange={(text) => setEmail(text.value)} type="email" placeholder="Email Address"/>
                        <HalfInput value={company} onChange={(text) => setCompany(text.value)} type="text" placeholder="Company"/>
                        <Message value={message} onChange={(text) => setMessage(text.value)} type="text" placeholder="Message"/>
                    </Grid>
                                       <ButtonWrap>
                                       <Submit onClick={() => onSubmit()} type="submit" value="submit">
                                           Submit
                                       </Submit>
                                   </ButtonWrap>
                                   </>
                                        }
 
            </Container>
        </Wrapper>
    )
}