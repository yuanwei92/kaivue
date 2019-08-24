<template>
  <div class="software-key">
    <kai-header title="Software Key" is-fixed></kai-header>

    <div class="text is-secondary">
      Each software key may or may not appear depending on availability. Always
      fixed to bottom.
    </div>

    <kai-software-key
      left-key="Left"
      middle-key="MIDDLE"
      right-key="Back"
    ></kai-software-key>

    <kai-toast v-if="isToastShown" :message="toastMessage" />
  </div>
</template>

<script>
import { KaiHeader, KaiSoftwareKey, KaiToast } from "@/components";

export default {
  name: "SoftwareKey",

  components: {
    KaiHeader,
    KaiSoftwareKey,
    KaiToast
  },

  data() {
    return {
      isToastShown: false,
      toastMessage: ""
    };
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
        case "SoftLeft":
          this.showToast("Left key pressed");
          break;

        case "Enter":
          this.showToast("Middle key pressed!");
          break;

        case "SoftRight":
          this.$router.back();
          break;

        default:
          break;
      }
    },

    showToast(message) {
      this.isToastShown = true;
      this.toastMessage = message;
      const self = this;
      setTimeout(function() {
        self.isToastShown = false;
      }, 3000);
    }
  }
};
</script>

<style lang="less" scoped>
@import "../less/main.less";

.software-key {
  padding-top: @header-height;
}
</style>
