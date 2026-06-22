import axios from 'axios'

export function getProducts() {
  return axios.get('http://192.168.1.110:3000/products')
}
