import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Storage from '../common/storage';


Vue.use(VueRouter);

const Login = () => import("@/views/Login.vue");
const UserInfo = () => import("@/views/UserInfo.vue");

/**
 * 로그인이 된 경우 해당 next url로 이동.
 *       아닌 경우 alert 후 로그인 페이지로 이동.
 */
const requireAuth = () => (to: any, from: any, next: any) => {
    const loggedIn = !!Storage.getToken();
    if (!loggedIn){
      alert('로그인 하세요..');
      return next('/login');
    }
    next();
}

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/login',
  },
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
