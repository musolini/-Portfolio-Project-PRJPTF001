import React from "react";
import Typed from "react-typed";

function Header() {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Website Design and Website Development</h1>
                <Typed
                className="typed-text"
                strings={["Website Design", "Website Development", "Website Hosting", "Unindexed Skills"]}
                typeSpeed={35}
                backSpeed={75}
                loop
                />
                <a href="#" className="btn-main-offer">TALK TO ME</a>
            </div>
        </div>
    )
}

export default Header
