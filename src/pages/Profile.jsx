import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { getMyOrders } from '../api'

function Profile() {
  const { user, token, logout } = useAuth()
  const navigate = useNavigate()
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('info')

  useEffect(() => {
    if (!user) {
      navigate('/login')
      return
    }
    getMyOrders(token).then(data => {
      setOrders(Array.isArray(data) ? data : [])
      setLoading(false)
    })
  }, [user])

  if (!user) return null

  const statusColor = {
    pending: { bg: '#fff8e1', color: '#f59e0b' },
    processing: { bg: '#e8f5e9', color: '#22c55e' },
    shipped: { bg: '#e8f0fe', color: '#3b82f6' },
    delivered: { bg: '#f3eefb', color: '#7c5cbf' },
  }

  return (
    <div style={{ background: '#fdf8f4', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>

      {/* Header */}
      <div style={{ background: '#ede8f7', padding: '32px 40px', borderBottom: '1px solid #ddd4f0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#7c5cbf', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '22px', fontWeight: 700 }}>
            {user.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <h1 style={{ fontSize: '24px', fontWeight: 700, color: '#3d2c6e', margin: 0 }}>{user.name}</h1>
            <p style={{ color: '#7c6ea0', margin: '4px 0 0', fontSize: '14px' }}>{user.email}</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ padding: '0 40px', borderBottom: '1px solid #ede8f7', display: 'flex', gap: '4px', background: '#fff' }}>
        {['info', 'orders'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: '14px 20px', border: 'none', background: 'transparent',
              cursor: 'pointer', fontSize: '14px', fontWeight: 500,
              color: activeTab === tab ? '#7c5cbf' : '#9b8bb5',
              borderBottom: activeTab === tab ? '2px solid #7c5cbf' : '2px solid transparent',
            }}
          >
            {tab === 'info' ? '👤 account info' : `📦 my orders (${orders.length})`}
          </button>
        ))}
      </div>

      <div style={{ padding: '32px 40px' }}>

        {/* Account info tab */}
        {activeTab === 'info' && (
          <div style={{ maxWidth: '480px' }}>
            <div style={{ background: '#fff', border: '1px solid #ede8f7', borderRadius: '16px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>

              {[
                { label: 'full name', value: user.name, icon: '👤' },
                { label: 'email address', value: user.email, icon: '📧' },
              ].map(field => (
                <div key={field.label} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '12px', background: '#fdf8f4', borderRadius: '12px' }}>
                  <span style={{ fontSize: '20px' }}>{field.icon}</span>
                  <div>
                    <div style={{ fontSize: '11px', color: '#9b8bb5', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>{field.label}</div>
                    <div style={{ fontSize: '15px', color: '#3d2c6e', fontWeight: 500, marginTop: '2px' }}>{field.value}</div>
                  </div>
                </div>
              ))}

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '12px', background: '#fdf8f4', borderRadius: '12px' }}>
                <span style={{ fontSize: '20px' }}>📦</span>
                <div>
                  <div style={{ fontSize: '11px', color: '#9b8bb5', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>total orders</div>
                  <div style={{ fontSize: '15px', color: '#3d2c6e', fontWeight: 500, marginTop: '2px' }}>{orders.length} {orders.length === 1 ? 'order' : 'orders'}</div>
                </div>
              </div>

              <button
                onClick={() => { logout(); navigate('/') }}
                style={{ marginTop: '8px', padding: '12px', background: '#fbe8f0', color: '#c4607a', border: 'none', borderRadius: '24px', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}
              >
                logout
              </button>
            </div>
          </div>
        )}

        {/* Orders tab */}
        {activeTab === 'orders' && (
          <div style={{ maxWidth: '680px' }}>
            {loading ? (
              <p style={{ color: '#9b8bb5' }}>loading orders...</p>
            ) : orders.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '60px', background: '#fff', borderRadius: '16px', border: '1px solid #ede8f7' }}>
                <p style={{ fontSize: '48px' }}>📦</p>
                <h2 style={{ color: '#3d2c6e', fontSize: '18px' }}>no orders yet</h2>
                <p style={{ color: '#9b8bb5', fontSize: '14px' }}>your orders will appear here after checkout</p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {orders.map(order => (
                  <div key={order._id} style={{ background: '#fff', border: '1px solid #ede8f7', borderRadius: '16px', padding: '20px' }}>

                    {/* Order header */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                      <div>
                        <div style={{ fontSize: '13px', color: '#9b8bb5' }}>order #{order._id.slice(-6).toUpperCase()}</div>
                        <div style={{ fontSize: '12px', color: '#b0a0c8', marginTop: '2px' }}>
                          {new Date(order.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                        </div>
                      </div>
                      <span style={{
                        fontSize: '11px', fontWeight: 600, padding: '4px 12px', borderRadius: '20px',
                        background: statusColor[order.status]?.bg || '#f3f4f6',
                        color: statusColor[order.status]?.color || '#6b7280',
                        textTransform: 'capitalize'
                      }}>
                        {order.status}
                      </span>
                    </div>

                    {/* Order items */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                      {order.items.map((item, i) => (
                        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: '#6b5b8a' }}>
                          <span>{item.emoji} {item.name} × {item.quantity}</span>
                          <span>SR {item.price * item.quantity}</span>
                        </div>
                      ))}
                    </div>

                    {/* Order total */}
                    <div style={{ borderTop: '1px solid #ede8f7', paddingTop: '12px', display: 'flex', justifyContent: 'space-between', fontWeight: 700, color: '#3d2c6e', fontSize: '14px' }}>
                      <span>total</span>
                      <span>SR {order.totalPrice}</span>
                    </div>

                    {/* Shipping info */}
                    <div style={{ marginTop: '12px', padding: '10px 14px', background: '#fdf8f4', borderRadius: '10px', fontSize: '12px', color: '#9b8bb5' }}>
                      📍 {order.shipping.address}, {order.shipping.city} · 📞 {order.shipping.phone}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Profile