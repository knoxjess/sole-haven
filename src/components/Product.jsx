import styled from "styled-components"
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons"

const Info = styled.div`
opacity: 0;
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background-color: rgba(0,0,0,0.2);
z-index: 3;
display: flex;
align-items: center;
justify-content: center;
transition: all 0.5s ease;
cursor: pointer;

`

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    background-color: #F5F5F5;
    position: relative;

    &:hover ${Info}{
        transform: scale(1.05);
        opacity: 0.8;
    }
   
`
const Circle = styled.div`
    width: 370px;
    height: 340px;
    padding-left: 40px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
   
`
const Image = styled.img`
height: 75%;
z-index: 2;
`

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

&:hover{
    background-color: #e9f5f5;
    transform: scale(1.1);
}

`

const Product = ({item}) => {
  return (
    <Container> 
        <Circle/>
        <Image src={item.img}/>
        <Info>
            <Icon>
                <ShoppingCartOutlined/>
            </Icon>
            <Icon>
                <SearchOutlined/>
            </Icon>
            <Icon>
                <FavoriteBorderOutlined/>
            </Icon>
        </Info>

    </Container>
  )
}

export default Product