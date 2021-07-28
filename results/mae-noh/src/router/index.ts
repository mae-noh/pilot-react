import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import TokenService from '../common/storage';


Vue.use(VueRouter);

const Login = () => import("@/views/Login.vue");
const UserInfo = () => import("@/views/UserInfo.vue");

const requireAuth = () => (to: any, from: any, next: any) => {
  const loggedIn = !!TokenService.getToken();
  console.log('getToken: ', loggedIn)
  if(!loggedIn) return next('/login');
  next();
}

const routes: Array<RouteConfig> = [
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/v1/users/me",
    name: "UserInfo",
    component: UserInfo,
    beforeEnter: requireAuth()
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
