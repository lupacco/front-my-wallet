import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function OutOperation(){
    const navigate = useNavigate()

    return (
        <Container>
            <h1>Nova saída</h1>

            <FormContainer onSubmit={() => {navigate('/home')}}>
                <input placeholder="Valor"></input>
                <input placeholder="Descrição"></input>

                <button type="submit">Salvar saída</button>
            </FormContainer>

        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;

    >h1{
        width: 100%;
        margin: auto;
        font-size: 26px;
        font-weight: 700;
        text-align: left;
        margin-bottom: 16px;
    }
`

const FormContainer = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 16px 0;

    >input{
        margin-bottom: 12px;
        height: 58px;
        border-style: none;
        border-radius: 5px;
        padding-left: 8px;
        &::placeholder{
            color: #000000;
            font-size: 20px;
        }
    }
    >button{
        height: 46px;
        background-color: #A328D6;
        border-style: none;
        border-radius: 5px;
        color: #FFFFFF;
        font-weight: 700;
        font-size: 20px;
    }
`