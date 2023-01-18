import {BrowserRouter, Route, Routes} from "react-router-dom"
import GlobalStyle from "./GlobalStyle";
//components
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Deposit from "./components/Deposit";
import Withdraw from "./components/Withdraw";

export default function App(){
    return(
        <BrowserRouter>
            <GlobalStyle/>

            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/cadastro" element={<Signup/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/nova-entrada" element={<Deposit/>}/>
                <Route path="/nova-saida" element={<Withdraw/>}/>
            </Routes>
        
        </BrowserRouter>
    )
}