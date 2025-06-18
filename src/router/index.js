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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
