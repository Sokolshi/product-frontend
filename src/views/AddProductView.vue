<template>
  <div>
    <h2>Бараа нэмэх</h2>

    <input v-model="name" placeholder="Нэр" />

    <input v-model="price" type="number" placeholder="Үнэ" />

    <button @click="addProduct">Нэмэх</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const name = ref('')
const price = ref('')

async function addProduct() {
  await axios.post('https://product-backend-2qik.onrender.com/products', {
    name: name.value,
    price: Number(price.value),
  })

  alert('Амжилттай нэмэгдлээ')
}
</script>
