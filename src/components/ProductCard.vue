<template>
  <div class="card">
    <img :src="product.image || 'https://picsum.photos/500/300'" alt="" class="product-image" />

    <div class="card-body">
      <h3>{{ product.name }}</h3>

      <p class="price">{{ product.price }}₮</p>

      <div class="buttons">
        <button @click="deleteProduct">Delete</button>
        <button @click="editProduct">Edit</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import axios from 'axios'

const props = defineProps({
  product: Object,
})

const router = useRouter()

async function deleteProduct() {
  const ok = window.confirm('Та энэ барааг устгахдаа итгэлтэй байна уу?')

  if (ok === false) {
    return
  }

  await axios.delete(`https://product-backend-2qik.onrender.com/products/${props.product._id}`)

  window.location.reload()
}

function editProduct() {
  router.push(`/products/${props.product._id}/edit`)
}
</script>

<style scoped>
.card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgb(0 0 0 / 10%);
}

.product-image {
  width: 100%;
  height: 500px;
  object-fit: cover;
}

.card-body {
  padding: 25px;
}

h3 {
  font-size: 40px;
  font-weight: bold;
}

.price {
  margin-top: 10px;
  font-size: 28px;
  color: gray;
}

.buttons {
  display: flex;
  gap: 10px;
  margin-top: 25px;
}

button {
  flex: 1;
  padding: 15px;
  border: none;
  border-radius: 12px;
  background: #9b8bd9;
  color: white;
  font-size: 18px;
  cursor: pointer;
}

button:hover {
  background: #7d6cc8;
}

@media (max-width: 768px) {
  .product-image {
    height: 260px;
  }

  h3 {
    font-size: 28px;
  }

  .buttons {
    flex-direction: column;
  }
}
</style>
