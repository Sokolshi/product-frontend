<template>
  <div class="card">
    <h3>{{ product.name }}</h3>

    <p>{{ product.price }}₮</p>

    <button @click="goDetail">View</button>
    <button @click="deleteProduct">Delete</button>
    <button @click="editProduct">Edit</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import axios from 'axios'

const props = defineProps({
  product: Object,
})

const router = useRouter()

function goDetail() {
  router.push(`/products/${props.product._id}`)
}

async function deleteProduct() {
  await axios.delete(`https://product-backend-2qik.onrender.com/products/${props.product._id}`)
  router.push('/products')
}

function editProduct() {
  router.push(`/products/${props.product._id}/edit`)
}
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  padding: 20px;
  margin: 10px;
}

button {
  padding: 8px 15px;
  cursor: pointer;
}
</style>
