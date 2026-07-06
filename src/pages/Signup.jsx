import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signup } from '../api'
import { useAuth } from '../context/AuthContext'

function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { saveAuth } = useAuth()
  const navigate = useNavigate()

  async function handleSubmit() {
    if (!name || !email || !password) {
      setError('please fill in all fields')
      return
    }
    if (password.length < 6) {
      setError('password must be at least 6 characters')
      return
    }
    setLoading(true)
    setError('')
    const data = await signup(name, email, password)
    setLoading(false)

    if (data.token) {
      saveAuth(data.user, data.token)
      navigate('/')
    } else {
      setError(data.message || 'something went wrong')
    }
  }

  const inputStyle = {
    width: '100%', padding: '12px 16px', borderRadius: '12px',
    border: '1px solid #ede8f7', fontSize: '14px', color: '#3d2c6e',
    background: '#fdf8f4', outline: 'none', boxSizing: 'border-box'
  }

  return (
    <div style={{ background: '#fdf8f4', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ background: '#fff', border: '1px solid #ede8f7', borderRadius: '20px', padding: '40px', width: '100%', maxWidth: '400px' }}>

        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <img src="/logo.svg" alt="Glim" style={{ height: '48px', marginBottom: '8px' }} />
          <h1 style={{ fontSize: '24px', fontWeight: 700, color: '#3d2c6e', margin: 0 }}>create account</h1>
          <p style={{ color: '#9b8bb5', fontSize: '14px', marginTop: '6px' }}>join glim and start shopping</p>
        </div>

        {error && (
          <div style={{ background: '#fbe8f0', color: '#c4607a', padding: '12px 16px', borderRadius: '12px', fontSize: '13px', marginBottom: '16px' }}>
            {error}
          </div>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ fontSize: '13px', fontWeight: 600, color: '#6b5b8a', display: 'block', marginBottom: '8px' }}>your name</label>
            <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="e.g. Sara" style={inputStyle} />
          </div>
          <div>
            <label style={{ fontSize: '13px', fontWeight: 600, color: '#6b5b8a', display: 'block', marginBottom: '8px' }}>email</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" style={inputStyle} />
          </div>
          <div>
            <label style={{ fontSize: '13px', fontWeight: 600, color: '#6b5b8a', display: 'block', marginBottom: '8px' }}>password</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="at least 6 characters" style={inputStyle} />
          </div>

          <button onClick={handleSubmit} disabled={loading} style={{ padding: '14px', background: '#7c5cbf', color: '#fff', border: 'none', borderRadius: '24px', fontSize: '15px', fontWeight: 600, cursor: 'pointer', marginTop: '8px' }}>
            {loading ? 'creating account...' : 'create account →'}
          </button>
        </div>

        <p style={{ textAlign: 'center', fontSize: '13px', color: '#9b8bb5', marginTop: '24px' }}>
          already have an account?{' '}
          <Link to="/login" style={{ color: '#7c5cbf', fontWeight: 600, textDecoration: 'none' }}>sign in</Link>
        </p>
      </div>
    </div>
  )
}

export default Signup