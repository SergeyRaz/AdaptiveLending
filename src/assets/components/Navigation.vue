<template>
  <div class="Navigation">
    <ul class="list">
      <li class="item"><router-link class="link" tag="a" :to="{name: 'home'}">Home</router-link></li>
      <li class="item"><router-link class="link" tag="a" :to="{name: 'video'}">Video</router-link></li>
    </ul>
    <div class="authorizing">
      <div class="authorizing-reg" @click="openAuthorizingForm('reg')">Регистрация</div>
      <div class="authorizing-login" @click="openAuthorizingForm('login')">Вход</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    openAuthorizingForm(flagAuthorizing) {
      this.$store.commit("openAuthorizingForm", flagAuthorizing);
    }
  }
};
</script>

<style lang="scss">
.Navigation {
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  .list {
    position: relative;
    display: flex;
    .item {
      padding: 3px;
      .link {
        display: block;
        padding: 5px 35px;
        border: 1px solid #ccc;
        transition: 0.1s ease-out;
        background-color: #fdfdfd;
        &:hover {
          border: 1px solid #888;
        }
      }
    }
  }
  .authorizing {
    cursor: pointer;
    position: absolute;
    right: 70px;
    display: flex;
    .authorizing-reg,
    .authorizing-login {
      padding: 5px 15px;
      border: 1px solid #ccc;
      background-color: #fdfdfd;
      transition: 0.1s ease-out;
      &:hover {
        border: 1px solid #888;
      }
    }
    .authorizing-reg {
      margin-right: 5px;
    }
  }
}
</style>

