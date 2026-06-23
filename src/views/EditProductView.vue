<template>
  <div class="edit-container">
    <h1>Edit Product</h1>

    <div class="edit-card">
      <input v-model="name" placeholder="Нэр" />

      <input v-model="price" type="number" placeholder="Үнэ" />

      <input v-model="image" placeholder="Зургийн link" />

      <button @click="updateProduct">Save</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const name = ref('')
const price = ref('')

onMounted(async () => {
  const res = await axios.get(
    `https://product-backend-2qik.onrender.com/products/${route.params.id}`,
  )

  name.value = res.data.name
  price.value = res.data.price
})

async function updateProduct() {
  await axios.put(`https://product-backend-2qik.onrender.com/products/${route.params.id}`, {
    name: name.value,
    price: Number(price.value),
  })

  router.push('/products')
}
</script>
<style scoped>
.edit-container {
  max-width: 700px;
  margin: 50px auto;
}

h1 {
  margin-bottom: 30px;
  color: #2c3e50;
}

.edit-card {
  background: white;

  padding: 40px;

  border-radius: 20px;

  box-shadow: 0 5px 20px rgb(0 0 0 / 10%);

  display: flex;

  flex-direction: column;

  gap: 20px;
}

input {
  padding: 16px;

  font-size: 18px;

  border: none;

  border-radius: 12px;

  background: #f3f3f3;
}

input:focus {
  outline: none;

  border: 2px solid #9b8bd9;
}

button {
  padding: 16px;

  border: none;

  border-radius: 12px;

  background: #9b8bd9;

  color: white;

  font-size: 18px;

  cursor: pointer;

  transition: 0.3s;
}

button:hover {
  background: #7d6cc8;
}
</style>
