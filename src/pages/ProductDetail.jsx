import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getProduct, getProducts } from '../api'
import { useCart } from '../context/CartContext'
import { useFavourites } from '../context/FavouritesContext'

function ProductDetail() {
  const { id } = useParams()
  const { addToCart } = useCart()
  const [product, setProduct] = useState(null)
  const [related, setRelated] = useState([])
  const [loading, setLoading] = useState(true)
  const [added, setAdded] = useState(false)
  const { toggleFavourite, isFavourite } = useFavourites()

  useEffect(() => {
    getProduct(id).then(data => {
      setProduct(data)
      setLoading(false)
      getProducts().then(all => {
        setRelated(all.filter(p => p._id !== id && p.category === data.category).slice(0, 4))
      })
    })
  }, [id])

  function handleAddToCart() {
  addToCart({
    _id: product._id,
    name: product.name,
    price: product.price,
    emoji: product.emoji,
    bg: product.bg,
    image: product.image,
    quantity: 1
  })
  setAdded(true)
  setTimeout(() => setAdded(false), 2000)
}

  if (loading) return (
    <div style={{ textAlign: 'center', padding: '80px', fontFamily: 'system-ui, sans-serif', color: '#9b8bb5' }}>
      <p style={{ fontSize: '48px' }}>🧶</p>
      <p>loading product...</p>
    </div>
  )

  if (!product) return (
    <div style={{ textAlign: 'center', padding: '80px', fontFamily: 'system-ui, sans-serif' }}>
      <p style={{ fontSize: '48px' }}>🧶</p>
      <h2 style={{ color: '#3d2c6e' }}>product not found</h2>
      <Link to="/products" style={{ color: '#7c5cbf' }}>← back to shop</Link>
    </div>
  )

  return (
    <div style={{ background: '#fdf8f4', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>

      {/* Breadcrumb */}
      <div style={{ padding: '16px 40px', fontSize: '13px', color: '#9b8bb5' }}>
        <Link to="/" style={{ color: '#9b8bb5', textDecoration: 'none' }}>home</Link>
        {' → '}
        <Link to="/products" style={{ color: '#9b8bb5', textDecoration: 'none' }}>shop</Link>
        {' → '}
        <span style={{ color: '#3d2c6e' }}>{product.name}</span>
      </div>

      {/* Main content */}
      <div style={{ display: 'flex', gap: '48px', padding: '16px 40px 60px', flexWrap: 'wrap' }}>

        {/* Product image */}
        <div style={{ flex: '1', minWidth: '280px', maxWidth: '480px', borderRadius: '24px', overflow: 'hidden', minHeight: '380px' }}>
          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '24px' }}
            />
          ) : (
            <div style={{ background: product.bg, width: '100%', height: '380px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '120px', borderRadius: '24px' }}>
              {product.emoji}
            </div>
          )}
        </div>

        {/* Product info */}
        <div style={{ flex: '1', minWidth: '280px', paddingTop: '8px' }}>

          {/* Category */}
          <span style={{ fontSize: '12px', fontWeight: 600, color: '#7c5cbf', background: '#f3eefb', padding: '4px 12px', borderRadius: '20px', textTransform: 'capitalize' }}>
            {product.category}
          </span>

          {/* Name */}
          <h1 style={{ fontSize: '28px', fontWeight: 700, color: '#3d2c6e', margin: '16px 0 8px' }}>
            {product.name}
          </h1>

          {/* Price */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <span style={{ fontSize: '24px', fontWeight: 700, color: '#7c5cbf' }}>SR {product.price}</span>
            {product.oldPrice && (
              <span style={{ fontSize: '16px', color: '#b0a0c8', textDecoration: 'line-through' }}>SR {product.oldPrice}</span>
            )}
            {product.oldPrice && (
              <span style={{ fontSize: '12px', background: '#fbe8f0', color: '#c4607a', padding: '3px 10px', borderRadius: '20px', fontWeight: 600 }}>
                sale
              </span>
            )}
          </div>

          {/* Description */}
          <p style={{ fontSize: '15px', color: '#6b5b8a', lineHeight: '1.7', marginBottom: '32px' }}>
            {product.description}
          </p>

          {/* Divider */}
          <div style={{ borderTop: '1px solid #ede8f7', marginBottom: '28px' }}></div>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button
              onClick={handleAddToCart}
              style={{
                flex: 1, minWidth: '160px', padding: '14px 24px',
                background: added ? '#5a3f9e' : '#7c5cbf',
                color: '#fff', border: 'none', borderRadius: '24px',
                fontSize: '15px', fontWeight: 600, cursor: 'pointer',
                transition: 'background 0.2s'
              }}>
              {added ? '✅ added to cart!' : '🛒 add to cart'}
            </button>
            <button
  onClick={() => toggleFavourite(product)}
  style={{ padding: '14px 20px', background: isFavourite(product._id) ? '#fbe8f0' : '#fff', border: '1px solid #ddd4f0', borderRadius: '24px', fontSize: '18px', cursor: 'pointer' }}>
  {isFavourite(product._id) ? '❤️' : '🤍'}
</button>
          </div>

          {/* Handmade note */}
          <p style={{ fontSize: '12px', color: '#9b8bb5', marginTop: '16px' }}>
            ✨ each piece is handmade — slight variations make it unique
          </p>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <div style={{ padding: '0 40px 60px' }}>
          <div style={{ borderTop: '1px solid #ede8f7', paddingTop: '40px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#3d2c6e', marginBottom: '20px' }}>you might also like</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '16px' }}>
              {related.map(p => (
                <Link to={`/products/${p._id}`} key={p._id} style={{ textDecoration: 'none' }}>
                  <div style={{ background: '#fff', border: '1px solid #ede8f7', borderRadius: '12px', overflow: 'hidden' }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = '#c9b8e8'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = '#ede8f7'}
                  >
                    <div style={{ height: '100px', background: p.bg, overflow: 'hidden' }}>
                      {p.image ? (
                        <img src={p.image} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      ) : (
                        <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '36px' }}>
                          {p.emoji}
                        </div>
                      )}
                    </div>
                    <div style={{ padding: '10px 12px' }}>
                      <div style={{ fontSize: '13px', fontWeight: 600, color: '#3d2c6e' }}>{p.name}</div>
                      <div style={{ fontSize: '13px', color: '#7c5cbf', fontWeight: 700, marginTop: '4px' }}>SR {p.price}</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductDetail