import { ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { Badge } from '@material-ui/core';
import Logo from '../assets/img/logo.png';

const Container = styled.div`
  height: 85px;
  background-color: #5F8C58;
  $
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
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
`;

const MenuItem = styled.div`
  font-size: 17px;
  cursor: pointer;
  color: white;
  margin-left: px;
  margin-bottom: 10px;
  margin-right: 5px;
  font-weight: bold;
`;

const MenuItemBadge = styled(Badge)`
  .MuiBadge-badge {
    background-color: #D8D9C2;
    color: black; // Optional: Change the text color if needed
    paddding-bottom: 20px;
  }
`;

const ShoppingCartIcon = styled(ShoppingCartOutlined)`
  color: white; // Change the color to white
  padding-right: 5px; // Optional: Add some padding to the right
  margin-bottom: 10px;
  cursor: pointer;
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
          <MenuItem>REGISTER  /</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItemBadge badgeContent={4} color="primary" >
            <ShoppingCartIcon />
          </MenuItemBadge>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
