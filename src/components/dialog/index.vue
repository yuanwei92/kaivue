<template>
  <div class="kai-dialog">
    <div class="kai-dialog__overlay"></div>

    <div class="kai-dialog__wrapper">
      <div class="kai-dialog__wrapper__title">
        {{ title }}
      </div>
      <div class="kai-dialog__wrapper__message">
        {{ message }}
      </div>
      <div class="kai-dialog__wrapper__key">
        <div
          class="kai-dialog__wrapper__key__left-key"
          @click="$emit('click-left-key')"
        >
          {{ leftKeyText }}
        </div>
        <div
          class="kai-dialog__wrapper__key__right-key"
          @click="$emit('click-right-key')"
        >
          {{ rightKeyText }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "KaiDialog",

  props: {
    title: {
      type: String,
      default: "Dialog Title"
    },

    message: {
      type: String
    },

    leftKeyText: {
      type: String,
      default: "Cancel"
    },

    rightKeyText: {
      type: String,
      default: "Confirm"
    }
  },

  created() {
    document.addEventListener("keydown", this.handleKeyDown);
  },

  methods: {
    handleKeyDown(event) {
      switch (event.key) {
        case "SoftLeft":
          this.$emit("click-left-key");
          break;

        case "SoftRight":
          this.$emit("click-right-key");
          break;

        case "Enter":
          this.$emit("click-middle-key");
          break;
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../less/main.less";

.kai-dialog {
  &__overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 2;
  }

  &__wrapper {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 3;

    &__title {
      text-align: center;
      color: @grey-text;
      font-size: @secondary-text-size;
      background-color: @dialog-title-background-color;
      height: @dialog-title-height;
      line-height: @dialog-title-height;
    }

    &__message {
      padding: 1rem;
      background-color: white;
      font-size: @secondary-text-size;
    }

    &__key {
      display: flex;
      box-sizing: border-box;
      justify-content: space-between;
      background-color: @software-key-background-color;
      font-size: @software-key-title-font-size;

      & > * {
        box-sizing: border-box;
        padding: 0.5rem;
        height: 100%;
      }
    }
  }
}
</style>
