import { Navigate } from "react-router-dom"
import Login from "../Pages/Login"
import "../Style/Nav.css"
export default function Nav(){
    return(
         <nav className="navbar">
                <img id="logo" src="Quizee_logo.png" alt="" />
                <ul>
                    <li style={{
                        borderBottom: "2px solid blue"
                    }}>Home</li>
                    <li>About Us</li>
                    <li>Categories</li>
                    <button >Login</button>
                    <button>Register</button>
                </ul>
            </nav>
    )
}