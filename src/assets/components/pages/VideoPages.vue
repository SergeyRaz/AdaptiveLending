<template>
  <div class="VideoPages">
    <Navigation></Navigation>
    <SettingsPopupForm></SettingsPopupForm>
    <h1>Видео</h1>
    <img src="../../video/settings.jpg" alt="">
    <video width="400" height="200" controls>
      <source src="../../video/vue7.mp4" type = "video/mp4">
    </video>
  </div>
</template>

<script>
import Navigation from "../Navigation.vue";
import SettingsPopupForm from "../SettingsPopupForm.vue";
export default {
  components: {
    Navigation,
    SettingsPopupForm
  },
  methods: {}
};
</script>

<style lang="scss">
img {
  height: 100px;
  width: 100px;
}
</style>