import Nav from "./Nav";
import categories from "../Data/categories"
import CategoriesCard from "./CategoriesCard";
import "../Style/Categories.css"
import Header from "./Header";
export default function Categories(){

    console.log(categories)
   
    return(
        <div>
            <Nav />
            <Header      />
            <div className="cat-container">
            
                {categories.map((item,index)=>(
                    <CategoriesCard 
                    key={index}
                    title={item.cat_name}
                    para={item.cat_about}
                    isshown="true"
                    img={item.cat_img}
                    />
                ))}
                <div className="cat-card">
                    <img style={{height:"120px",width:"120px",backgroundColor:"none !important"}} src="./logos/loading.svg" alt="" />
                    <h3 style={{textAlign:"center"}}>New Categories is Update Soon</h3>
                </div>
            </div>
        </div>
    )
}