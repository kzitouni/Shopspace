import React,{useEffect,useState} from "react"
import {
    Wrapper,
    Container,
    Navigation,
    Logo,
    Button,
    NavItem,
    HoverA,
    HoverAll,
    HoverItem,
    TitleText,
    HInfo,
    HoverContainer,
    Arrow
} from "./Styles/Styles"
import Nav from "../Nav/Nav"
import { FaChevronDown } from "react-icons/fa";
import {router} from 'next'
import { LogoTag } from "../Nav/Styles/Styles";

export default function NavBar(props){
    const [windowDimension, setWindowDimension] = useState(null);

    useEffect(() => {
        setWindowDimension(window.innerWidth);
      }, []);

      useEffect(() => {
        function handleResize() {
          setWindowDimension(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);
    
      const isMobile = windowDimension <= 990;

    var displayLinks = props.display

    return(
        !isMobile ?
        <Wrapper>
            <Container>
                <LogoTag href="/">
            <Logo src="/shopspace_logo.svg" />
                </LogoTag>
                <Navigation>
                    {
                        displayLinks ?
                            <>
                                <NavItem>
                                    <HoverContainer>
                                        <HoverA href="#">
                                            Products 
                                            <Arrow>
                                                <FaChevronDown />
                                            </Arrow>
                                        </HoverA>
                                        <HoverAll>
                                            <HoverItem href="/Platforms">
                                                <TitleText>
                                                    Page Builder
                                                </TitleText>
                                                <HInfo>
                                                    Powerful store builder for ecommerce brands and agencies
                                                </HInfo>
                                            </HoverItem>
                                        </HoverAll>
                                    </HoverContainer>
                                </NavItem>
                                <NavItem>
                                    <HoverContainer>
                                        <HoverA>
                                            Resources
                                            <Arrow>
                                                <FaChevronDown />
                                            </Arrow>
                                        </HoverA>
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
                                    </HoverContainer>
                                </NavItem>
                                <NavItem>
                                    <HoverContainer>
                                        <HoverA >
                                            Partners 
                                            <Arrow>
                                                <FaChevronDown />
                                            </Arrow>
                                        </HoverA>
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
                                    </HoverContainer>
                                </NavItem>
                                <NavItem>
                                    <HoverContainer>
                                        <HoverA>
                                            Company 
                                            <Arrow>
                                                <FaChevronDown />
                                            </Arrow>
                                        </HoverA> 
                                        <HoverAll>
                                            <HoverItem href="/About">
                                                <TitleText >
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
                                    </HoverContainer>
                                </NavItem>
                    
                                <NavItem>
                                    <Button href="/Platforms">
                                        Get Started
                                    </Button>
                                </NavItem>
                            </>
                        :null
                    }
                </Navigation>
            </Container>
        </Wrapper>
        :<Nav />  
    )
}