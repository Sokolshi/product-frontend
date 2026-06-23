<template>
  <div class="page">
    <h1>Барааны хуудас</h1>

    <div class="products-grid">
      <ProductCard v-for="product in products" :key="product._id" :product="product" />
    </div>
  </div>
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

<style scoped>
.page {
  padding: 30px;
  max-width: none;
  margin: 0;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

/* Энийг хамгийн доор нэм */
@media (max-width: 768px) {
  .products-grid {
    grid-template-columns: 1fr;
  }

  .page {
    padding: 10px;
  }
}
</style>
