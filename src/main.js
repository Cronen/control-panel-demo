import Vue from "vue";
import App from "./App.vue";
import router from "./router";
<<<<<<< HEAD
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  router,
  render: (h) => h(App),
=======

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
>>>>>>> 6650640872bbbf445ae652b7b1e2693b5b99824c
}).$mount("#app");
