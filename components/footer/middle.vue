<template>
	<div class="footer_line_middle col-xs-12">
    	<div class="custombanners displayCustomBanners1" data-hook="displayCustomBanners1">
    	    <div class="cb-wrapper" data-wrapper="7">
    	        <div class="banner-item -map fa-close-o js-map">
    	            <div class="banner-item-content ">
    	                <div class="custom-html">
    	                    <p>
    	                        <iframe width="600" height="570" style="border: 0;" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2624.99162985171!2d2.294481!3d48.85837!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2z0K3QudGE0LXQu9C10LLQsCDQsdCw0YjQvdGP!5e0!3m2!1sru!2sru!4v1427409319832" frameborder="0"></iframe>
    	                    </p>
    	                </div>
    	            </div>
    	        </div>
    	    </div>
    	</div>
		<div id="block_contact_infos" class="pro-block-contacts">
        <h2 class="title_main_section title_contacts_over">{{info.header2}}</h2>
        <h3 class="title_contacts_over undertitle_main"> {{info.header3}}</h3>
        <p class="custom-text">{{info.discription}}</p>
        <ul>
            <li class="address_item"> <span class="title_contact_item icon-map-marker">Address:</span> <span class="content_item"> {{info.address}} </span></li>
            <li class="phones_item"> <span class="title_contact_item icon-phone-four">Phone:</span> <span class="content_item"> {{info.phone1}} </span> <span class="content_item"> {{info.phone2}} </span></li>
            <li class="email_item"> <span class="title_contact_item icon-paper-plane">E-mail:</span> <span class="content_item"> <a href="mailto:%74%72%61%76%65%6c%79@%65%78%61%6d%70%6c%65.%63%6f%6d">{{info.mail}}</a> </span></li>
        </ul>
    	</div>
	</div>
</template>

<script>
export default {
  data () {
    return {
      info: {
        header2: 'Contacts',
        header3: 'Travel PrestaShop Theme',
        discription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        address: 'Hyatt 48 Lex, 517 Lexington Ave New York, NY 10017',
        phone1: '+44 458 889 47 48',
        phone2: '+44 458 889 47 58',
        mail: 'travely@example.com'
      }
    }
  }
}
</script>

<style>
  @import './middle/css/problockcontactinfos.css'
</style>
