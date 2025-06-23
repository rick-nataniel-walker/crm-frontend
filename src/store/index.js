import { createStore } from "vuex";
import { state } from "@/store/states";
import { mutations } from "@/store/mutations";
import { actions } from "@/store/actions";

export const getters = {};
export const modules = {};

export default createStore({
  state,
  getters,
  mutations,
  actions,
  modules,
});
