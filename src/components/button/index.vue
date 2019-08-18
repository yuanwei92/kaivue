<template>
  <div class="kai-button" @click="$emit('click')">
    <div
      class="kai-button__text"
      :class="backgroundColorClass"
      :style="[backgroundColorStyle, textColorStyle]"
    >
      <slot>Click Me</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "KaiButton",

  props: {
    isPrimary: {
      type: Boolean
    },

    backgroundColor: {
      type: String
    },

    textColor: {
      type: String
    }
  },

  computed: {
    backgroundColorClass() {
      if (this.isPrimary) {
        return { "kai-button--primary": true };
      }
      return {};
    },

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

.kai-button {
  height: @button-height;
  line-height: @button-height;
  background-color: @button-background-color;
  font-size: 17px;
  text-align: center;
  margin: 0 1rem;
  box-sizing: border-box;

  &__text {
    padding: 0 2rem;
    margin: 0 auto;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &--primary {
    background-color: @button-background-color-accent !important;
    color: @white-text;
  }
}
</style>
