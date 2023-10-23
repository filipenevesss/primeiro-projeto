import React from "react";
import './styles.css'
import Logo from '../../assets/batman-logo-wallpaper-batman-1479734230.jpg'


function Footer() {
    return (
        <>
            <footer>
                <img id="logo" src={Logo} />
                <p className="copyright">Desenvolvido por &copy; Filipe Neves</p>
            </footer>
        </>        
    )
}

export default Footer;