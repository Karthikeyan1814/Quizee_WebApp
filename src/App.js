import Login from "./Pages/Login"
import Nav from "./Components/Nav";
import SingUp from "./Pages/SignUp";
import Home from "./Pages/Home";
import "./App.css"
import {BrowserRouter , Routes,Route,Link}from 'react-router-dom'


function App() {
  return (
      <BrowserRouter>
      <Home />
        </BrowserRouter>
  );
}

export default App;
