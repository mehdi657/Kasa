import logo from "../assets/logo.png"

function Header() {
  return (
    <div className="ks-Header">
      <h1>
        <img src={logo} alt="Kasa" className="ks-logo" />
      </h1>
      <ul>
        <li><a href="#">Accueil</a></li>
        <li><a href="#">A Propos</a></li>
      </ul>
    </div>
  );
}

export default Header;
