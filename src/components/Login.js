import styled from "styled-components"
import {Link} from "react-router-dom"

export default function Login(){
    return(
        <Container>
            <h1>MyWallet</h1>

            <FormContainer>
                <input placeholder="E-mail"></input>
                <input placeholder="Senha"></input>

                <button>Entrar</button>
            </FormContainer>

            <StyledLink to="/cadastro">Primeira vez? Cadastre-se!</StyledLink>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30vh;
    
    >h1{
        font-family: 'Saira Stencil One', cursive;
        font-size: 32px;
        text-align: center;
    }
`

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    margin: 16px auto;

    >input{
        margin-bottom: 8px;
        width: 326px;
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
        width: 326px;
        height: 46px;
        background-color: #A328D6;
        border-style: none;
        border-radius: 5px;
        color: #FFFFFF;
        font-weight: 700;
        font-size: 20px;
    }
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #FFFFFF;
    font-size: 15px;
    font-weight: 700;
    margin-top: 8px;
`