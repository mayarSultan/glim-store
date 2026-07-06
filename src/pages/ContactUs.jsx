import { useState } from 'react'

const contactInfo = [
  { icon: '📧', label: 'email', value: 'hello@glim.store', link: 'mailto:hello@glim.store' },
{ icon: 'whatsapp', label: 'whatsapp', value: '+966 50 000 0000', link: 'https://wa.me/966500000000' },
  { icon: '📍', label: 'location', value: 'riyadh, saudi arabia', link: null },
  { icon: '🕐', label: 'working hours', value: 'sun – thu, 9am – 6pm', link: null },
]

const socials = [
  { label: 'instagram', handle: '@glim.store', link: '#', color: '#E1306C',
    svg: <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg> },
  { label: 'tiktok', handle: '@glim.store', link: '#', color: '#000000',
    svg: <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/></svg> },
  { label: 'x (twitter)', handle: '@glimstore', link: '#', color: '#000000',
    svg: <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
]

function ContactUs() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit() {
    if (!form.name || !form.email || !form.message) {
      setError('please fill in your name, email and message')
      return
    }
    setError('')
    setSubmitted(true)
  }

  const inputStyle = {
    width: '100%', padding: '12px 16px', borderRadius: '12px',
    border: '1px solid #ede8f7', fontSize: '14px', color: '#3d2c6e',
    background: '#fdf8f4', outline: 'none', boxSizing: 'border-box',
    fontFamily: 'system-ui, sans-serif'
  }

  return (
    <div style={{ background: '#fdf8f4', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>

      {/* Header */}
      <div style={{ background: '#ede8f7', padding: '48px 40px', textAlign: 'center', borderBottom: '1px solid #ddd4f0' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 700, color: '#3d2c6e', margin: '0 0 10px' }}>contact us 💜</h1>
        <p style={{ fontSize: '15px', color: '#7c6ea0', margin: 0 }}>we'd love to hear from you — reach out anytime!</p>
      </div>

      <div style={{ display: 'flex', gap: '40px', padding: '48px 40px', flexWrap: 'wrap', alignItems: 'flex-start', maxWidth: '1000px', margin: '0 auto' }}>

        {/* Left — contact info */}
        <div style={{ flex: 1, minWidth: '260px', display: 'flex', flexDirection: 'column', gap: '16px' }}>

          {/* Contact details */}
          <div style={{ background: '#fff', border: '1px solid #ede8f7', borderRadius: '16px', padding: '24px' }}>
            <h2 style={{ fontSize: '16px', fontWeight: 700, color: '#3d2c6e', marginBottom: '20px' }}>get in touch</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {contactInfo.map(item => (
  <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: item.icon === 'whatsapp' ? '#25D366' : '#f3eefb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0, color: '#fff' }}>
      {item.icon === 'whatsapp' ? (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      ) : item.icon}
    </div>
    <div>
      <div style={{ fontSize: '11px', color: '#9b8bb5', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>{item.label}</div>
      {item.link ? (
        <a href={item.link} style={{ fontSize: '14px', color: '#7c5cbf', fontWeight: 500, textDecoration: 'none' }}>{item.value}</a>
      ) : (
        <div style={{ fontSize: '14px', color: '#3d2c6e', fontWeight: 500 }}>{item.value}</div>
      )}
    </div>
  </div>
))}
            </div>
          </div>

          {/* Socials */}
          <div style={{ background: '#fff', border: '1px solid #ede8f7', borderRadius: '16px', padding: '24px' }}>
            <h2 style={{ fontSize: '16px', fontWeight: 700, color: '#3d2c6e', marginBottom: '20px' }}>follow us</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {socials.map(s => (
  <a key={s.label} href={s.link} style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}
    onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
    onMouseLeave={e => e.currentTarget.style.opacity = '1'}
  >
    <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: s.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', flexShrink: 0 }}>
      {s.svg}
    </div>
    <div>
      <div style={{ fontSize: '13px', fontWeight: 600, color: '#3d2c6e', textTransform: 'capitalize' }}>{s.label}</div>
      <div style={{ fontSize: '12px', color: '#9b8bb5' }}>{s.handle}</div>
    </div>
  </a>
))}
            </div>
          </div>

          {/* Response time note */}
          <div style={{ background: '#f3eefb', border: '1px solid #ddd4f0', borderRadius: '16px', padding: '20px' }}>
            <div style={{ fontSize: '20px', marginBottom: '8px' }}>⚡</div>
            <div style={{ fontSize: '14px', fontWeight: 600, color: '#3d2c6e', marginBottom: '4px' }}>quick responses</div>
            <div style={{ fontSize: '13px', color: '#9b8bb5', lineHeight: '1.5' }}>we typically reply within 24 hours on working days</div>
          </div>
        </div>

        {/* Right — contact form */}
        <div style={{ flex: 2, minWidth: '300px', background: '#fff', border: '1px solid #ede8f7', borderRadius: '16px', padding: '32px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: 700, color: '#3d2c6e', marginBottom: '24px' }}>send us a message</h2>

          {submitted ? (
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <div style={{ fontSize: '56px', marginBottom: '16px' }}>💜</div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#3d2c6e', marginBottom: '8px' }}>message sent!</h3>
              <p style={{ fontSize: '14px', color: '#9b8bb5', marginBottom: '24px' }}>thanks for reaching out — we'll get back to you soon</p>
              <button
                onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }) }}
                style={{ padding: '10px 24px', background: '#f3eefb', color: '#7c5cbf', border: 'none', borderRadius: '20px', fontSize: '13px', fontWeight: 600, cursor: 'pointer' }}>
                send another message
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

              {error && (
                <div style={{ background: '#fbe8f0', color: '#c4607a', padding: '12px 16px', borderRadius: '12px', fontSize: '13px' }}>
                  {error}
                </div>
              )}

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: '140px' }}>
                  <label style={{ fontSize: '13px', fontWeight: 600, color: '#6b5b8a', display: 'block', marginBottom: '8px' }}>your name</label>
                  <input name="name" value={form.name} onChange={handleChange} placeholder="e.g. Sara" style={inputStyle} />
                </div>
                <div style={{ flex: 1, minWidth: '140px' }}>
                  <label style={{ fontSize: '13px', fontWeight: 600, color: '#6b5b8a', display: 'block', marginBottom: '8px' }}>email</label>
                  <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="you@example.com" style={inputStyle} />
                </div>
              </div>

              <div>
                <label style={{ fontSize: '13px', fontWeight: 600, color: '#6b5b8a', display: 'block', marginBottom: '8px' }}>subject</label>
                <select name="subject" value={form.subject} onChange={handleChange} style={inputStyle}>
                  <option value="">select a topic...</option>
                  <option value="order">order inquiry</option>
                  <option value="custom">custom order question</option>
                  <option value="shipping">shipping & delivery</option>
                  <option value="return">returns & exchanges</option>
                  <option value="other">other</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: '13px', fontWeight: 600, color: '#6b5b8a', display: 'block', marginBottom: '8px' }}>message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="write your message here..."
                  rows={5}
                  style={{ ...inputStyle, resize: 'vertical' }}
                />
              </div>

              <button
                onClick={handleSubmit}
                style={{ padding: '14px', background: '#7c5cbf', color: '#fff', border: 'none', borderRadius: '24px', fontSize: '15px', fontWeight: 600, cursor: 'pointer', marginTop: '8px' }}>
                send message 💜
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ContactUs