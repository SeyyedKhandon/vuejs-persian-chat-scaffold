<template>
  <div class="about">
    <h1>{{ $t("data.about.info") }}</h1>
    <GithubUsers />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import GithubUsers from "@/views/components/GithubUsers.vue";
export default defineComponent({
  name: "About",
  components: {
    GithubUsers
  }
});
</script>
<style lang="scss"></style>
