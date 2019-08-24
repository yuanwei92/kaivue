<template>
  <div class="button">
    <kai-header title="Button" is-fixed></kai-header>

    <div class="text is-secondary">Default button</div>
    <kai-button>Default</kai-button>

    <div class="text is-secondary">Ellipsis</div>
    <kai-button>
      Long long long long long text
    </kai-button>

    <kai-software-key right-key="Back"></kai-software-key>
  </div>
</template>

<script>
import { KaiHeader, KaiButton, KaiSoftwareKey } from "@/components";
import Navigation from "@/js/Navigation";

export default {
  name: "Button",

  components: {
    KaiHeader,
    KaiButton,
    KaiSoftwareKey
  },

  mounted() {
    Navigation.init();
    document.addEventListener("keydown", this.onKeyDown);
  },

  beforeDestroy() {
    document.removeEventListener("keydown", this.onKeyDown);
  },

  methods: {
    onClickListItem(component) {
      this.$router.push(component.link);
    },

    onKeyDown(event) {
      switch (event.key) {
        case "ArrowDown":
          Navigation.Down();
          break;

        case "ArrowUp":
          Navigation.Up();
          break;

        case "Enter":
          break;

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

.button {
  padding-top: @header-height;
  height: calc(~"100vh - 58px");
  overflow: scroll;
}
</style>
