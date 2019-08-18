<template>
  <div class="separator">
    <kai-header title="Separator" is-fixed></kai-header>

    <div class="text is-secondary">
      Basic usage
    </div>

    <kai-separator title="Separator title"></kai-separator>
  </div>
</template>

<script>
import { KaiHeader, KaiSeparator } from "@/components";

export default {
  name: "Separator",

  components: {
    KaiHeader,
    KaiSeparator
  }
};
</script>

<style lang="less" scoped>
@import "../less/main.less";

.separator {
  padding-top: @header-height;
}
</style>
