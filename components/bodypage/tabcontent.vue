<template>
<div class="tab-content">
  <div id="bestsellers_2" class="easycarousel tab-pane active">
    <div class="carousel-description">
      <h2 class="title_main_section">Our tours</h2>
    </div>
    <div class="block_content block_content_carousel grid">
      <div class="bx-wrapper" style="margin: 0px auto; max-width: 100%;">
        <div class="bx-viewport" style="width: 100%; overflow: hidden; position: relative;">
          <div class="c_container carousel rendered items-num-3" style="width: 1415%; position: relative; transition-duration: 0s;" :style="{'transform': 'translatex' + '(-' + (counter*widthView - correct) + 'px' + ')'}"> 
            <blockcloneleft v-for="n in counter" :key="cntr" :style="{ 'width': widthView + 'px'}"></blockcloneleft>
            <productcarusel v-for="(prod, index, key) in listStore"
            :style="{ 'width': widthView + 'px'}"
            :key="prod"
            :imgWindow="prod.iW" 
            :addHref="prod.aH" 
            :moreHref="prod.mH" 
            :newProp="prod.nP" 
            :sale="prod.sale" 
            :titleBottom="prod.tB" 
            :altWindow="prod.aW" 
            :newHref="prod.nH" 
            :saleHref="prod.sH" 
            :propHref="prod.pH" 
            :propTitle="prod.pT" 
            :propBottom="prod.pB" 
            :propPrice="prod.pP" 
            :propPriceSup="prod.pPS" 
            :routeProduct="prod.path + '/' + index"></productcarusel>
            <blockcloneright v-for="n in counter" :key="cntr" :style="{ 'width': widthView + 'px'}"></blockcloneright>
          </div>
        </div>
        <div class="bx-controls bx-has-controls-direction" v-show="!mobileCheck">
          <div class="bx-controls-direction">
            <a class="bx-prev" href="" @click.prevent="prev">Prev</a>
            <a class="bx-next" href="" @click.prevent="next">Next</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      index: 0
    }
  },
  methods: {
    prev () {
      this.index--
    },
    next () {
      this.index++
    }
  },
  computed: {
    counter () {
      let search = window.innerWidth,
        c
      switch (true) {
        case search < 480:
          c = 1
          break
        case search < 768:
          c = 2
          break
        case search < 1024:
          c = 2
          break
        case search > 1024:
          c = 3
          break
        case search > 1200:
          c = 3
          break
      }
      return c
    },
    widthView () {
      let search = window.innerWidth,
        w
      switch (true) {
        case search < 320:
          w = 480
          break
        case search < 480:
          w = 384
          break
        case search < 768:
          w = 319
          break
        case search < 1024:
          w = 340
          break
        case search < 1200:
          w = 296
          break
        case search > 1200:
          w = 365
          break
      }
      return w
    },
    correct () {
      let search = window.innerWidth,
        corr
      switch (true) {
        case search < 768:
          corr = 2
          break
        case search < 1024:
          corr = 15
          break
        case search < 1200:
          corr = 31
          break
        case search > 1200:
          corr = 30
          break
      }
      return corr
    },
    mobileCheck () {
      if (navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
      ) {
        return true
      } else {
        return false
      }
    },
    list () {
      return this.$store.state.listStore
    },
    listStore () {
      let off = Math.abs(this.index) % this.list.length
      return this.list.slice(off)
    }
  }
}
</script>

<style>
  @import './tabcontent/css/carousel.css';
  @import './tabcontent/css/fronti.css';
</style>
