<script>
export default {
  name: 'ShoppingCard', 
  data() {
    return { card: { type: Array } }
  },
  computed: {
    stockValue() {
      return this.quantite * 1; 
    }
  },
  props: {
     
  },
  beforeMount() {
    this.card = [{'id':32, 'quantite':4, 'nom': "Chocolat" }];
  }
}
</script>

<template>
  
  <div> Mon panier
    <ul> 
        <li v-for="item in card" :key="item.id"> 
            {{item.nom}}, quantite {{item.quantite}}
        </li>
    </ul>
  </div>

</template>
