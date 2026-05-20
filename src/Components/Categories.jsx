import Nav from "./Nav";
import { useState } from "react";

import "../Style/Categories.css"
export default function Categories(){
    const [categories,setCategories]=useState([
    
       {
        cat_number: 0,
        cat_name: "Technical",
        cat_img: "./logos/tech.png",
        cat_about: "Explore the latest in tech, gadgets and innovations."
    },

    {
        cat_number: 1,
        cat_name: "Programming",
        cat_img: "./logos/code.png",
        cat_about: "Test your coding knowledge and problem solving skills."
    },

    {
        cat_number: 2,
        cat_name: "Aptitude",
        cat_img: "./logos/appti.png",
        cat_about: "Improve your logical reasoning and quantitative skills."
    },

    {
        cat_number: 3,
        cat_name: "Science",
        cat_img: "./logos/science.png",
        cat_about: "Explore the world of Physics, Chemistry and Biology."
    },

    {
        cat_number: 4,
        cat_name: "General Knowledge",
        cat_img: "./logos/gendral.png",
        cat_about: "Boost your knowledge about the world around you."
    },

    {
        cat_number: 5,
        cat_name: "History",
        cat_img: "./logos/history.png",
        cat_about: "Learn about important events and historical figures."
    },

    {
        cat_number: 6,
        cat_name: "Sports",
        cat_img: "./logos/sport.png",
        cat_about: "From cricket to football, test your sports knowledge."
    },

    {
        cat_number: 7,
        cat_name: "Entertainment",
        cat_img: "./logos/entertainment.png",
        cat_about: "Movies, TV shows, celebrities and pop culture quizzes."
    },

    {
        cat_number: 8,
        cat_name: "English",
        cat_img: "./logos/book.png",
        cat_about: "Improve your grammar, vocabulary and language."
    },

    {
        cat_number: 9,
        cat_name: "Current Affairs",
        cat_img: "./logos/current.png",
        cat_about: "Stay updated with the latest news and current events."
    }

    ])
    return(
        <div>
            <Nav />
            <header className="cat-header">
                <section>
                    <h1>Explore Categories</h1>
                    <p>Explore quizee by topics you love .  choose a category and start learning with fun and intractive quizee !!!</p>
                </section>
                <section>
                    <img src="book4.png" id="book" alt="" />
                </section>
            </header>
            <div className="cat-container">
                {categories.map((item,index)=>(
                    <>
                    <div key={index} className="cat-card">
                        <img src={item.cat_img} alt="No image Found" />
                        <h3 style={{padding:"10px"}}>{item.cat_name}</h3>
                        <p>{item.cat_about}</p>
                        <button className="cat-btn">Explore &gt;</button></div>
                    </>
                ))}
                <div className="cat-card">
                    <img style={{height:"120px",width:"120px",backgroundColor:"none !important"}} src="./logos/loading.svg" alt="" />
                    <h3 style={{textAlign:"center"}}>New Categories is Update Soon</h3>
                </div>
            </div>
        </div>
    )
}