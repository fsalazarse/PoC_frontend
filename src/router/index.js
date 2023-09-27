import { createRouter, createWebHistory } from 'vue-router'
import{} from '../views/admin_plugin/HomeAdminView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/admin',
      name: 'base',
      component: () => import('../views/admin_plugin/BaseView.vue'),
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import('../views/admin_plugin/HomeAdminView.vue')
        },
        {
          path: 'plugins',
          name: 'admin-plugins',
          component: () => import('../views/admin_plugin/AdminPluginView.vue')
        },
        {
          path:'plugin/:id',
          name: "plugin",
          component: () => import('../views/plugins/DetailPluginView.vue')
    
        }
        
      ]
    }
    
    
    
  ]
})

export default router
