<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import StartPages from "./assets/components/pages/StartPages.vue";
import VideoPages from "./assets/components/pages/VideoPages.vue";
import E404 from "./assets/components/pages/E404.vue";

export default {
  components: {
    StartPages,
    VideoPages,
    E404
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  color: #111;
  box-sizing: border-box;
  list-style: none;
  outline: none;
  font-family: "Roboto", sans-serif;
}
h1 {
  text-align: center;
  font-size: 50px;
}
@keyframes SettingsIconRotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes CloseIconScale {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes FormPopupScale {
  0% {
    transform: scale(0.5);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
