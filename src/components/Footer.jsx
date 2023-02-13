import logo from "../assets/logo blanc.png"

const Footer = () => {
    return (
        <div className="footer">
            <img src={logo} alt="Kasa" className="footer_logo" />
            <p className="footer_text">© 2020 Kasa. All rights reserved</p>
        </div>
    );
};

export default Footer;