import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Confirmation() {
  const { id } = useParams()
  const { token } = useAuth()
  const [order, setOrder] = useState(null)

  useEffect(() => {
    fetch(`http://localhost:5000/api/orders/${id}`, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => setOrder(data))
  }, [id])

  return (
    <div style={{ background: '#fdf8f4', minHeight: '100vh', fontFamily: 'system-ui, sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ background: '#fff', border: '1px solid #ede8f7', borderRadius: '20px', padding: '48px 40px', textAlign: 'center', maxWidth: '480px', width: '100%' }}>

        <div style={{ fontSize: '56px', marginBottom: '16px' }}></div>
        <h1 style={{ fontSize: '24px', fontWeight: 700, color: '#3d2c6e', marginBottom: '8px' }}>order placed!</h1>
        <p style={{ color: '#9b8bb5', fontSize: '14px', marginBottom: '24px' }}>thank you for shopping with glim 🧶</p>

        {order && (
          <div style={{ background: '#fdf8f4', borderRadius: '12px', padding: '20px', marginBottom: '24px', textAlign: 'left' }}>
            <div style={{ fontSize: '12px', color: '#9b8bb5', marginBottom: '12px' }}>order #{order._id?.slice(-6).toUpperCase()}</div>
            {order.items?.map((item, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: '#6b5b8a', marginBottom: '8px' }}>
                <span>{item.emoji} {item.name} × {item.quantity}</span>
                <span>SR {item.price * item.quantity}</span>
              </div>
            ))}
            <div style={{ borderTop: '1px solid #ede8f7', paddingTop: '12px', marginTop: '8px', display: 'flex', justifyContent: 'space-between', fontWeight: 700, color: '#3d2c6e', fontSize: '14px' }}>
              <span>total</span>
              <span>SR {order.totalPrice}</span>
            </div>
          </div>
        )}

        <Link to="/products">
          <button style={{ padding: '12px 28px', background: '#7c5cbf', color: '#fff', border: 'none', borderRadius: '24px', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}>
            continue shopping
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Confirmation