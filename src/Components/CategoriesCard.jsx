
import "../Style/Categories.css"

export default function CategoriesCard({
    img,
    title,
    para,
    isshown,
    change_cat
}) {

    return (

        <div className={change_cat ==="true"?"hori-card":"cat-card"}>

            <img src={img} alt="No image Found" />

            <h3>{title}</h3>

            <p>{para}</p>

            {
                isshown === "true" &&
                <button className="cat-btn">
                    Explore &gt;
                </button>
            }

        </div>

    )

}