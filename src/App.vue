<template>
  <div> 
    <nav>
      <router-link to="/"> Vue défaut </router-link> |
      <router-link to="/about">About</router-link> | 
      <router-link to="/produit/chocolat">Chocolat </router-link> | 
      <router-link to="/shoppingCard">Panier </router-link> | 
      <router-link to="/catalogue">Catalogue </router-link>
    </nav>

    <div class="alert alert-secondary">
    <router-view/>
    </div> 

        <button class="btn btn-primary" 
            data-bs-target="#collapseTarget" 
            data-bs-toggle="collapse">
            Bootstrap collapse
        </button>
        <div class="collapse py-2" id="collapseTarget">
            This is the toggle-able content!
        </div>


  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
