import {BrowserRouter, Route, Routes} from "react-router-dom"
import GlobalStyle from "./GlobalStyle";
//components
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import InOperation from "./components/InOperation";
import OutOperation from "./components/OutOperation";

export default function App(){
    return(
        <BrowserRouter>
            <GlobalStyle/>

            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/cadastro" element={<Signup/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/nova-entrada" element={<InOperation/>}/>
                <Route path="/nova-saida" element={<OutOperation/>}/>
            </Routes>
        
        </BrowserRouter>
    )
}