<template>
  <nav>
    <h2>Барааны апп</h2>
  </nav>

  <nav>
    <RouterLink to="/">Home</RouterLink>

    <RouterLink to="/products"> Бараа харах </RouterLink>

    <RouterLink to="/add-product"> Бараа нэмэх </RouterLink>
  </nav>
</template>

<style scoped>
nav {
  padding: 20px;
  background: #eee;
}

a {
  margin-right: 15px;
}
</style>
