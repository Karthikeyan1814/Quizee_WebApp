import Login from "./Pages/Login"
import Nav from "./Components/Nav";
import SingUp from "./Pages/SignUp";
import Home from "./Pages/Home";
import "./App.css"
import {BrowserRouter , Routes,Route,Link}from 'react-router-dom'
import Categories from "./Components/Categories";


function App() {
  return (
      <BrowserRouter>
      <Categories />
        </BrowserRouter>
  );
}

export default App;
