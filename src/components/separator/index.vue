<template>
  <div class="kai-separator">
    <div class="kai-separator-title">
      {{ title }}
    </div>
  </div>
</template>

<script>
export default {
  name: "KaiSeparator",

  props: {
    title: {
      type: String,
      default: "Separator"
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../less/main.less";

.kai-separator {
  height: @separator-height;
  line-height: @separator-height;
  color: @separator-text-color;
  padding: 0 10px;
  background-color: @separator-background-color;
  font-size: @separator-font-size;
}
</style>
