import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/profils/Home.vue'
import Createprofils from '../views/profils/Createprofils.vue'
import Editprofils from '../views/profils/Editprofils.vue'
import Detailprofils from '../views/profils/Detailprofils.vue'
import pendidikans from '../views/pendidikans/pendidikans.vue'
import Detailpendidikans from '../views/pendidikans/Detailpendidikans.vue'
import Creatependidikans from '../views/pendidikans/Creatependidikans.vue'
import Editpendidikans from '../views/pendidikans/Editpendidikans.vue'
import pengalamans from '../views/pengalamans/pengalamans.vue'
import Createpengalamans from '../views/pengalamans/Createpengalamans.vue'
import Editpengalamans from '../views/pengalamans/Editpengalamans.vue'
import Detailpengalamans from '../views/pengalamans/Detailpengalamans.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/createprofils',
    name: 'Createprofils',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createprofils
  },
  {
    path: '/editprofils/:id',
    name: 'Editprofils',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editprofils
  },
  {
    path: '/detailprofils/:id',
    name: 'Detailprofils',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Detailprofils
  },
  {
    path: '/pendidikans',
    name: 'pendidikans',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: pendidikans
  },
  {
    path: '/detailpendidikans/:id',
    name: 'Detailpendidikans',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Detailpendidikans
  },
  {
    path: '/creatependidikans',
    name: 'Creatependidikans',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Creatependidikans
  },
  {
    path: '/editpendidikans/:id',
    name: 'Editpendidikans',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editpendidikans
  },
  {
    path: '/pengalamans',
    name: 'pengalamans',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: pengalamans
  },
  {
    path: '/createpengalamans',
    name: 'Createpengalamans',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createpengalamans
  },
  {
    path: '/editpengalamans/:id',
    name: 'Editpengalamans',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editpengalamans
  },
  {
    path: '/detailpengalamans/:id',
    name: 'Detailpengalamans',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Detailpengalamans
  },

]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router