<template>
  <div class="StartPages">
    <Navigation></Navigation>
    <SettingsPopupForm></SettingsPopupForm>
    <h1>Главная</h1>
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
.StartPages {
}
</style>


