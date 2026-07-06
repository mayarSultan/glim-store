import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, totalItems, totalPrice } = useCart()

  if (cartItems.length === 0) return (
    <div style={{ background: '#fdf8f4', minHeight: '100vh', fontFamily: 'system-ui, sans-serif', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
      <p style={{ fontSize: '64px' }}>🧺</p>
      <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#3d2c6e' }}>your cart is empty</h2>
      <p style={{ color: '#9b8bb5', fontSize: '14px' }}>looks like you haven't added anything yet</p>
      <Link to="/products">
        <button style={{ marginTop: '8px', padding: '12px 28px', background: '#7c5cbf', color: '#fff', border: 'none', borderRadius: '24px', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}>
          start shopping
        </button>
      </Link>
    </div>
  )

  return (
    <div style={{ background: '#fdf8f4', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>

      {/* Header */}
      <div style={{ background: '#ede8f7', padding: '32px 40px', borderBottom: '1px solid #ddd4f0' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 700, color: '#3d2c6e', margin: 0 }}>your cart</h1>
        <p style={{ color: '#7c6ea0', margin: '6px 0 0', fontSize: '14px' }}>{totalItems} {totalItems === 1 ? 'item' : 'items'}</p>
      </div>

      <div style={{ display: 'flex', gap: '32px', padding: '32px 40px', flexWrap: 'wrap', alignItems: 'flex-start' }}>

        {/* Cart items */}
        <div style={{ flex: 2, minWidth: '300px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {cartItems.map(item => (
            <div key={item.id} style={{ background: '#fff', border: '1px solid #ede8f7', borderRadius: '16px', padding: '16px', display: 'flex', gap: '16px', alignItems: 'center' }}>

              {/*  image */}
              <div style={{ width: '80px', height: '80px', borderRadius: '12px', overflow: 'hidden', flexShrink: 0 }}>
  {item.image ? (
    <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
  ) : (
    <div style={{ width: '100%', height: '100%', background: item.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '36px' }}>
      {item.emoji}
    </div>
  )}
</div>

              {/* Info */}
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '15px', fontWeight: 600, color: '#3d2c6e', marginBottom: '4px' }}>{item.name}</div>
                <div style={{ fontSize: '14px', color: '#7c5cbf', fontWeight: 700 }}>SR {item.price}</div>
              </div>

              {/* Quantity */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <button onClick={() => updateQuantity(item._id, item.quantity - 1)}
                  style={{ width: '28px', height: '28px', borderRadius: '50%', border: '1px solid #ddd4f0', background: '#fff', cursor: 'pointer', fontSize: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#7c5cbf' }}>
                  −
                </button>
                <span style={{ fontSize: '15px', fontWeight: 600, color: '#3d2c6e', minWidth: '20px', textAlign: 'center' }}>{item.quantity}</span>
                <button onClick={() => updateQuantity(item._id, item.quantity + 1)}
                  style={{ width: '28px', height: '28px', borderRadius: '50%', border: '1px solid #ddd4f0', background: '#fff', cursor: 'pointer', fontSize: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#7c5cbf' }}>
                  +
                </button>
              </div>

              {/* Total & remove */}
              <div style={{ textAlign: 'right', minWidth: '80px' }}>
                <div style={{ fontSize: '15px', fontWeight: 700, color: '#3d2c6e', marginBottom: '8px' }}>SR {item.price * item.quantity}</div>
                <button onClick={() => removeFromCart(item._id)}
                  style={{ background: 'none', border: 'none', color: '#b0a0c8', fontSize: '12px', cursor: 'pointer' }}>
                  remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order summary */}
        <div style={{ flex: 1, minWidth: '260px', background: '#fff', border: '1px solid #ede8f7', borderRadius: '16px', padding: '24px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#3d2c6e', marginBottom: '20px' }}>order summary</h2>

          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: '#6b5b8a', marginBottom: '12px' }}>
            <span>subtotal</span>
            <span>SR {totalPrice}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: '#6b5b8a', marginBottom: '20px' }}>
            <span>shipping</span>
            <span style={{ color: '#7c5cbf' }}>free </span>
          </div>

          <div style={{ borderTop: '1px solid #ede8f7', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', fontSize: '17px', fontWeight: 700, color: '#3d2c6e', marginBottom: '20px' }}>
            <span>total</span>
            <span>SR {totalPrice}</span>
          </div>

          <Link to="/checkout" style={{ textDecoration: 'none' }}>
            <button style={{ width: '100%', padding: '14px', background: '#7c5cbf', color: '#fff', border: 'none', borderRadius: '24px', fontSize: '15px', fontWeight: 600, cursor: 'pointer' }}>
              checkout →
            </button>
          </Link>

          <Link to="/products" style={{ display: 'block', textAlign: 'center', marginTop: '12px', fontSize: '13px', color: '#9b8bb5', textDecoration: 'none' }}>
            ← continue shopping
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Cart