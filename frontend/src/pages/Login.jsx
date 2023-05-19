import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  link: {
    display: "block",
    textAlign: "center",
    margin: "15px 0",
    textDecoration: "none",
  },
}));

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
  flex-direction: column; // Change to column to stack inputs vertically
  align-items: center;
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

const Login = () => {
  const classes = useStyles();

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
        </Form>
        <Button>LOGIN</Button>
        <Link href="#" className={classes.link}>
          FORGOT PASSWORD?
        </Link>
        <Link href="/register" className={classes.link}>
          CREATE A NEW ACCOUNT
        </Link>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Login;
