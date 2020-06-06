<template>
  <multiselect
    v-model="currentLangTitle"
    class="locale_multiselect"
    :options="languageTitles"
    :close-on-select="true"
    :searchable="false"
    :show-labels="false"
    :allow-empty="false"
    @select="updateLanguage"
  >
  </multiselect>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import Multiselect from "vue-multiselect";
import { useLocale } from "@/hooks/locales/useLocale";

export default defineComponent({
  name: "ChangeLanguage",
  components: {
    Multiselect
  },
  setup(_props, context) {
    const { languageTitles, currentLangTitle, updateLanguage } = useLocale(
      context
    );
    return {
      languageTitles,
      currentLangTitle,
      updateLanguage
    };
  }
});
</script>
<style lang="scss">
/*@import "src/assets/styles/components/ChangeLanguage";*/
</style>
