import { Link } from "react-router-dom";
import logo from "../assets/logo.png"

function Header() {
  return (
    <div className="ks-Header">
      <h1>
        <img src={logo} alt="Kasa" className="ks-logo" />
      </h1>
      <ul>
        <Link to="/"><li>Accueil</li></Link>
        <Link to="/APropos"><li>A Propos</li></Link>
      </ul>
    </div>
  );
}

export default Header;
