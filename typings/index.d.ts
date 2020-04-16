import Vue, { VueConstructor } from 'vue';

declare class VueTypescriptComponents extends Vue {
  static install (Vue: VueConstructor<any>, options?: any): void;
}

export default VueTypescriptComponents;
