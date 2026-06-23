<template>
  <div class="add-product">
    <h2>Бараа нэмэх</h2>

    <div class="form-box">
      <input v-model="name" placeholder="Нэр" />

      <input v-model="price" type="number" placeholder="Үнэ" />

      <input v-model="image" placeholder="Зургийн link" />

      <button @click="addProduct">Нэмэх</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const name = ref('')
const price = ref('')
const image = ref('')

async function addProduct() {
  await axios.post('https://product-backend-2qik.onrender.com/products', {
    name: name.value,
    price: Number(price.value),
    image: image.value,
  })

  alert('Амжилттай нэмэгдлээ')
}
//const response = await axios.get('/products')--> await =="Хүлээ. Backend-ээс хариу ирсний дараа дараагийн мөрөө ажиллуул."



</script>

<style scoped>
.add-product {
  max-width: 900px;
  margin: 40px auto;
}

h2 {
  margin-bottom: 20px;
  color: #2c3e50;
}

.form-box {
  background: white;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 5px 20px rgb(0 0 0 / 10%);

  display: flex;
  gap: 15px;
  align-items: center;
}

input {
  flex: 1;
  padding: 15px;
  border: none;
  border-radius: 12px;
  background: #f3f3f3;
  font-size: 16px;
}

input:focus {
  outline: none;
  border: 2px solid #9b8bd9;
}

button {
  padding: 15px 30px;
  border: none;
  border-radius: 12px;
  background: #9b8bd9;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background: #7d6cc8;
}
</style>
