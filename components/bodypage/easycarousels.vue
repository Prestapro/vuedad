<template>
<div class="easycarousels container">
    <div class="c-wrapper w-1 row">
        <div class="in_tabs clearfix compact_on" :class="">
          <wrap-tab></wrap-tab>
          <tab-content></tab-content>
        </div>
    </div>
</div>
</template>

<script>
  export default {
    mounted: function () {
      window.addEventListener('resize', this.handleResize)
    },
    beforeDestroy: function () {
      window.removeEventListener('resize', this.handleResize)
    },
    methods: {
      handleResize () {
        let el = document.querySelector('.compact_on')
        if (window.innerWidth < 1024) {
          el.classList.add('compact')
        } else {
          el.classList.remove('compact')
        }
      }
    }
  }
</script>

<style>
.bx-wrapper .bx-controls-direction a {
    font-size: 0;
}

.easycarousels .bx-wrapper .bx-controls-direction a {
  right: 0px;    
}
.c-wrapper {
  margin-left: 15px;
  margin: 0; 
  padding: 0; 
  border: none; 
}
/*  @import './easycarousels/css/back.css';
  @import './easycarousels/css/bx-styles.css';
  @import './easycarousels/css/product-items.css';
  @import './easycarousels/css/buttons.css';*/
</style>
