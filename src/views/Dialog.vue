<template>
  <div class="dialog">
    <kai-header title="Dialog" is-fixed></kai-header>

    <div class="text is-secondary">
      Basic usage
    </div>
    <kai-button @click="onShowDialog">
      Show Dialog
    </kai-button>
    <kai-dialog
      v-if="showDialog"
      title="Info"
      message="This is a normal dialog. Click confirm to show alert."
      @click-left-key="onClickLeftKey"
      @click-right-key="onClickRightKey"
    ></kai-dialog>
  </div>
</template>

<script>
import { KaiHeader, KaiDialog, KaiButton } from "@/components";

export default {
  name: "Dialog",

  components: {
    KaiHeader,
    KaiDialog,
    KaiButton
  },

  data() {
    return {
      showDialog: false
    };
  },

  methods: {
    onShowDialog() {
      this.showDialog = !this.showDialog;
    },

    onClickLeftKey() {
      this.showDialog = false;
    },

    onClickRightKey() {
      alert("Confirmed!");
      this.showDialog = false;
    }
  }
};
</script>

<style lang="less" scoped>
@import "../less/main.less";

.dialog {
  padding-top: @header-height;
}
</style>
