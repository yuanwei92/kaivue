<template>
  <div class="separator">
    <kai-header title="Separator" is-fixed></kai-header>

    <div class="text is-secondary">
      Basic usage
    </div>

    <kai-separator title="Separator title"></kai-separator>

    <kai-software-key right-key="Back"></kai-software-key>
  </div>
</template>

<script>
import { KaiHeader, KaiSeparator, KaiSoftwareKey } from "@/components";

export default {
  name: "Separator",

  components: {
    KaiHeader,
    KaiSeparator,
    KaiSoftwareKey
  },

  mounted() {
    document.addEventListener("keydown", this.onKeyDown);
  },

  beforeDestroy() {
    document.removeEventListener("keydown", this.onKeyDown);
  },

  methods: {
    onKeyDown(event) {
      switch (event.key) {
        case "SoftRight":
          this.$router.back();
          break;

        default:
          break;
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import "../less/main.less";

.separator {
  padding-top: @header-height;
}
</style>
