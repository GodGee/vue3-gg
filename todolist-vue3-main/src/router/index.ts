import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Add from '@/components/Add.vue'
import Delete from '@/components/Delete.vue'
import Done from '@/components/Done.vue'
import Edit from '@/components/Edit.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '',
        redirect: { name: 'add' }
      },
      {
        path: '/add',
        name: 'add',
        component: Add
      },
      {
        path: '/delete',
        name: 'delete',
        component: Delete
      },
      {
        path: '/done',
        name: 'done',
        component: Done
      },
      {
        path: '/edit',
        name: 'edit',
        component: Edit,
        beforeEnter: (to, from, next) => {
          if (from.path === '/add') {
            next()
          } else {
            next('/add')
          }
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkExactActiveClass: 'active'
})

export default router
