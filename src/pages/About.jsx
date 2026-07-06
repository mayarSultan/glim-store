import { Link } from 'react-router-dom'

const values = [
  { icon: '🧶', title: 'handmade with love', desc: 'every single piece is crocheted by hand, one stitch at a time. no machines, no shortcuts.' },
  { icon: '🌿', title: 'sustainable materials', desc: 'we use soft, high quality cotton and wool yarns that are kind to your skin and the planet.' },
  { icon: '💜', title: 'passion driven', desc: 'glim started as a hobby and grew into something bigger. every item carries that same original love.' },
]



function About() {
  return (
    <div style={{ background: '#fdf8f4', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>

      {/* Hero */}
      <div style={{ background: '#ede8f7', padding: '64px 40px', textAlign: 'center', borderBottom: '1px solid #ddd4f0' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 700, color: '#3d2c6e', margin: '0 0 12px' }}>
          the story behind glim ✨
        </h1>
        <p style={{ fontSize: '16px', color: '#7c6ea0', maxWidth: '520px', margin: '0 auto', lineHeight: '1.7' }}>
          glim was born from a love of crochet and a dream to share handmade pieces with the world. what started as late night crafting sessions became a small brand with a big heart.
        </p>
      </div>

      {/* Our values */}
      <div style={{ padding: '56px 40px' }}>
        <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#3d2c6e', textAlign: 'center', marginBottom: '8px' }}>what we believe in</h2>
        <p style={{ fontSize: '14px', color: '#9b8bb5', textAlign: 'center', marginBottom: '36px' }}>the values that guide every stitch</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', maxWidth: '900px', margin: '0 auto' }}>
          {values.map(v => (
            <div key={v.title} style={{ background: '#fff', border: '1px solid #ede8f7', borderRadius: '16px', padding: '24px' }}>
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>{v.icon}</div>
              <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#3d2c6e', marginBottom: '8px' }}>{v.title}</h3>
              <p style={{ fontSize: '13px', color: '#9b8bb5', lineHeight: '1.6', margin: 0 }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      

      

      {/* CTA */}
      <div style={{ background: '#ede8f7', borderTop: '1px solid #ddd4f0', padding: '48px 40px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#3d2c6e', marginBottom: '8px' }}>ready to find your next favourite piece?</h2>
        <p style={{ fontSize: '14px', color: '#7c6ea0', marginBottom: '24px' }}>browse our handmade collection or request something custom</p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/products">
            <button style={{ padding: '12px 28px', background: '#7c5cbf', color: '#fff', border: 'none', borderRadius: '24px', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}>
              shop now →
            </button>
          </Link>
          <Link to="/contact">
            <button style={{ padding: '12px 28px', background: '#fff', color: '#7c5cbf', border: '1px solid #c9b8e8', borderRadius: '24px', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}>
              custom orders 
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About