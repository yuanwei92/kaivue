<template>
  <div class="list">
    <kai-header title="List"></kai-header>

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
.mt-2 {
  margin-top: 2rem;
}
</style>
