import "../Style/Home.css"
import Nav from "../Components/Nav"
export default function Home() {
    return (

        <div className="home-container">

          <Nav />
            <header>
                <section>
                    <h1>Challenge Your Mind.</h1>
                    <h1> <span style={{ color: "blue" }}>Level up </span>Your Knowledge.</h1>
                    <p>Practice quizzes, improve your skills, and compete with yourself every day .</p>
                    <p>Explore multiple categories, track your progress, earn achievements, and become better one quiz at a time.</p>
                    <div className="btn-box">
                        <button className="explore"> Start Practicing Now <img id="next" src="next.svg" alt="" /></button>
                        <button className="explore">Explore Quizee!!</button>
                    </div>
                </section>
                <img src="side_book.png" alt="" id="book-img" />
            </header>
            <section className="why">
                <h1 style={{ textAlign: "center", marginTop: "50px" }}>Why Choose <span style={{ color: "blue" }}>Quizee </span> !!!</h1>
                <div className="cards-container">
                    <div className="cards"><img src="book.png" alt="" />
                        <h1>Learning</h1>
                        <p>Discover quizzes from programming, science, history, aptitude, current affairs, and more.</p>
                    </div>
                    <div className="cards"><img src="focus.png" alt="" />
                        <h1>Practice Smarter</h1>
                        <p>Improve your accuracy and speed with interactive practice sessions.</p>
                    </div>
                    <div className="cards"><img src="progress.png" alt="" /><h1>Track Progress</h1><p>
                        Monitor your scores, streaks, and performance improvements in your dashboard.</p>
                    </div>
                    <div className="cards"><img src="cup.png" alt="" />
                        <h1>Earn Achievements</h1><p>
                            Unlock badges, maintain streaks, and challenge yourself daily.</p>
                    </div>
                </div>
            </section>
            <section className="how">
                        <h1 style={{ textAlign: "center", marginTop: "50px" }}>How It <span style={{ color: "blue" }}> Works</span> ???</h1>
                        <div className="cards-container how-container">
                            <hr />
                            <div className="cards howcards">
                                <img src="contact.svg" alt="" />
                                <h1>Create Account</h1>
                                <p>Sign up and create your personal learning profile.</p>
                            </div>
                            <div className="cards howcards">
                                <img src="navigation.svg" alt="" />
                                <h1>Explore Quizee</h1>
                                <p>Pick topics that match your interests or academic goals.</p>
                            </div>
                            <div className="cards howcards">
                                <img src="question.svg" alt="" />
                                <h1>Take Quizee</h1>
                                <p>Answer questions, test your knowledge, and improve your confidence.</p>
                            </div>
                            <div className="cards howcards">
                                <img src="result.svg" alt="" />
                                <h1>Analyze Results</h1>
                                <p>View detailed scores and track your learning journey.</p>
                            </div>
                        </div>
            </section>
            <section className="ready-container">
                <div>
                    <h1>Ready to Test Your Skills?</h1>
                    <p>Join Quizee today and make learning more engaging, interactive, and exciting.</p>
                </div>
                <div className="btn-box ready-box">
                    <button className="explore">Get Started Now</button>
                    <img src="cup.png" alt="" />
                </div>
            </section>

        </div>

    )
}