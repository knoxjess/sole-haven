import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import { Badge } from '@material-ui/core';
import Logo from '../assets/img/logo.png'

const Container = styled.div`
    height: 76px;
    background-color: #005C53;
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

    const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: center;
    padding: 3px;
    background-color: #fff;
    margin-bottom: 40px;
    `;

    const Input = styled.input`
    border: none;
     `;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    `;

    const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    `;

    const ImgContainer = styled.div`
    /* Styles for the container */
  `;
  
  const CustomLogo = styled.h1`

  `;
  
  const LogoImage = styled.img`
    height: 90px; /* Adjust the height as per your preference */
    width: 150px; /* Adjust the width as per your preference */
  `;


const Navbar = () => {
  return (
    <Container>
       <Wrapper>
       <Left>
       <ImgContainer>
            <CustomLogo>
              <LogoImage src={Logo} alt="logo" />
            </CustomLogo>
          </ImgContainer>
        </Left>
        <Center>
          <SearchContainer>
            <Input />
            <Search style={{color: "gray", fontSize: 16}} />
          </SearchContainer>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;