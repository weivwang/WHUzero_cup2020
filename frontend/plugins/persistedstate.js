/*
 * @Date: 2020-11-28 21:46:18
 * @LastEditors: QiuJhao
 * @LastEditTime: 2020-11-28 22:12:33
 */
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from "js-cookie";

const cookieStorage = {
  getItem: function (key) {
    return Cookies.getJSON(key);
  },
  setItem: function (key, value) {
    return Cookies.set(key, value, {expires: 30, secure: false});
  },
  removeItem: function (key) {
    return Cookies.remove(key);
  }
};

export default ({store}) => {
  createPersistedState({
    storage: cookieStorage,
    getState: cookieStorage.getItem,
    setState: cookieStorage.setItem
  })(store)
}

