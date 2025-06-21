import { createStore } from "vuex";
import {
  createArticle,
  deleteArticle,
  fetchArticles,
} from "@/api/articles-api";
import { createCategory, fetchCategories } from "@/api/categories-api";

export const CREATE_ARTICLE = "CREATE_ARTICLE";
export const FILL_ARTICLE = "FILL_ARTICLE";
export const FILL_ARTICLES = "FILL_ARTICLES";
export const FETCH_ARTICLES = "FETCH_ARTICLES";
export const DELETE_ARTICLE = "DELETE_ARTICLE";

export const CREATE_CATEGORY = "CREATE_CATEGORY";
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
  [CREATE_ARTICLE](context, formData) {
    createArticle(formData);
    context.dispatch(FETCH_ARTICLES);
  },
  async [FETCH_ARTICLES](context) {
    let result = await fetchArticles();
    let payload = result.data.data;
    context.commit(FILL_ARTICLES, payload);
  },

  async [DELETE_ARTICLE](context, id) {
    let result = await deleteArticle(id);
    if (result) {
      context.dispatch(FETCH_ARTICLES);
    }
  },

  [CREATE_CATEGORY](context, formData) {
    createCategory(formData);
  },
  async [FETCH_CATEGORIES](context) {
    let result = await fetchCategories();
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
