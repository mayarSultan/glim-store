import { Link } from 'react-router-dom'
import { useFavourites } from '../context/FavouritesContext'
import { useCart } from '../context/CartContext'

function Favourites() {
  const { favourites, toggleFavourite } = useFavourites()
  const { addToCart } = useCart()

  if (favourites.length === 0) return (
    <div style={{ background: '#fdf8f4', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px', fontFamily: 'system-ui, sans-serif' }}>
      <p style={{ fontSize: '64px' }}>🤍</p>
      <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#3d2c6e' }}>no favourites yet</h2>
      <p style={{ color: '#9b8bb5', fontSize: '14px' }}>save items you love and find them here</p>
      <Link to="/products">
        <button style={{ marginTop: '8px', padding: '12px 28px', background: '#7c5cbf', color: '#fff', border: 'none', borderRadius: '24px', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}>
          browse products
        </button>
      </Link>
    </div>
  )

  return (
    <div style={{ background: '#fdf8f4', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>

      {/* Header */}
      <div style={{ background: '#ede8f7', padding: '32px 40px', borderBottom: '1px solid #ddd4f0' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 700, color: '#3d2c6e', margin: 0 }}>favourites 🤍</h1>
        <p style={{ color: '#7c6ea0', margin: '6px 0 0', fontSize: '14px' }}>{favourites.length} saved {favourites.length === 1 ? 'item' : 'items'}</p>
      </div>

      {/* Grid */}
      <div style={{ padding: '32px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
          {favourites.map(p => (
            <div key={p._id} style={{ background: '#fff', border: '1px solid #ede8f7', borderRadius: '16px', overflow: 'hidden' }}>

              {/* Image */}
              <Link to={`/products/${p._id}`} style={{ textDecoration: 'none' }}>
                <div style={{ height: '160px', background: p.bg, overflow: 'hidden', position: 'relative' }}>
                  {p.image ? (
                    <img src={p.image} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '52px' }}>
                      {p.emoji}
                    </div>
                  )}
                </div>
              </Link>

              {/* Info */}
              <div style={{ padding: '14px 16px' }}>
                <div style={{ fontSize: '13px', color: '#9b8bb5', marginBottom: '4px', textTransform: 'capitalize' }}>{p.category}</div>
                <div style={{ fontSize: '15px', fontWeight: 600, color: '#3d2c6e', marginBottom: '8px' }}>{p.name}</div>
                <div style={{ fontSize: '15px', fontWeight: 700, color: '#7c5cbf', marginBottom: '12px' }}>SR {p.price}</div>

                {/* Buttons */}
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button
                    onClick={() => addToCart({ _id: p._id, name: p.name, price: p.price, emoji: p.emoji, bg: p.bg, image: p.image, quantity: 1 })}
                    style={{ flex: 1, padding: '8px', background: '#7c5cbf', color: '#fff', border: 'none', borderRadius: '20px', fontSize: '12px', fontWeight: 600, cursor: 'pointer' }}>
                    add to cart
                  </button>
                  <button
                    onClick={() => toggleFavourite(p)}
                    style={{ padding: '8px 12px', background: '#fbe8f0', border: 'none', borderRadius: '20px', fontSize: '14px', cursor: 'pointer' }}>
                    🗑️
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Favourites