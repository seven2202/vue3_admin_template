import { createApp } from 'vue'
// 引入element-plus
import ElementPlus from 'element-plus'
// 引入element-plus样式
import 'element-plus/dist/index.css'
// Element Plus 组件 默认 使用英语，如果你希望使用其他语言,我们使用中文
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import App from './App.vue'
// 创建vue的应用实例
const app = createApp(App)
// 将 Element Plus 组件库作为插件使用到 Vue 应用中
app.use(ElementPlus, {
  locale: zhCn,
})
console.log(import.meta.env)
// 将 Vue 应用实例 app 挂载到页面的 #app 元素上。
app.mount('#app')
