import Vue from 'vue';
import App from './App.vue';

import pinDirective from './shared/pin-directive';

import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.directive('pin', pinDirective);

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');
