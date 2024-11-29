import AdsCard from "../component/AdsCard"
import "../style/home.css"
import exp from "../assets/react.svg"

function Home(){
    return(
        <>
            <div className="home-container">
                <AdsCard 
                    title="Uji Tea Series"
                    desc="Kong Min Huey is Beauty"
                    imgUrl={exp}
                />
                
            </div>
        </>
    )
}

export default Home;