import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import BootstrapVue from "bootstrap-vue";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import ApiService from "@/services/axios.service";
import TokenService from "@/services/storage.service";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

// Set the base URL of the API
ApiService.init(process.env.VUE_APP_ROOT_API);

console.log('*****************************');
console.log('base URL of the API' , process.env.VUE_APP_ROOT_API);
console.log('*****************************');

// If token exists set header
if (TokenService.getToken()) {
  ApiService.setHeader()
}

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
