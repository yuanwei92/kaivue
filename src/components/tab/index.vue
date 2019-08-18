<template>
  <div class="kai-tab">
    <div class="kai-tab-item">
      <div class="kai-tab-item__text">{{ title }}</div>
      <div class="kai-tab-item__line kai-tab-item__line--active"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "KaiTab",

  props: {
    title: {
      type: String,
      default: "Tab"
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../less/main.less";

.kai-tab {
  flex: 1;

  &-item {
    position: relative;
    height: @tab-height;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: @tab-item-text-color;
    font-size: @tab-item-font-size;
    line-height: @tab-item-line-height;

    &__line {
      position: absolute;
      bottom: 0;
      height: 2px;
      width: 70%;
      border-radius: 3px;

      &--active {
        background-color: @tab-item-line-color;
      }
    }
  }
}
</style>
