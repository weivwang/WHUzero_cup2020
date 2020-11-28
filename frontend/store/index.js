/*
 * @Date: 2020-11-28 21:47:16
 * @LastEditors: QiuJhao
 * @LastEditTime: 2020-11-28 23:36:02
 */
// import Vue from "vue"
// import Vuex from "vuex"

// Vue.use(Vuex);

// const store = () => new Vuex.Store({
//   state: {
//     token: "",
//   },
//   mutations: {
//     setToken(state, token) {
//       state.token = token;
//     },
//   },
//   actions: {},
// });

// export default store;

export const state = () => ({
  token: null,
})

export const mutations = {
  setToken(state, token) {
    state.token = token;
  },
}