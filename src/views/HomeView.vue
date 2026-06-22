<template>
  <div class="home">
    <h1>Бараа худалдаа</h1>

    <p>Тавтай морил...</p>

    <p>.......</p>

    <RouterLink to="/products"> Бараа харах </RouterLink>
  </div>
</template>

<style scoped>
.home {
  padding: 40px;
  text-align: center;
}

h1 {
  font-size: 40px;
}

p {
  font-size: 18px;
  line-height: 1.6;
}

a {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background: #333;
  color: white;
  text-decoration: none;
}
</style>
