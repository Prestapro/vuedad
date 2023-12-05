<template>
	<div class="custombanners displayHome" data-hook="displayHome">
    <div class="cb-wrapper" data-wrapper="5">
        <div class="banner-item">
            <div class="banner-item-content ">
                <div class="custom-html">
                    <div id="videopromowrap">
                       <video  ref="videoRef" width="auto" height="auto"   preload="none" id="videoIn" > Your browser does not support the <code>video</code> element.</video>
                        <br>
                        <div class="poster-video"></div>
                        <div class="wrap_descr_video" @click="goPlay">
                            <h2 class="title_main_section white_clr">{{promo.head}}</h2>
                            <h3 class="undertitle_main descrition_main_section white_clr">{{promo.discription}}</h3>
                            <div class="wrap_button_video">
                            	<span id="play" @click="goPlay" class="button_down"> 
                            		<strong><em class="icon-play" @click="goPlay">.</em></strong> </span>
                            </div> 
                            <span id="stop" class="button_down"> 
                            	<strong><em class="icon-stop">.</em></strong> 
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="banner-item banner_promo container">
            <div class="banner-item-content ">
                <div class="custom-html">
                    <h2 class="title_main_section">{{promo.head2}}</h2>
                    <h3 class="undertitle_main descrition_main_section">{{promo.discription2}}</h3>
                    <p>{{promo.text}}</p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
	export default {
  name: 'displayVideo',
  mounted: function () {
    this.$refs.videoRef.src = '//prestademo.ru/videos/travel.mp4'
    this.$refs.videoRef.poster = './src/components/bodypage/displayhome/preview.jpg'
  },
  methods: {
    goPlay () {
      if (videopromowrap.classList == '') {
        videopromowrap.classList.add('play')
        videoIn.play()
      } else if (videopromowrap.classList == 'play') {
        videopromowrap.classList.remove('play')
        videoIn.pause()
      }
    }
  },
  data () {
    return {
      promo: {
        head: 'PROMOTIONAL VIDEO',
        discription: 'Lorem ipsum dolor sit amet',
        head2: 'Lorem ipsum dolor',
        discription2: 'Lorem ipsum dolor sit amet',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }
    }
  }
}
</script>

<style>
  @import './displayhome/css/front.css';
</style>
