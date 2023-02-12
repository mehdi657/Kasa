import logo from "../assets/logo.png"

function Header() {
  return (
    <div className="ks-Header">
      <h1>
        <img src={logo} alt="Kasa" className="ks-logo" />
      </h1>
      <nav className="ks-nav">
        <ul>
          <li>Accueil</li>
          <li>A Propos</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
