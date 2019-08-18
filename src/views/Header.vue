<template>
  <div class="header">
    <kai-header is-fixed></kai-header>

    <div class="text is-secondary">Header not fixed to top</div>
    <kai-header title="Not Fixed"></kai-header>

    <div class="text is-secondary">Custom color</div>
    <kai-header
      title="Custom"
      background-color="#55FFFF"
      text-color="#000000"
    ></kai-header>
  </div>
</template>

<script>
import { KaiHeader } from "@/components";

export default {
  name: "Header",

  components: {
    KaiHeader
  }
};
</script>

<style lang="less" scoped>
@import "../less/var.less";

.header {
  padding-top: @header-height;
}
</style>
