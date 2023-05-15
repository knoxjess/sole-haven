import styled from "styled-components";
import Logo from "../assets/img/logo.png";
import { Facebook, Instagram, GitHub } from "@material-ui/icons";

const Container = styled.div`
  display: flex;
  background-color: #5f8c58;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
const Description = styled.p`
  margin: 10px 0;
`;

const Center = styled.div`
  flex: 1;
  padding: 10px;
`;
const Right = styled.div`
  flex: 1;
  padding: 10px;
`;
const CustomLogo = styled.h1`
  /* Styles for the logo */
`;
const LogoImage = styled.img`
  height: 100px;
  width: 150px;
`;
const SocialContainer = styled.div`
  display: flex;

`;
const SocialIcon = styled.div`
  width: 40px;
  height: 30px;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

const Title = styled.h3`
  margin-bottom: 20px;
  text-align: center;
    color: white;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ListItem = styled.li`
    width: 20%;
    margin-bottom: 10px;
    color: white;

`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <CustomLogo>
          <LogoImage src={Logo} alt="logo" />
        </CustomLogo>
        <Description>

        </Description>
      </Left>
      <Center>
        <Title>
        "Shoes: the ultimate comedy partners. 
        They'll never let you down, but they might trip you up when you least expect it!"
        </Title>
        <List>
          <ListItem>Cart</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order/Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>
            Contact
        </Title>
        <List>
            <SocialContainer>
          <SocialIcon>
            <Facebook />
          </SocialIcon>
          <SocialIcon>
            <Instagram />
          </SocialIcon>
          <SocialIcon>
            <GitHub />
          </SocialIcon>
        </SocialContainer>
        </List>   
      </Right>
    </Container>
  );
};

export default Footer;
