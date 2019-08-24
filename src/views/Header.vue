<template>
  <div class="header">
    <kai-header is-fixed></kai-header>

    <div class="text is-secondary">Basic usage</div>
    <kai-header title="Default"></kai-header>

    <div class="text is-secondary">Custom color</div>
    <kai-header
      title="Custom"
      background-color="#55FFFF"
      text-color="#000000"
    ></kai-header>

    <kai-software-key right-key="Back"></kai-software-key>
  </div>
</template>

<script>
import { KaiHeader, KaiSoftwareKey } from "@/components";

export default {
  name: "Header",

  components: {
    KaiHeader,
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
      console.log(event.key);
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
@import "../less/var.less";

.header {
  padding-top: @header-height;
}
</style>
