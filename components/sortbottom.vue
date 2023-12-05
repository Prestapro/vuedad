<template>
  <div class="content_sortPagiBar clearfix bottom_pagi">
    <div class="sortPagiBar clearfix">
        <form method="post" action="https://prestademo.ru/travel/en/products-comparison" class="compare-form">
            <button type="submit" class="btn btn-default icon-exchange button button-medium bt_compare bt_compare_bottom" disabled="disabled"> <span>Compare <strong class="total-compare-val">0</strong> </span></button>
            <input type="hidden" name="compare_product_count" class="compare_product_count" value="0">
            <input type="hidden" name="compare_product_list" class="compare_product_list" value="">
        </form>
        <ul class="view display hidden-xs">
            <li id="grid" class="selected"><a rel="nofollow" href="#" title="Grid"><span></span></a></li>
            <li id="list"><a rel="nofollow" href="#" title="List"><span></span></a></li>
        </ul>
        <form id="productsSortForm" action="https://prestademo.ru/travel/en/3-winter?live_configurator_token=&amp;id_shop=&amp;id_employee=&amp;theme=&amp;theme_font=" class="productsSortForm">
            <div class="select selector1">
                <label for="selectProductSort">Sort by</label>
                <div class="styled-select">
                    <select id="selectProductSort" class="selectProductSort form-control wrapped">
                        <option value="position:asc" selected="selected">--</option>
                        <option value="price:asc">Price: Lowest first</option>
                        <option value="price:desc">Price: Highest first</option>
                        <option value="name:asc">Product Name: A to Z</option>
                        <option value="name:desc">Product Name: Z to A</option>
                        <option value="quantity:desc">In stock</option>
                        <option value="reference:asc">Reference: Lowest first</option>
                        <option value="reference:desc">Reference: Highest first</option>
                    </select>
                    <div class="dl closed">
                        <dt class="option"><span class="longest-txt">Reference: Highest first</span><span class="selected_name">--</span><i class="toggle"></i></dt>
                        <ul class="styled-options">
                            <li data-val="position:asc" class="option  first">--</li>
                            <li data-val="price:asc" class="option ">Price: Lowest first</li>
                            <li data-val="price:desc" class="option ">Price: Highest first</li>
                            <li data-val="name:asc" class="option ">Product Name: A to Z</li>
                            <li data-val="name:desc" class="option ">Product Name: Z to A</li>
                            <li data-val="quantity:desc" class="option ">In stock</li>
                            <li data-val="reference:asc" class="option ">Reference: Lowest first</li>
                            <li data-val="reference:desc" class="option ">Reference: Highest first</li>
                        </ul>
                    </div>
                </div>
            </div>
        </form>
    </div>
    <div class="bottom-pagination-content clearfix">
        <div id="pagination_bottom" class="pagination -box clearfix">
            <form class="showall" action="https://prestademo.ru/travel/en/index.php?controller=category" method="get">
                <div>
                    <button type="submit" class="btn btn-default button exclusive-medium"> <span>Show all</span> </button>
                    <input type="hidden" name="id_category_layered" value="3">
                    <input type="hidden" name="layered_weight_slider" value="100_119">
                    <input type="hidden" name="layered_price_slider" value="128_966">
                    <input type="hidden" name="orderby" value="position">
                    <input type="hidden" name="orderway" value="asc">
                    <input type="hidden" name="_" value="1491566388339">
                    <input name="n" id="nb_item" class="hidden" value="20">
                </div>
            </form>
            <ul class="pagination">
                <li id="pagination_previous_bottom" class="disabled pagination_previous"> <span> <i class="icon-angle-left"></i> <b>Previous</b> </span></li>
                <li class="active current"> <span> <span>1</span> </span>
                </li>
                <li>
                    <a href="https://prestademo.ru/travel/en/3-winter?live_configurator_token=&amp;id_shop=&amp;id_employee=&amp;theme=&amp;theme_font=#/weight-105.51-119/page-2"> <span>2</span> </a>
                </li>
                <li>
                    <a href="https://prestademo.ru/travel/en/3-winter?live_configurator_token=&amp;id_shop=&amp;id_employee=&amp;theme=&amp;theme_font=#/weight-105.51-119/page-3"> <span>3</span> </a>
                </li>
                <li>
                    <a href="https://prestademo.ru/travel/en/3-winter?live_configurator_token=&amp;id_shop=&amp;id_employee=&amp;theme=&amp;theme_font=#/weight-105.51-119/page-4"> <span>4</span> </a>
                </li>
                <li id="pagination_next_bottom" class="pagination_next">
                    <a href="https://prestademo.ru/travel/en/3-winter?live_configurator_token=&amp;id_shop=&amp;id_employee=&amp;theme=&amp;theme_font=#/weight-105.51-119/page-2"> <b>Next</b> <i class="icon-angle-right"></i> </a>
                </li>
            </ul>
        </div>
        <div class="product-count" style="display: block;">Showing 1 - 6 of 20 items</div>
    </div>
</div>

</template>
