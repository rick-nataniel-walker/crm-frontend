import { createStore } from "vuex";
import { state } from "@/store/states";
import { mutations } from "@/store/mutations";
import { actions } from "@/store/actions";
import { getters } from "@/store/getters";

export const modules = {};

export default createStore({
  state,
  getters,
  mutations,
  actions,
  modules,
});
