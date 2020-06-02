<template>
  <div class="error-404">
    <h2 class="text-error" data-text="403 Forbidden Access">
      {{ $t("data.errorPages.error403.title") }}
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
  name: "Err403ForbiddenAccess"
};
</script>

<style scoped></style>
