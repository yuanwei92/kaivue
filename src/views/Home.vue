<template>
  <div class="home">
    <kai-header title="KaiOS UI Components" is-fixed></kai-header>

    <kai-list>
      <kai-list-item
        v-for="component in components"
        :key="component.name"
        :title="component.name"
        @click="onClickListItem(component)"
      >
        <template #right-icon>
          <font-awesome-icon class="action-icon-color" icon="chevron-right" />
        </template>
      </kai-list-item>
    </kai-list>
  </div>
</template>

<script>
import { KaiHeader, KaiList, KaiListItem } from "@/components";

export default {
  name: "home",

  components: {
    KaiHeader,
    KaiList,
    KaiListItem
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

  created() {
    document.addEventListener("keydown", this.handleKeyDown);
  },

  methods: {
    onClickListItem(component) {
      this.$router.push(component.link);
    },

    handleKeyDown(event) {
      console.log(event);
    }
  }
};
</script>

<style lang="less" scoped>
@import "../less/main.less";

.home {
  padding-top: @header-height;
}
</style>
