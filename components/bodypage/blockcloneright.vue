<template>
  <div class="c_col bx-clone" style="list-style: none; position: relative; width: 335px; display: inline-block;">
    <div class="c_item ajax_block_product col-xs-12">
      <div class="product-container has-price has-buttons" itemscope="" itemtype="http://schema.org/Product">
        <div class="left-block">
          <div class="button-container">
          <a class="white_btn button ajax_add_to_cart_button btn btn-default" :href="addHref" rel="nofollow" :title="titleTop" data-id-product="1"> <span>{{addName}}</span> </a>
            <router-link :to="routeProduct" itemprop="url" class="white_btn button lnk_view btn btn-default" :href="moreHref" :title="moreTitle"> <span>{{moreName}}</span> </router-link>
          </div>
          <div class="product-image-container">
          <div class="product_img_link"> <img class="replace-2x img-responsive" :src="imgWindow" :alt="altWindow" :title="titleBottom" itemprop="image"></div>
            <a class="new tag " :href="newHref"> <span class="new-label">{{newProp}}</span> </a>
            <a class="tag sale" :href="saleHref"> <span class="sale-label">{{sale}}</span> </a> <span itemprop="offers" itemscope="" itemtype="http://schema.org/Offer" class="availability"> </span>
          <div class="wishlist">
            <a class="addToWishlist wishlistProd_1" href="#" rel="1" onclick="WishlistCart('wishlist_block_list', 'add', '1', false, 1); return false;"> <i class="fa icon-heart-o"></i> </a>
          </div>
          <div class="compare">
            <a class="add_to_compare" :href="compareHref" data-id-product="1"></a>
          </div>
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
      <h5 itemprop="name"> <a class="product-name" :href="propHref" :title="propTitle" itemprop="url"> {{propBottom}}</a></h5>
      <p class="product-desc" itemprop="description"> {{propDescription}}</p>
      <div itemprop="offers" itemscope="" itemtype="http://schema.org/Offer" class="content_price"> <span itemprop="price" class="price product-price">{{propPrice}}<sup>{{propPriceSup}}</sup> </span>
        <meta itemprop="priceCurrency" content="USD">
      </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['routeProduct', 'imgWindow', 'addHref', 'moreHref', 'newProp', 'sale', 'titleBottom', 'altWindow', 'newHref', 'saleHref', 'compareHref', 'propHref', 'propTitle', 'propBottom', 'propDescription', 'propPrice', 'propPriceSup'],
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
