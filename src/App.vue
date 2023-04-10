<template>
  <div> 


  <nav class="container navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Ma boutik</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="navbar-nav mr-auto">
      <router-link class="nav-link" to="/"> Vue défaut </router-link>  
      <router-link class="nav-link" to="/about">About</router-link>   
      <router-link class="nav-link" to="/produit/chocolat">Chocolat </router-link>  
      <router-link class="nav-link" to="/shoppingCard">Panier </router-link>   
      <router-link class="nav-link" to="/catalogue">Catalogue </router-link>
        </div></div> 
    </nav>

    <div class="alert alert-secondary">
    <router-view/>
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
