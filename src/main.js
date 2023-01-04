import Vue from 'vue'
import App from './App.vue'
import Router from "vue-router";
import router from '@/routes.js' 
import CKEditor from '@ckeditor/ckeditor5-vue2';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.config.productionTip = false
Vue.use(Router);  
Vue.use( CKEditor );
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')