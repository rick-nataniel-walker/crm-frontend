import { createStore } from "vuex";
import { createArticle } from "@/api/articles-api";

export const CREATE_ARTICLE = "CREATE_ARTICLE";
export const FILL_ARTICLE = "FILL_ARTICLE";
export const FILL_ARTICLES = "FILL_ARTICLES";

export default createStore({
  state: {
    articles: [],
  },
  getters: {},
  mutations: {
    [FILL_ARTICLE](state, article) {
      state.articles.push(article);
    },
  },
  actions: {
    [CREATE_ARTICLE](context, form) {
      let payload = createArticle(form);
      context.commit(FILL_ARTICLE, payload);
    },
  },
  modules: {},
});
