// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false;

import Vuelidate from 'vuelidate';
Vue.use(Vuelidate); 

import contctForm from './components/Shared/Form/Form.vue';
Vue.component('contact-form', contctForm);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
