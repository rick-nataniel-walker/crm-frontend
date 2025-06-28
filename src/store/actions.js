import {
  createArticle,
  deleteArticle,
  fetchArticles,
  updateArticle,
} from "@/api/articles-api";
import {
  createCategory,
  deleteCategory,
  fetchCategories,
  updateCategory,
} from "@/api/categories-api";
import {
  CREATE_ARTICLE,
  CREATE_CATEGORY,
  DELETE_ARTICLE,
  DELETE_CATEGORY,
  FETCH_ARTICLES,
  FETCH_CATEGORIES,
  FILL_ARTICLES,
  FILL_CATEGORIES,
  RESET_ARTICLE,
  RESET_CATEGORY,
  UPDATE_ARTICLE,
  UPDATE_CATEGORY,
} from "@/store/constants";

export const actions = {
  async [CREATE_ARTICLE](context, formData) {
    let payload = await createArticle(formData);
    if (payload !== null) {
      await context.dispatch(FETCH_ARTICLES);
      context.commit(RESET_ARTICLE);
    }
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
  async [UPDATE_ARTICLE](context, formData) {
    const result = await updateArticle(formData);
    if (result) await context.dispatch(FETCH_ARTICLES);
  },

  async [CREATE_CATEGORY](context, formData) {
    let payload = await createCategory(formData);
    if (payload !== null) {
      await context.dispatch(FETCH_CATEGORIES);
      context.commit(RESET_CATEGORY);
    }
  },
  async [UPDATE_CATEGORY](context, formData) {
    await updateCategory(formData);
    await context.dispatch(FETCH_CATEGORIES);
    context.commit(RESET_CATEGORY);
  },
  async [DELETE_CATEGORY](context, id) {
    await deleteCategory(id);
    await context.dispatch(FETCH_CATEGORIES);
  },
  async [FETCH_CATEGORIES](context) {
    let result = await fetchCategories();
    if (result !== null) context.commit(FILL_CATEGORIES, result);
  },
};
