import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'
import { createOrder } from '../api'

function Checkout() {
  const { cartItems, totalPrice, clearCart } = useCart()
  const { user, token } = useAuth()
  const navigate = useNavigate()

  const [form, setForm] = useState({ name: user?.name || '', address: '', city: '', phone: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit() {
    if (!user) {
      navigate('/login')
      return
    }
    if (!form.name || !form.address || !form.city || !form.phone) {
      setError('please fill in all fields')
      return
    }
    if (cartItems.length === 0) {
      setError('your cart is empty')
      return
    }

    setLoading(true)
    setError('')

    const orderData = {
      items: cartItems.map(item => ({
        product: item._id,
        name: item.name,
        emoji: item.emoji,
        price: item.price,
        quantity: item.quantity,
      })),
      totalPrice,
      shipping: form,
    }

    const data = await createOrder(orderData, token)
    setLoading(false)

    if (data._id) {
      clearCart()
      navigate(`/confirmation/${data._id}`)
    } else {
      setError(data.message || 'something went wrong')
    }
  }

  const inputStyle = {
    width: '100%', padding: '12px 16px', borderRadius: '12px',
    border: '1px solid #ede8f7', fontSize: '14px', color: '#3d2c6e',
    background: '#fdf8f4', outline: 'none', boxSizing: 'border-box'
  }

  if (cartItems.length === 0) return (
    <div style={{ textAlign: 'center', padding: '80px', fontFamily: 'system-ui, sans-serif' }}>
      <p style={{ fontSize: '48px' }}>🧺</p>
      <h2 style={{ color: '#3d2c6e' }}>your cart is empty</h2>
      <Link to="/products" style={{ color: '#7c5cbf' }}>go shopping first</Link>
    </div>
  )

  return (
    <div style={{ background: '#fdf8f4', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>

      {/* Header */}
      <div style={{ background: '#ede8f7', padding: '32px 40px', borderBottom: '1px solid #ddd4f0' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 700, color: '#3d2c6e', margin: 0 }}>checkout</h1>
        <p style={{ color: '#7c6ea0', margin: '6px 0 0', fontSize: '14px' }}>almost there! </p>
      </div>

      <div style={{ display: 'flex', gap: '32px', padding: '32px 40px', flexWrap: 'wrap', alignItems: 'flex-start' }}>

        {/* Shipping form */}
        <div style={{ flex: 2, minWidth: '300px', background: '#fff', border: '1px solid #ede8f7', borderRadius: '16px', padding: '28px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#3d2c6e', marginBottom: '24px' }}>shipping details</h2>

          {error && (
            <div style={{ background: '#fbe8f0', color: '#c4607a', padding: '12px 16px', borderRadius: '12px', fontSize: '13px', marginBottom: '16px' }}>
              {error}
            </div>
          )}

          {!user && (
            <div style={{ background: '#f3eefb', color: '#7c5cbf', padding: '12px 16px', borderRadius: '12px', fontSize: '13px', marginBottom: '16px' }}>
              please <Link to="/login" style={{ color: '#7c5cbf', fontWeight: 600 }}>sign in</Link> to place an order
            </div>
          )}

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ fontSize: '13px', fontWeight: 600, color: '#6b5b8a', display: 'block', marginBottom: '8px' }}>full name</label>
              <input name="name" value={form.name} onChange={handleChange} placeholder="your name" style={inputStyle} />
            </div>
            <div>
              <label style={{ fontSize: '13px', fontWeight: 600, color: '#6b5b8a', display: 'block', marginBottom: '8px' }}>address</label>
              <input name="address" value={form.address} onChange={handleChange} placeholder="street, building, floor" style={inputStyle} />
            </div>
            <div>
              <label style={{ fontSize: '13px', fontWeight: 600, color: '#6b5b8a', display: 'block', marginBottom: '8px' }}>city</label>
              <input name="city" value={form.city} onChange={handleChange} placeholder="your city" style={inputStyle} />
            </div>
            <div>
              <label style={{ fontSize: '13px', fontWeight: 600, color: '#6b5b8a', display: 'block', marginBottom: '8px' }}>phone number</label>
              <input name="phone" value={form.phone} onChange={handleChange} placeholder="05xxxxxxxx" style={inputStyle} />
            </div>
          </div>
        </div>

        {/* Order summary */}
        <div style={{ flex: 1, minWidth: '260px', background: '#fff', border: '1px solid #ede8f7', borderRadius: '16px', padding: '24px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#3d2c6e', marginBottom: '20px' }}>order summary</h2>

          {cartItems.map(item => (
            <div key={item._id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: '#6b5b8a', marginBottom: '10px' }}>
              <span>{item.emoji} {item.name} × {item.quantity}</span>
              <span>SR {item.price * item.quantity}</span>
            </div>
          ))}

          <div style={{ borderTop: '1px solid #ede8f7', paddingTop: '16px', marginTop: '8px', display: 'flex', justifyContent: 'space-between', fontSize: '16px', fontWeight: 700, color: '#3d2c6e', marginBottom: '20px' }}>
            <span>total</span>
            <span>SR {totalPrice}</span>
          </div>

          <button onClick={handleSubmit} disabled={loading || !user} style={{ width: '100%', padding: '14px', background: user ? '#7c5cbf' : '#c9b8e8', color: '#fff', border: 'none', borderRadius: '24px', fontSize: '15px', fontWeight: 600, cursor: user ? 'pointer' : 'not-allowed' }}>
            {loading ? 'placing order...' : 'place order '}
          </button>

          <Link to="/cart" style={{ display: 'block', textAlign: 'center', marginTop: '12px', fontSize: '13px', color: '#9b8bb5', textDecoration: 'none' }}>
            ← back to cart
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Checkout