<template>
	<header id="header" v-on:scroll.capture="handleScroll">
    	<input id="menu-label" type="checkbox" class="menu-label not-styling">
		    <div id="topMain" class="nav">
        	<div class="container">
        	    <div class="row">
        	        <nav class="clearfix">
						<currencices></currencices>
 						<languages></languages>
						<header-user-info></header-user-info>
						<input id="state-search" type="checkbox" class="not-styling">
						<amazing-block-top></amazing-block-top>
         	        </nav>
        	    </div>
        	</div>
        </div>
        <div class="main_panel">
            <div class="container">
                <div class="main_panel__inner">
                    <div class="row">
                        <header-logo></header-logo>
                        <block-top-menu></block-top-menu>
                        <wrap-cart></wrap-cart>
                    </div>
                </div>
            </div>
        </div>
      <slot></slot>
	</header>
</template>

<style>
.not-styling {
    display: none;
}
</style>

<script>
  export default {
    methods: {
      handleScroll () {
        if (window.scrollY > 400) {
          header.classList.add('fixedHeader')
        } else {
          header.classList.remove('fixedHeader')
        }
      }
    },
    created () {
      window.addEventListener('scroll', this.handleScroll)
    // destroyed () {
    // window.removeEventListener('scroll', this.handleScroll);
    }
  }
</script>
