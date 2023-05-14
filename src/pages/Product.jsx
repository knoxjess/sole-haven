import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import shoeImage from "../assets/img/shoes.jpg";
import { Add, RemoveOutlined } from "@material-ui/icons";

const Container = styled.div``;
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`;
const ImgContainer = styled.div`
    flex: 1;
`;
const Image = styled.img`
    width: 80%;
    height: 90vh;
    object-fit: cover;
`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    margin-top: 180px; /* Added margin to move the info down */
`;
const Title = styled.h1`
    font-weight: 200;
`;
const Desc = styled.p`
    margin: 20px 0px;
`;
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin: 30px 0px;
`;
const Filter = styled.div`
padding: 0px;
display: flex;
align-items: center;
justify-content: space-between;
`;
const FilterTitle = styled.span`
    font-size: 20px;
    `;
const FilterSize = styled.select`
    margin-left: 20px;
    padding: 5px;
    font-size: 14px;
`;
const FilterSizeOption = styled.option`
`;

const AddContainer = styled.div`
display: flex;
align-items: center;
width: 25%;
justify-content: space-between;
margin-top: 30px; /* Added margin to move the info down */
`;
const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;
`;
const Amount = styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid #5f8c58;
align-items: center;
justify-content: center;
margin: 0px 5px;
display: flex;

`;

const Button = styled.button`
padding: 13px;
border: 2px solid #5f8c58;
background-color: #fff;
cursor: pointer;
font-weight: 500;
`;


const Product = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src={shoeImage} alt="Denim Jumpsuit" />
        </ImgContainer>
        <InfoContainer>
          <Title>Nike SB Dunk High Dog Walker</Title>
          <Desc>
          Embrace the perfect blend of style and functionality while taking your dog for a walk in the Nike SB Dunk High Dog Walker. 
          These kicks feature a refreshing green upper adorned with striking brown and black accents. The iconic red Nike "Swoosh" adds a pop of color,
           while the white midsole and sole with brown accents complete the look. Released in April 2019, these sneakers were available for purchase at a retail price of $110. 
           Step out in these sneakers and make a statement on your dog-walking adventures.
          </Desc>
          <Price>$150</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
              <option disabled selected>Size</option>
                <optgroup label="MENS">
                  <option>5M</option>
                  <option>6M</option>
                  <option>7M</option>
                  <option>8M</option>
                  <option>9M</option>
                  <option>10M</option>
                  <option>11M</option>
                  <option>12M</option>
                  <option>13M</option>
                </optgroup>
                <optgroup label="WOMENS">
                  <option>5W</option>
                  <option>6W</option>
                  <option>7W</option>
                  <option>8W</option>
                  <option>9W</option>
                  <option>10W</option>
                  <option>11W</option>
                  <option>12W</option>
                </optgroup>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
                <RemoveOutlined />
                <Amount>1</Amount>
                <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
            </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
