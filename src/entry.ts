import { VueConstructor } from 'vue';
// 组件的引入
import MyButton from '@packages/button';

// 所有组件（全量注册）
const components: VueConstructor[] = [
  MyButton
];

// 全量注册组件
const install = function (Vue: VueConstructor) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

// script 引入兼容
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

// 全量导出
export default {
  install,
  MyButton
};
