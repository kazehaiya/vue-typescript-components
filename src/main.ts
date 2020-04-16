import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';
import ComponentList from './entry';
// 引入默认样式
import '@/assets/css/index.css';

Vue.config.productionTip = false;

Vue.use(ElementUI, { size: 'mini' });
Vue.use(ComponentList);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
