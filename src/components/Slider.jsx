import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import Styled from 'styled-components'



const Container = Styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
`;

const Arrow = Styled.div`
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: Auto ;
    position: absolute;
    top: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    bottom: 0;

`;

const Slider = () => {
  return (
    <Container>
    <Arrow direction="left" >
        <ArrowLeftOutlined />
    </Arrow>
    <Arrow direction="right">
       <ArrowRightOutlined />
    </Arrow>
    </Container>
  )
}

export default Slider