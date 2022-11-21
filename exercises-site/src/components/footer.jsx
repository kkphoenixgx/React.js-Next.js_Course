import { useState } from "react";
import { useLocation } from "react-router-dom"
import "../Stylesheet/Footer.css"
import OtherPagesToCheck from "./otherPagesToCheck";

export const Footer = () => {

    let {isHomepage} = useState()
    isHomepage = false
    // const footer = document.querySelector(".footer")
    const location = useLocation();
    
    if(location.pathname === '/'){
        isHomepage = true
    }

    return (
        <div className="footer">
            <div className="custom-shape-divider-top-1668259735">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
            
            { isHomepage && <OtherPagesToCheck></OtherPagesToCheck>}

            <p>Site made by kkphoenix (Kauã Alves Santos) from Brasil to contain all exercises made in my <a href="https://www.udemy.com/share/104diw3@ClqDQeGumLPp8jsCMb6ec1FevBDloXfQCNDNZH_TYYpaOEjsDIArdF8wQt7n-rdy/">react course at udemy</a>. You can feedback or contact me in my <a href="kauaAlvesWorkplace@gmail.com">Email</a>, in my <a href="https://github.com/kkphoenixgx">github</a> or in <a href="https://www.linkedin.com/in/kau%C3%A3-alves-santos-873b85203/">linkedIn</a>. Please, take a look in my contents</p>
        </div>
    )
}