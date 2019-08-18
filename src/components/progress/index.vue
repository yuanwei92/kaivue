<template>
  <div class="kai-progress">
    <div class="kai-progress__message">
      {{ message }}
    </div>
    <div class="kai-progress__wrapper">
      <div
        class="kai-progress__wrapper__loading-bar kai-progress__wrapper__loading-bar--active"
        :style="loadingBarActiveStyle"
      ></div>
      <div
        class="kai-progress__wrapper__loading-bar kai-progress__wrapper__loading-bar--inactive"
        :style="loadingBarInactiveStyle"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "KaiProgress",

  props: {
    message: {
      type: String,
      default: "Downloading"
    },

    progress: {
      type: Number,
      default: 0
    }
  },

  computed: {
    loadingBarActiveStyle() {
      let style = { "flex-grow": this.progress };
      return style;
    },

    loadingBarInactiveStyle() {
      let flexGrow = 100 - this.progress;
      let style = { "flex-grow": flexGrow };
      return style;
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../less/main.less";

.kai-progress {
  height: @progress-height;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1rem;
  box-sizing: border-box;

  &__message {
    font-size: 17px;
    margin-bottom: 1rem;
  }

  &__wrapper {
    display: flex;

    &__loading-bar {
      height: 0.4rem;

      &--active {
        flex-grow: 4;
        background-color: @progress-loading-bar-active-color;
        margin-right: 0.3rem;
      }

      &--inactive {
        flex-grow: 6;
        background-color: @progress-loading-bar-inactive-color;
      }
    }
  }
}
</style>
