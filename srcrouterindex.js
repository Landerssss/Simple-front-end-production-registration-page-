import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'
import RegisterView from '../views/RegisterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: { requiresGuest: true }
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
      meta: { requiresGuest: true }
    }
  ]
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('username')

  // 需要登录的页面
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login')
  }
  // 已登录用户不能访问登录和注册页面
  else if (to.meta.requiresGuest && isAuthenticated) {
    next('/')
  }
  else {
    next()
  }
})

export default router