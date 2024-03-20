import Vue from "vue";
import VTooltip from "v-tooltip";
import Toast from "vue-toastification";

import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./assets/tailwind.css";
import "./assets/main.scss";
import "./assets/v-tooltip.scss";
import "vue-toastification/dist/index.css";

Vue.use(VTooltip);
Vue.use(Toast);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
