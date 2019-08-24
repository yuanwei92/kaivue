<template>
  <div class="home">
    <kai-header title="KaiOS UI Components" is-fixed></kai-header>

    <kai-list>
      <kai-list-item
        v-for="component in components"
        :key="component.name"
        :title="component.name"
        :subtitle="component.name"
        @click="onClickListItem(component)"
      >
        <template #right-icon>
          <font-awesome-icon class="action-icon-color" icon="chevron-right" />
        </template>
      </kai-list-item>
    </kai-list>

    <kai-software-key middle-key="Select"></kai-software-key>
  </div>
</template>

<script>
import { KaiHeader, KaiList, KaiListItem, KaiSoftwareKey } from "@/components";
import Navigation from "@/js/Navigation";

export default {
  name: "home",

  components: {
    KaiHeader,
    KaiList,
    KaiListItem,
    KaiSoftwareKey
  },

  data() {
    return {
      components: [
        { name: "Header", link: "header" },
        { name: "Tab", link: "tab" },
        { name: "Software Key", link: "software-key" },
        { name: "List", link: "list" },
        { name: "Separator", link: "separator" },
        { name: "Checkbox", link: "checkbox" },
        { name: "Radio Button", link: "radio-button" },
        { name: "Progress", link: "progress" },
        { name: "Slider", link: "slider" },
        { name: "Button", link: "button" },
        { name: "Input", link: "input" },
        { name: "Option Menu", link: "option-menu" },
        { name: "Value Selector", link: "value-selector" },
        { name: "Dialog", link: "dialog" },
        { name: "Notice", link: "notice" },
        { name: "Toast", link: "toast" }
      ]
    };
  },

  mounted() {
    Navigation.init(this.$store.state.currentComponentIndex);
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
      const self = this;
      let selectedItem = Navigation.getCurrentItem();

      switch (event.key) {
        case "ArrowDown":
          Navigation.Down();
          break;

        case "ArrowUp":
          Navigation.Up();
          break;

        case "Enter":
          self.$store.commit("setCurrentComponentIndex", selectedItem.index);
          self.$router.push(self.components[selectedItem.index].link);
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

.home {
  padding-top: @header-height;
  height: calc(~"100vh - 58px");
}
</style>
