import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

function Header() {
  return (
    <div className="ks">
      <h1 className="ks_titre">
        <img src={logo} alt="Kasa" className="ks-logo" />
      </h1>
      <ul className="ks_ul">
        <Link to="/">
          <li className="ks_li">Accueil</li>
        </Link>
        <Link to="/APropos">
          <li className="ks_li">A Propos</li>
        </Link>
      </ul>
    </div>
  )
}

export default Header
