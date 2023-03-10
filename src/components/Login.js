import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios"
import UserContext from "../contexts/UserContext";

export default function Login() {
  const navigate = useNavigate()

  const {setUser} = useContext(UserContext)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(event) {
    event.preventDefault();
    
    axios.post('http://localhost:5000/', {
      email:email,
      password:password
    })
    .then(res => {
      setUser(res.data)
      navigate("/home")
    })
    .catch(err => console.log(err))
  }

  return (
    <Container>
      <h1>MyWallet</h1>

      <FormContainer onSubmit={handleLogin}>
        <input
          data-test="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          type="email"
          placeholder="E-mail"
        ></input>
        <input
          data-test="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
          type="password"
          placeholder="Senha"
        ></input>

        <button data-test="sign-in-submit" type="submit">Entrar</button>
      </FormContainer>

      <StyledLink to="/cadastro">Primeira vez? Cadastre-se!</StyledLink>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30vh;

  > h1 {
    font-family: "Saira Stencil One", cursive;
    font-size: 32px;
    text-align: center;
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin: 16px auto;

  > input {
    margin-bottom: 8px;
    width: 326px;
    height: 58px;
    border-style: none;
    border-radius: 5px;
    padding-left: 8px;
    &::placeholder {
      color: #000000;
      font-size: 20px;
    }
  }
  > button {
    width: 326px;
    height: 46px;
    background-color: #a328d6;
    border-style: none;
    border-radius: 5px;
    color: #ffffff;
    font-weight: 700;
    font-size: 20px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  font-size: 15px;
  font-weight: 700;
  margin-top: 8px;
`;
