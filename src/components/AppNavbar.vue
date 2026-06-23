<template>
  <nav class="navbar">
    <h2>Барааны апп</h2>

    <div class="links">
      <RouterLink to="/">🏠 Home</RouterLink>
      <RouterLink to="/products">👁️ Бараа харах</RouterLink>
      <RouterLink to="/add-product">➕ Бараа нэмэх</RouterLink>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  width: 1800px;
  height: 300px;
  margin: 40px auto;
  padding: 50px;
  background: #bdc99b;
  box-shadow: 2px 2px 2px 1px rgb(0 0 0 / 20%);
  border-radius: 1cm;
}

h2 {
  text-align: center;
  font-size: 26px;
  font-weight: 800;
  color: #4f7d00;
}

.links {
  display: flex;
  justify-content: center;
  gap: 25px;
  margin-top: 30px;
}

a {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 220px;
  height: 120px;

  background: #9b8bd9;
  color: black;

  border-radius: 50px 8px 0 8px;
  text-decoration: none;

  font-size: 24px;
  font-weight: 800;

  box-shadow: 2px 2px 2px 1px rgba(46, 71, 49, 0.2);
}
@media (max-width: 768px) {
  .navbar {
    width: 100%;
    padding: 20px;
  }

  .links {
    flex-direction: column;
    align-items: center;
  }

  a {
    width: 100%;
    max-width: 280px;
  }
}
</style>
