import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue'
import ProductDetailView from '../views/ProductDetailView.vue'
import AddProductView from '../views/AddProductView.vue'
import EditProductView from '../views/EditProductView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },

    {
      path: '/products',
      name: 'products',
      component: ProductsView,
    },

    {
      path: '/products/:id',
      name: 'product-detail',
      component: ProductDetailView,
      props: true,
    },

    {
      path: '/add-product',
      name: 'add-product',
      component: AddProductView,
    },

    {
      path: '/products/:id/edit',
      name: 'edit-product',
      component: EditProductView,
      props: true,
    },
  ],
})

export default router
