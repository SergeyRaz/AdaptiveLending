import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    showSettingsForm: false,
  },
  getters: {
    showSettingsForm(state) {
      return state.showSettingsForm;
    },
  },
  mutations: {
    openSettingsForm(state) {
      state.showSettingsForm = !state.showSettingsForm;
    },
  },
});
