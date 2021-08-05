import { createWebHistory, createRouter } from "vue-router";
import Main from "./components/Main.vue";
import UsersActivity from "./components/UsersActivity.vue";


const routes = [
  {
    path: "/:catchAll(.*)",
    redirect: "/",
  },
  {
    path: "/",
    name: "main",
    component: Main,
  },
  {
    path: "/users-activity",
    name: "users-activity",
    component: UsersActivity,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
