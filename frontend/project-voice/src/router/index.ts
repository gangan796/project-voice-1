/**
 * Vue Router 路由配置文件
 * 负责管理整个应用的路由映射和导航行为
 * 包含：路由定义、动态标题、导航守卫等功能
 */

// 从 vue-router 库中导入所需的类型和函数
import {
  createRouter,           // 创建路由实例的核心函数
  createWebHistory,       // 创建基于 HTML5 history API 的路由模式
  type NavigationGuardNext, // 导航守卫中 next 函数的类型定义
  type RouteLocationNormalized // 标准化后的路由位置对象类型
} from 'vue-router'

// 导入页面组件（@ 是 src 目录的别名，在 vite.config.ts 中配置）
import HomeView from '@/views/HomeView.vue'  // 首页组件
import About from '@/views/Abouts.vue'      // 关于页面组件

/**
 * TypeScript 模块声明扩展
 * 为 vue-router 的路由元信息(meta)添加自定义类型
 * 这样在使用 TypeScript 时，meta.title 会有完整的类型提示
 */
declare module 'vue-router' {
  interface RouteMeta {
    title?: string  // 可选的页面标题，用于动态设置浏览器标签页标题
  }
}

/**
 * 创建路由实例
 * 这是整个路由系统的核心配置对象
 */
const router = createRouter({
  // 路由模式配置：使用 HTML5 history 模式
  // 优点：URL 更美观（没有 # 号），支持浏览器前进后退按钮
  // 缺点：需要服务器配置支持（防止 404 错误）
  history: createWebHistory(import.meta.env.BASE_URL),
  
  // 路由映射表：定义 URL 路径与组件的对应关系
  routes: [
    {
      path: '/',           // 访问路径：网站根目录
      name: 'Home',        // 路由名称，用于编程式导航（如 router.push({ name: 'Home' })）
      component: HomeView, // 对应的组件，访问 '/' 时渲染这个组件
      meta: {              // 路由元信息：存储额外的自定义数据
        title: '默筏'      // 页面标题，会被导航守卫用来设置 document.title
      }
    },
    {
      path: '/about',      // 访问路径：/about
      name: 'About',       // 路由名称
      component: About,    // 对应的组件
      meta: {
        title: '默筏-关于我们' // 关于页面的标题
      }
    }
  ]
})

/**
 * 全局前置守卫 - 路由拦截器
 * 作用：在路由切换开始前执行，可以在这里进行权限验证、标题设置等操作
 * 
 * 执行时机：
 * 1. 点击路由链接时
 * 2. 浏览器前进/后退时
 * 3. 编程式导航时（router.push()）
 */
router.beforeEach(
  (
    to: RouteLocationNormalized,    // 即将进入的目标路由对象
    from: RouteLocationNormalized,  // 当前正要离开的路由对象
    next: NavigationGuardNext       // 必须调用的函数，否则路由会被阻塞
  ) => {
    // 动态设置页面标题
    // 原理：根据路由元信息中的 title 字段，修改浏览器标签页的标题
    if (to.meta.title) {
      document.title = to.meta.title
    }
    
    // 重要：必须调用 next() 才能继续路由导航
    // next() 的几种用法：
    // - next()              : 继续进入目标路由
    // - next(false)         : 中断当前导航，停留在当前页面
    // - next('/login')      : 跳转到指定路径
    // - next({ name: 'Home' }): 跳转到指定名称的路由
    next()
  }
)

// 导出路由实例，供 main.ts 使用
// 在 main.ts 中会：app.use(router) 来注册路由系统
export default router
