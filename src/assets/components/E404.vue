<template>
  <div class="E404">
    <h1>E404</h1>
  </div>
</template>
<script>
export default {
  components: {},
  methods: {}
};
</script>
<style lang="scss">
.E404 {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../img/bg.png");
  h1 {
    color: #fff;
    font-size: 10em;
    text-shadow: 10px 10px 10px rgba(255, 255, 255, 0.1);
    margin-top: -150px;
    opacity: 0.5;
  }
}
</style>