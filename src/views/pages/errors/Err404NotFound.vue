<template>
  <div class="error-404">
    <h2 class="text-error" data-text="404 page not found">
      {{ $t("data.errorPages.error404.title") }}
    </h2>
    <div class="text-link">
      <router-link to="/" data-text="click here to go home">
        {{ $t("data.errorPages.error404.hint") }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Err404NotFound"
};
</script>

<style scoped></style>
