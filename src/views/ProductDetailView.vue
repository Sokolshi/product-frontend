<template>
  <div v-if="product">
    <h1>{{ product.name }}</h1>

    <p>Price: {{ product.price }}₮</p>
  </div>

  <h2 v-else>Loading...</h2>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'

const product = ref(null)

const route = useRoute()

onMounted(async () => {
  const res = await axios.get(
    `https://product-backend-2qik.onrender.com/products/${route.params.id}`,
  )

  product.value = res.data
})
</script>
