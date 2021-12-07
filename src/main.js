import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
import "v-toaster/dist/v-toaster.css";
import Toaster from "v-toaster";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
Vue.use(Toaster, { timeout: 5000 });
