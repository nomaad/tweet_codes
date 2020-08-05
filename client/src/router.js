import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import('@/components/ListTweets.vue')
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: () => import('@/components/EditTweet.vue')
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/About.vue")
	}
  ]
});
