<template>
<div class="wrap-title-tabs">
  <ul id="displayHome_1_easycarousel_tabs" class="travel-tabs nav nav-tabs easycarousel_tabs closed" data-tabs="tabs" role="tablist" :class="">
    <li class="responsive_tabs_selection title_block">
        <a href="" title="Best" onclick="event.preventDefault();"> <span class="selection">Best</span> <i class="icon icon-angle-down"></i> </a>
    </li>
    <li class="first active carousel_title"> <a data-toggle="tab" href="#bestsellers_2">Best</a></li>
    <li class=" carousel_title"> <a data-toggle="tab" href="#featuredproducts_3">Popular</a></li>
    <li class=" carousel_title"> <a data-toggle="tab" href="#newproducts_1">New</a></li>
  </ul>
</div> 
</template>

<script>
  export default {
    methods: {
      disp () {
        let el = document.getElementById('displayHome_1_easycarousel_tabs')
        if (window.innerWidth < 1024) {
          el.classList.toggle('closed')
        }
      }
    }
  }
</script>

<style>
@media  (max-width: 1024px) {
.travel-tabs.nav.nav-tabs {
  margin-right: 135px; }
}
@media  (min-width: 1024px) {
.travel-tabs.nav.nav-tabs {
  margin-right: 0; }
}
  @import './wraptab/css/fronti.css';
</style>
