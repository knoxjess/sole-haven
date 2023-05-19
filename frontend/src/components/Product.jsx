import styled from "styled-components";
import { mobile } from "../responsive";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  position: relative;

  &:hover ${Info} {
    transform: scale(1.05);
    opacity: 0.8;
  }

  ${mobile({
    height: "300px",
    flexDirection: "column",
    marginBottom: "30px",
  })}
`;

const Circle = styled.div`
  width: 300px;
  height: 350px;
  padding-left: 70px;
  border-radius: 50%;
  background-color: white;
  position: absolute;

  ${mobile({
    width: "300px",
    height: "300px",
    padding: "0",
    top: "0px",
  })}
`;

const Image = styled.img`
  height: 70%;
  z-index: 2;
  ${mobile({
    height: "75%",
    width: "auto",
  })}
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }

  ${mobile({
    margin: "5px",
    width: "30px",
    height: "30px",
  })}
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
