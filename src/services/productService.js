import axios from 'axios'

export function getProducts() {
  return axios.get('https://product-backend-2qik.onrender.com/products')
}
