import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentComponentIndex: 0
  },

  mutations: {
    setCurrentComponentIndex(state, index) {
      state.currentComponentIndex = index;
    }
  }
});
