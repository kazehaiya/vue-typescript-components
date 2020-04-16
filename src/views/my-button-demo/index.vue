<template>
  <section>
    <my-button text="测试" @click="handleClick"></my-button>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class MyButtonDemo extends Vue {
  handleClick() {
    console.log(1);
  }
}
</script>
