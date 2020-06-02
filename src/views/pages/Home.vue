<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/images/logo.png" />
    <HelloWorld :msg="$t('data.hello_world.title')" class="content-color" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import HelloWorld from "@/views/components/HelloWorld.vue";

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld
  }
});
</script>
