
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Group from './group.vue'
import Background from './background.vue'
const routes = [
  { path: '/team', component: Group },
  { path: "/background", component: Background }
  , { path: '/', redirect: '/team' }
];

const router = new VueRouter({routes});
export default router;
