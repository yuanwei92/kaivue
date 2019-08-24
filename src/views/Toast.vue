<template>
  <div class="toast">
    <kai-header title="Toast" is-fixed></kai-header>

    <div class="text is-secondary">
      Toast appears at the top of the screen and provides important information,
      or alerts the user to a system event. It can’t be interacted with and will
      automatically time out depending on the length of the content.
    </div>

    <kai-software-key middle-key="TOAST!" right-key="Back"></kai-software-key>

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

.toast {
  padding-top: @header-height;
}
</style>
