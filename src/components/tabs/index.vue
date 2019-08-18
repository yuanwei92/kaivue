<template>
  <div class="kai-tabs">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "KaiTabs",

  props: {
    isSticky: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../less/main.less";

.kai-tabs {
  height: @tab-height;
  line-height: @tab-height;
  background-color: @tab-background-color;
  display: flex;
}
</style>
