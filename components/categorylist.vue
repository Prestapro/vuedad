<template>
  <div class="category_list product_list grid row" style="opacity: 1;">
    <div class="inner-product-list">
        <productcontainer v-for="(prod, index, key) in listStore"
        :key="prod.id"
        :imgWindow="prod.iW" 
        :addHref="prod.aH" 
        :moreHref="prod.mH" 
        :newProp="prod.nP" 
        :sale="prod.sale" 
        :titleBottom="prod.tB" 
        :altWindow="prod.aW" 
        :newHref="prod.nH" 
        :saleHref="prod.sH" 
        :compareHref="prod.cH" 
        :propHref="prod.pH" 
        :propTitle="prod.pT" 
        :propBottom="prod.pB" 
        :propDescription="prod.pD" 
        :propPrice="prod.pP" 
        :propPriceSup="prod.pPS" 
        :propFlags="prod.pF" 
        :routeProduct="prod.path + '/' + index"></productcontainer>
    </div>
</div>
</template>

<script>
  export default {
    computed: {
      listStore () {
        return this.$store.state.listStore
      }
    }
  }
</script>

<style>
  @import './categorylist/css/product-items.css';
</style>
