<template>
  <div class="notice">
    <kai-header title="Notice" is-fixed></kai-header>

    <div class="text is-secondary">
      Notice appears at the top of the screen like Notice, but with different
      layout. A Notice has an icon, primary text, and secondary text. After a
      Notice disappears from the top of the screen, users can still access it
      from Notices panel.
    </div>

    <kai-software-key middle-key="NOTICE!" right-key="Back"></kai-software-key>

    <kai-notice
      v-if="isNoticeShown"
      title="Battery full"
      subtitle="Battery is fully charged"
      fa-icon="battery-full"
    ></kai-notice>
  </div>
</template>

<script>
import { KaiHeader, KaiSoftwareKey, KaiNotice } from "@/components";

export default {
  name: "Notice",

  components: {
    KaiHeader,
    KaiSoftwareKey,
    KaiNotice
  },

  data() {
    return {
      isNoticeShown: false,
      NoticeMessage: ""
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
          this.showNotice();
          break;

        case "SoftRight":
          this.$router.back();
          break;

        default:
          break;
      }
    },

    showNotice() {
      this.isNoticeShown = true;
      const self = this;
      setTimeout(function() {
        self.isNoticeShown = false;
      }, 3000);
    }
  }
};
</script>

<style lang="less" scoped>
@import "../less/main.less";

.notice {
  padding-top: @header-height;
}
</style>
