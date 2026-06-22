<template>
  <h1>Edit Product</h1>

  <input v-model="name" />

  <br /><br />

  <input v-model="price" />

  <br /><br />

  <input v-model="image" />

  <br /><br />

  <button @click="updateProduct">Save</button>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const name = ref('')
const price = ref('')
const image = ref('')

onMounted(async () => {
  const res = await axios.get(`http://localhost:3000/products/${route.params.id}`)

  name.value = res.data.name
  price.value = res.data.price
  image.value = res.data.image
})

async function updateProduct() {
  await axios.put(`http://localhost:3000/products/${route.params.id}`, {
    name: name.value,
    price: Number(price.value),
    image: image.value,
  })

  router.push('/products')
}
</script>
