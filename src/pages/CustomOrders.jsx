import { useState } from 'react'
function CustomOrders() {
    const [form, setForm] = useState({
  name: '', contact: '', type: 'bag', colors: '', details: ''
})
const [submitted, setSubmitted] = useState(false)

function handleChange(e) {
  setForm({ ...form, [e.target.name]: e.target.value })
}

function handleSubmit() {
  if (!form.name || !form.contact) {
    alert('please fill in your name and email/whatsapp')
    return
  }
  console.log('Custom order request:', form)
  setSubmitted(true)
}
  return (
    <div style={{ background: '#fdf8f4', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>

      {/* Header */}
      <div style={{ background: '#ede8f7', padding: '32px 40px', borderBottom: '1px solid #ddd4f0' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 700, color: '#3d2c6e', margin: 0 }}>custom orders </h1>
        <p style={{ color: '#7c6ea0', margin: '6px 0 0', fontSize: '14px' }}>tell us what you have in mind and we'll make it for you</p>
      </div>

      <div style={{ display: 'flex', gap: '40px', padding: '40px', flexWrap: 'wrap', alignItems: 'flex-start' }}>

        {/* Form */}
        <div style={{ flex: 2, minWidth: '300px', background: '#fff', border: '1px solid #ede8f7', borderRadius: '16px', padding: '32px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#3d2c6e', marginBottom: '24px' }}>request a custom piece</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

            <div>
              <label style={{ fontSize: '13px', fontWeight: 600, color: '#6b5b8a', display: 'block', marginBottom: '8px' }}>your name</label>
              <input type="text" placeholder="e.g. Sara" style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #ede8f7', fontSize: '14px', color: '#3d2c6e', background: '#fdf8f4', outline: 'none', boxSizing: 'border-box' }} />
            </div>

            <div>
              <label style={{ fontSize: '13px', fontWeight: 600, color: '#6b5b8a', display: 'block', marginBottom: '8px' }}>your email or whatsapp</label>
              <input type="text" placeholder="so we can reach you" style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #ede8f7', fontSize: '14px', color: '#3d2c6e', background: '#fdf8f4', outline: 'none', boxSizing: 'border-box' }} />
            </div>

            <div>
              <label style={{ fontSize: '13px', fontWeight: 600, color: '#6b5b8a', display: 'block', marginBottom: '8px' }}>what would you like?</label>
              <select style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #ede8f7', fontSize: '14px', color: '#3d2c6e', background: '#fdf8f4', outline: 'none', boxSizing: 'border-box' }}>
                <option>bag</option>
                <option>cardigan</option>
                <option>accessory</option>
                <option>home decor</option>
                <option>other</option>
              </select>
            </div>

            <div>
              <label style={{ fontSize: '13px', fontWeight: 600, color: '#6b5b8a', display: 'block', marginBottom: '8px' }}>colors you have in mind</label>
              <input type="text" placeholder="e.g. pastel pink, beige, white" style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #ede8f7', fontSize: '14px', color: '#3d2c6e', background: '#fdf8f4', outline: 'none', boxSizing: 'border-box' }} />
            </div>

            <div>
              <label style={{ fontSize: '13px', fontWeight: 600, color: '#6b5b8a', display: 'block', marginBottom: '8px' }}>tell us more</label>
              <textarea placeholder="describe your dream piece — size, style, any inspo..." rows={4} style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #ede8f7', fontSize: '14px', color: '#3d2c6e', background: '#fdf8f4', outline: 'none', resize: 'vertical', boxSizing: 'border-box', fontFamily: 'system-ui, sans-serif' }} />
            </div>

            <button style={{ padding: '14px', background: '#7c5cbf', color: '#fff', border: 'none', borderRadius: '24px', fontSize: '15px', fontWeight: 600, cursor: 'pointer' }}>
              send request 🧶
            </button>
          </div>
        </div>

        {/* Info sidebar */}
        <div style={{ flex: 1, minWidth: '240px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {[
            { emoji: '💬', title: 'we respond within 24h', desc: 'we\'ll get back to you with details and pricing' },
            { emoji: '🎨', title: 'any color you want', desc: 'choose from hundreds of yarn colors to match your vision' },
            { emoji: '📦', title: 'made just for you', desc: 'every custom piece is handmade with care and love' },
            { emoji: '⏳', title: 'delivery in 7–14 days', desc: 'depending on the complexity of your order' },
          ].map(card => (
            <div key={card.title} style={{ background: '#fff', border: '1px solid #ede8f7', borderRadius: '16px', padding: '20px' }}>
              <div style={{ fontSize: '24px', marginBottom: '8px' }}>{card.emoji}</div>
              <div style={{ fontSize: '14px', fontWeight: 600, color: '#3d2c6e', marginBottom: '4px' }}>{card.title}</div>
              <div style={{ fontSize: '13px', color: '#9b8bb5', lineHeight: '1.5' }}>{card.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CustomOrders