import Nav from "./Nav"
import "../Style/Header.css"
 export default function Header({panel,dept,box1,box2,box1_value,box2_value,main_btn1,main_btn2}){
return(
   
    <div className="header-container">
       <Nav />
       <section className="create-test">
        <h1>Welcome Back !</h1>
        <h1>{panel} ,</h1>
        <h1>{dept} .</h1>
        {/* <button> + Create New Test </button> */}
       </section>
       <section className="header-score">
        <div className="box1">
            <h1>{box1}</h1>
            <h1 className="box_value">{box1_value}</h1>
        </div>
        <div className="box2">
            <h1>{box2}</h1>
            <h1 className="box_value value2">{box2_value}</h1>
        </div>
        <button className="header_btn1 header_btn">{main_btn1}</button>
        <button className="header_btn2 header_btn">{main_btn2}</button>
       </section>
    </div>
)
}