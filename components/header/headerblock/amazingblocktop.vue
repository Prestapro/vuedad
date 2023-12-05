<template>
  <div id="amazing_block_top" class="search-box amazing-search clearfix col-lg-offset-1 col-xs-5">
    <label for="state-search" class="btnfake icon-search"> </label>
    <form method="get" action="https://prestademo.ru/travel/en/search" id="searchbox">
        <div class="styled-select">
<!-- rewrite with import vue -->
        <div class="dl closed">
                <!-- <dt class="option"><span class="longest-txt"></span> -->
                <!-- <span class="selected_name">---</span><i class="toggle"></i> </dt>-->
                <dt class="option"><i class="toggle"></i><span class="selected_name">---</span>
                <select name="font" id="font" class="option">
                           
              <option v-for="op in optionSearch" v-bind:value="op.value" >{{ op.text }}</option>

            </select>
</dt>

          </div>
        </div>
        <input type="hidden" name="controller" value="search">
          <input type="hidden" name="orderby" value="position">
          <input type="hidden" name="orderway" value="desc">
          <input class="search_query header_search_input" type="text" id="amazingsearch_query_top" name="search_query" placeholder="Search" value="" autocomplete="off">
          <button type="submit" name="submit_search" class="button-search icon-search"></button>
    </form>
</div>
</template>

<script>
export default {
  data () {
    return {
      selected: '',
      optionSearch: [
        { text: '---', value: '' },
        { text: 'Home', value: '2' },
        { text: 'Winter', value: '3' },
        { text: 'Summer', value: '4' },
        { text: 'Family Holidays', value: '5' },
        { text: 'Rest of the world', value: '6' },
        { text: 'Excursions', value: '7' },
        { text: 'Magical Lapland', value: '8' },
        { text: 'Northern Lights Adventure Weeks', value: '9' },
        { text: 'Northern Norway', value: '10' },
        { text: 'Lapland Insiders Guides', value: '11' },
        { text: 'Santa Breaks', value: '12' },
        { text: 'Hawaii', value: '16' },
        { text: 'Levi', value: '17' },
        { text: 'Ylläs', value: '18' },
        { text: 'Saariselkä', value: '19' },
        { text: 'México', value: '20' },
        { text: 'Bermuda', value: '21' },
        { text: 'Austria', value: '22' },
        { text: 'France', value: '23' },
        { text: 'Switzerland', value: '24' },
        { text: 'Italy', value: '25' },
        { text: 'Andorra', value: '26' },
        { text: 'Finland/Lapland', value: '27' },
        { text: 'USA', value: '28' },
        { text: 'Family Ski Holidays', value: '29' },
        { text: 'Family Summer Holidays', value: '30' },
        { text: 'Santa Breaks', value: '31' },
        { text: 'Walking Holidays', value: '32' },
        { text: 'Cycling Holidays', value: '33' },
        { text: 'All Inclusive Holidays', value: '34' },
        { text: 'Rail Holidays', value: '35' }
      ]
    }
  }
}
</script>

<style>
  @import 'amazingblocktop/css/amazingsearch.css';
  @import 'amazingblocktop/css/superfish-modified.css';
  @import 'amazingblocktop/css/fontello-custom.css';
</style>
