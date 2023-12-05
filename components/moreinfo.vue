<template>
  <div id="more_info_block" class="clear">
    <ul id="more_info_tabs" class="info-tabs idTabs idTabsShort clearfix">
        <li><a id="more_info_tab_more_info" class="selected" href="#idTab1">Description</a></li>
        <li class="page-product-heading"><a href="#idTab5" class="">Reviews</a></li>
    </ul>
    <div id="more_info_sheets" class="sheets align_justify">
        <div id="idTab1" class="">
            <p>All these world wonders such as endless deserts, boiling volcanoes, icebergs and other phenomena are available for you to see with your own eyes. The words are not enough to express all your emotions. But travelling is very complicated activity that is why you must be prepared to any kinds of surprises. In ancient times travellers have used maps as the main source of information.</p>
            <p>The words are not enough to express all your emotions. But travelling is very complicated activity that is why you must be prepared to any kinds of surprises. In ancient times travellers have used maps as the main source of information. The globe and the map are the small model of our world. Nowadays maps are very useful thing especially when you want to explore some wild spots.</p>
        </div>
        <div id="idTab5" class="panel-collapse block_hidden_only_for_screen">
            <div id="product_comments_block_tab">
                <p class="align_center">
                    <a id="new_comment_tab_btn" class="btn btn-default button button-small open-comment-form" href="#new_comment_form"> <span>Be the first to write your review !</span> </a>
                </p>
            </div>
        </div>
        <div style="display: none;">
            <div id="new_comment_form">
                <form id="id_new_comment_form" action="#">
                    <h2 class="page-subheading"> Write a review</h2>
                    <div class="row">
                        <div class="product clearfix col-xs-12"> <img src="https://prestademo.ru/travel/81-medium_default/copala-tour.jpg" height="125" width="125" alt="">
                            <div class="product_desc"></div>
                        </div>
                        <div class="new_comment_form_content col-xs-12">
                            <div id="new_comment_form_error" class="error alert alert-danger" style="display: none;">
                                <ul></ul>
                            </div>
                            <ul id="criterions_list">
                                <li>
                                    <label>Quality:</label>
                                    <div class="star_content">
                                        <input type="hidden" name="criterion[1]" value="3">
                                        <div class="cancel">
                                            <a title="Cancel Rating"></a>
                                        </div>
                                        <div class="star star_on"><a title="1">1</a></div>
                                        <div class="star star_on"><a title="2">2</a></div>
                                        <div class="star star_on"><a title="3">3</a></div>
                                        <div class="star"><a title="4">4</a></div>
                                        <div class="star"><a title="5">5</a></div>
                                    </div>
                                    <div class="clearfix"></div>
                                </li>
                            </ul>
                            <div class="form-group empty">
                                <label for="comment_title"> Title <sup class="required">*</sup> </label>
                                <input class="form-control" id="comment_title" name="title" type="text" value="">
                            </div>
                            <div class="form-group empty">
                                <label for="content"> Comment <sup class="required">*</sup> </label>
                                <textarea class="form-control" id="content" name="content"></textarea>
                            </div>
                            <div class="form-group empty">
                                <label> Your name: <sup class="required">*</sup> </label>
                                <input class="form-control" id="commentCustomerName" name="customer_name" type="text" value="">
                            </div>
                        </div>
                        <div id="new_comment_form_footer">
                            <input id="id_product_comment_send" name="id_product" type="hidden" value="4">
                            <div class="al_center col-xs-12"> <a class="closefb button grey_btn" href="#"> Cancel </a>
                                <button id="submitNewMessage" name="submitMessage" type="submit" class="button"> <span>Send</span> </button>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</template>
