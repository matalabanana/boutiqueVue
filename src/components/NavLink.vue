<script>
export default {
  name: 'NavLink', 
  props: ['url', 'text'], 
  data() {
    return {
      count: 0
    }
  }
}
</script>

<template>
  
  
  <li>
  <a :href="url"> {{text}}  </a>  
  </li> 
  
</template>
