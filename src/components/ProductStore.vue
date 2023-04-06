<script>
export default {
  name: 'ProductStore', 
  data() {
    return { quantite: 1}
  },
  computed: {
    stockValue() {
      return this.quantite * 1; 
    }
  },
  props: {
    nom: { type: String, required: true }, 
    id: { type: Number }, 
    price: { type:Number },
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

    <button @click="quantite++"> +1 </button>
    <button @click="quantite+=3"> +3 </button>
  </div>

</template>
