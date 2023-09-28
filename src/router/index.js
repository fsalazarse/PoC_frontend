import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/home',
      name: 'base',
      component: () => import('../views/BaseView.vue'),
      children: [
        {
          path: 'instrucciones',
          name: 'instrucciones',
          component: () => import('../views/InstructionView.vue')
        },
        {
          path: 'admin_plugins',
          name: 'admin-plugins',
          component: () => import('../views/admin_plugin/AdminPluginView.vue')
        },
        {
          path:'plugin/:id',
          name: "plugin",
          component: () => import('../views/plugins/DetailPluginView.vue')
    
        }
        
      ]
    },

    {
      path: '/login',
      name: 'login',
      component: () => import('../views/auth/LoginView.vue')
    },
    
    
    
  ]
})

export default router
