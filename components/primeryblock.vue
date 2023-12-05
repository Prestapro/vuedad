<template>
  <div class="primary_block row">
    <div class="pb-left-column col-xs-12 col-md-5">
        <div id="image-block" class="clearfix">
            <div class="wrap_image_block"> <span class="new tag"> {{productDesc[i].nP}} </span> <span id="view_full_size"> <img id="bigpic" itemprop="image" :src="productDesc[i].iW" title="Copala Tour" alt="Copala Tour" width="336" height="336"> <span class="span_link icon-search no-print"></span> </span>
            </div>
        </div>
        <div id="views_block" class="clearfix hidden">
            <div id="thumbs_list">
                <ul id="thumbs_list_frame" style="width: 233px;">
                    <li id="thumbnail_81" class="last" style="width: 33.3333px;">
                        <a href="" data-fancybox-group="other-views" class="fancybox shown" title="Copala Tour"> <img class="img-responsive" id="thumb_81" src="https://prestademo.ru/travel/81-medium_default/copala-tour.jpg" alt="Copala Tour" title="Copala Tour" itemprop="image"> </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="pb-right-column col-xs-12 col-md-7">
        <h1 itemprop="name">Copala Tour</h1>
        <p class="manufacturer-product-page">
            <a class="manufacturer-product-logo" href=""> <img class="product-manufacturer img-responsive" src="https://prestademo.ru/travel/img/m/1-small_default.jpg" alt="Fashion Manufacturer" width="70" height="26"> </a>
        </p>
        <div class="rate_wrap">
            <div id="product_comments_block_extra" class="no-print elem_butt" itemprop="aggregateRating" itemscope="" itemtype="http://schema.org/AggregateRating">
                <div class="comments_note clearfix">
                    <div class="star_content clearfix">
                        <div class="star"></div>
                        <div class="star"></div>
                        <div class="star"></div>
                        <div class="star"></div>
                        <div class="star"></div>
                        <meta itemprop="worstRating" content="0">
                        <meta itemprop="ratingValue" content="0">
                        <meta itemprop="bestRating" content="5">
                    </div>
                </div>
                <ul class="comments_advices ">
                    <li>
                        <a class="open-comment-form icon-pencil" href="#new_comment_form"> <span class="hidden-xxs">Write a review</span> </a>
                    </li>
                </ul>
            </div>
        </div>
        <a class="print_prod" href="javascript:print();"> <i class="fa icon-file-o"></i>Print </a>
        <p id="product_reference" style="display: none;">
            <label>Model </label> <span class="editable" itemprop="sku"></span></p>
        <p id="product_condition">
            <label>Condition </label>
            <link itemprop="itemCondition" href="http://schema.org/NewCondition"> <span class="editable">New</span></p>
        <div id="short_description_block">
            <div id="short_description_content" class="rte align_justify" itemprop="description">
                <p>The easiest way to explore all wonders and unique places of our planet is travelling. It is very romantic and it takes one's breath away because new emotions are always unforgettable. Just imagine yourself standing on the top of the waterfall or sitting among the tropical plants in the jungles. Nowadays maps are very useful thing especially when you want to explore some wild spots.</p>
            </div>
            <p class="buttons_bottom_block"> <a href="javascript:{}" class="button"> More details </a></p>
        </div>
        <form id="buy_block" action="https://prestademo.ru/travel/en/cart" method="post">
            <p class="hidden">
                <input type="hidden" name="token" value="c71b00fe7198e3a7a759ce4d32f9a969">
                <input type="hidden" name="id_product" value="4" id="product_page_product_id">
                <input type="hidden" name="add" value="1">
                <input type="hidden" name="id_product_attribute" id="idCombination" value="2">
            </p>
            <div class="box-info-product">
                <div class="content_prices clearfix">
                    <div class="price">
                        <p class="our_price_display" itemprop="offers" itemscope="" itemtype="http://schema.org/Offer">
                            <link itemprop="availability" href="http://schema.org/InStock"> <span id="our_price_display" itemprop="price">$928.96</span>
                            <meta itemprop="priceCurrency" content="USD"> <span id="old_price" class="hidden" style="display: none;"> <span id="old_price_display" style="display: none;"></span> </span>
                        </p>
                        <p id="reduction_percent" style="display:none;"> <span id="reduction_percent_display"> </span></p>
                        <p id="reduction_amount" style="display:none"> <span id="reduction_amount_display"> </span></p>
                    </div>
                    <p id="availability_statut" style="display: none;"> <span id="availability_label" class="hidden-xs">Availability:</span> <span id="availability_value"></span></p>
                    <p class="warning_inline" id="last_quantities" style="display: none;">Warning: Last items in stock!</p>
                    <div class="clear"></div>
                </div>
                <div class="product_attributes clearfix">
                    <div id="attributes">
                        <div class="clearfix"></div>
                        <fieldset class="attribute_fieldset">
                            <label class="attribute_label">Color&nbsp;</label>
                            <div class="attribute_list">
                                <ul id="color_to_pick_list" class="clearfix">
                                    <li class="selected">
                                        <a href="" id="color_19" name="Yellow" class="color_pick selected" style="background:#F6EF04;" title="Yellow"> </a>
                                    </li>
                                </ul>
                                <input type="hidden" class="color_pick_hidden" name="group_2" value="19">
                            </div>
                        </fieldset>
                    </div>
                </div>
                <div class="wrap_bottom row">
                    <div class="col-xs-6">
                        <div id="quantity_wanted_p">
                            <div class="wrap_up_down"> <a href="#" data-field-qty="qty" class="button-minus product_quantity_down"> - </a>
                                <input type="number" name="qty" id="quantity_wanted" class="text" value="1"> <a href="#" data-field-qty="qty" class="button-plus product_quantity_up"> + </a></div> <span class="clearfix"></span></div>
                        <p id="minimal_quantity_wanted_p" style="display: none; color: rgb(55, 72, 83);"> This product is not sold individually. You must select at least <b id="minimal_quantity_label">1</b> quantity for this product.</p>
                    </div>
                    <div class="box-cart-bottom col-xs-6">
                        <div>
                            <p id="add_to_cart" class="add_to_cart buttons_bottom_block no-print">
                                <button type="submit" name="Submit" class="button"> <span>Add to cart</span> </button>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="wrap_buttons clearfix">
                    <div class="row">
                        <div class="elem_butt">
                            <a id="wishlist_button_nopop" class="wishlist-button icon-heart-o" href="#" onclick="WishlistCart('wishlist_block_list', 'add', '4', $('#idCombination').val(), document.getElementById('quantity_wanted').value); return false;" rel="nofollow" title="Add to my wishlist"> <span class="hidden-xxs">Add to wishlist</span> </a>
                        </div>
                        <div id="usefull_link_block" class="no-print">
                            <div class="sendtofriend elem_butt">
                                <a id="send_friend_button" class="icon-envelope-o" href="#send_friend_form"> <span class="hidden-xxs">Send to a friend</span> </a>
                                <div style="display: none;">
                                    <div id="send_friend_form">
                                        <h2 class="page-subheading"> Send to a friend</h2>
                                        <div class="row">
                                            <div class="product clearfix col-xs-12"> <img src="https://prestademo.ru/travel/81-small_default/copala-tour.jpg" alt="Copala Tour">
                                                <div class="product_desc">
                                                    <p class="product_name"> <strong>Copala Tour</strong></p>
                                                    <p>The easiest way to explore all wonders and unique places of our planet is travelling. It is very romantic and it takes one's breath away because new emotions are always unforgettable. Just imagine yourself standing on the top of the waterfall or sitting among the tropical plants in the jungles. Nowadays maps are very useful thing especially when you want to explore some wild spots.</p>
                                                </div>
                                            </div>
                                            <div class="send_friend_form_content col-xs-12" id="send_friend_form_content">
                                                <div id="send_friend_form_error" class="alert alert-danger" style="display: none;"></div>
                                                <div id="send_friend_form_success"></div>
                                                <div class="form_container clearfix">
                                                    <div class="text text1 col-sm-6 col-xs-12">
                                                        <div class="form-group empty">
                                                            <label for="friend_name"> Name of your friend <sup class="required">*</sup> </label>
                                                            <input id="friend_name" class="form-control" name="friend_name" type="text" value="">
                                                        </div>
                                                    </div>
                                                    <div class="text text2 col-sm-6 col-xs-12">
                                                        <div class="form-group empty">
                                                            <label for="friend_email"> E-mail address of your friend <sup class="required">*</sup> </label>
                                                            <input id="friend_email" class="form-control" name="friend_email" type="text" value="">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="submit">
                                                    <div class="col-xs-6 text1"> <a class="closefb button grey_btn" href="#"> Cancel </a></div>
                                                    <div class="col-xs-6 text2">
                                                        <button id="sendEmail" class="button" name="sendEmail" type="submit"> <span>Send</span> </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="product_comments_block_extra" class="no-print elem_butt" itemprop="aggregateRating" itemscope="" itemtype="http://schema.org/AggregateRating">
                                <div class="comments_note clearfix">
                                    <div class="star_content clearfix">
                                        <div class="star"></div>
                                        <div class="star"></div>
                                        <div class="star"></div>
                                        <div class="star"></div>
                                        <div class="star"></div>
                                        <meta itemprop="worstRating" content="0">
                                        <meta itemprop="ratingValue" content="0">
                                        <meta itemprop="bestRating" content="5">
                                    </div>
                                </div>
                                <ul class="comments_advices ">
                                    <li>
                                        <a class="open-comment-form icon-pencil" href="#new_comment_form"> <span class="hidden-xxs">Write a review</span> </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
    <div class="pb-center-column col-xs-12 col-md-7 ">
        <p class="socialsharing_product list-inline no-print">
            <button data-type="twitter" type="button" class="btn btn-default btn-twitter social-sharing"> <i class="fa icon-twitter"></i> <span>Tweet</span> </button>
            <button data-type="facebook" type="button" class="btn btn-default btn-facebook social-sharing"> <i class="fa icon-facebook"></i><span> Share</span> </button>
            <button data-type="google-plus" type="button" class="btn btn-default btn-google-plus social-sharing"> <i class="fa icon-google-plus"></i><span> Google+</span> </button>
            <button data-type="pinterest" type="button" class="btn btn-default btn-pinterest social-sharing"> <i class="fa icon-pinterest"></i> <span>Pinterest</span> </button>
        </p>
        <p id="pQuantityAvailable" style="display: block;"> <span id="quantityAvailable">10000</span> <span style="display: none;" id="quantityAvailableTxt">Item</span> <span id="quantityAvailableTxtMultiple">Items</span></p>
        <p id="availability_date" style="display: none;"> <span id="availability_date_label">Availability date:</span> <span id="availability_date_value"></span></p>
        <div id="oosHook" style="display: none;"></div>
    </div>
</div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: mapGetters({
      productDesc: 'productList'
    }),
    data () {
      return {
        i: this.$route.params.id
      }
    }
  }
</script>
