import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductStore from '../components/ProductStore.vue'
import ShoppingCard from '../components/ShoppingCard.vue'

const routes = [
  { 
    path: '/produit/:nom', 
    name: 'productShow', 
    component: ProductStore,
    props: true
  }, 
  { 
    path: '/shoppingCard', 
    name: 'shoppingCard', 
    component: ShoppingCard,
    props: true
  }, 
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
