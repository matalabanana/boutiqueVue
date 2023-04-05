<script>
export default {
  name: 'ProductStore', 
  props: ['nom', 'quantite'], 
}
</script>

<template>
  
  <li> {{nom}} et quantité {{quantite}} </li> 

</template>
