import { Link } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'
import './navbar.css'

function Navbar() {
  return (
    <div className="navbar">
      <div className="shopTitle">
        <h1>Vice Surf Shop</h1>
      </div>
      <div className="links">
        <Link to="/"> Shop </Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  )
}

export default Navbar
