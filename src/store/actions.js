import {
  createArticle,
  deleteArticle,
  fetchArticles,
} from "@/api/articles-api";
import { createCategory, fetchCategories } from "@/api/categories-api";
import {
  CREATE_ARTICLE,
  CREATE_CATEGORY,
  DELETE_ARTICLE,
  FETCH_ARTICLES,
  FETCH_CATEGORIES,
  FILL_ARTICLES,
  FILL_CATEGORIES,
  RESET_ARTICLE,
} from "@/store/constants";

export const actions = {
  [CREATE_ARTICLE](context, formData) {
    createArticle(formData);
    context.commit(RESET_ARTICLE);
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
      await context.dispatch(FETCH_ARTICLES);
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
