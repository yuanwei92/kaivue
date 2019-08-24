<template>
  <div class="option-menu">
    <kai-header title="Option menu" is-fixed></kai-header>

    <div class="text is-secondary">
      Option Menu provides a list of choices on a pop-up component which may
      appear with controls such as a checkbox or radio button. It allows users
      to perform actions on objects without having to leave their current view.
    </div>

    <div class="text is-secondary">
      Selected option:
      <br />
      {{ selectedOption }}
    </div>

    <kai-software-key middle-key="SELECT" right-key="Back"></kai-software-key>

    <kai-OptionMenu
      v-if="isOptionMenuShown"
      title="Select"
      :options="options"
      @on-select="onSelect"
    ></kai-OptionMenu>
  </div>
</template>

<script>
import { KaiHeader, KaiSoftwareKey, KaiOptionMenu } from "@/components";

export default {
  name: "OptionMenu",

  components: {
    KaiHeader,
    KaiSoftwareKey,
    KaiOptionMenu
  },

  data() {
    return {
      isOptionMenuShown: false,
      selectedOption: "",
      options: [
        { text: "Option 1", value: 1 },
        { text: "Option 2", value: 2 },
        { text: "Option 3", value: 3 },
        { text: "Option 4", value: 4 }
      ]
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
          this.showOptionMenu();
          break;

        case "SoftRight":
          this.$router.back();
          break;

        default:
          break;
      }
    },

    onSelect(item) {
      this.selectedOption = item;
      this.hideOptionMenu();
    },

    showOptionMenu() {
      this.isOptionMenuShown = true;
    },

    hideOptionMenu() {
      this.isOptionMenuShown = false;
    }
  }
};
</script>

<style lang="less" scoped>
@import "../less/main.less";

.option-menu {
  padding-top: @header-height;
}
</style>
