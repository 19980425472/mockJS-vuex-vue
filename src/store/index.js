import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tableData: [],
    saveToken: ""
  },
  mutations: {
    saveData(state, data) {
      state.tableData = data;
      console.log("存到vuex中的数据",data);
    },
    saveToken(state, data) {
      state.saveToken = data;
    }
  },
  actions: {},
  modules: {}
})
