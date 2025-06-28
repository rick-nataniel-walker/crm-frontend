import { formatDateTime } from "@/helpers/DateHelper";
import {
  FILL_ARTICLE,
  FILL_ARTICLES,
  FILL_CATEGORIES,
  FILL_CATEGORY,
  FILL_TAG,
  FILL_TAGS,
  RESET_ARTICLE,
  RESET_CATEGORY,
  RESET_TAG,
} from "@/store/constants";

export const mutations = {
  [FILL_ARTICLE](state, article) {
    state.article = { ...article };
    state.article.categoryId = article.category.id;
    state.article.authorId = article.author.id;
    state.article.postImg = "";
    state.articles.tags = article.tags.map((tag) => tag.id);
  },
  [RESET_ARTICLE](state) {
    state.article = {
      id: "",
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      authorId: 1,
      categoryId: "",
      postImg: null,
      status: "draft",
      publishedAt: formatDateTime(new Date()),
      tags: [],
    };
  },
  [FILL_ARTICLES](state, articles) {
    state.articles = articles.map((article) => {
      return {
        ...article,
        tags: article.tags
          ? article.tags.map((tag) => ({
              id: tag.id,
              name: tag.name,
            }))
          : {
              id: "",
              name: "",
            },
      };
    });
  },

  [FILL_CATEGORY](state, category) {
    state.category = category;
  },
  [FILL_CATEGORIES](state, categories) {
    state.categories = categories;
  },
  [RESET_CATEGORY](state) {
    state.category = {};
  },

  [FILL_TAG](state, tag) {
    state.tag = tag;
  },
  [FILL_TAGS](state, tags) {
    state.tags = tags;
  },
  [RESET_TAG](state) {
    state.tag = {};
  },
};
