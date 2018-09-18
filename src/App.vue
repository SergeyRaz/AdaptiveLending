<template>
  <div id="app">
    <Navigation @onSettingsPopup="onSettingsPopup"></Navigation>
    <SettingsPopupForm :flag="flag" @onSettingsPopup="onSettingsPopup"></SettingsPopupForm>
  </div>
</template>

<script>
import Navigation from './assets/components/Navigation.vue'
import SettingsPopupForm from './assets/components/SettingsPopupForm.vue'
export default {
  components: {
    Navigation,
    SettingsPopupForm
  },
  data () {
    return {
      flag: false,
    }
  },
  methods: {
    onSettingsPopup(){
      this.flag = !this.flag;
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  text-decoration: none;
  color: #111;
  box-sizing: border-box;
  list-style: none;
  outline: none;
  font-family: "Roboto", sans-serif;
}
@keyframes SettingsIconRotate {
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
}
@keyframes CloseIconScale {
  0%{
    transform: scale(1);
  }
  50%{
    transform: scale(1.3);
  }
  100%{
    transform: scale(1);
  }
}
@keyframes FormPopupScale {
  0%{
    transform: scale(0.5);
  }
  50%{
    transform: scale(1.1);
  }
  100%{
    transform: scale(1);
  }
}
</style>
