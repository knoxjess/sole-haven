import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  margin: auto;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  font-size: 16px;
`;

const Button = styled.button`
  width: 40%;
  padding: 8px 10px;
  cursor: pointer;
  font-weight: 600;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  display: flex;
  margin-left: auto;
  margin-right: auto;
`;

const Description = styled.span`
  font-size: 17px;
  display: block;
  text-align: center;
`;

const Agreement = styled.div`
  font-size: 17px;
  margin: 20px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;


const Register = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>Create Account</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="full name" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Input placeholder="phone number" />
        </Form>
        <Button>CREATE</Button>
        <Description>
          Already have an account? <span>Login</span>
        </Description>
        <Agreement>
          <Checkbox type="checkbox" />
          <span>I agree to the terms and conditions</span>
        </Agreement>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Register;
