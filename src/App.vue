<script>

//import HelloWorld from './components/HelloWorld.vue'


import NavLink from './components/NavLink.vue'
import ProductStore from './components/ProductStore.vue'

export default {
  name: 'App',
  components: {
    NavLink, ProductStore
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>


<template>
  <div id="app"> 
    <nav>
        <NavLink url="/about" text="A propos" /> 
        <NavLink url="/accueil" text="Accueil" /> 
    </nav>

    <p> Bienvenue, nous avons des </p>
    <ProductStore nom="pomme" quantite="5" /> 
    <ProductStore nom="vin" quantite="12" /> 

  </div>
</template>
