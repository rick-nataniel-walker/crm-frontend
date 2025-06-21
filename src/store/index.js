import { createStore } from "vuex";
import { createArticle, fetchArticles } from "@/api/articles-api";
import { fetchCategories } from "@/api/categories-api";

export const CREATE_ARTICLE = "CREATE_ARTICLE";
export const FILL_ARTICLE = "FILL_ARTICLE";
export const FILL_ARTICLES = "FILL_ARTICLES";
export const FETCH_ARTICLES = "FETCH_ARTICLES";
export const CRATE_CATEGORY = "CREATE_CATEGORY";
export const FETCH_CATEGORIES = "FETCH_CATEGORIES";
export const FILL_CATEGORIES = "FILL_CATEGORIES";

export const state = {
  articles: [],
  categories: [],
};
export const getters = {};

export const mutations = {
  [FILL_ARTICLE](state, article) {
    state.articles.push(article);
  },
  [FILL_ARTICLES](state, articles) {
    state.articles = articles;
  },
  [FILL_CATEGORIES](state, categories) {
    state.categories = categories;
  },
};

export const actions = {
  [CREATE_ARTICLE](context, form) {
    createArticle(form);
  },
  async [FETCH_ARTICLES](context) {
    let result = await fetchArticles();
    let payload = result.data.data;
    context.commit(FILL_ARTICLES, payload);
  },
  async [FETCH_CATEGORIES](context) {
    let result = fetchCategories();
    context.commit(FILL_CATEGORIES, result);
  },
};
export const modules = {};

export default createStore({
  state,
  getters,
  mutations,
  actions,
  modules,
});
