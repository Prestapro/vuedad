<template>
  <div class="wrap_cart col-md-2 col-xs-6 clearfix">
    <div class="shopping_cart">
       <a class="icon-shopping-cart"> <b>Your Cart</b> 
        <span class="ajax_cart_quantity unvisible" style="display: none;">{{cart.quantity}}</span> 
        <span class="ajax_cart_product_txt unvisible" style="display: none;">Product</span> 
        <span class="ajax_cart_product_txt_s unvisible" style="display: none;">Products</span> 
        <span class="ajax_cart_total unvisible" style="display: none;">{{cart.total}}</span> 
        <span class="ajax_cart_no_product" style="display: inline-block;">(empty)</span> 
       </a>
        <label class="mobile-btn icon-shopping-cart" @click="active($event)"> </label>
        <div id="mobCheckOut" class="cart_block block exclusive"  style="">
            <div class="block_content">
                <div class="cart_block_list">
                    <p class="cart_block_no_products"> No products</p>
                    <div class="cart-prices">
                        <div class="cart-prices-line first-line"> <span class="unvisible"> Shipping </span> <span class="price cart_block_shipping_cost ajax_cart_shipping_cost unvisible">To be determined</span></div>
                        <div class="cart-prices-line last-line"> <span>Total</span> <span class="price cart_block_total ajax_block_cart_total">{{cart.total}}</span></div>
                    </div>
                    <p class="cart-buttons"> <a id="button_order_cart" class="white_btn btn btn-default button button-small" :href="cart.checkHref" :title="cart.checkTitle" rel="nofollow"> {{cart.checkName}} </a></p>
                    <ul class="links">
                        <li><a class="links_account" :href="cart.myAccHref" :title="cart.myAccTitle" rel="nofollow"><span>{{cart.myAccName}}</span></a></li>
                        <li><a class="links_wishlist" :href="cart.wishlistHref" :title="cart.wishlistTitle"> {{cart.wishlistName}} </a></li>
                        <li><a class="links_checkout" :href="cart.check2Href" :title="cart.check2Title" rel="nofollow"> {{cart.check2Name}} </a></li>
                        <li> <a class="links_in" :href="cart.signHref" rel="nofollow" :title="cart.signTitlet"> {{cart.signName}} </a></li>
                    </ul>
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
        cart: {
          quantity: '0',
          total: '0',
          checkName: 'Check out',
          checkHref: '',
          checkTitle: 'Check out',
          myAccName: 'My account',
          myAccHref: '',
          myAccTitle: 'View my customer account',
          wishlistName: 'Wishlists',
          wishlistHref: '',
          wishlistTitle: 'My wishlists',
          check2Name: 'Checkout',
          check2Href: '',
          check2Title: 'Proceed to checkout',
          signName: 'Sign in',
          signHref: '',
          signTitle: 'Log in to your customer account'
        }
      }
    },
    methods: {
      active (e) {
        if (e) {
          return mobCheckOut.classList.toggle('active')
        }
      }
    }
  }
</script>


<style>
  @import './wrapcart/css/layer-caroucel.css';
  @import './wrapcart/css/block.css';
  @import './wrapcart/css/blockcart.css';
</style>
