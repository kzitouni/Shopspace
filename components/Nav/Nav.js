import React,{useState} from "react"
import {router} from 'next'
import {
    Wrapper,
    Container,
    Logo,
    Navigation,
    Wrap,
    NavItem,
    HoverContainer,
    HoverA,
    HoverAll,
    HoverItem,
    TitleText,
    HInfo,
    Arrow,
    LogoTag
} from "./Styles/Styles"
import Hamburger from 'hamburger-react'
import { FaChevronDown } from "react-icons/fa";

export default function Nav(){
    const [isOpen, setOpen] = useState(false)
    const [displayProd,setProd] = useState(false)
    const [displayRes,setRes] = useState(false)
    const [displayPart,setPart] = useState(false)
    const [displayComp,setComp] = useState(false)

    return(
        <Wrapper>
            <Container>
                <Wrap>
                    <LogoTag href="/">
                    <Logo src="/shopspace_logo.svg" />
                    </LogoTag>
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                </Wrap>
                { isOpen ?
                    <Navigation>
                        <NavItem>
                            <HoverContainer>
                                <HoverA onClick={()=>setProd(prev=>!prev)}>
                                    Products 
                                    <Arrow>
                                        <FaChevronDown />
                                    </Arrow>
                                </HoverA>
                                {
                                displayProd &&
                                    <HoverAll>
                                        <HoverItem  href="/Platforms">
                                            <TitleText>
                                                Page Builder
                                            </TitleText>
                                            <HInfo>
                                                Powerful store builder for ecommerce brands and agencies
                                            </HInfo>
                                        </HoverItem>
                                    </HoverAll>
                                }
                            </HoverContainer>
                        </NavItem>
                        <NavItem>
                            <HoverContainer>
                                <HoverA onClick={()=> setRes(prev=>!prev)}>
                                    Resources
                                    <Arrow>
                                        <FaChevronDown />
                                    </Arrow>
                                </HoverA>
                                {
                                displayRes &&
                                    <HoverAll>
                                        <HoverItem href="/Blog">
                                            <TitleText >
                                                Blog
                                            </TitleText>
                                            <HInfo>
                                                Ecommerce Industry Insights
                                            </HInfo>
                                        </HoverItem>
                                    </HoverAll>   
                                }
                            </HoverContainer>
                        </NavItem>
                        <NavItem>
                            <HoverContainer>
                                <HoverA onClick={()=> setPart(prev=>!prev)}>
                                    Partners 
                                    <Arrow>
                                        <FaChevronDown />
                                    </Arrow>
                                </HoverA>
                                {displayPart &&
                                    <HoverAll>
                                        <HoverItem href="/Partner">
                                            <TitleText >
                                                Become a Partner
                                            </TitleText>
                                            <HInfo>
                                                Grow your agency by partnering with us
                                            </HInfo>
                                        </HoverItem>
                                    </HoverAll>
                                }
                            </HoverContainer>
                        </NavItem>
                        <NavItem>
                            <HoverContainer>
                                <HoverA onClick={()=> setComp(prev=>!prev)}>
                                    Company 
                                    <Arrow>
                                        <FaChevronDown />
                                    </Arrow> 
                                </HoverA>
                                {displayComp &&
                                    <HoverAll>
                                        <HoverItem href="/About">
                                            <TitleText>
                                                About us
                                            </TitleText>
                                            <HInfo>
                                                Learn about our history and our plans for the future
                                            </HInfo>
                                        </HoverItem>
                                        <HoverItem href="/Careers">
                                            <TitleText >
                                                Careers
                                            </TitleText>
                                            <HInfo>
                                                Join our growing team of developers
                                            </HInfo>
                                        </HoverItem>
                                        <HoverItem href="/Contact">
                                            <TitleText >
                                                Contact Us
                                            </TitleText>
                                            <HInfo>
                                                Have any question? Ask our team
                                            </HInfo>
                                        </HoverItem>
                                    </HoverAll>
                                }
                            </HoverContainer>
                        </NavItem>
                    </Navigation>
                :null
                }
            </Container>
        </Wrapper>
    )
}