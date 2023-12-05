<template>
<div>
    <div id="layer_cart">
        <div class="clearfix">
            <div class="layer_cart_product col-xs-12 col-md-6">
                <span class="cross icon-close-o" title="Close window"></span>
                <h2> Product successfully added to your shopping cart</h2>
                <div class="product-image-container layer_cart_img"></div>
                <div class="layer_cart_product_info">
                    <span id="layer_cart_product_title" class="product-name"></span>
                    <span id="layer_cart_product_attributes"></span>
                    <div>
                        <strong class="dark">Quantity</strong>
                        <span id="layer_cart_product_quantity"></span>
                    </div>
                    <div>
                        <strong class="dark">Total</strong>
                        <span id="layer_cart_product_price"></span>
                    </div>
                </div>
            </div>
            <div class="layer_cart_cart col-xs-12 col-md-6">
                <h2>
                    <span class="ajax_cart_product_txt_s unvisible"> There are <span class="ajax_cart_quantity">0</span> items in your cart. </span>
                    <span class="ajax_cart_product_txt "> There is 1 item in your cart. </span>
                </h2>
                <div class="layer_cart_row">
                    <strong class="dark unvisible"> Total shipping&nbsp; </strong>
                    <span class="ajax_cart_shipping_cost unvisible"> To be determined </span>
                </div>
                <div class="layer_cart_row">
                    <strong class="dark"> Total </strong>
                    <span class="ajax_block_cart_total"></span>
                </div>
                <div class="button-container">
                    <span class="continue btn btn-default button exclusive-medium" title="Continue shopping">
                        <span><i class="icon-chevron-left left"></i>Continue shopping </span>
                    </span>
                    <a class="btn btn-default button button-medium" href="" title="Proceed to checkout" rel="nofollow">
                        <span> Proceed to checkout<i class="icon-chevron-right right"></i></span>
                    </a>
                </div>
            </div>
        </div>
        <div class="crossseling"></div>
    </div>
    <div class="layer_cart_overlay"></div>
</div>
</template>

<style>
/* generaty from scss*/
    @import 'layerCart/css/blockcart.css';
    @import 'layerCart/css/layer-caroucel.css';
</style>
