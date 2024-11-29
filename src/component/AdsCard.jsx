import "../style/AdsCard.css"

function AdsCard(props){

    return(
        <>
            <div className="ads-card-container">
                <img src={props.imgUrl}></img>

                <div>

                    <h1>{props.title}</h1>
                    <p>{props.desc}</p>
                </div>
                
            </div>
        </>
    )
}

export default AdsCard; 