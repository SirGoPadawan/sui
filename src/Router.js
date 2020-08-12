import Vue from "vue";
import VueRouter from "vue-router";

import TheTest from "./pages/TheTest.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: TheTest,
    },
  ],
});

export default router;
