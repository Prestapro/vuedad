<template>
	<div class="footer_line_one col-xs-12">
    	<div class="container">
        	<div class="row">
        	    <div id="newsletter_block_left" class="pro-newsletter-block col-sm-6 col-xs-12">
        	        <h4 class="text_upper hidden-xs hidden-sm hidden-md"> <span>Newsletter</span></h4>
        	        <div class="block_content">
        	            <form action="https://prestademo.ru/travel/en/" method="post">
        	                <div class="form-group">
        	                    <input class="inputNew form-control white newsletter-input" id="newsletter-input" type="text" name="email" size="18" value="Enter your e-mail">
                            	<button type="submit" name="submitNewsletter" class="sub_btn icon-big-right"> </button>
                            <input type="hidden" name="action" value="0">
                        </div>
                    </form>
                </div>
            </div>
			<section id="prosocial_block" class="social-block col-sm-6 col-xs-12">
				<h4 class="hidden-xs hidden-sm hidden-md text_upper">Social links</h4>
				<ul>
					<li :class="soc.class" v-for="soc in social">
						<a target="_blank" :href="soc.href"> <i :class="soc.icon"></i> </a>
					</li>
				</ul>
			</section>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        social: [{
          class: 'youtube',
          icon: 'fa icon-youtube'
        },
        {
          class: 'facebook',
          icon: 'fa icon-facebook',
          href: '#'
        },
        {
          class: 'twitter',
          icon: 'fa icon-twitter',
          href: '#'
        },
        {
          class: 'instagramm',
          icon: 'fa icon-instagram',
          href: '#'
        },
        {
          class: 'vimeo',
          icon: 'icon-vimeo',
          href: '#'
        },
        {
          class: 'dribble',
          icon: 'fa icon-dribbble',
          href: '#'
        }
        ]
      }
    }
  }
</script>

<style>
/* color schemes */
#newsletter_block_left h4 {
  font-family: 'latosemibold', 'Open Sans';
  font-weight: 600;
  font-size: 18px;
  color: white;
  display: inline-block;
  line-height: 1.4;
  padding-top: 12px;
  float: left; }
#newsletter_block_left .block_content {
  display: inline-block;
  vertical-align: middle;
  float: right;
  padding: 6px 0 0; }
#newsletter_block_left #newsletter-input {
  width: 360px;
  padding: 0 10px;
  max-width: none; }
#newsletter_block_left .sub_btn {
  background: none;
  border: none;
  outline: none;
  color: white;
  position: absolute;
  right: 10px;
  top: 0;
  bottom: 0;
  margin: auto 0;
  font-size: 17px;
  width: auto; }
  #newsletter_block_left .sub_btn:before {
    display: inline-block;
    line-height: 40px; }
#newsletter_block_left .form-group {
  padding-top: 0;
  margin: 0;
  position: relative; }
#newsletter_block_left .form-error .sub_btn {
  color: #f1323f; }
@media (max-width: 1199px) {
  #footer .pro-newsletter-block h4 {
    font-size: 15px;
    padding: 15px 5px 0 0; }
  #footer .pro-newsletter-block .form-group #newsletter-input {
    width: 260px;
    width: 100%; }

  .pro-newsletter-block .block_content {
    width: 100%;
    float: left; } }
.alert.alert-newsletter {
  margin: 0;
  border-radius: 0;
  position: relative; }

.social-block {
  text-align: right;
  padding-top: 7px; }
  .social-block.social-block-footer {
    float: right;
    padding-left: 15px;
    padding-right: 15px; }
    @media (max-width: 768px) {
      .social-block.social-block-footer {
        width: 100%; } }

.social-block li {
  display: inline-block;
  margin-left: 18px;
  margin-bottom: 4px; }

.social-block li a {
  display: block;
  width: 36px;
  height: 36px;
  border: 1px solid white;
  text-align: center;
  line-height: 1.9;
  font-size: 18px;
  color: white;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  border-radius: 2px;
  -webkit-transition: all .5s ease;
  -moz-transition: all .5s ease;
  -o-transition: all .5s ease;
  transition: all .5s ease; }

.social-block li a:hover {
  border-radius: 50%;
  -webkit-transform: rotate(360deg);
  transform: rotate(360deg);
  background: #db7100;
  color: white !important;
  border-color: #db7100; }

.social-block h4 {
  font-family: 'latosemibold', 'Open Sans';
  font-weight: 600;
  font-size: 18px;
  color: white;
  display: inline-block;
  vertical-align: middle;
  line-height: 1.3;
  margin: 0; }

.social-block ul {
  display: inline-block;
  vertical-align: middle; }

@media (max-width: 1199px) {
  #footer .social-block h4 {
    font-size: 15px;
    padding: 0 5px 0 0; } }
@media (max-width: 991px) {
  .social-block ul {
    width: 100%; } }
@media (max-width: 768px) {
  .social-block {
    padding-top: 20px; }

  .social-block li:first-child {
    margin-left: 0; }

  .social-block ul {
    text-align: center; }

  .social-block li {
    margin-left: 4px; } }
@media (max-width: 480px) {
  .social-block li a {
    width: 32px;
    height: 32px;
    line-height: 2;
    font-size: 15px; } }
	.footer_line_one {background-image:url(./one/img/55e99e090050f.jpg)}
	@import './one/css/contact-form.css';
	@import './one/css/history.css';

</style>
