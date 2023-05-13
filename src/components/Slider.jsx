import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import Styled from 'styled-components'
import one from '../assets/img/one.jpg'
import two from '../assets/img/two.jpg'
import three from '../assets/img/three.jpg'
import four from '../assets/img/four.jpg'





const Container = Styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    text-color: #005C53;
`;

const Arrow = Styled.div`
    width: 50px;
    height: 30px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: Auto ;
    position: absolute;
    top: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    bottom: 0;
    cursor: pointer;
    opacity: 0.5;
`;

const Wrapper = Styled.div`
    height: 100%;
    margin: auto;
`;

const Slide = Styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    justify-content: center;

`;

const ImgContainer = Styled.div`
    flex: 1;
`;

const Image = Styled.img`
    height:30%;
    width: 50%;
    margin-top: 60px;
`;

const InfoContainer = Styled.div`
    flex: 1;
    padding: 0px;
    text-align: right;
    margin-right: 50px;

`;

const Title = Styled.h1`
    font-size: 70px;
    text-color: #005C53;

`;

const Desc = Styled.p`
    margin: 10px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
    text-color: #005C53;
`;

const Button = Styled.button`
    font-size: 30px;
    padding: 10px;
    cursor: pointer;
`;


const Slider = () => {
  return (
    <Container>
    <Arrow direction="left" >
        <ArrowLeftOutlined />
    </Arrow>
    <Wrapper>
        <slide>
        <ImgContainer>
        <Image src={one} alt="" />
         </ImgContainer>
        <InfoContainer> 
            <Title> Sole Haven </Title>
            <Desc>Embrace the opportunity to acquire remarkable and rare footwear through our website, <br/>
                where the quest for distinctive style meets convenience</Desc>
            <Button> Shop Now </Button>
        </InfoContainer>
        </slide>
        <slide>
        <ImgContainer>
        <Image src={two} alt="" />
         </ImgContainer>
        <InfoContainer> 
            <Title> Sole Haven </Title>
            <Desc>Embrace the opportunity to acquire remarkable and rare footwear through our website, <br/>
                where the quest for distinctive style meets convenience</Desc>
            <Button> Shop Now </Button>
        </InfoContainer>
        </slide>
        <slide>
        <ImgContainer>
        <Image src={three} alt="" />
         </ImgContainer>
        <InfoContainer> 
            <Title> Sole Haven </Title>
            <Desc>Embrace the opportunity to acquire remarkable and rare footwear through our website, <br/>
                where the quest for distinctive style meets convenience</Desc>
            <Button> Shop Now </Button>
        </InfoContainer>
        </slide>
        <slide>
        <ImgContainer>
        <Image src={four} alt="" />
         </ImgContainer>
        <InfoContainer> 
            <Title> Sole Haven </Title>
            <Desc>Embrace the opportunity to acquire remarkable and rare footwear through our website, <br/>
                where the quest for distinctive style meets convenience</Desc>
            <Button> Shop Now </Button>
        </InfoContainer>
        </slide>
    </Wrapper>
    <Arrow direction="right">
       <ArrowRightOutlined />
    </Arrow>
    </Container>
  )
}

export default Slider