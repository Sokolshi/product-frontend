<template>
  <div class="container">
    <h2>Бараа нэмэх</h2>

    <form @submit.prevent="addProduct">
      <input v-model="Нэр" type="text" placeholder="Барааны нэр" />

      <input v-model="Үнэ" type="number" placeholder="Үнэ" />

      <button type="submit">Add Product</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()

const name = ref('')
const price = ref('')

const addProduct = async () => {
  try {
    await axios.post('https://product-backend-2qik.onrender.com/products', {
      name: name.value,
      price: Number(price.value),
    })

    alert('Product added')

    router.push('/products')
  } catch (error) {
    console.log(error)

    alert('Алдаа гарлаа')
  }
}
</script>

<style scoped>
.container {
  width: 400px;
  margin: 40px auto;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
}

button {
  padding: 10px 20px;
}
</style>
