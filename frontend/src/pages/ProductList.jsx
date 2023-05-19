import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Products from "../components/Products";

const Container = styled.div`
`;

const StyledTitle = styled.h1`
  margin: 60px;
`;

const FillerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
`;

const Filler = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  

`;

const Select = styled.select`
padding: 10px;
margin-right: 20px;

`;

const Option = styled.option`
`;

const FilterContainer = styled.div`
  margin: 20px;
`;

const Filter = styled.div`
margin: 20px;
`;

const ProductsContainer = styled.div`
  margin-top: 300px; /* Adjust the value as per your preference */
`;

function ProductList() {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <FillerContainer>
        <Filler>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>Color</Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>Size</Option>
            <StyledTitle>MENS</StyledTitle>
            <Option>5M</Option>
            <Option>6M</Option>
            <Option>7M</Option>
            <Option>8M</Option>
            <Option>9M</Option>
            <Option>10M</Option>
            <Option>11M</Option>
            <Option>12M</Option>
            <Option>13M</Option>
            <StyledTitle>WOMENS</StyledTitle>
            <Option>5W</Option>
            <Option>6W</Option>
            <Option>7W</Option>
            <Option>8W</Option>
            <Option>9W</Option>
            <Option>10W</Option>
            <Option>11W</Option>
            <Option>12W</Option>
          </Select>
        </Filler>
        <FilterContainer>
          <Filter>
            <FilterText>Sort Products:</FilterText>
            <Select>
              <Option selected>Newest</Option>
              <Option>Price (asc)</Option>
              <Option>Price (desc)</Option>
            </Select>
          </Filter>
        </FilterContainer>
      </FillerContainer>
      <ProductsContainer>
        <Products />
      </ProductsContainer>
      <Newsletter />
      <Footer />
    </Container>
  );
}

export default ProductList;
