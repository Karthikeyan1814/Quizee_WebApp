import Login from "./Pages/Login"
import Nav from "./Components/Nav";
import SingUp from "./Pages/SignUp";
import Home from "./Pages/Home";
import "./App.css"
import {BrowserRouter , Routes,Route,Link}from 'react-router-dom'
import Categories from "./Components/Categories";
import Sibebar from "./Components/Sidebar";
import Overview from "./Components/Overview";
import QuizePage from "./Pages/QuizeePage";


function App() {
  return (
      <BrowserRouter>
      <QuizePage />
        </BrowserRouter>
  );
}

export default App;
