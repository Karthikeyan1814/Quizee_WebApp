import "../Style/Sidebar.css"
export default function Sibebar() {
    return (
        <div className="sidebar-container">
            <section className="side-card">
                <button><img src="./logo_pack2/house.svg" alt="" /> OverView </button>
            </section>
            <p>Browse</p>
            <section className="side-card">
                <button> <img src="./logo_pack2/all_quizee.svg" alt="" /> All Quizee</button>
                <button> <img src="./logo_pack2/folder.svg" alt="" /> Categories</button>
                <button> <img src="./logo_pack2/star.svg" alt="" /> Top Rated</button>
                <button> <img src="./logo_pack2/trending.svg" alt="" /> Trending</button>
            </section>
            <p>Your stuffs</p>
            <section className="side-card">
                <button><img src="./logo_pack2/bookmark.svg" alt="" /> BookMark</button>
                <button><img src="./logo_pack2/clock-4.svg" alt="" />Recent</button>
            </section>

        </div>
    )
}