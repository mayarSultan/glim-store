import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getProducts } from '../api'
import { useLocation } from 'react-router-dom'

const categories = ['all', 'bags', 'cardigans', 'accessories', 'home']

function Products() {
  const [products, setProducts] = useState([])
  const [active, setActive] = useState('all')
  const [loading, setLoading] = useState(true)

 const location = useLocation()
const searchParams = new URLSearchParams(location.search)
const searchQuery = searchParams.get('search') || ''
const categoryQuery = searchParams.get('category') || 'all'
const [searchInput, setSearchInput] = useState(searchQuery)

useEffect(() => {
  getProducts()
    .then(data => {
      if (Array.isArray(data)) {
        setProducts(data)
      } else {
        console.error('unexpected response:', data)
      }
      setLoading(false)
    })
    .catch(err => {
      console.error('fetch failed:', err)
      setLoading(false)
    })
}, [])

useEffect(() => {
  setSearchInput(searchQuery)
}, [searchQuery])

useEffect(() => {
  const cat = categoryQuery === 'home decor' ? 'home' : categoryQuery
  setActive(cat)
}, [categoryQuery])

  const filtered = products
  .filter(p => active === 'all' || p.category === active)
  .filter(p => p.name.toLowerCase().includes(searchInput.toLowerCase()) ||
               p.category.toLowerCase().includes(searchInput.toLowerCase()))

  if (loading) return (
    <div style={{ textAlign: 'center', padding: '80px', fontFamily: 'system-ui, sans-serif', color: '#9b8bb5' }}>
      <p style={{ fontSize: '48px' }}>🧶</p>
      <p>loading products...</p>
    </div>
  )

  return (
    <div style={{ background: '#fdf8f4', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>

      {/* Header */}
      <div style={{ background: '#ede8f7', padding: '32px 40px', borderBottom: '1px solid #ddd4f0' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 700, color: '#3d2c6e', margin: 0 }}>shop all</h1>
        <p style={{ color: '#7c6ea0', margin: '6px 0 0', fontSize: '14px' }}>handmade with love! </p>
      </div>

      {/* Filter tabs */}
      <div style={{ padding: '20px 40px', display: 'flex', gap: '8px', borderBottom: '1px solid #ede8f7' }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            style={{
              padding: '7px 18px',
              borderRadius: '20px',
              border: active === cat ? 'none' : '1px solid #ddd4f0',
              background: active === cat ? '#7c5cbf' : '#fff',
              color: active === cat ? '#fff' : '#6b5b8a',
              fontSize: '13px',
              fontWeight: 500,
              cursor: 'pointer',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

{/* Search bar */}
{searchInput && (
  <div style={{ padding: '12px 40px', background: '#f3eefb', borderBottom: '1px solid #ede8f7', display: 'flex', alignItems: 'center', gap: '10px' }}>
    <span style={{ fontSize: '13px', color: '#7c5cbf' }}>showing results for: <strong>"{searchInput}"</strong></span>
    <button onClick={() => setSearchInput('')} style={{ background: 'none', border: 'none', color: '#9b8bb5', cursor: 'pointer', fontSize: '12px' }}>clear ✕</button>
  </div>
)}

      {/* Product grid */}
      <div style={{ padding: '32px 40px' }}>
        <p style={{ fontSize: '13px', color: '#9b8bb5', marginBottom: '20px' }}>{filtered.length} products</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
          {filtered.map(p => (
            <Link to={`/products/${p._id}`} key={p._id} style={{ textDecoration: 'none' }}>
              <div style={{ background: '#fff', border: '1px solid #ede8f7', borderRadius: '16px', overflow: 'hidden', cursor: 'pointer' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = '#c9b8e8'}
                onMouseLeave={e => e.currentTarget.style.borderColor = '#ede8f7'}
              >
                <div style={{ height: '160px', background: p.bg, overflow: 'hidden' }}>
  {p.image ? (
    <img
      src={p.image}
      alt={p.name}
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
    />
  ) : (
    <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '52px' }}>
      {p.emoji}
    </div>
  )}
</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products