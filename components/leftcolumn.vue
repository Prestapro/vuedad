<template>
<div id="left_column" class="column col-xs-12 col-sm-3">
  <div id="layered_block_left" class="block">
    <p class="title_block"><span>Catalog</span></p>
    <div class="block_content" style="">
      <form action="#" id="layered_form">
        <div>
          <div class="layered_filter">
            <div class="layered_subtitle_heading"><span class="layered_subtitle">Categories</span></div>
            <ul id="ul_layered_category_0" class="col-lg-12 layered_filter_ul">
              <div class="styled-select">
                <select class="select form-control wrapped">
                  <option value="">Categories</option>
                  <option style="color: " id="layered_category_12" value="12_0"> Santa Breaks (7)</option>
                  <option style="color: " id="layered_category_8" value="8_0"> Magical Lapland (7)</option>
                  <option style="color: " id="layered_category_9" value="9_0"> Northern Lights Adventure Weeks (5)</option>
                  <option style="color: " id="layered_category_10" value="10_0"> Northern Norway (7)</option>
                  <option style="color: " id="layered_category_11" value="11_0"> Lapland Insiders Guides (7)</option>
                </select>
              <div class="dl closed">
              <dt class="option"><span class="longest-txt"> Northern Lights Adventure Weeks (5)</span><span class="selected_name">Categories</span><i class="toggle"></i></dt>
              <ul class="styled-options">
                <li data-val="" class="option  first">Categories</li>
                <li data-val="12_0" class="option "> Santa Breaks (7)</li>
                <li data-val="8_0" class="option "> Magical Lapland (7)</li>
                <li data-val="9_0" class="option "> Northern Lights Adventure Weeks (5)</li>
                <li data-val="10_0" class="option "> Northern Norway (7)</li>
                <li data-val="11_0" class="option "> Lapland Insiders Guides (7)</li>
              </ul>
            </div>
          </div>
        </ul>
      </div>
      <div class="layered_filter">
        <div class="layered_subtitle_heading"> <span class="layered_subtitle">Availability</span></div>
        <ul id="ul_layered_quantity_0" class="col-lg-12 layered_filter_ul">
          <li class="nomargin hiddable col-lg-6"> <span class="styled-checkbox checkbox"><input type="checkbox" class="checkbox" name="layered_quantity_0" id="layered_quantity_0" value="0"></span>
            <label for="layered_quantity_0"> <a href="" data-rel="nofollow">Not available<span> ({{notAvailableCount}})</span></a> </label>
          </li>
          <li class="nomargin hiddable col-lg-6"> <span class="styled-checkbox checkbox"><input type="checkbox" class="checkbox" name="layered_quantity_1" id="layered_quantity_1" value="1"></span>
            <label for="layered_quantity_1"> <a href="" data-rel="nofollow">In stock<span> ({{inStockCount}})</span></a> </label>
          </li>
        </ul>
      </div>
      <div class="layered_weight" style="">
        <div class="layered_subtitle_heading"> <span class="layered_subtitle">Weight</span></div>
        <ul id="ul_layered_weight_0" class="col-lg-12 layered_filter_ul">
          <label for="weight"> Range: </label> <span id="layered_weight_range">{{minWeight}}kg - {{maxWeight}}kg</span>
          <div class="layered_slider_container">
            <div class="layered_slider ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all" id="layered_weight_slider" data-type="weight" data-format="5" data-unit="kg" aria-disabled="false">
              <div class="ui-slider-range ui-widget-header ui-corner-all" style="left: 0%; width: 100%;"></div>
                <a class="ui-slider-handle ui-state-default ui-corner-all" type="range" href="#" style="left: 0%;"></a>
                <a class="ui-slider-handle ui-state-default ui-corner-all" href="#" style="left: 100%;"></a>
            </div>
          </div>
        </ul>
      </div>
      <div class="layered_price" style="">
      <div class="layered_subtitle_heading"> <span class="layered_subtitle">Price</span></div>
        <ul id="ul_layered_price_0" class="col-lg-12 layered_filter_ul">
          <label for="price"> Range: </label> <span id="layered_price_range">$128.00 - $966.00</span>
          <div class="layered_slider_container">
            <div class="layered_slider ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all" id="layered_price_slider" data-type="price" data-format="1" data-unit="$" aria-disabled="false">
                  <div class="ui-slider-range ui-widget-header ui-corner-all" style="left: 0%; width: 100%;"></div>
                                    <a class="ui-slider-handle ui-state-default ui-corner-all" href="#" style="left: 0%;"></a>
                                    <a class="ui-slider-handle ui-state-default ui-corner-all" href="#" style="left: 100%;"></a>
                                </div>
                            </div>
                        </ul>
                    </div>
                    <div class="layered_filter">
                        <div class="layered_subtitle_heading"> <span class="layered_subtitle">Color</span></div>
                        <ul id="ul_layered_id_attribute_group_2" class="col-lg-12 layered_filter_ul color-group">
                            <div class="styled-select">
                                <select class="select form-control wrapped">
                                    <option value="">Color</option>
                                    <option style="color: #008CB7" id="layered_id_attribute_group_4" value="4_2"> Blue (2)</option>
                                    <option style="color: #F6EF04" id="layered_id_attribute_group_19" value="19_2"> Yellow (1)</option>
                                </select>
                                <div class="dl closed">
                                    <dt class="option"><span class="longest-txt"> Yellow (1)</span><span class="selected_name">Color</span><i class="toggle"></i></dt>
                                    <ul class="styled-options">
                                        <li data-val="" class="option  first">Color</li>
                                        <li data-val="4_2" class="option "> Blue (2)</li>
                                        <li data-val="19_2" class="option "> Yellow (1)</li>
                                    </ul>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
                <input type="hidden" name="id_category_layered" value="3">
            </form>
        </div>
        <div id="layered_ajax_loader" style="display: none;">
            <p> <img src="https://prestademo.ru/travel/img/loader.gif" alt="">
                <br>Loading...</p>
        </div>
    </div>
    <div id="new-products_block_right" class="block products_block">
        <h4 class="title_block"> <a href="" title="New products">New products</a></h4>
        <div class="block_content products-block" style="">
            <ul class="products">
                <li class="clearfix">
                    <div class="wrap_image_left">
                        <a class="wrap_scale products-block-image" href="" title="Cancun JUNGLE TOUR"><img class="replace-2x img-responsive" src="https://prestademo.ru/travel/82-home_default/cancun-jungle-tour.jpg" alt="Cancun JUNGLE TOUR"></a>
                        <a class="new tag " href=""> <span class="new-label">New</span> </a>
                        <a class="tag sale" href=""> <span class="sale-label">Sale!</span> </a>
                    </div>
                    <div class="product-content">
                        <div class="rate_left_product">
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
                        <h5> <a class="product-name" href="" title="Cancun JUNGLE TOUR">Cancun JUNGLE TOUR</a></h5>
                        <p class="product-description">Our planet is something unbelievable. It is so diverse and beautiful, so...</p>
                        <div class="price-box"> <span class="price"> $228.50 </span></div>
                    </div>
                </li>
            </ul>
            <div> <a href="" title="All new products" class="btn btn-default button button-small"><span>All new products<i class="icon-chevron-right right"></i></span></a></div>
        </div>
    </div>
    <div class="amazzingblog blocks displayLeftColumn column-hook">
        <div class="post-block block list-view compact" data-id="2">
            <h2 class="title_block"> <a href="" title="View all"> Our blog </a></h2>
            <div class="block_content " style="">
                <div class="post-list list">
                    <div class="post-item-wrapper">
                        <div class="post-item-compact has-date">
                            <div class="post-item-cover-compact">
                                <a href=""> <img src="/travel/modules/amazzingblog/views/img/uploads/posts/3/xs/1-5830ae200dd97.jpg" alt="Lorem ipsum dolores"> </a>
                            </div>
                            <h5 class="post-item-title-compact overflow-ellipsis b"> <a href=""> Lorem ipsum dolores </a></h5>
                            <div class="post-item-infos-compact clearfix"> <span class="post-item-info date"> Jul 15, 2016 </span>
                                <a href="" class="post-item-info comments-num pull-right"> <i class="icon-comment"></i> 1 </a>
                            </div>
                        </div>
                    </div>
                    <div class="post-item-wrapper">
                        <div class="post-item-compact has-date">
                            <div class="post-item-cover-compact">
                                <a href=""> <img src="/travel/modules/amazzingblog/views/img/uploads/posts/2/xs/1-5830ae31a21ff.jpg" alt="Lorem ipsum dolore"> </a>
                            </div>
                            <h5 class="post-item-title-compact overflow-ellipsis b"> <a href=""> Lorem ipsum dolore </a></h5>
                            <div class="post-item-infos-compact clearfix"> <span class="post-item-info date"> Jul 15, 2016 </span>
                                <a href="" class="post-item-info comments-num pull-right"> <i class="icon-comment"></i> 0 </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="easycarousels row"></div>
    <div class="custombanners displayLeftColumn" data-hook="displayLeftColumn">
        <div class="cb-wrapper" data-wrapper="9">
            <div class="banner-item">
                <div class="banner-item-content wrap_scale">
                    <a class="" href="http://addons.prestashop.com/ru/travel/17643-travely-.html"> <img src="/travel/modules/custombanners/views/img/uploads/9ca2272b90bb78db5d8128775fdf63c19f122224.jpg" class="banner-img">
                        <div class="custom-html">
                            <h4>CRUISES</h4>
                            <p>&nbsp;UP TO 25% OFF</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
</script>

<!--<script>
  export default {
    data () {
      return {
        notAvailableCount: '13',
        inStockCount: '7',
        minWeight: '1',
        maxWeight: '2'
      }
    }
  }
</script>-->

<style>
  @import './leftcolumn/css/blocklayered.css';
  @import './leftcolumn/css/front.css';
  @import './leftcolumn/css/buttons.css';

.ui-slider-horizontal .ui-slider-handle {
    top: 2.5em;
    margin-left: -.6em;
}

.ui-slider .ui-slider-handle {
  position: absolute;
  z-index: 2;
}
</style>
