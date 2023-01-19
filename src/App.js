import {BrowserRouter, Route, Routes} from "react-router-dom"
import { useState } from "react";
//components
import GlobalStyle from "./GlobalStyle";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import InOperation from "./components/InOperation";
import OutOperation from "./components/OutOperation";

export default function App(){
    const [user, setUser] = useState({})

    return(
        <BrowserRouter>
            <GlobalStyle/>

            <Routes>
                <Route path="/" element={<Login user={user} setUser={setUser}/>}/>
                <Route path="/cadastro" element={<Signup/>}/>
                <Route path="/home" element={<Home user={user}/>}/>
                <Route path="/nova-entrada" element={<InOperation/>}/>
                <Route path="/nova-saida" element={<OutOperation/>}/>
            </Routes>
        
        </BrowserRouter>
    )
}