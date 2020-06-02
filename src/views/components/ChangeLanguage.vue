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
import { defineComponent, onMounted } from "@vue/composition-api";
import Multiselect from "vue-multiselect";
import { useLocale } from "@/hooks/locales/useLocale";
import * as util from "@/hooks/locales/util_locale";
import store from "@/store";

export default defineComponent({
  name: "ChangeLanguage",
  components: {
    Multiselect
  },
  setup(_props, context) {
    const { languageTitles, currentLangTitle, updateLanguage } = useLocale(
      context
    );
    onMounted(() =>
      util.changeRTL(util.getLocaleRTL(store.getters.getLanguage))
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
