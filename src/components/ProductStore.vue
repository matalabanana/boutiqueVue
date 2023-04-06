<script>
export default {
  name: 'ProductStore', 
  data() {
    return { quantite: 1}
  },
  computed: {
    stockValue() {
      return this.quantite * 3.2; 
    }
  },
  props: {
    nom: { type: String, required: true }, 
    id: { type: Number }
  },
  beforeMount() {
    //this.quantite = 42 ;
  }
}
</script>

<template>
  
  <div>
    {{ nom }} et quantité {{quantite}}. id = {{ id }} 
    <br>
    route.params.nom =   {{ $route.params.nom}}
    <br>
    valeur du stock {{stockValue}} 

    <button @click="quantite++">Ajoute une quantite</button>
  </div>

</template>
