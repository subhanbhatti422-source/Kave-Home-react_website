import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { Search, User, Bookmark, ShoppingBag, ChevronDown, Menu, X } from 'lucide-react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
    <section className='navbar'>

    
      <section className="promo-bar">
        <p className="promo-text">
          <strong>€100 off a selection*</strong> | DEAL100 <a href="#">Discover</a>
        </p>
        <div className="promo-links">
          <Link to="/">Newsletter</Link>
          <Link to="/about">About us</Link>
          <Link to="/stores">Stores</Link>
          <Link to="/shop">Shop</Link>
          <span className="divider">|</span>
          <button className="lang-select">
            English <ChevronDown size={14} />
          </button>
        </div>
      </section>

      <section className="header">
        <button
          className="icon-btn menu-toggle"
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={22} />
        </button>

        <div className="logo">
          <Link to="/">Kave Home</Link>
        </div>

        <nav className="main-nav">
          <a href="#" className="active">Seasonal Deal</a>
          <a href="#">New arrivals</a>
          <a href="#">Products</a>
          <a href="#">Rooms</a>
          <a href="#">Inspiration</a>
          <a href="#">Professionals</a>
        </nav>

        <div className="header-actions">
          <div className="search-box">
            <Search size={18} className="search-icon" />
            <input type="text" placeholder="Search" />
          </div>
          <button className="icon-btn"><User size={20} /></button>
          <button className="icon-btn"><Bookmark size={20} /></button>
          <button className="icon-btn"><ShoppingBag size={20} /></button>
        </div>
      </section>
      </section>

      {/* Mobile drawer */}
      <div className={`mobile-menu ${menuOpen ? 'is-open' : ''}`}>
        <div className="mobile-menu__header">
          <span className="logo-text">Kave Home</span>
          <button className="icon-btn" aria-label="Close menu" onClick={() => setMenuOpen(false)}>
            <X size={22} />
          </button>
        </div>
        <nav className="mobile-menu__nav">
          <Link to="/" onClick={() => setMenuOpen(false)}>Seasonal Deal</Link>
          <Link to="/" onClick={() => setMenuOpen(false)}>New arrivals</Link>
          <Link to="/shop" onClick={() => setMenuOpen(false)}>Products</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About us</Link>
          <Link to="/stores" onClick={() => setMenuOpen(false)}>Stores</Link>
          <Link to="/shop" onClick={() => setMenuOpen(false)}>Shop</Link>
        </nav>
        <div className="mobile-menu__actions">
          <button className="icon-btn"><User size={20} /> Account</button>
          <button className="icon-btn"><Bookmark size={20} /> Wishlist</button>
        </div>
      </div>
      {menuOpen && <div className="mobile-menu__overlay" onClick={() => setMenuOpen(false)} />}
    </>
  )
}

export default Navbar