<template>
	<div class="footer_line_two col-xs-12">
    	<div class="container">
    	    <div class="row">
    	        <div class="custombanners displayFooter" data-hook="displayFooter" >
    	            <div class="cb-wrapper" data-wrapper="8">
    	                <div class="banner-item foot_block footer-block col-sm-3 col-xs-12">
                       		<div class="banner-item-content" @click="activeToggle">
                            	<div class="custom-html">
                                	<h4>About us</h4>
                                	<div class="toggle-footer">
                                    <img class="img-responsive" src="//prestademo.ru/travel/themes/travel/modules/custombanners/views/img/footer.jpg" alt="About us">
                                    <p>Lorem ipsum&nbsp;dolor&nbsp;sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.&nbsp;</p>
            	                    </div>
            	                </div>
            	            </div>
            	        </div>
            	    </div>
            	</div>

<!-- List menu -->
<ul class="blockcategories_footer footer-block col-xs-12 col-sm-3" @click="activeToggle">
  <h4>Categories</h4>
  <div class="category_footer toggle-footer">
    <div class="list">
      <li :class="" v-for="(place, index, key) in places">
		    <span @click="mobileInit(show)" :key="place.id" class="menu-mobile-grover" :class="" :style="{ 'visibility': place.vis }"></span>
    	  <a :href="place.href" :title="place.name">{{place.name}}</a>
        <ul v-show="show" class="clearfix submenu-container first-in-line-xs menu-mobile" style=" display: block;"> 
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
    </div>
  </div>               
</ul>

<!-- Information list-->
<section class="footer-block col-xs-12 col-sm-3" id="block_various_links_footer" @click="activeToggle">
  <h4>Information</h4>
    <ul class="toggle-footer">
        <li class="item" v-for="info in infoFooter"> 
        	<a :href="info.href" :title="info.title">{{ info.name }}</a>
        </li>
    </ul>
</section>

<!-- Account list-->
<section class="footer-block col-xs-12 col-sm-3" @click="activeToggle">
  <h4><a href="https://prestademo.ru/travel/en/my-account?live_configurator_token=&amp;id_shop=&amp;id_employee=&amp;theme=&amp;theme_font=" title="Manage my customer account" rel="nofollow">My account</a></h4>
  <div class="block_content toggle-footer">
	  <ul class="toggle-footer">
      <li class="item" v-for="acc in accFooter"> 
        <a :href="acc.href" :title="acc.title">{{ acc.name }}</a>
      </li>
    </ul>
  </div>
</section>

<!-- theme setings button (rewrite option list)-->
<div id="gear-right" @click="geer" style="left: 0px;"> 
  <i class="fa icon-cogs icon-2x icon-light"></i>
</div>
<form action="" method="post">
  <div id="tool_customization" style="left: -215px;">
    <p> The customization tool allows you to make color and font changes in your theme.
    <br><br> 
      <span> Only you can see this tool, because as you are currently connected to your back-office as an admin; your visitors will not see it. </span></p>
    <div class="list-tools">
      <p id="theme-title"> Theme color <i @click="themeCaret" class="pull-right" :class="{'icon-caret-up': themeCaretUp, 'icon-caret-down': themeCaretDown}"></i></p>
    </div>
    <ul id="color-box" style="display: none;" v-show="showColor">
      <li  v-for="theme in themes" :class="theme.id">
      	<div class="color-theme1 color1"></div>
        <div class="color-theme2 color2"></div>
      </li>
   	</ul>
   	<div class="list-tools">
      <p id="font-title"> Font <i @click="fontCaret" class="pull-right" :class="{'icon-caret-up': fontCaretUp, 'icon-caret-down': fontCaretDown}"></i></p>
    </div>
    <div id="font-box" style="display: none;" v-show="showFont">
      <p>Title font</p><i class="toggle"></i>
      <div class="chooseFont">
        <select name="font" id="font" class="font-list wrapped" v-model="selectFont" >
          <option disabled value="">Choose a font</option>
          <option v-for="option in optionFont" v-bind:value="option.value" class="option">{{ option.text }}</option>
        </select>
      </div>
    </div>
  </div>
</form>	

<!-- cooki button -->
<div class="cookie-notification bottom" style="display: none;">
    <div class="cookie-notification__close icon-close-o"></div>
    <form action="https://prestademo.ru/travel/en/module/cookienotification/accept?accept_cookies=1&amp;redirect_url=http%253A%252F%252Fprestademo.ru%252Ftravel%252Fen%252F%253F" method="post" class="cookie-accept-form">
        <p> Our site uses cookies to give you the best user experience. By continuing you accept to receive them. <span class="button-holder"> <button class="btn button white_btn btn-default child" type="submit">OK</button> </span></p>
    </form>
</div>

<!-- copiright-->
<div class="copyright col-xs-12">
    <p class="copyright_text">© 2017 Created By Prestapro. All right reserved</p>
</div>

        </div>
    </div>
</div>
</template>


<script>
  export default {
    data () {
      return {
        optionFont: [
          { text: 'Open Sans', value: 'font1' },
          { text: 'Josefin Slab', value: 'font2' },
          { text: 'Arvo', value: 'font3' },
          { text: 'Lato', value: 'font4' },
          { text: 'Volkorn', value: 'font5' },
          { text: 'Abril Fatface', value: 'font6' },
          { text: 'Ubuntu', value: 'font7' },
          { text: 'PT Sans', value: 'font8' },
          { text: 'Old Standard TT', value: 'font9' },
          { text: 'Droid Sans', value: 'font10' }
        ],
        selectFont: '',
        showColor: false,
        showFont: false,
        themeCaretUp: true,
        themeCaretDown: false,
        fontCaretUp: true,
        fontCaretDown: false,
        show: false,
        selected: '',
        themes: [{id: 'theme1'}, {id: 'theme2'}, {id: 'theme3'}, {id: 'theme4'}, {id: 'theme5'}, {id: 'theme6'}, {id: 'theme7'}, {id: 'theme8'}, {id: 'theme9'}],
        places: [
          {
            name: 'Winter',
            title: 'Winter',
            href: '',
            child: [
              {
                name: 'Santa Breaks',
                title: 'Santa Breaks',
                href: ''
              },
              {
                name: 'Magical Lapland',
                title: 'Magical Lapland',
                href: '',
                child: [
                  {
                    name: 'Levi',
                    title: 'Levi',
                    href: ''
                  },
                  {
                    name: 'Saariselkä',
                    title: 'Saariselkä',
                    href: ''
                  },
                  {
                    name: 'Ylläs',
                    title: 'Ylläs',
                    href: ''
                  }
                ]
              },
              {
                name: 'Northern Lights Adventure Weeks',
                title: 'Northern Lights Adventure Weeks',
                href: ''
              },
              {
                name: 'Northern Norway',
                title: 'Northern Norway',
                href: ''
              },
              {
                name: 'Lapland Insiders Guides',
                title: 'Lapland Insiders Guides',
                href: ''
              }
            ]
          },
          {
            name: 'Magical Lapland',
            title: 'Magical Lapland',
            href: '',
            child: [
              {
                name: 'Levi',
                title: 'Levi',
                href: ''
              },
              {
                name: 'Saariselkä',
                title: 'Saariselkä',
                href: ''
              },
              {
                name: 'Ylläs',
                title: 'Ylläs',
                href: ''
              },
              {
                name: 'Magical Lapland',
                title: 'Magical Lapland',
                href: ''
              }
            ]
          },
          {
            name: 'Family Holidays',
            title: 'Family Holidays',
            href: '',
            child: [
              {
                name: 'Family Ski Holidays',
                title: 'Family Ski Holidays',
                href: ''
              },
              {
                name: 'Family Summer Holidays',
                title: 'Family Summer Holidays',
                href: ''
              },
              {
                name: 'Santa Breaks',
                title: 'Santa Breaks',
                href: ''
              }
            ]
          },
          {
            name: 'Buy Theme',
            title: 'Buy Theme',
            href: 'http://addons.prestashop.com/en/travel/17643-travely-.html',
            vis: 'hidden'
          }
        ],
        infoFooter: [
          {
            name: 'Specials',
            title: 'Specials',
            href: ''
          },
          {
            name: 'New products',
            title: 'New products',
            href: ''
          },
          {
            name: 'Best sellers',
            title: 'Best sellers',
            href: ''
          },
          {
            name: 'Our stores',
            title: 'Our stores',
            href: ''
          },
          {
            name: 'Contact us',
            title: 'Contact us',
            href: ''
          },
          {
            name: 'Terms and conditions of use',
            title: 'Terms and conditions of use',
            href: ''
          },
          {
            name: 'About us',
            title: 'About us',
            href: ''
          },
          {
            name: 'My account',
            title: 'My account',
            href: ''
          }
        ],
        accFooter: [
          {
            name: 'My orders',
            title: 'My orders',
            href: ''
          },
          {
            name: 'My credit slips',
            title: 'My credit slips',
            href: ''
          },
          {
            name: 'My addresses',
            title: 'My addresses',
            href: ''
          },
          {
            name: 'My personal info',
            title: 'My personal info',
            href: ''
          }
        ]
      }
    },
    mounted: function () {
      let el = document.querySelectorAll('.toggle-footer')
      if (window.innerWidth > 768) {
        for (var i = 0; i < 5; i++) {
          el[i].classList.toggle('open')
        }
      }
    },
    methods: {
      geer () {
        let elTool = document.getElementById('gear-right'),
          elPanel = document.getElementById('tool_customization')
        if (elTool.style.left == '0px') {
          elTool.style.left = '215px'
          elPanel.style.left = '0px'
        } else {
          elTool.style.left = '0px'
          elPanel.style.left = '-215px'
        }
      },
      activeToggle (e) {
        let el = e.target,
          elNext = el.nextElementSibling
        if (e) {
          el.classList.toggle('active')
          elNext.classList.toggle('open')
        }
      },
      themeCaret () {
        this.themeCaretUp = !this.themeCaretUp
        this.themeCaretDown = !this.themeCaretDown
        this.showColor = !this.showColor
      },
      fontCaret () {
        this.fontCaretUp = !this.fontCaretUp
        this.fontCaretDown = !this.fontCaretDown
        this.showFont = !this.showFont
      }
    }
  }
</script>

<style>
	@import './two/css/live_configurator.css';
  @import './two/css/fontello-custom.css';
.chooseFont .option {
    box-sizing: border-box;
    float: none !important;
    padding: 6px 10px;
    line-height: 1;
    background: white;
    color: #4a4a4a;
    word-wrap: break-word;
    width: 100%;
    font-size: 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    border-bottom: 1px solid #dedede;
}
.chooseFont .option:hover {
    background: #db7100;
    color: white;
}
</style>
