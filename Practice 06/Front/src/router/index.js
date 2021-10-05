import {
  createWebHistory,
  createWebHashHistory,
  createRouter,
} from "vue-router";
import InsertPost from "@/views/InsertPost.vue";
import Feed from "@/views/Feed.vue";
import Login from "@/views/Login.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
  /*{
    path: "/",
    name: "Login",
    component: Login,
  },*/
  {
    path: "/",
    name: "InsertPost",
    component: InsertPost,
  },
  {
    path: "/feed",
    name: "Feed",
    component: Feed,
  },
  { path: "/:pathMatch(.*)*", name: "not-found", component: NotFound },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
