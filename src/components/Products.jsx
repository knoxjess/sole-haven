import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import { mobile } from "../responsive";



const Container = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: -300px; /* Adjust the margin-top value to move the containers up further */
  ${mobile({ gridTemplateColumns: "repeat(1, 1fr)" })}
`;


const Products = () => {
  const topProducts = popularProducts.slice(0, 4);
  const bottomProducts = popularProducts.slice(4, 8);

  return (
    <Container>
      {topProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
      {bottomProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
