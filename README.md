# bblaGo.js

## 开始搞一搞vue3的一些小东西 具体要搞什么也没太想好 一遍研究一遍写吧 芭芭拉冲鸭！

* user: lam_jl
* createDate: 2020年11月09日22:59:04

1. 技术选型
   - 前端： Vue3.0 + vite + element3
   - 后端： nodejs + eggjs
   - 数据库： SQL
2. 环境依赖：
   - node: 14.4.0
   - npm: 6.14.5
3. 插件
   - eslint stylelint

## 2020年11月12日16:24:43更新：
   - 解决编程式路由跳转 router.push()
   - 存在问题： eslint中的template下根节点多个报错 
## 2020年11月12日20:04:36更新：
   - 解决eslint配置
      ```json
         // package.json
         "eslint": "^7.13.0",
         "eslint-config-prettier": "^6.15.0",
         "eslint-plugin-prettier": "^3.1.4",
         "eslint-plugin-vue": "^7.1.0",
         "prettier": "^2.1.2",
      ```
      ```js
         // .eslintrc.js
         module.exports = {
            parser: 'vue-eslint-parser',
            extends: [
               'plugin:vue/vue3-recommended',
               'prettier',
               'prettier/vue',
               'plugin:vue/essential',
               'plugin:prettier/recommended',
            ],
            rules: {
               'vue/no-unused-vars': 'error',
               'vue/no-multiple-template-root': 'off',
            },
         }
      ```
   - 使用axios调用接口 并成功登录获取信息
      - 坑： vue3未有全局Vue变量 使用 app.config.globalProperties.$axios = axios进行全局挂载
      ```js
         import { reactive, getCurrentInstance } from 'vue'
         const { ctx } = getCurrentInstance()
         const res = await ctx.$axios.post('/api/login', form)
      ```
   - 新增egg-bbla
      - 新增login接口
   - 存在问题： 
      - cfrs暂时配置false 需要另加鉴权
      - 未配置数据库
      - 服务层service
      - axios的配置不够模块化 未添加路由守卫
      .......
   - 雨露均沾：
      - 生命周期
      - vuex
      - jsx
      - slot
      - Suspense 和 异步 setup
      - 模块化
   - 工程化
      - git自动部署
      - 单元测试
      - UI
