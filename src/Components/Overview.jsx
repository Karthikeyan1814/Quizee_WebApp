import "../Style/Overview.css"
import { useRef } from "react"
import Header from "./Header"
import categories from "../Data/categories"
import "../Style/Categories.css"
import CategoriesCard from "./CategoriesCard";
import Nav from "./Nav"
import Sibebar from "./Sidebar"
export default function Overview() {
    const reference = useRef();

    const handle_scroll = (e) => {
        e.preventDefault();
        reference.current.scrollLeft += e.deltaY;
    }
    const scrollLast=(e)=>{
        reference.current.scrollLeft +=500
    }
    const scrollFirst=(e)=>{
        reference.current.scrollLeft -=500
    }
    return (
        <div Overview="over-container">
            <Nav />
            <Sibebar />
            <div className="over-side">
                <Header title="Explore Quizee"
                    para={"Discover quizee across various categories and test your knowledge"}
                    img={"book4.png"} />
                <section className="over-cat">
                    <h3>Top Categories</h3>
                    <div className="over-cat-box" onWheel={handle_scroll} ref={reference}>

                       
                        {categories.slice(0, 9).map((item, index) => (
                            <CategoriesCard
                                key={index}
                                title={item.cat_name}
                                img={item.cat_img}
                                change_cat="true"
                            />
                        ))}
                         <img onClick={scrollLast} src="./next1.svg" id="cat-next" alt="" />
                         


                    </div>
                </section>
            </div>
        </div>
    )
}