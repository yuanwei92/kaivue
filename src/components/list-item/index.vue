<template>
  <div
    class="kai-list-item"
    @click="$emit('click')"
    :style="backgroundColorStyle"
  >
    <div class="kai-list-item__wrapper">
      <div class="kai-list-item__wrapper__icon-left">
        <slot name="left-icon"></slot>
      </div>

      <div class="kai-list-item__wrapper__content">
        <div
          class="kai-list-item__wrapper__content__title"
          :style="textColorStyle"
        >
          {{ title }}
        </div>
        <div class="kai-list-item__wrapper__content__subtitle">
          {{ subtitle }}
        </div>
      </div>

      <div class="kai-list-item__wrapper__icon-right">
        <slot name="right-icon"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "KaiListItem",

  props: {
    title: {
      type: String,
      default: "Title"
    },

    subtitle: {
      type: String
    },

    backgroundColor: {
      type: String
    },

    textColor: {
      type: String
    }
  },

  computed: {
    backgroundColorStyle() {
      let backgroundColorStyle = { "background-color": this.backgroundColor };
      return backgroundColorStyle;
    },

    textColorStyle() {
      return {
        color: this.textColor
      };
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../less/main.less";

.kai-list-item {
  box-sizing: border-box;
  height: @list-item-height;
  background-color: @list-item-background-color;
  border-bottom: 1px solid #ebedf0;
  padding: @list-item-padding;

  &__wrapper {
    display: flex;
    height: 100%;
    justify-content: space-between;

    &__icon-left {
      font-size: @action-icon-size;
      line-height: @action-icon-size;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    &__icon-left:first-child {
      margin-right: @list-item-padding;
    }

    &__content {
      height: 100%;
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: center;

      &__title {
        font-size: 17px;
        margin-bottom: 2px;
      }

      &__subtitle {
        font-size: 14px;
        color: @grey-text;
      }
    }

    &__icon-right {
      box-sizing: border-box;
      font-size: @action-icon-size;
      line-height: @action-icon-size;
      padding: @action-icon-padding;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
}
</style>
