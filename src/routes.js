import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import StartPages from "./assets/components/pages/StartPages.vue";
import VideoPages from "./assets/components/pages/VideoPages.vue";
import E404 from "./assets/components/pages/E404.vue";
const routes = [
  {
    name: "home",
    path: "/",
    component: StartPages
  },
  {
    path: "*",
    component: E404
  },
  {
    name: "video",
    path: "/video",
    component: VideoPages
  }
];

export const router = new VueRouter({
  routes,
  mode: "history"
});
