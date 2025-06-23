import { formatDateTime } from "@/helpers/DateHelper";

export const state = {
  article: {
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
  },
  articles: [],
  categories: [],
};
