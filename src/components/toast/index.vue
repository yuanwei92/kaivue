<template>
  <div class="kai-toast">
    <div class="kai-toast__text">
      {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  name: "KaiToast",

  props: {
    message: {
      type: String,
      default: "This is a toast!"
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../less/main.less";

.kai-toast {
  position: fixed;
  font-size: @primary-text-size;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
  background-color: @toast-background-color;
  z-index: 3;
  padding: 6px;
  box-sizing: border-box;
  color: @white-text;
  box-shadow: 0 1px 6px #888888;
}
</style>
