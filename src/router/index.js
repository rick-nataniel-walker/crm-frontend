import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "@/views/DashboardView";

const routes = [
  {
    path: "/",
    name: "home",
    component: DashboardView,
  },
  {
    path: "/articles",
    name: "articles",
    component: () =>
      import(/*webpackChunkName= "articles"*/ "@/views/ArticlesView"),
  },
  {
    path: "/categories",
    name: "categories",
    component: () =>
      import(/*webpackChunkName= "articles"*/ "@/views/CategoryView"),
  },
  {
    path: "/tags",
    name: "tags",
    component: () => import(/*webpackChunkName= "articles"*/ "@/views/TagView"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
