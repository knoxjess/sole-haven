import Announcement from "../components/Announcement";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import threeshoe from "../assets/img/3shoe.PNG";
import { Add, RemoveOutlined } from "@material-ui/icons";
import sevenShoeImage from "../assets/img/7shoe.PNG";
import Newsletter from "../components/Newsletter";

const Container = styled.div`
`;

const Wrrapper = styled.div`
padding: 20px;
`;

const Title = styled.h1`
font-weight: 300;
text-align: center;
`;

const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`;

const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border: ${props => props.type === "Filled" && "none"};
background-color: ${props => props.type === "Filled" ? "#5f8c58" : "transparent"};
color: ${props => props.type === "Filled" && "white"};
`;

const TopTexts = styled.div`
`;

const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0 10px;
`;

const Bottom = styled.div`
display: flex;
justify-content: space-between;
`;

const Info = styled.div`
flex: 3;
`;

const Summary = styled.div`
flex: 1;
border: 0.5px solid lightgray;
border-radius: 10px;
padding: 20px;
height: 50vh;
`;

const Product = styled.div`
display: flex;
justify-content: space-between;
`;

const ProductDetail = styled.div`
flex: 2;
display: flex;
font-size: 17px;
`;

const Image = styled.img`
width: 200px;
`;

const PriceDetail = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;

const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
`;

const ProductName = styled.span`
`;

const ProductId = styled.span`
`;

const ProductSize = styled.span`
`;

const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`;

const ProductAmount = styled.div`
font-size: 24px;
margin: 5px;
`;

const ProductPrice = styled.div`
font-size: 26px;
font-weight: 200;
`;

const SummaryTitle = styled.h1`
font-weight: 200;
`;

const SummaryItem = styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${props => props.type === "total" && "500"};
font-size: ${props => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span`
`;

const SummaryItemPrice = styled.span``;

const SummaryButton = styled.button`
width: 100%;
padding: 10px;
background-color: #5f8c58;
color: white;
font-weight: 600;
cursor: pointer;
`;


const Cart = () => {
  return (
    <Container>
        <Announcement />
        <Navbar />
        <Wrrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag (2)</TopText>
                    <TopText>Your Wishlist (0)</TopText> 
                 </TopTexts>
                <TopButton type="Filled">CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail> 
                        <Image src={threeshoe} alt="Shoe" />
                        <Details>
                            <ProductName><b>Product:</b> Nike SB Dunk Low (Jarritos)</ProductName>
                            <ProductId><b>ID:</b> 123456789</ProductId>
                            <ProductSize><b>Size:</b> 9.5M </ProductSize>
                            </Details>
                         </ProductDetail>
                        <PriceDetail> 
                            <ProductAmountContainer>
                                <Add />
                                <ProductAmount>2</ProductAmount>
                                <RemoveOutlined />
                            </ProductAmountContainer>
                            <ProductPrice>$ 170</ProductPrice>
                         </PriceDetail>
                    </Product>
                    
                    <Product>
                        <ProductDetail> 
                        <Image src={sevenShoeImage} alt="Shoe" />
                        <Details>
                            <ProductName><b>Product:</b>Nike SB Dunk Low (Paris)</ProductName>
                            <ProductId><b>ID:</b> 123456788</ProductId>
                            <ProductSize><b>Size:</b> 9.5M </ProductSize>
                            </Details>
                         </ProductDetail>
                        <PriceDetail> 
                            <ProductAmountContainer>
                                <Add />
                                <ProductAmount>1</ProductAmount>
                                <RemoveOutlined />
                            </ProductAmountContainer>
                            <ProductPrice>$ 150</ProductPrice>
                         </PriceDetail>
                    </Product>
                </Info>
                <Summary>
                   <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                     <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ 320</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ 320</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryButton>CHECKOUT NOW</SummaryButton>
                </Summary>
            </Bottom>
        </Wrrapper>
        <Newsletter />
        <Footer />
    </Container>
  );
};

export default Cart;

