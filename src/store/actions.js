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
  CREATE_TAG,
  DELETE_ARTICLE,
  DELETE_CATEGORY,
  DELETE_TAG,
  FETCH_ARTICLES,
  FETCH_CATEGORIES,
  FETCH_TAGS,
  FILL_ARTICLES,
  FILL_CATEGORIES,
  FILL_TAGS,
  RESET_ARTICLE,
  RESET_CATEGORY,
  RESET_TAG,
  UPDATE_ARTICLE,
  UPDATE_CATEGORY,
  UPDATE_TAG,
} from "@/store/constants";
import { createTag, deleteTag, fetchTags, updateTag } from "@/api/tags-api";

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

  async [CREATE_TAG](context, formData) {
    let payload = await createTag(formData);
    if (payload !== null) {
      await context.dispatch(FETCH_TAGS);
      context.commit(RESET_TAG);
    }
  },
  async [UPDATE_TAG](context, formData) {
    await updateTag(formData);
    await context.dispatch(FETCH_TAGS);
    context.commit(RESET_TAG);
  },
  async [DELETE_TAG](context, id) {
    await deleteTag(id);
    await context.dispatch(FETCH_TAGS);
  },
  async [FETCH_TAGS](context) {
    let payload = await fetchTags();
    if (payload !== null) context.commit(FILL_TAGS, payload);
  },
};
