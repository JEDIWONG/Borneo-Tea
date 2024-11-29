import "../style/Header.css"

function Header(){

    return(
        <>
            <div className="header-container">
                <h1 className="header-title">Borneo Tea</h1>
                <ul>
                    <li>Home</li>
                    <li>Menu</li>
                    <li>Cart</li>
                    <li>More</li>
                </ul>
            </div>
        </>
    )
}

export default Header; 