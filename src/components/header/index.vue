<template>
  <div class="kai-header" :style="[backgroundColorStyle, fixedHeaderStyle]">
    <div class="kai-header-title" :style="textColorStyle">{{ title }}</div>
  </div>
</template>

<script>
export default {
  name: "KaiHeader",

  props: {
    title: {
      type: String,
      default: "Header"
    },
    backgroundColor: {
      type: String
    },
    textColor: {
      type: String
    },
    isFixed: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    backgroundColorStyle() {
      let backgroundColorStyle = { "background-color": this.backgroundColor };
      return backgroundColorStyle;
    },

    fixedHeaderStyle() {
      let fixedHeaderStyle = {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%"
      };
      return this.isFixed ? fixedHeaderStyle : {};
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

.kai-header {
  height: @header-height;
  line-height: @header-height;
  text-align: center;
  background-color: @header-background-color;
  z-index: 1;

  &-title {
    max-width: 80%;
    margin: 0 auto;
    color: white;
    font-weight: 500;
    font-size: @header-title-font-size;
  }
}
</style>
