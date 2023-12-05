<template>
  <div id="block_top_menu" class="sf-contener clearfix col-md-8 col-xs-12">
    <label for="menu-label" class="wrapper-cat-title">
        <div class="cat-title"></div>
    </label>
    <ul class="sf-menu clearfix menu-content" >
      <li class="" v-for="(place, index) in listMenu" @click="showlist(index, $event)" > 
        <span @click="mobileInit($event)" class="menu-mobile-grover" :class="" :style="{ 'visibility': place.vis }"></span>
        <router-link  :href="place.href" :to="place.page" :title="place.name" v-on:mouseover.native="showBlock(index, $event)" v-on:mouseout.native="closeBlock(index, $event)" @click.native="closeChesk" >{{place.name}}</router-link>
        <ul id="showhide" class="clearfix submenu-container first-in-line-xs menu-mobile" style=" display: none;" @mouseout="hideBlock(index)"> 
          <li  v-for="(sub, index) in place.child">
            <a :href="sub.href" :title="sub.name">{{sub.name}}</a>
            <ul>
              <li v-for="third in sub.child">
                <a :href="third.href" :title="third.name">{{third.name}}</a>
              </li>
            </ul> 
          </li>                 
        </ul>
      </li>                 
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        toggblock: ''
      }
    },
    computed: {
      listMenu () {
        return this.$store.state.listMenu
      }
    },
    methods: {
      closeChesk () {
        let el = document.getElementById('menu-label')
        return el.checked = false
      },
      mobileInit (ev, show) {
        if (ev) {
          this.show = !show
          return ev.target.classList.toggle('active')
        }
      },
      showlist (i, ev) {
        let el = document.querySelectorAll('#showhide')
        if (el[i].style.display === 'none') {
          return el[i].style.display = 'block'
        } else {
          el[i].style.display = 'none'
        }
      },
      closeBlock (i, ev) {
        let el = document.querySelectorAll('#showhide')
        if (ev.relatedTarget.tagName == 'A') {
          return el[i].style.display = 'none'
        }
      },
      showBlock (i, ev) {
        let el = document.querySelectorAll('#showhide')
        if (window.innerWidth > 1024) {
          this.toggblock = i
          for (; i < 3;) {
            if (el[i].style.display === 'none') {
              return el[i].style.display = 'block'
            } else {
              return el[i].style.display = 'none'
            }
          }
        }
      },
      hideBlock (i) {
        /*  postfix modificator @mouseout.stop="hideblock(index)" not working
            this bypass code  */
        var propagation = showhide[i]
        function isInside (node, target) {
          for (; node != null; node = node.parentNode) {
            if (node == target) return true
          }
        }
        if (window.innerWidth > 1024) {
          propagation.addEventListener('mouseout', function (event) {
            if (!isInside(event.relatedTarget, propagation)) {
              propagation.style.display = 'none'
            }
          })
        }
      }
    }
  }
</script>
