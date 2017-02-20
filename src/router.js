
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Group from './group.vue'
const routes = [
  { path: '/team', component: Group }
  , { path: '/', redirect: '/team' }
];

const router = new VueRouter({routes});
export default router;
