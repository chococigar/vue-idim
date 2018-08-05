import Vue from 'vue'
import VueRouter from 'vue-router';
import VueMasonry from 'vue-masonry-css';
import App from './App.vue'
import { routes } from './routes';

Vue.use(VueRouter);
Vue.use(VueMasonry);

require('./assets/css/main.css');


const router = new VueRouter({
  routes: routes,
  mode: 'history' 
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
