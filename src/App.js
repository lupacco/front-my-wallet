import {BrowserRouter, Route, Routes} from "react-router-dom"
import { useState } from "react";
//components
import GlobalStyle from "./GlobalStyle";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import InOperation from "./components/InOperation";
import OutOperation from "./components/OutOperation";
//contexts
import UserContext from "./contexts/UserContext"
import RegistersContext from "./contexts/RegistersContext"

export default function App(){
    const [user, setUser] = useState({})
    const [registers, setRegisters] = useState([])

    return(
        <BrowserRouter>
            <GlobalStyle/>

            <UserContext.Provider value={ {user, setUser}}>
                <RegistersContext.Provider value = {{registers, setRegisters}}>

                    <Routes>
                        <Route path="/" element={<Login/>}/>
                        <Route path="/cadastro" element={<Signup/>}/>
                        <Route path="/home" element={<Home/>}/>
                        <Route path="/nova-entrada" element={<InOperation/>}/>
                        <Route path="/nova-saida" element={<OutOperation/>}/>
                    </Routes>
                    
                </RegistersContext.Provider>
            </UserContext.Provider>

        
        </BrowserRouter>
    )
}