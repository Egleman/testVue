import VueRouter from 'vue-router';
import Vue from 'vue';
import HeroView from '../view/HeroView.vue';
import Single from '../view/Single.vue';


Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
        path: '/',
        component: HeroView
    },
    {
        name: 'fullPage',
        path: '/single/:id',
        component: Single
    },
  ]
})

export default router;