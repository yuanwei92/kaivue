<template>
  <div class="list">
    <kai-header title="List" is-fixed></kai-header>

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

    <div class="text is-secondary mt-2">
      Focused list item
    </div>
    <kai-list>
      <kai-list-item title="Title" subtitle="Subtitle" is-active>
        <template #right-icon>
          <font-awesome-icon
            style="color: #FFFFFF"
            class="action-icon-color"
            icon="chevron-right"
          />
        </template>
      </kai-list-item>
    </kai-list>

    <div class="text is-secondary mt-2">
      Custom color list item
    </div>
    <kai-list>
      <kai-list-item
        title="Title"
        subtitle="Subtitle"
        background-color="#cefc6a"
        title-text-color="#85003e"
        subtitle-text-color="#00818a"
      >
        <template #left-icon>
          <font-awesome-icon
            style="font-size: 32px; color: #000000;"
            class="action-icon-color"
            icon="user-circle"
          />
        </template>
      </kai-list-item>
    </kai-list>
  </div>
</template>

<script>
import { KaiHeader, KaiList, KaiListItem } from "@/components";

export default {
  name: "List",

  components: {
    KaiHeader,
    KaiList,
    KaiListItem
  }
};
</script>

<style lang="less" scoped>
@import "../less/main.less";

.list {
  padding-top: @header-height;
}
</style>
