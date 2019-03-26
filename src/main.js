// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
/* eslint-disable no-new */
new Vue({   //配置对象的属性名都是一些确定的名称，不能随便修改
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
