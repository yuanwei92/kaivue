import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Header from "./views/Header.vue";
import SoftwareKey from "./views/SoftwareKey.vue";
import Button from "./views/Button.vue";
import List from "./views/List.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/header",
      name: "header",
      component: Header
    },
    {
      path: "/software-key",
      name: "software-key",
      component: SoftwareKey
    },
    {
      path: "/button",
      name: "button",
      component: Button
    },
    {
      path: "/list",
      name: "list",
      component: List
    }
  ]
});
