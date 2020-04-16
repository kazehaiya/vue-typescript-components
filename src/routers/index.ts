import { RouteConfig } from 'vue-router';

// 引入例子
import MyButton from '@/views/my-button-demo/index.vue';

const routes: RouteConfig[] = [
  {
    path: '/my-button',
    name: '我的按钮',
    component: MyButton
  }
];

export default routes;
