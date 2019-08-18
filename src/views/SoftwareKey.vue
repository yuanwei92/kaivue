<template>
  <div class="header">
    <kai-header title="Software Key"></kai-header>

    <div class="text is-secondary">
      Each software key may or may not appear depending on availability. Always
      fixed to bottom.
    </div>

    <kai-software-key
      left-key="Left"
      middle-key="Middle"
      right-key="Right"
    ></kai-software-key>
  </div>
</template>

<script>
import { KaiHeader, KaiSoftwareKey } from "@/components";

export default {
  name: "SoftwareKey",

  components: {
    KaiHeader,
    KaiSoftwareKey
  }
};
</script>

<style></style>
