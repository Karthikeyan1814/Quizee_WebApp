import "../Style/Login.css"

export default function AuthLayout({headname,imgsrc,children,activate}){
    return(
        <div className="Login-container">
            <section>
                <img src={imgsrc} alt="" id="log-img" className={activate==="true"? "activate-img":""} />
                <img src="Quizee_logo.png" alt="" />
            </section>
            <section className="log-data-container">
                <h1 style={{marginBottom:"30px"}}>{headname}</h1>
                {children}
            </section>
        </div>
    )
}