<template>
  <h1>Products Page</h1>

  <ProductCard
    v-for="product in products"
    :key="product._id"
    :product="product"
  />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ProductCard from '../components/ProductCard.vue'
import { getProducts } from '../services/productService.js'

const products = ref([])

onMounted(async () => {
  const response = await getProducts()

  console.log(response.data)

  products.value = response.data
})
</script>
