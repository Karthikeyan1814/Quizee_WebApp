import Nav from "../Components/Nav"
import "../Style/Home.css"
 export default function Home(){
return(
   
    <div className="home-container">
       <Nav />
       <section className="create-test">
        <h1>Welcome Back !</h1>
        <button> + Create New Test </button>
       </section>
    </div>
)
}