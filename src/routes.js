import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import StartPages from "./assets/components/StartPages.vue";
import VideoPages from "./assets/components/VideoPages.vue";
import E404 from "./assets/components/E404.vue";
const routes = [
  {
    path: "/",
    component: StartPages
  },
  {
    path: "*",
    component: E404
  },
  {
    path: "/video",
    component: VideoPages
  }
];

export const router = new VueRouter({
  routes,
  mode: "history"
});
