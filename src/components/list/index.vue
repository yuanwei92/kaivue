<template>
  <div class="kai-list">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "KaiList"
};
</script>

<style lang="less" scoped>
@import "../../less/main.less";

.kai-list {
  border-top: 1px solid #ebedf0;
}
</style>
