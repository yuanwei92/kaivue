<template>
  <div class="button">
    <kai-header></kai-header>

    <div class="text is-secondary">Default button</div>
    <kai-button>Default</kai-button>

    <div class="text is-secondary">Primary button (Accent color)</div>
    <kai-button is-primary>Primary</kai-button>

    <div class="text is-secondary">Custom button</div>
    <kai-button background-color="#00FF00" text-color="#0000FF">
      Custom
    </kai-button>

    <div class="text is-secondary">Ellipsis</div>
    <kai-button>
      Long long long long long text
    </kai-button>
  </div>
</template>

<script>
import { KaiHeader, KaiButton } from "@/components";

export default {
  name: "Button",

  components: {
    KaiHeader,
    KaiButton
  }
};
</script>

<style></style>
