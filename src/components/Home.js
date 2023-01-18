import styled from "styled-components"
import {Link} from "react-router-dom"

const user = "Lucas"

export default function Home(){
    return(
        <Container>
            <Header>
                <h1>Olá, {user}</h1>
                <button>
                    <ion-icon name="log-out-outline"></ion-icon>
                </button>
            </Header>

            <Registers>
                <p>
                    Não há registros de entrada ou saída
                </p>
            </Registers>

            <Operations>
                <div>
                    <StyledLink to="/nova-entrada">
                        <ion-icon name="add-circle-outline"></ion-icon>
                    </StyledLink>
                    <p>Nova entrada</p>
                </div>
                <div>
                <StyledLink to="/nova-saida">
                    <ion-icon name="remove-circle-outline"></ion-icon>
                </StyledLink>
                    <p>Nova saída</p>
                </div>
            </Operations>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 24px;

`

const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    >h1{
        font-size: 26px;
        font-weight: 700;
    }
    >button{
        border-style: none;
        background: none;
        >ion-icon{
            font-size: 36px;
            font-weight: 700;
            color: #FFFFFF;
        }
    }
`
const Registers = styled.div`
    margin: 16px 0;
    width: 100%;
    height: 70vh;
    background-color: #FFFFFF;
    border-radius: 5px;
    display: flex;

    >p{
        color: #868686;
        margin: auto;
        text-align: center;
        font-size: 20px;
        width: 180px;
    }
`
const Operations = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    >div{
        background-color: #A328D6;
        width: 160px;
        height: 114px;
        border-radius: 5px;
        position: relative;
        
        >p{
            width: 64px;
            font-size: 17px;
            font-weight: 700;
            position: absolute;
            bottom: 8px;
            left: 8px;
        }
    }
`

const StyledLink = styled(Link)`
    position: absolute;
    top: 6px;
    left: 6px;
    >ion-icon{
        font-size: 28px;
        color: #FFFFFF;
    }
`