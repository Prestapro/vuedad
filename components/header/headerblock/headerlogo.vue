<template>
  <div id="header_logo" class="col-md-2 col-xs-6">
    <a :href="href" :title="title"> <img class="logo img-responsive" :src="logo" :alt="alt"> </a>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        name: 'y-logo',
        logo: './src/components/headerblock/headerlogo/img/y-logo.jpg',
        title: 'Travel PrestaShop Theme',
        alt: 'Travel PrestaShop Theme',
        href: ''
      }
    }
  }
</script>
