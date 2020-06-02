<template>
  <div class="about">
    <h3 class="title-color">{{ $t("data.about.github_users") }}</h3>
    <ol class="github-users">
      <li v-for="username in usernames" :key="username" v-cloak>
        {{ username }}
      </li>
    </ol>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { useGithubUsers } from "@/hooks/useGithubUsers";
export default defineComponent({
  name: "GithubUsers",
  setup() {
    const { usernames } = useGithubUsers();
    return { usernames };
  }
});
</script>
<style lang="scss"></style>
