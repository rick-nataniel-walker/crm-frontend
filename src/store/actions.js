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
  SET_LOADING,
  UNSET_LOADING,
  UPDATE_ARTICLE,
  UPDATE_CATEGORY,
  UPDATE_TAG,
} from "@/store/constants";
import { createTag, deleteTag, fetchTags, updateTag } from "@/api/tags-api";
import showAlert from "@/helpers/alert";

export const actions = {
  async [CREATE_ARTICLE](context, formData) {
    let payload = await createArticle(formData);
    if (payload !== null) {
      await context.dispatch(FETCH_ARTICLES);
      context.commit(RESET_ARTICLE);
      showAlert({
        type: "success",
        title: "Efectuado!",
        message: "Artigo Criado com sucesso!",
      });
      context.commit(RESET_TAG);
    } else {
      showAlert({
        type: "error",
        title: "Erro!",
        message: "Não foi possível efectuar a operação!",
      });
    }
  },
  async [FETCH_ARTICLES](context) {
    context.commit(SET_LOADING);
    let result = await fetchArticles();
    let payload = result.data.data;
    context.commit(FILL_ARTICLES, payload);
    context.commit(UNSET_LOADING);
  },
  async [DELETE_ARTICLE](context, id) {
    let result = await deleteArticle(id);
    if (result) {
      await context.dispatch(FETCH_ARTICLES);
      showAlert({
        type: "success",
        title: "Efectuado!",
        message: "Artigo Apaado com com sucesso!",
      });
      context.commit(RESET_TAG);
    } else {
      showAlert({
        type: "error",
        title: "Erro!",
        message: "Não foi possível efectuar a operação!",
      });
    }
  },
  async [UPDATE_ARTICLE](context, formData) {
    const result = await updateArticle(formData);
    if (result) {
      await context.dispatch(FETCH_ARTICLES);
      showAlert({
        type: "success",
        title: "Efectuado!",
        message: "Artigo Actualizado com sucesso!",
      });
      context.commit(RESET_TAG);
    } else {
      showAlert({
        type: "error",
        title: "Erro!",
        message: "Não foi possível efectuar a operação!",
      });
    }
  },

  async [CREATE_CATEGORY](context, formData) {
    let payload = await createCategory(formData);
    if (payload !== null) {
      await context.dispatch(FETCH_CATEGORIES);
      context.commit(RESET_CATEGORY);
      showAlert({
        type: "success",
        title: "Efectuado!",
        message: "Categoria adicionada com sucesso!",
      });
      context.commit(RESET_TAG);
    } else {
      showAlert({
        type: "error",
        title: "Erro!",
        message: "Não foi possível efectuar a operação!",
      });
    }
  },
  async [UPDATE_CATEGORY](context, formData) {
    let payload = await updateCategory(formData);
    if (payload !== null) {
      await context.dispatch(FETCH_CATEGORIES);
      context.commit(RESET_CATEGORY);
      showAlert({
        type: "success",
        title: "Efectuado!",
        message: "Categoria Actualizada com sucesso!",
      });
      context.commit(RESET_TAG);
    } else {
      showAlert({
        type: "error",
        title: "Erro!",
        message: "Não foi possível efectuar a operação!",
      });
    }
  },
  async [DELETE_CATEGORY](context, id) {
    let payload = await deleteCategory(id);
    if (payload !== null) {
      await context.dispatch(FETCH_CATEGORIES);
      showAlert({
        type: "success",
        title: "Efectuado!",
        message: "Categoria Apagada com sucesso!",
      });
      context.commit(RESET_TAG);
    } else {
      showAlert({
        type: "error",
        title: "Erro!",
        message: "Não foi possível efectuar a operação!",
      });
    }
  },
  async [FETCH_CATEGORIES](context) {
    context.commit(SET_LOADING);
    let result = await fetchCategories();
    if (result !== null) context.commit(FILL_CATEGORIES, result);
    context.commit(UNSET_LOADING);
  },

  async [CREATE_TAG](context, formData) {
    let payload = await createTag(formData);
    if (payload !== null) {
      await context.dispatch(FETCH_TAGS);
      context.commit(RESET_TAG);
      showAlert({
        type: "success",
        title: "Efectuado!",
        message: "Palavra-chava Criada com sucesso!",
      });
      context.commit(RESET_TAG);
    } else {
      showAlert({
        type: "error",
        title: "Erro!",
        message: "Não foi possível efectuar a operação!",
      });
    }
  },
  async [UPDATE_TAG](context, formData) {
    let payload = await updateTag(formData);
    if (payload !== null) {
      await context.dispatch(FETCH_TAGS);
      showAlert({
        type: "success",
        title: "Efectuado!",
        message: "Palavra-chava Actualizada com sucesso!",
      });
      context.commit(RESET_TAG);
    } else {
      showAlert({
        type: "error",
        title: "Erro!",
        message: "Não foi possível efectuar a operação!",
      });
    }
  },
  async [DELETE_TAG](context, id) {
    let payload = await deleteTag(id);
    if (payload !== null) {
      await context.dispatch(FETCH_TAGS);
      showAlert({
        type: "success",
        title: "Efectuado!",
        message: "Palavra-chava apagada com sucesso!",
      });
      context.commit(RESET_TAG);
    } else {
      showAlert({
        type: "error",
        title: "Erro!",
        message: "Não foi possível efectuar a operação!",
      });
    }
  },
  async [FETCH_TAGS](context) {
    context.commit(SET_LOADING);
    let payload = await fetchTags();
    if (payload !== null) context.commit(FILL_TAGS, payload);
    context.commit(UNSET_LOADING);
  },
};
