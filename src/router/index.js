import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home.vue";
import About from "../views/about.vue";
import User from "../views/user.vue";
import UserDetail from "../views/user-detail.vue";
import UserProfile from "../views/user-profile.vue";
import UserPosts from "../views/user-posts.vue";
import UserIndex from "../views/user-index.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/user",
    component: User,
  },
  // {
  //   path: "/user/:id",
  //   component: UserDetail,
  // },
  // {
  //   path: "/user/:id/posts",
  //   component: UserPosts,
  // },
  // {
  //   path: "/user/:id/profile",
  //   component: UserProfile,
  // },
  {
    path: "/user/:id",
    component: UserIndex,
    children: [
      {
        path: "",
        component: UserDetail,
      },
      {
        path: "/user/:id/posts",
        component: UserPosts,
      },
      {
        path: "/user/:id/profile",
        component: UserProfile,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
