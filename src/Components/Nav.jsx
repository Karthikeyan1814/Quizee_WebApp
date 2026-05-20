import { Navigate } from "react-router-dom"
import Login from "../Pages/Login"
import "../Style/Nav.css"
export default function Nav(){
    return(
        <nav className="nav">
            <h1>Quizee !</h1>
            <ul>
                <li>Home</li>
                <li>Help</li>
                <li onClick={Navigate(<Login />)}>LogOut</li>
                
            </ul>
        </nav>
    )
}