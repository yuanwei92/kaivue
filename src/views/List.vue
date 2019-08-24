<template>
  <div class="list">
    <kai-header title="List" is-fixed></kai-header>

    <div class="text is-secondary">
      Focused one line list item
    </div>
    <kai-list>
      <kai-list-item title="Title"></kai-list-item>
    </kai-list>

    <div class="text is-secondary">
      One line list item
    </div>
    <kai-list>
      <kai-list-item title="Title"></kai-list-item>
    </kai-list>

    <div class="text is-secondary mt-2">
      Two line list item
    </div>
    <kai-list>
      <kai-list-item title="Title" subtitle="Subtitle"></kai-list-item>
    </kai-list>

    <div class="text is-secondary mt-2">
      With icons. Inserted using named slot. This example uses FontAwesome
      Icons.
    </div>
    <kai-list>
      <kai-list-item title="Title" subtitle="Subtitle">
        <template #left-icon>
          <font-awesome-icon
            style="font-size: 32px;"
            class="action-icon-color"
            icon="user-circle"
          />
        </template>
        <template #right-icon>
          <font-awesome-icon class="action-icon-color" icon="chevron-right" />
        </template>
      </kai-list-item>
    </kai-list>

    <kai-software-key right-key="back"></kai-software-key>
  </div>
</template>

<script>
import { KaiHeader, KaiList, KaiListItem, KaiSoftwareKey } from "@/components";
import Navigation from "@/js/Navigation";

export default {
  name: "List",

  components: {
    KaiHeader,
    KaiList,
    KaiListItem,
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
    onKeyDown(event) {
      switch (event.key) {
        case "ArrowDown":
          document.querySelector("#app").scrollBy({
            top: 60,
            behavior: "smooth"
          });
          break;

        case "ArrowUp":
          document.querySelector("#app").scrollBy({
            top: -60,
            behavior: "smooth"
          });
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

.list {
  padding-top: @header-height;
  height: calc(~"100vh - 58px");
}
</style>
