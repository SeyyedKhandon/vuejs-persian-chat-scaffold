<template>
  <div class="loading_container">
    <img
      class="loading_logo"
      src="@/assets/images/logo.png"
      alt="company logo"
    />
    <div class="loading_box">
      <div class="loading_dot"></div>
      <div class="loading_dot"></div>
      <div class="loading_dot"></div>
      <div class="loading_dot"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
export default defineComponent({
  name: "Loading"
});
</script>

<style lang="scss">
/*@import "src/assets/styles/components/Loading";*/
</style>
