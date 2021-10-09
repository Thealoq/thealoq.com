<template>
  <div id="app">
    <Navbar :items="item" />
    <router-view />
  </div>
</template>

<script lang="js">
import Navbar from '@/components/Navbar.vue'

  export default {
      data() {
        return {
            item : [
              { name : "About", href : "#" },

               { name:"Blog", href : "#" },
           ]
      }
    },
    components : {
      Navbar
    }
  }
</script>
