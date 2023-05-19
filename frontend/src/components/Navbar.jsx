import { ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { Badge } from '@material-ui/core';
import Logo from '../assets/img/logo.png';
import { mobile } from '../responsive';

const Container = styled.div`
  height: 85px;
  background-color: #5F8C58;
  ${mobile({ height: "70px" })} // Adjust the height to 60px on mobile devices
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })} // Remove horizontal padding on mobile devices
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${mobile({ display: "none" })} // Hide the left side on mobile devices
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({  width: "50%" })} // Adjust alignment and width on mobile devices
`;

const MenuItem = styled.div`
  font-size: 17px;
  cursor: pointer;
  color: white;
  margin-left: 10px;
  font-weight: bold;
  ${mobile({ fontSize: "13px", marginLeft: "5px" })} // Adjust font size and margin left on mobile devices
`;

const MenuItemBadge = styled(Badge)`
  .MuiBadge-badge {
    background-color: #D8D9C2;
    color: black; // Adjust text color if needed
    padding-bottom: 0px; // Typo: Corrected 'paddding' to 'padding'
    margin-top: 5px; // Adjust the margin-top to align the MenuItemBadge
    ${mobile({ fontSize: "12px", marginRight: "18px" })} // Adjust font size and margin right on mobile devices
  }
`;

const ShoppingCartIcon = styled(ShoppingCartOutlined)`
  color: white; // Change color to white
  padding-right: 5px; // Add padding to the right
  cursor: pointer;
  ${mobile({ fontSize: "20px", marginRight: "20px" })} // Adjust font size and margin right on mobile devices
`;

const ImgContainer = styled.div`
  /* Styles for the container */
`;

const CustomLogo = styled.h1`
  /* Styles for the logo */
`;

const LogoImage = styled.img`
  height: 100px; /* Adjust the height as per your preference */
  width: 160px; /* Adjust the width as per your preference */
  ${mobile({ height: "70px", width: "110px" })} // Adjust height and width on mobile devices
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <MenuItem>NEW /</MenuItem>
          <MenuItem>INSTOCK /</MenuItem>
          <MenuItem>BLOG</MenuItem>
        </Left>
        <Center>
          <ImgContainer>
            <CustomLogo>
              <LogoImage src={Logo} alt="logo" />
            </CustomLogo>
          </ImgContainer>
        </Center>
        <Right>
          <MenuItem>REGISTER /</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItemBadge badgeContent={4} color="primary" overlap="rectangular">
            <ShoppingCartIcon />
          </MenuItemBadge>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;