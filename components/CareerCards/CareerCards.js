import React from "react"
import {
    Wrapper,
    Container,
    Row,
    Card,
    Icon,
    Title,
    Text
} from "./Styles/Styles"
import {GiReceiveMoney, GiPalmTree, GiShinyApple, GiScales} from "react-icons/gi"
import {AiOutlineClockCircle} from "react-icons/ai"

export default function Careers(){
    return(
        <Wrapper>
            <Container>
                    <Card>
                        <Icon>
                            <GiReceiveMoney />
                        </Icon>
                        <Title>
                            Competitive compensation
                        </Title>
                        <Text>
                            We believe every hardworking member of our team deserves to
                            receive adequet pay that will make them happy.
                        </Text>
                    </Card>
                    <Card>
                        <Icon>
                            <AiOutlineClockCircle />
                        </Icon>
                        <Title>
                            Remote company with flexible hours
                        </Title>
                        <Text>
                            We're a remote first company with team members all over the world.
                        </Text>
                    </Card>
                    <Card>
                        <Icon>
                            <GiPalmTree />
                        </Icon>
                        <Title>
                            Team and company offsites
                        </Title>
                        <Text>
                            While we use Zoom daily, 
                            our company retreats give us the chance 
                            to connect at a hman level.
                        </Text>
                    </Card>
                    <Card>
                        <Icon>
                            <GiShinyApple />
                        </Icon>
                        <Title>
                            Learning and Development
                        </Title>
                        <Text>
                            We are always here to support you whether it's online courses or conferences.
                        </Text>
                    </Card>
                    <Card>
                        <Icon>
                            <GiScales />
                        </Icon>
                        <Title>
                            A focus on work-life balance
                        </Title>
                        <Text>
                            We value results, not hours in a chair, and we want you to have a life outside work.
                        </Text>
                    </Card>
                    <Card>
                        <Icon>
                            
                        </Icon>
                        <Title>
                            
                        </Title>
                        <Text>
                            
                        </Text>
                    </Card>
            </Container>
        </Wrapper>
    )
}