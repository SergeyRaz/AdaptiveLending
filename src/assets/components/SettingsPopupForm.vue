<template>
  <div class="SettingsPopupForm">

    <div class="settings-popup-form-wrap" v-show="showAuthorizingForm.type == 'reg'">
      <div class="overley" @click.self="closeSettingsForm">
        <div class="popup" :class="{scale: showAuthorizingForm}">
          <div class="btn-close" @click="closeSettingsForm">
            <i class="far fa-times-circle"></i>
          </div>
          <form @submit.prevent="auth(model)">
            <label for="">
              <div class="form-title">Введите Email</div>
              <input class="" type="text" placeholder="Email ..." v-model.lazy="model.email">
            </label>
            <label for="">
              <div class="form-title">Введите пароль</div>
              <input class="" type="password" placeholder="Пароль ..." v-model.lazy="model.password">
            </label>
            <label for="">
              <div class="form-title">Введите пароль повторно</div>
              <input class="" type="password" placeholder="Пароль повторно ..." v-model.lazy="model.repassword">
            </label>
            <button class="form-submit-button">Регистрация</button>
          </form>
        </div>
      </div>
    </div>

    <div class="settings-popup-form-wrap" v-show="showAuthorizingForm.type == 'login'">
      <div class="overley" @click.self="closeSettingsForm">
        <div class="popup" :class="{scale: showAuthorizingForm}">
          <div class="btn-close" @click="closeSettingsForm">
            <i class="far fa-times-circle"></i>
          </div>
          <form @submit.prevent="auth(model)">
            <label for="">
              <div class="form-title">Введите Email</div>
              <input class="" type="text" placeholder="Email ..." v-model.lazy="model.email">
            </label>
            <label for="">
              <div class="form-title">Введите пароль</div>
              <input class="" type="password" placeholder="Пароль ..." v-model.lazy="model.password">
            </label>
            <button class="form-submit-button" >Войти</button>
          </form>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      model: {
        email: "",
        password: "",
        repassword: null
      }
    };
  },
  computed: {
    ...mapGetters(["showAuthorizingForm"])
  },
  methods: {
    ...mapActions(["auth"]),
    closeSettingsForm() {
      this.$store.commit("closeSettingsForm");
      this.model.email = "";
      this.model.password = "";
      this.model.repassword = null;
    }
  }
};
</script>

<style lang="scss">
.settings-popup-form-wrap {
  position: relative;
  .overley {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(000, 000, 000, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    .popup {
      cursor: default;
      position: relative;
      width: 600px;
      background-color: #fff;
      border-radius: 3px;
      border-bottom-right-radius: 0;
      padding: 20px 20px;
      &.scale {
        animation: FormPopupScale 0.3s ease-out;
      }
      .btn-close {
        position: absolute;
        top: -20px;
        right: -20px;
        cursor: pointer;
        i {
          color: #fff;
          font-size: 20px;
          animation-delay: 10s;
          transition: 0.1s ease-out;
        }
      }
      form {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
        height: 100%;
        .form-title {
          padding: 3px 0px;
        }
        input,
        textarea {
          padding: 10px;
          display: block;
          width: 100%;
          border: 1px solid #ccc;
          border-radius: 3px;
          resize: none;
          font-size: 12px;
          &::-webkit-input-placeholder {
            color: #ccc;
            font-weight: 300;
            letter-spacing: 1px;
          }
        }
        .form-submit-button {
          padding: 7px 50px;
          position: absolute;
          bottom: -51px;
          right: -20px;
          background-color: #fff;
          border: none;
          border-radius: 3px;
          border-top-right-radius: 0;
          border-top-left-radius: 0;
          cursor: pointer;
          transition: 0.1s ease-out;
        }
      }
    }
  }
}
</style>