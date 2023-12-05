<template>
  <div id="languages-block-top" class="languages-block">
      <div class="current">
          <label for="state-lang" aria-hidden="true"> 
            <span class="cur-label hidden-sm hidden-xs">Language :</span> 
            <span class="iso_lang">en</span> 
            <i class="icon-angle-down"></i> 
          </label>
      </div>
      <input id="state-lang" type="checkbox" class="state-lang not-styling" style=" display: none;">
      <ul id="first-languages" class="languages-block_ul toogle_content">
      <li v-for="lang in languages" :class="">
        <a :href="lang.href" :title="lang.title"> <span> <img :src="lang.img" v-bind:alt="lang.alt" width="16" height="11">{{lang.name}}</span></a>
      </li>
      </ul>
    </div>
</template>

<script>
  export default {
    name: 'languages',
    data () {
      return {
        languages: [
          {
            name: 'English',
            title: 'English',
            alt: 'en',
            img: './../src/components/headerblock/languages/img/1.jpg',
            href: ''
          },
          {
            name: 'Français',
            title: 'Français (French)',
            alt: 'fr',
            img: '../src/components/headerblock/languages/img/2.jpg',
            href: ''
          },
          {
            name: 'Italiano',
            title: 'Italiano (Italian)',
            alt: 'it',
            img: './src/components/headerblock/languages/img/3.jpg',
            href: ''
          },
          {
            name: 'Nederlands',
            title: 'Nederlands (Dutch)',
            alt: 'nl',
            img: './src/components/headerblock/languages/img/4.jpg',
            href: ''
          },
          {
            name: 'Polish',
            title: 'Polish',
            alt: 'pl',
            img: './src/components/headerblock/languages/img/5.jpg',
            href: ''
          },
          {
            name: 'Deutsch',
            title: 'Deutsch',
            alt: 'de',
            img: './src/components/headerblock/languages/img/6.jpg',
            href: ''
          },
          {
            name: 'Estonian',
            title: 'Estonian',
            alt: 'et',
            img: './src/components/headerblock/languages/img/8.jpg',
            href: ''
          },
          {
            name: 'Chinese',
            title: 'Chinese',
            alt: 'zh',
            img: './src/components/headerblock/languages/img/10.jpg',
            href: ''
          },
          {
            name: 'Español',
            title: 'Español (Spanish',
            alt: 'es',
            img: './src/components/headerblock/languages/img/12.jpg',
            href: ''
          },
          {
            name: 'Czech',
            title: 'Czech',
            alt: 'cs',
            img: './src/components/headerblock/languages/img/15.jpg',
            href: ''
          },
          {
            name: 'Turkish',
            title: 'Turkish',
            alt: 'tr',
            img: './src/components/headerblock/languages/img/16.jpg',
            href: ''
          },
          {
            name: 'Finnish',
            title: 'Finnish',
            alt: 'fi',
            img: './src/components/headerblock/languages/img/17.jpg',
            href: ''
          },
          {
            name: 'Hungarian',
            title: 'Hungarian',
            alt: 'hu',
            img: './src/components/headerblock/languages/img/18.jpg',
            href: ''
          },
          {
            name: 'Português PT',
            title: 'Português PT (Portuguese)',
            alt: 'pt',
            img: './src/components/headerblock/languages/img/19.jpg',
            href: ''
          },
          {
            name: 'اللغة العربية',
            title: 'للغة العربية (Arabic)',
            alt: 'ar',
            img: './src/components/headerblock/languages/img/20.jpg',
            href: ''
          }
        ]
      }
    }
  }
</script>

<style>
  @import "./languages/css/blocklanguages.css";
</style>
