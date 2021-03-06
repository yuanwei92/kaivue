import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";

// Fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronRight,
  faUserCircle
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faChevronRight, faUserCircle);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
