<template>
  <section id="app" class="app-wrapper">
    <el-menu
      unique-opened
      text-color="#ffffff"
      background-color="#2e384d"
      active-text-color="#ffd04b"
      :default-active="currentSelect"
      @select="handleSelect"
    >
      <template
        v-for="({ path, name, children = [] }, index) in routeList"
      >
        <!-- 含有子页面 -->
        <el-submenu v-if="children.length" :key="index" :index="path">
          <template slot="title">{{ name }}</template>
          <el-menu-item
            v-for="(child, childIndex) in children"
            :key="childIndex"
            :index="child.path"
          >{{ child.name }}</el-menu-item>
        </el-submenu>
        <!-- 单个页面 -->
        <el-menu-item v-else :key="index" :index="path">{{ name }}</el-menu-item>
      </template>
    </el-menu>

    <div class="content-container">
      <router-view></router-view>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import ComponentList from './routers';
import 'element-ui/lib/theme-chalk/menu.css';

@Component
export default class App extends Vue {
  // 当前选中路由
  currentSelect = '/code-editor';

  // 路由列表
  routeList = ComponentList;

  // 路由选中事件
  handleSelect(key: string, keyPath: string) {
    if (key !== this.currentSelect) {
      this.currentSelect = key;
      this.$router.push({
        path: key
      });
    }
  }
}
</script>

<style lang="less">
.app-wrapper {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;

  .content-container {
    background-color: #f2f2f2;
    box-sizing: border-box;
    height: 100%;
    flex-grow: 1;
    overflow-x: hidden;
    padding: 16px 16px 0;
  }
}
</style>
