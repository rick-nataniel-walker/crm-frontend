import { formatDateTime } from "@/helpers/DateHelper";
import {
  FILL_ARTICLE,
  FILL_ARTICLES,
  FILL_CATEGORIES,
  FILL_CATEGORY,
  RESET_ARTICLE,
  RESET_CATEGORY,
} from "@/store/constants";

export const mutations = {
  [FILL_ARTICLE](state, article) {
    state.article = { ...article };
    state.article.categoryId = article.category.id;
    state.article.authorId = article.author.id;
    state.article.postImg = "";
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
    state.articles = articles;
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
};
