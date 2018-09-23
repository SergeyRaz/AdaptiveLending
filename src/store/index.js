import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    showAuthorizingForm: {
      type: ""
    }
  },

  getters: {
    showAuthorizingForm(state) {
      return state.showAuthorizingForm;
    }
  },

  mutations: {
    openAuthorizingForm(state, flagAuthorizing) {
      if (flagAuthorizing == "reg") {
        state.showAuthorizingForm.type = "reg";
      } else if (flagAuthorizing == "login") {
        state.showAuthorizingForm.type = "login";
      }
    },
    closeSettingsForm(state) {
      state.showAuthorizingForm.type = "";
    }
  },

  actions: {
    auth({ commit }, { email, password, repassword }) {
      if (repassword) {
        if (password === repassword || !repassword) {
          console.log(email, password);
          axios
            .post("/api/auth", {
              email,
              password
            })
            .then(res => {
              console.log(res.data);
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          console.log("ERR");
        }
      }
    }
  }
});
