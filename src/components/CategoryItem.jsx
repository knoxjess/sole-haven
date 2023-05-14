import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
  margin-left: 130px;
  top: -250px; /* Adjust the top value to move the container up */
`;

const Image = styled.img`
  width: 400px; /* Adjust the width as per your preference */
  height: 500px; /* Adjust the height as per your preference */
  object-fit: cover;
`;

const Info = styled.div`
  position: absolute;
    top: 0;
    left: 0;
  top: 65%; /* Adjust the top value to vertically center the info */
  left: 10%; /* Adjust the left value to horizontally center the info */
  transform: translate(-50%, -50%); /* Center the info both horizontally and vertically */
`;

const Title = styled.h1`
   color: black;
    margin-bottom: 10px;
    font-size: 30px;
`;
const Button = styled.button`
  padding: 8px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
  `;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
