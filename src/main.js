import Vue from 'vue'
import App from './App.vue';

//import stylefmt from 'stylefmt';

const app = createApp(App);

// If you want to configure Vue globally, you can use the app.config global property
app.config.devtools = true; // Enable Vue Devtools
app.config.debug = true; // Enable debugging

app.mount('#app');
