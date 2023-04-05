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
  <button @click="count++">You clicked me {{ count }} times.</button>
</template>
