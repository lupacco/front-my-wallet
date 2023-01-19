import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");

  function handleSignup(event) {
    event.preventDefault();
    console.log(name);
    console.log(email);
    console.log(password);
    console.log(confirmPwd);
  }

  return (
    <Container>
      <h1>MyWallet</h1>

      <FormContainer onSubmit={handleSignup}>
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
          type="text"
          placeholder="Nome"
        ></input>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          type="email"
          placeholder="E-mail"
        ></input>
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
          type="password"
          placeholder="Senha"
        ></input>
        <input
          onChange={(e) => {
            setConfirmPwd(e.target.value);
          }}
          value={confirmPwd}
          type="password"
          placeholder="Confirme a senha"
        ></input>

        <button type="submit">Cadastrar</button>
      </FormContainer>

      <StyledLink to="/">Já tem uma conta? Entre agora!</StyledLink>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20vh;

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
