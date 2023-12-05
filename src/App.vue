<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <userApp msg="Welcome to Your Vue.js App"/> -->
  <helloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
//import userApp from './components/userApp.vue'
import helloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    //userApp
    helloWorld
  }
}
</script>