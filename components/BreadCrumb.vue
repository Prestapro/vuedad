<template>
  <div class="breadcrumb clearfix"> 
    <router-link class="home fa icon-home" :title="title"></router-link>
    <router-link class="navigation_page">{{this.$route.name}}</router-link>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        home: '/',
        page: 'Winter',
        title: 'Return to Home',
        prod: 'Product',
        cat: '/categories'
      }
    }
  }
</script>
