<template>
  <div class="dialog">
    <kai-header title="Dialog" is-fixed></kai-header>

    <div class="text is-secondary">
      Basic usage
    </div>
    <kai-button id="showDialogButton">
      Show Dialog
    </kai-button>

    <kai-dialog
      v-if="showDialog"
      title="Info"
      message="This is a normal dialog. Click confirm to show alert."
    ></kai-dialog>

    <kai-toast v-if="isToastShown" :message="toastMessage" />

    <kai-software-key right-key="Back"></kai-software-key>
  </div>
</template>

<script>
import {
  KaiHeader,
  KaiDialog,
  KaiButton,
  KaiToast,
  KaiSoftwareKey
} from "@/components";
import Navigation from "@/js/Navigation";

export default {
  name: "Dialog",

  components: {
    KaiHeader,
    KaiDialog,
    KaiButton,
    KaiToast,
    KaiSoftwareKey
  },

  data() {
    return {
      isToastShown: false,
      toastMessage: "",
      showDialog: false
    };
  },

  mounted() {
    Navigation.init();
    document.addEventListener("keydown", this.onKeyDown);
  },

  beforeDestroy() {
    document.removeEventListener("keydown", this.onKeyDown);
  },

  methods: {
    onKeyDown(event) {
      let selectedItem = Navigation.getCurrentItem();

      switch (event.key) {
        case "SoftLeft":
          if (this.showDialog) {
            this.onToggleDialog();
            break;
          }
          break;

        case "SoftRight":
          if (this.showDialog) {
            this.showToast("Dialog confirmed!");
            this.onToggleDialog();
            break;
          }
          this.$router.back();
          break;

        case "Enter":
          this.onElementClicked(selectedItem);
          break;

        default:
          break;
      }
    },

    onToggleDialog() {
      this.showDialog = !this.showDialog;
    },

    showToast(message) {
      this.isToastShown = true;
      this.toastMessage = message;
      const self = this;
      setTimeout(function() {
        self.isToastShown = false;
      }, 3000);
    },

    onElementClicked(selectedItem) {
      switch (selectedItem.element.id) {
        case "showDialogButton":
          this.onToggleDialog();
          break;

        default:
          break;
      }
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
