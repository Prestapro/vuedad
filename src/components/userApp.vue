<template>
  
  <div>
    <!-- <draggable v-model="dynamicComponents" group="components">
      <div v-for="(component, index) in dynamicComponents" :key="index">
        <component :is="component.name" v-bind="component.props"></component>
      </div>
    </draggable> -->
    <ComponentA></ComponentA>
    <!-- <ComponentB></ComponentB> -->
  </div>
</template>

<script>
// import draggable from 'vuedraggable';

// import ComponentB from '/Users/alex/vue/components/BreadCrumb.vue';
import ComponentA from '/Users/alex/vue/components/BodyPage.vue';
// import ComponentB from '/Users/alex/vue/components/breadcrumb.vue';
// import ComponentC from '/Users/alex/vue/components/caruselrow.vue';
// import ComponentD from '/Users/alex/vue/components/categorylist.vue';
// import ComponentE from '/Users/alex/vue/components/headbanner.vue';
// import ComponentF from '/Users/alex/vue/components/layerCart.vue';
// import ComponentG from '/Users/alex/vue/components/leftcolumn.vue';
// import ComponentH from '/Users/alex/vue/components/primeryblock.vue';
// import ComponentI from '/Users/alex/vue/components/moreinfo.vue'; // Renamed ComponentJ to ComponentI
// import ComponentJ from '/Users/alex/vue/components/productcentrcolumn.vue'; // Renamed ComponentK to ComponentJ
// import ComponentK from '/Users/alex/vue/components/productcontainer.vue'; // Renamed ComponentL to ComponentK
// import ComponentL from '/Users/alex/vue/components/productleftcolumn.vue'; // Renamed ComponentM to ComponentL
// import ComponentM from '/Users/alex/vue/components/sortbottom.vue'; // Renamed ComponentN to ComponentM
// import ComponentN from '/Users/alex/vue/components/sortpagibar.vue'; // Renamed ComponentO to ComponentN


export default {
  name: 'userApp',
  components: {
    ComponentA
  },
  props: {
    msg: String
  },
  data() {
    return {
      dynamicComponents: [
        { name: 'ComponentA', props: { /* props for ComponentA */ } },
        { name: 'ComponentB', props: { /* props for ComponentB */ } },
        {
          name: 'ComponentA',
          props: {
            // Properties for ComponentA
            title: 'Title for A',
            content: 'Content for A',
            // Add more properties as needed
          }
        },
        {
          name: 'ComponentB',
          props: {
            // Properties for ComponentB
            title: 'Title for B',
            content: 'Content for B',
            // Add more properties as needed
          }
        },
        // More components can be added in similar fashion
        {
          name: 'ComponentC',
          props: {
            // Properties for ComponentC
            title: 'Title for C',
            content: 'Content for C',
            // Add more properties as needed
          }
        },
        {
          name: 'ComponentD',
          props: {
            // Properties for ComponentC
            title: 'Title for C',
            content: 'Content for C',
            // Add more properties as needed
          }
        },
        {
          name: 'ComponentE',
          props: {
            // Properties for ComponentC
            title: 'Title for C',
            content: 'Content for C',
            // Add more properties as needed
          }
        },
        {
          name: 'ComponentG',
          props: {
            // Properties for ComponentC
            title: 'Title for C',
            content: 'Content for C',
            // Add more properties as needed
          }
        },
        {
          name: 'ComponentH',
          props: {
            // Properties for ComponentC
            title: 'Title for C',
            content: 'Content for C',
            // Add more properties as needed
          }
        },
        {
          name: 'ComponentI',
          props: {
            // Properties for ComponentC
            title: 'Title for C',
            content: 'Content for C',
            // Add more properties as needed
          }
        },
        {
          name: 'ComponentJ',
          props: {
            // Properties for ComponentC
            title: 'Title for C',
            content: 'Content for C',
            // Add more properties as needed
          }
        },
        {
          name: 'ComponentK',
          props: {
            // Properties for ComponentC
            title: 'Title for C',
            content: 'Content for C',
            // Add more properties as needed
          }
        },
        {
          name: 'ComponentL',
          props: {
            // Properties for ComponentC
            title: 'Title for C',
            content: 'Content for C',
            // Add more properties as needed
          }
        },
        {
          name: 'ComponentM',
          props: {
            // Properties for ComponentC
            title: 'Title for C',
            content: 'Content for C',
            // Add more properties as needed
          }
        },
        {
          name: 'ComponentN',
          props: {
            // Properties for ComponentC
            title: 'Title for C',
            content: 'Content for C',
            // Add more properties as needed
          }
        }
        // More components as needed
      ]
    };
  }
}
</script>

<style scoped>
  .columns-container {
    background: #000;
    width:300px;
    height:200px;
  }
</style>