<template>
  <!--HTML бичдэг хэсэг.Browser дээр харагдах бүх зүйл энд байна.-->
  <div class="home">
    <!--div бол HTML контейнер.-->
    <h1>Бараа худалдаа</h1>
    <!-- Том гарчиг үүсгэнэ.-->

    <p>Манай онлайн барааны дэлгүүрт тавтай морилно уу!</p>
    <!--Paragraph буюу текст.-->

    <p>Бүх төрлийн барааг доор байгаа товчин дээр дарна уу!</p>
    <!-- next paragraph -->

    <RouterLink to="/products">→Бараа харах←</RouterLink>
    <!--to="/products" гэдэг нь http://localhost:5173/products эсвэл https://product-frontend....vercel.app/products рүү шилжинэ.-->
  </div>
</template>

<style scoped>
/* Энэ CSS зөвхөн HomeView.vue дээр үйлчилнэ. */
.home {
  padding: 40px; /* Контейнерийн дөрвөн талаас 40px зай авна.*/
  text-align: center; /* Бүх текстийг төвд байрлуулна. */
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  font-size: 40px; /*Гарчигийн хэмжээ 40px болно. */
}

p {
  font-size: 18px; /* Параграфын текстийн хэмжээ 18px болно. */
  line-height: 1.6; /* Параграфын мөр хоорондын зайг 1.6 дахин ихэсгэнэ. */
}

a {
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 30px auto;

  width: 200px;
  height: 80px;

  background: #9b8bd9;
  color: black;

  border-radius: 15px 8px 0 8px;

  text-decoration: none;

  font-size: 140%;
  font-weight: 500;

  transition: 0.3s;
}
</style>
