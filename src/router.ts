import Vue from 'vue';
import VueRouter from 'vue-router';
import ComponentList from './routers';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/my-button'
    },
    ...ComponentList
  ]
});
