
const BASE_URL = 'https://glim-backend-558c.onrender.com/api'

export async function getProducts() {
  const res = await fetch(`${BASE_URL}/products`)
  const data = await res.json()
  return data
}

export async function getProduct(id) {
  const res = await fetch(`${BASE_URL}/products/${id}`)
  const data = await res.json()
  return data
}
export async function signup(name, email, password) {
  const res = await fetch(`${BASE_URL}/auth/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password })
  })
  return res.json()
}

export async function login(email, password) {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  })
  return res.json()
}

export async function createOrder(orderData, token) {
  const res = await fetch(`${BASE_URL}/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(orderData)
  })
  return res.json()
}

export async function getMyOrders(token) {
  const res = await fetch(`${BASE_URL}/orders/myorders`, {
    headers: { 'Authorization': `Bearer ${token}` }
  })
  return res.json()
}