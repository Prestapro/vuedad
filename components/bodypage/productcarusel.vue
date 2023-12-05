<template>
  <div class="c_col" style="list-style: none; position: relative; display: inline-block;">
    <div class="c_item ajax_block_product col-xs-12">
        <div class="product-container has-price has-buttons" itemscope="" itemtype="http://schema.org/Product">
            <div class="left-block">
                <div class="button-container">
                    <a class="white_btn button ajax_add_to_cart_button btn btn-default" :href="addHref" rel="nofollow" :title="titleTop" data-id-product="3" data-minimal_quantity="1"> <span>{{addName}}</span> </a>
                    <router-link :to="routeProduct" itemprop="url" class="white_btn button lnk_view btn btn-default" :href="moreHref" :title="moreTitle"> <span>{{moreName}}</span> </router-link>
                </div>
                <div class="product-image-container">
                    <a class="product_img_link" :href="moreHref" title="Coastal South Carolina" itemprop="url"> <img class="replace-2x img-responsive" :src="imgWindow" :alt="altWindow" :title="titleBottom" width="360" height="395" itemprop="image"> </a>
                    <a class="quick-view icon-eye-one" :href="moreHref" :rel="moreHref"> </a>
                    <div class="wishlist">
                        <a class="addToWishlist wishlistProd_3" href="#" rel="3" onclick="WishlistCart('wishlist_block_list', 'add', '3', false, 1); return false;"> <i class="fa icon-heart-o"></i> </a>
                    </div> 
                    <a class="tag new" :href="newHref">{{newProp}}</a> <span itemprop="offers" itemscope="" itemtype="http://schema.org/Offer" class="availability"> </span>
                    <a class="tag new" :href="saleHref">{{sale}}</a> <span itemprop="offers" itemscope="" itemtype="http://schema.org/Offer" class="availability"> </span>
                </div>
            </div>
            <div class="right-block">
                <div class="rate_list_product">
                    <div class="comments_note" itemprop="aggregateRating" itemscope="" itemtype="http://schema.org/AggregateRating">
                        <div class="star_content clearfix">
                            <div class="star star_on"></div>
                            <div class="star star_on"></div>
                            <div class="star star_on"></div>
                            <div class="star"></div>
                            <div class="star"></div>
                            <meta itemprop="worstRating" content="0">
                            <meta itemprop="ratingValue" content="3">
                            <meta itemprop="bestRating" content="5">
                        </div>
                    </div>
                </div>
                <h5 itemprop="name" class="one_line"> <a class="product-name" :href="propHref" :title="propTitle" itemprop="url">{{propBottom}} </a></h5>
                <div itemprop="offers" itemscope="" itemtype="http://schema.org/Offer" class="content_price main"> <span itemprop="price" class="price product-price">{{propPrice}}<sup>{{propPriceSup}}</sup> </span>
                    <meta itemprop="priceCurrency" content="USD">
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
  export default {
    props: ['routeProduct', 'imgWindow', 'addHref', 'moreHref', 'newProp', 'sale', 'titleBottom', 'altWindow', 'newHref', 'saleHref', 'propHref', 'propTitle', 'propBottom', 'propPrice', 'propPriceSup'],
    data () {
      return {
        addName: 'Add to cart',
        titleTop: 'Add to cart',
        moreName: 'More',
        moreTitle: 'View'
      }
    }
  }
</script>
