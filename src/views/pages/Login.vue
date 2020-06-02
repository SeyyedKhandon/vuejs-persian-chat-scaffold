<template>
  <div>
    <h3>{{ $t("data.login.title") }}</h3>
    <p>{{ $t("data.login.hint") }}</p>
    <form id="app" @submit.prevent="login">
      <div v-if="state.errors.length">
        <b>{{ $t("data.login.errors.title") }}</b>
        <ul>
          <li v-for="error in (() => state.errors)()" :key="error">
            {{ error }}
          </li>
        </ul>
      </div>
      <p>
        <label for="username">{{ $t("data.login.username") }}</label>
        <input
          id="username"
          v-model="state.username"
          type="text"
          name="username"
        />
      </p>
      <p>
        <label for="password">{{ $t("data.login.username") }}</label>
        <input
          id="password"
          v-model="state.password"
          type="password"
          name="password"
        />
      </p>
      <div>
        <input type="submit" value="Submit" />
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { useLogin } from "@/hooks/accessControl/useLogin";

export default defineComponent({
  name: "Login",
  setup(_props, context) {
    const { state, login } = useLogin(context);
    return { state, login };
  }
});
</script>

<style scoped></style>
