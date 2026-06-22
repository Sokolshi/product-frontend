<template>
  <div>
    <h1>Бараа нэмэх</h1>

    <form @submit.prevent="addProduct">
      <input v-model="Нэр" placeholder="Нэр" />

      <br /><br />

      <input v-model="Үнэ" type="number" placeholder="Үнэ" step="100" min="0" />

      <br /><br />

      <button type="submit">Нэмэх</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const Нэр = ref('')
const Үнэ = ref('')

const router = useRouter()

async function addProduct() {
  await axios.post('https://product-backend-2qik.onrender.com/products', {
    name: Нэр.value,
    price: Number(Үнэ.value),
  })

  router.push('/products')
}
</script>
