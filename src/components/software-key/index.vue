<template>
  <div class="kai-software-key">
    <div class="kai-software-key-item" @click="$emit('click-left-key')">
      {{ leftKey }}
    </div>
    <div
      class="kai-software-key-item kai-software-key-item--middle-item"
      @click="$emit('click-middle-key')"
    >
      {{ middleKeyUpperCase }}
    </div>
    <div class="kai-software-key-item" @click="$emit('click-right-key')">
      {{ rightKey }}
    </div>
  </div>
</template>

<script>
export default {
  name: "KaiSoftwareKey",

  props: {
    leftKey: {
      type: String
    },
    rightKey: {
      type: String
    },
    middleKey: {
      type: String
    }
  },

  created() {
    document.addEventListener("keydown", this.handleKeyDown);
  },

  computed: {
    middleKeyUpperCase() {
      return this.middleKey.toUpperCase();
    }
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

.kai-software-key {
  display: flex;
  width: 100%;
  font-size: @software-key-title-font-size;
  box-sizing: border-box;
  height: @software-key-height;
  line-height: @software-key-height;
  background-color: @software-key-background-color;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  margin: 5 auto;

  &-item {
    width: 33.33%;

    &--middle-item {
      font-weight: bold;
      text-transform: capitalize;
    }
  }

  &--safe-area-inset-bottom {
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
  }
}
</style>
