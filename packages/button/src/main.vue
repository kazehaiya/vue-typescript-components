<template>
  <el-button
    class="my-button"
    :type="type"
    :disabled="disabled"
    @click="handleClick"
  >{{ text }}</el-button>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import 'element-ui/lib/theme-chalk/button.css';

@Component
export default class MyButton extends Vue {
  @Prop({ type: String, default: 'primary' }) type!: string;
  @Prop({ type: String, default: '按钮' }) text!: string;
  @Prop({ type: Boolean, default: false }) disabled!: boolean;

  handleClick() {
    this.$emit('click');
  }
}
</script>

<style lang="less">
.my-button {
  border-radius: 2px;
}
</style>
