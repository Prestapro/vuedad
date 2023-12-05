<template>
<div class="banner row" id="banners">
    <div class="container">
        <div class="row">
            <div class="custombanners displayCustomBanners3" data-hook="displayCustomBanners3">
                <div class="cb-wrapper" data-wrapper="2">
                    <div class="banner-item banner-top col-sm-4 col-xs-12">
                        <div class="banner-item-content autofocus ">
                            <a class="wrap-scale" href="http://addons.prestashop.com/ru/travel/17643-travely-.html"> <img src="./bannerrow/img/1.jpg" class="banner-img">
                                <div class="custom-html">
                                    <div class="wrap-text">
                                        <h3>{{banners.first.name}}</h3>
                                        <p>{{banners.first.price}}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="banner-item banner-top col-sm-4 col-xs-12">
                        <div class="banner-item-content autofocus ">
                            <a class="wrap-scale" href="http://addons.prestashop.com/ru/travel/17643-travely-.html"> <img src="./bannerrow/img/2.jpg" class="banner-img">
                                <div class="custom-html">
                                    <div class="wrap-text">
                                        <h3>{{banners.second.name}}</h3>
                                        <p>{{banners.second.price}}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="banner-item banner-item banner-top col-sm-4 col-xs-12">
                        <div class="banner-item-content autofocus ">
                            <div class="wrap-scale"> <img src="./bannerrow/img/3.jpg" class="banner-img">
                                <div class="custom-html">
                                    <div class="wrap-text">
                                        <h3>{{banners.third.name}}</h3>
                                        <p>{{banners.third.price}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cb-wrapper features-wrapper" data-wrapper="3">
                    <div class="banner-item banner-item_feature col-xs-12">
                        <div class="banner-item-content autofocus ">
                            <div class="custom-html">
                                <h2 class="title_main_section">{{banners.subBlock.name}}</h2>
                                <h3 class="undertitle_main">{{banners.subBlock.text}}</h3></div>
                        </div>
                    </div>
                    <div class="banner-item banner-item_feature col-sm-4 col-xs-12">
                        <div class="banner-item-content autofocus ">
                            <div class="custom-html">
                                <div class="icon-wrap first-style"><i class="icon-diamond-one">.</i> <i class="icon-suitcase">.</i></div>
                                <h4>{{banners.cell1.name}}</h4>
                                <p>{{banners.cell1.text}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="banner-item banner-item_feature col-sm-4 col-xs-12">
                        <div class="banner-item-content autofocus ">
                            <div class="custom-html">
                                <div class="icon-wrap third-style"><i class="icon-star-one-o">.</i> <i class="icon-plane">.</i></div>
                                <h4>{{banners.cell2.name}}</h4>
                                <p>{{banners.cell2.text}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="banner-item banner-item_feature col-sm-4 col-xs-12">
                        <div class="banner-item-content autofocus ">
                            <div class="custom-html">
                                <div class="icon-wrap second-style"><i class="icon-heart-o">.</i> <i class="icon-thumbs-up">.</i></div>
                                <h4>{{banners.cell3.name}}</h4>
                                <p>{{banners.cell3.text}}</p>
                            </div>
                        </div>
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
        banners:
        {
          first: {
            name: 'TURKEY',
            price: 'UP TO 25% OFF'
          },
          second: {
            name: 'ITALY',
            price: 'BEST PLACE FOR YOU'
          },
          third: {
            name: 'EGYPT',
            price: 'SIT DOLORE AMET'
          },
          subBlock: {
            name: 'SOME FEATURES',
            text: 'LOREM IPSUM DOLOR SIT AMET'
          },
          cell1: {
            name: 'LOREM IPSUM DOLOR',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          },
          cell2: {
            name: 'LOREM IPSUM DOLOR',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          },
          cell3: {
            name: 'LOREM IPSUM DOLOR',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          }
        }
      }
    }
  }
</script>

<style>
  @import './bannerrow/css/bx-styles.css';
</style>
