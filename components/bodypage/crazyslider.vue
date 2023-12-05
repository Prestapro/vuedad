<template>
  <div>
    <div  id="viewFull" v-for="number in [currentNumber]" transition="fade">
      <div @click="prev" class="tp-leftarrow tparrows hesperiden"  style="top: 25%; transform: matrix(-0.7071, 0.70711, -0.70711, -0.7071, 40, -20); left: 0px;"></div>
      <div @click="next" class="tp-rightarrow tparrows hesperiden" style="top: 25%; transform: matrix(-0.7071, 0.70711, -0.70711, -0.7071, -80, -20); left: 100%;"></div>
      <img :src="images[Math.abs(currentNumber) % images.length]" @mouseover="stopRotation" @mouseout="startRotation"/>
    </div>
  </div>
</template>

<script>
	export default {
  data () {
    return {
      images: ['./src/components/bodypage/crazyslyder/img/1.jpg', './src/components/bodypage/crazyslyder/img/2.jpg', './src/components/bodypage/crazyslyder/img/3.jpg'],
      currentNumber: 0,
      timer: null
    }
  },
  mounted: function () {
    this.startRotation()
  },
  methods: {
    startRotation: function () {
      this.timer = setInterval(this.next, 5000)
    },
    stopRotation: function () {
      clearTimeout(this.timer)
      this.timer = null
    },
    next: function () {
      this.currentNumber += 1
    },
    prev: function () {
      this.currentNumber -= 1
    }
  }
}
</script>

<style>
@media (max-width: 769px) {
#viewFull {
  height: 100vh;
  width: 100%;
  overflow: hidden;
}
img {
  height: 100%;
  display: block;
  min-width: 100%;
  margin-right: 0px !important; 
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
}
}

.fade-transition {
  transition: all 0.8s ease;
  overflow: hidden;
  visibility: visible;
  opacity: 1;
  position: absolute;
}
.fade-enter, .fade-leave {
  opacity: 0;
  visibility: hidden;
}

@media only screen and (min-width: 770px) and (max-width: 1024px){
#viewFull {
  height: 100vh;
  overflow: hidden;
}
img {
  height: 115%;
  display: block;
  margin: auto; 
   }
}

@media (min-width: 1025px) {
#viewFull {
  height: 100vh;
  overflow: hidden;
}
img {
  height: 110%;
  min-width: 100%;
  display: block;
  margin: auto; 
  background-size: cover;
  background-repeat: no-repeat;
}
.tparrows {
  cursor: pointer;
  background: black;
  background: rgba(0, 0, 0, 0.5);
  width: 40px;
  height: 40px;
  position: absolute;
  display: block;
  z-index: 1000; }

.tparrows:hover {
  background: black; }

.tparrows:before {
  font-family: "revicons";
  font-size: 15px;
  color: white;
  display: block;
  line-height: 40px;
  text-align: center; }

.tp-leftarrow:before {
    content: '\e824'; }

.tp-rightarrow:before {
  content: '\e825'; }

.tparrows.hesperiden {
  background: none !important;
  border: 1px solid transparent;
  color: white;
  height: 40px;
  width: 40px;
  z-index: 100;
  cursor: pointer;
  -webkit-transform: rotate(135deg);
  -moz-transform: rotate(135deg);
  -o-transform: rotate(135deg);
  -ms-transform: rotate(135deg);
  transform: rotate(135deg);
  -webkit-transition: border-color .5s ease-out, opacity .5s ease-out;
  -o-transition: border-color .5s ease-out, opacity .5s ease-out;
  -moz-transition: border-color .5s ease-out, opacity .5s ease-out;
  transition: border-color .5s ease-out, opacity .5s ease-out;
  -moz-border-radius: 0;
  -webkit-border-radius: 0;
  border-radius: 0; }
   .tparrows.hesperiden:before {
    display: none; }
   .tparrows.hesperiden.tp-leftarrow {
    border-right-color: white;
    border-bottom-color: white; }
     .tparrows.hesperiden.tp-leftarrow:hover {
      border-right-color: #ff8400;
      border-bottom-color: #ff8400; }
   .tparrows.hesperiden.tp-rightarrow {
    border-left-color: white;
    border-top-color: white; }
     .tparrows.hesperiden.tp-rightarrow:hover {
      border-left-color: #ff8400;
      border-top-color: #ff8400; }
}
</style>
