import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'
import { useFavourites } from '../context/FavouritesContext'

function Navbar() {
  const { totalItems } = useCart()
  const { user, logout } = useAuth()
  const { favourites } = useFavourites()
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()

  function handleSearch(e) {
    if (e.key === 'Enter' && searchQuery.trim()) {
      navigate(`/products?search=${searchQuery.trim()}`)
      setSearchOpen(false)
      setSearchQuery('')
    }
  }

  return (
    <nav style={{
      background: '#ede8f7',
      borderBottom: '1px solid #ddd4f0',
      padding: '0 40px',
      height: '64px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontFamily: 'system-ui, sans-serif',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>

      {/* Logo */}
      <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
        <img src="/logo.svg" alt="Glim" style={{ height: '36px' }} />
      </Link>

      {/* Search bar — expands when open */}
      {searchOpen ? (
        <div style={{ flex: 1, margin: '0 24px', display: 'flex', alignItems: 'center', background: '#fff', borderRadius: '24px', padding: '8px 16px', border: '1px solid #c9b8e8' }}>
          <span style={{ marginRight: '8px', fontSize: '16px' }}>🔍</span>
          <input
            autoFocus
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            onKeyDown={handleSearch}
            placeholder="search for crochet products..."
            style={{ border: 'none', outline: 'none', fontSize: '14px', color: '#3d2c6e', background: 'transparent', width: '100%' }}
          />
          <button onClick={() => { setSearchOpen(false); setSearchQuery('') }}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9b8bb5', fontSize: '18px', padding: '0 4px' }}>
            ✕
          </button>
        </div>
      ) : (
        /* Nav links */
        <div style={{ display: 'flex', gap: '6px' }}>
          {[
            { label: 'shop', to: '/products' },
            { label: 'about', to: '/about' },
            { label: 'custom orders', to: '/contact' },
            { label: 'contact', to: '/contact-us' },
          ].map(link => (
            <Link
              key={link.label}
              to={link.to}
              style={{ color: '#3d2c6e', textDecoration: 'none', fontSize: '14px', fontWeight: 500, padding: '7px 16px', borderRadius: '20px' }}
              onMouseEnter={e => e.target.style.background = '#d9cff0'}
              onMouseLeave={e => e.target.style.background = 'transparent'}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      {/* Icons */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>

        {/* Search icon */}
        <button
          aria-label="search"
          onClick={() => setSearchOpen(!searchOpen)}
          style={{ width: '38px', height: '38px', borderRadius: '50%', border: 'none', background: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}
          onMouseEnter={e => e.currentTarget.style.background = '#d9cff0'}
          onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
        >
          🔍
        </button>

        {/* Favourites */}
        <Link to="/favourites" style={{ textDecoration: 'none', position: 'relative' }}>
          <button aria-label="wishlist" style={{ width: '38px', height: '38px', borderRadius: '50%', border: 'none', background: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}
            onMouseEnter={e => e.currentTarget.style.background = '#d9cff0'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            🤍
          </button>
          {favourites.length > 0 && (
            <span style={{ position: 'absolute', top: '2px', right: '2px', width: '16px', height: '16px', borderRadius: '50%', background: '#c4607a', color: '#fff', fontSize: '10px', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {favourites.length}
            </span>
          )}
        </Link>

        {/* Divider */}
        <div style={{ width: '1px', height: '24px', background: '#c9b8e8', margin: '0 4px' }}></div>

        {/* Cart */}
        <Link to="/cart" style={{ textDecoration: 'none', position: 'relative' }}>
          <button aria-label="cart" style={{ width: '38px', height: '38px', borderRadius: '50%', border: 'none', background: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}
            onMouseEnter={e => e.currentTarget.style.background = '#d9cff0'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            🛒
          </button>
          {totalItems > 0 && (
            <span style={{ position: 'absolute', top: '2px', right: '2px', width: '16px', height: '16px', borderRadius: '50%', background: '#7c5cbf', color: '#fff', fontSize: '10px', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {totalItems}
            </span>
          )}
        </Link>

        {/* Divider */}
        <div style={{ width: '1px', height: '24px', background: '#c9b8e8', margin: '0 4px' }}></div>

        {/* User */}
        {user ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Link to="/profile" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#7c5cbf', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '13px', fontWeight: 700 }}>
                {user.name.charAt(0).toUpperCase()}
              </div>
              <span style={{ fontSize: '13px', color: '#3d2c6e', fontWeight: 500 }}>hi, {user.name.split(' ')[0]}</span>
            </Link>
            <button onClick={logout} style={{ fontSize: '12px', color: '#9b8bb5', background: 'none', border: 'none', cursor: 'pointer' }}>logout</button>
          </div>
        ) : (
          <Link to="/login" style={{ fontSize: '13px', color: '#3d2c6e', fontWeight: 500, textDecoration: 'none', padding: '7px 16px', borderRadius: '20px', background: '#fff' }}>
            sign in
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Navbar