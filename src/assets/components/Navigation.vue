<template>
  <div class="Navigation">
    <ul class="list">
      <span class="settings-icon" @click="openSettingsForm"><i class="fas fa-cog"></i></span>
      <li class="item"><a href="#" class="link">Video</a></li>
      <li class="item"><a href="#" class="link">Express JS</a></li>
      <li class="item"><a href="#" class="link">Mongo DB</a></li>
      <li class="item"><a href="#" class="link">Webpack</a></li>
      <li class="item"><a href="#" class="link">SCSS</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    openSettingsForm() {
      this.$store.commit("openSettingsForm");
    }
  }
};
</script>

<style lang="scss">
.Navigation {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../img/bg.png");
  .list {
    position: relative;
    .settings-icon {
      position: absolute;
      right: -18px;
      top: -18px;
      cursor: pointer;
      i {
        animation: SettingsIconRotate 5s linear infinite;
        color: #888;
        font-size: 18px;
        &:hover {
          animation-play-state: paused;
          color: #ff8500;
        }
      }
    }
    .item {
      padding: 3px;
      transition: 0.2s ease-out;
      &:hover {
        transform: translateX(5px);
        .link {
          background-color: #ff8500;
          color: #fff;
        }
      }
      .link {
        display: block;
        border: 1px solid rgba(255, 255, 255, 0.1);
        padding: 5px 35px;
        color: rgba(255, 255, 255, 0.3);
        text-shadow: 0 0 2px #000;
      }
    }
  }
}
</style>

