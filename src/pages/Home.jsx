import { Link } from 'react-router-dom'

const categories = [
  { icon: '👜', label: 'bags' },
  { icon: '🧥', label: 'cardigans' },
  { icon: '🎀', label: 'accessories' },
  { icon: '🏠', label: 'home' },
]

const products = [
  { id: 1, name: 'market tote bag', price: 85, old: 110, emoji: '🧺', bg: '#ede8f7' },
  { id: 2, name: 'chunky cardigan', price: 220, emoji: '🧣', bg: '#f5ede3' },
  { id: 3, name: 'flower hair clip', price: 35, emoji: '🌸', bg: '#fbe8f0' },
  { id: 4, name: 'plant hanger', price: 60, old: 75, emoji: '🪴', bg: '#ede8f7' },
]

function Home() {
  return (
    <div style={{ background: '#fdf8f4', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>

      {/* Hero */}
      <div style={{ background: '#ede8f7', padding: '48px 24px', textAlign: 'center', borderBottom: '0.5px solid #ddd4f0' }}>
        <h1 style={{ fontSize: '36px', fontWeight: 600, color: '#3d2c6e', marginBottom: '10px' }}>
          handmade with love 🧶
        </h1>
        <p style={{ color: '#7c6ea0', marginBottom: '24px' }}>Cozy crochet pieces, crafted just for you</p>
        <Link to="/products">
          <button style={{ background: '#7c5cbf', color: '#fff', border: 'none', padding: '12px 28px', borderRadius: '24px', fontSize: '14px', cursor: 'pointer' }}>
            shop now →
          </button>
        </Link>
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginTop: '16px', flexWrap: 'wrap' }}>
          {['bags', 'cardigans', 'accessories', 'home decor'].map(tag => (
            <span key={tag} style={{ background: '#fff', border: '0.5px solid #c9b8e8', color: '#7c5cbf', borderRadius: '20px', padding: '4px 14px', fontSize: '12px' }}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div style={{ padding: '32px 24px 16px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 600, color: '#3d2c6e' }}>shop by category</h2>
        <p style={{ fontSize: '13px', color: '#9b8bb5', marginBottom: '20px' }}>find your next favourite piece</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
          {categories.map(cat => (
            <div key={cat.label} style={{ background: '#fff', border: '0.5px solid #e8e0f0', borderRadius: '10px', padding: '14px 8px', textAlign: 'center', cursor: 'pointer' }}>
              <div style={{ fontSize: '22px', marginBottom: '6px' }}>{cat.icon}</div>
              <div style={{ fontSize: '11px', color: '#6b5b8a', fontWeight: 500 }}>{cat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured products */}
      <div style={{ padding: '16px 24px 32px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 600, color: '#3d2c6e' }}>featured products</h2>
        <p style={{ fontSize: '13px', color: '#9b8bb5', marginBottom: '20px' }}>new arrivals this week</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '14px' }}>
          {products.map(p => (
            <Link to={`/products/${p.id}`} key={p.id} style={{ textDecoration: 'none' }}>
              <div style={{ background: '#fff', border: '0.5px solid #e8e0f0', borderRadius: '12px', overflow: 'hidden' }}>
                <div style={{ height: '110px', background: p.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '36px' }}>
                  {p.emoji}
                </div>
                <div style={{ padding: '10px 12px' }}>
                  <div style={{ fontSize: '13px', fontWeight: 500, color: '#3d2c6e', marginBottom: '4px' }}>{p.name}</div>
                  <div style={{ fontSize: '13px', color: '#7c5cbf', fontWeight: 600 }}>
                    SR {p.price}
                    {p.old && <span style={{ fontSize: '11px', color: '#b0a0c8', textDecoration: 'line-through', marginLeft: '4px' }}>SR {p.old}</span>}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{ background: '#ede8f7', borderTop: '0.5px solid #ddd4f0', padding: '20px 24px', textAlign: 'center', fontSize: '12px', color: '#9b8bb5' }}>
        © 2026 glim — handmade crochet store
      </div>
    </div>
  )
}

export default Home