"use strict";
import "./scss/style.scss";
import Vue from "vue";
import router from "./Router";
import App from "./App.vue";

new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});
