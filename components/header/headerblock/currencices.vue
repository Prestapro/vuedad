<template>
	<div id="currencies-block-top">
		<form id="setCurrency" action="/travel/en/home/8-de-palm-island-trip-in-aruba.html?&amp;theme=theme2" method="post">
			<div class="current">
				<input type="hidden" name="id_currency" id="id_currency" value="">
            	<input type="hidden" name="SubmitCurrency" value="">
            	<label for="state-curr" aria-hidden="true"> 
            		<span class="cur-label hidden-sm hidden-xs">Currency :</span> 
            		<span class="iso_curr">USD</span> 
            		<i class="icon-angle-down"></i> 
            	</label>
        	</div>
        	<input v-on:click="show = !show" id="state-curr" type="checkbox" class="state-curr not-styling" style="display: none;">
        	<ul id="first-currencies" class="currencies_ul toogle_content">
            	<li v-for="(current, index) in currents"> 
					<a href="#" v-if="show" rel="nofollow" :title="current.title">{{current.name}}</a>
            	</li>
        	</ul>
		</form>
	</div>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      currents: [
        {name: 'USD', title: 'Dollar'},
        {name: 'EUR', title: 'Euro'},
        {name: 'PLN', title: 'Złoty'},
        {name: 'RUB', title: 'Ruble'},
        {name: 'CNY', title: 'Yuan'},
        {name: 'BRL', title: 'Real'},
        {name: 'CZK', title: 'Czech koruna'},
        {name: 'TRY', title: 'Lira'},
        {name: 'HUF', title: 'Forint'},
        {name: 'AED', title: 'United Arab Emirates dirham'}
      ]
    }
  }
}
</script>

<style>
	@import "./currencices/blockcurrencies.css";
</style>
