import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import dayjs from "dayjs";
import UserContext from "../contexts/UserContext";

export default function InOperation() {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");

  const { user } = useContext(UserContext);
  // console.log(user);
  function handleNewEntry(event) {
    event.preventDefault();

    let transaction = {
      userId: user._id,
      value,
      description,
      type: "in",
      date: dayjs(new Date()).format("DD/MM"),
    };

    axios
      .post("http://localhost:5000/nova-entrada", transaction, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((res) => {
        console.log(transaction);
      })
      .catch((err) => {
        console.log(err);
      });

    navigate("/home");
  }

  return (
    <Container>
      <h1>Nova entrada</h1>

      <FormContainer onSubmit={handleNewEntry}>
        <input
          onChange={(e) => setValue(e.target.value)}
          value={value}
          type="number"
          placeholder="Valor"
        ></input>
        <input
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          placeholder="Descrição"
        ></input>

        <button type="submit">Salvar entrada</button>
      </FormContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;

  > h1 {
    width: 100%;
    margin: auto;
    font-size: 26px;
    font-weight: 700;
    text-align: left;
    margin-bottom: 16px;
  }
`;

const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 16px 0;

  > input {
    margin-bottom: 12px;
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
    height: 46px;
    background-color: #a328d6;
    border-style: none;
    border-radius: 5px;
    color: #ffffff;
    font-weight: 700;
    font-size: 20px;
  }
`;
