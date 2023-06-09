import styled from "styled-components";


const Container = styled.div`
    height: 20px;
    background-color: #D6D9C5;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`;

const Announcement = () => {
  return (
    <Container>
        Free Shipping on Orders Over $150
        </Container>
  )
}

export default Announcement