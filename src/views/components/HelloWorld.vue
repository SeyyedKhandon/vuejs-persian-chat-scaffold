<template>
  <div class="hello">
    <h1 class="title-color">{{ msg }}</h1>
    <p class="content-color">
      {{ $t("data.hello_world.description") }}
    </p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HelloWorld",
  props: {
    msg: String
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
