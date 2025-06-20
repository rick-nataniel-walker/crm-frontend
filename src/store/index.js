import { createStore } from "vuex";
import { createArticle, fetchArticles } from "@/api/articles-api";

export const CREATE_ARTICLE = "CREATE_ARTICLE";
export const FILL_ARTICLE = "FILL_ARTICLE";
export const FILL_ARTICLES = "FILL_ARTICLES";
export const FETCH_ARTICLES = "FETCH_ARTICLES";

export default createStore({
  state: {
    articles: [],
  },
  getters: {},
  mutations: {
    [FILL_ARTICLE](state, article) {
      state.articles.push(article);
    },
    [FILL_ARTICLES](state, articles) {
      state.articles = articles;
    },
  },
  actions: {
    [CREATE_ARTICLE](context, form) {
      createArticle(form);
    },
    async [FETCH_ARTICLES](context) {
      let result = await fetchArticles();
      let payload = result.data.data;
      context.commit(FILL_ARTICLES, payload);
    },
  },
  modules: {},
});
