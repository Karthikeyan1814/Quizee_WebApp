
import "../Style/Header.css"
export default function Header({title,para,img}) {
  

    return (
        <>
            <header className="header-cont">
                <section>
                    <h1>{title}</h1>
                    <p>{para}</p>
                </section>
                <section>
                    <img src={img} id="book" alt="" />
                </section>
            </header>
        </>
    )
}