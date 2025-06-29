import { STATS } from "@/store/constants";

export const getters = {
  [STATS](state) {
    return [
      {
        id: 1,
        icon: "fas fa-file-alt",
        number: state.articles.filter(
          (article) => article.status === "published"
        ).length,
        label: "Artigos Publicados",
        bgColor: "bg-secondary-light",
        color: "text-secondary",
      },
      {
        id: 2,
        icon: "fas fa-edit",
        number: state.articles.filter((article) => article.status === "draft")
          .length,
        label: "Rascunhos",
        bgColor: "bg-accent-light",
        color: "text-accent",
      },
      {
        id: 3,
        icon: "fas fa-comments",
        number: 42,
        label: "Comentários",
        bgColor: "bg-primary-light",
        color: "text-primary",
      },
      {
        id: 4,
        icon: "fas fa-tags",
        number: state.tags.length,
        label: "Tags",
        bgColor: "bg-gray-200",
        color: "text-gray-600",
      },
    ];
  },
};
