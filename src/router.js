import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Header from "./views/Header.vue";
import SoftwareKey from "./views/SoftwareKey.vue";
import Button from "./views/Button.vue";
import List from "./views/List.vue";
import Separator from "./views/Separator.vue";
import Progress from "./views/Progress.vue";
import Dialog from "./views/Dialog.vue";
import Toast from "./views/Toast.vue";

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
    },
    {
      path: "/separator",
      name: "separator",
      component: Separator
    },
    {
      path: "/progress",
      name: "progress",
      component: Progress
    },
    {
      path: "/dialog",
      name: "dialog",
      component: Dialog
    },
    {
      path: "/toast",
      name: "toast",
      component: Toast
    }
  ]
});
