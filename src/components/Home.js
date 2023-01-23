import styled from "styled-components"
import {Link, useNavigate} from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import UserContext from "../contexts/UserContext"
import RegistersContext from "../contexts/RegistersContext"


// const registers = [
//     {
//         date: "13/01",
//         description: "Almoço no restaurante",
//         value: 39.90
//     },
//     {
//         date: "17/01",
//         description: "Janta",
//         value: 19.00
//     },
//     {
//         date: "20/01",
//         description: "Almoço no restaurante",
//         value: 39.90
//     }
    
// ]

export default function Home(){
    const navigate = useNavigate()

    const {user} = useContext(UserContext)
    const {registers, setRegisters} = useContext(RegistersContext)

    useEffect(()=>{
        axios.get('http://localhost:5000/home', {
            headers: {
                Authorization: `Bearer ${user.token}`,
                userid: user._id
            }
        })
        .then(res => {
            setRegisters(res.data)
        })
        .catch(err => console.log('deu ruim'))
    }, [])


    return(
        <Container>
            <Header>
                <h1>Olá, {user.name}</h1>
                <button onClick={() => navigate('/')}>
                    <ion-icon name="log-out-outline"></ion-icon>
                </button>
            </Header>

            <Registers>
                {registers.length > 0 ? (
                    <div>
                        {registers.map(register => (
                            <Register key={register._id} type={register.type}>
                                <div>
                                    <p>{register.date}</p>
                                    <p>{register.description}</p>
                                </div>
                                <p>{Number(register.value).toFixed(2)}</p>
                            </Register>
                        ))}
                    </div>
                ) : (
                    <p>
                        Não há registros de entrada ou saída
                    </p>
                )}
                <div className="balance">
                    <p>SALDO</p>
                    <p>3000,00</p>
                </div>
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
    padding: 16px;
    width: 100%;
    height: 65vh;
    background-color: #FFFFFF;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    position: relative;
    
    >div{
        overflow-y: scroll;
        margin-bottom: 16px;
    }

    >.balance{
        position: absolute;
        background-color: #FFFFFF;
        bottom: 0px;
        width: 92%;
        padding-top: 8px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        >p{
            font-size: 17px;
            font-weight: 700;
            color: #000000;
            &:last-child{
                font-weight: 400;
                color: #03AC00;
            }
        }
    }

    >p{
        color: #868686;
        margin: auto;
        text-align: center;
        font-size: 20px;
        width: 180px;
    }
`
const Register = styled.div`
    display: flex;
    margin-bottom: 16px;
    align-items: center;
    justify-content: space-between;
    >div{
        display: flex;
        color: #C6C6C6;
        >p:last-child{
            margin-left: 8px;
            color: #000000;
        }
    }
    >p{
        color: ${props => props.type=="out" ? (`#C70000`) : (`#03AC00`)};
    }
`
const Operations = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    >div{
        background-color: #A328D6;
        width: 155px;
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