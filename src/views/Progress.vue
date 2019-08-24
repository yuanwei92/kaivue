<template>
  <div class="progress">
    <kai-header title="Progress" is-fixed></kai-header>

    <div class="text is-secondary">
      Basic usage
    </div>
    <kai-progress message="Loading" :progress="30"></kai-progress>

    <div class="text is-secondary">
      Custom color
    </div>
    <kai-progress :progress="58" bar-color="#FF0000"></kai-progress>

    <kai-software-key right-key="Back"></kai-software-key>
  </div>
</template>

<script>
import { KaiHeader, KaiProgress, KaiSoftwareKey } from "@/components";

export default {
  name: "Progress",

  components: {
    KaiHeader,
    KaiProgress,
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

.progress {
  padding-top: @header-height;
}
</style>
