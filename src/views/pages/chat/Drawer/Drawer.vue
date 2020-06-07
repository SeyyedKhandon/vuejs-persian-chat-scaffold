<template>
  <aside class="app-drawer" :class="isDrawerActive ? 'drawer-active' : ''">
    <h2>{{ $t("data.chat.drawer.title") }}</h2>
    <ul>
      <li class="add_group">
        <span class="icon">GRP</span
        ><span class="text">{{ $t("data.chat.drawer.newGroup") }}</span>
      </li>
      <li class="add_channel">
        <span class="icon"> CHNL</span
        ><span class="text">{{ $t("data.chat.drawer.newChannel") }}</span>
      </li>
      <li class="add_contacts">
        <span class="icon"> CNTCS</span
        ><span class="text">{{ $t("data.chat.drawer.contacts") }}</span>
      </li>
      <li class="calls">
        <a ng-href="#" target="_blank"
          ><span class="icon">CALS</span
          ><span class="text">{{ $t("data.chat.drawer.calls") }}</span></a
        >
      </li>
      <li class="setting">
        <span class="icon">STNG</span>
        <button @click="openModal">show drawer</button>
        <span class="text">{{ $t("data.chat.drawer.settings") }}</span>
      </li>
      <li class="switch_night">
        <span class="icon">SDark</span
        ><span class="text">{{ $t("data.chat.drawer.nightMode") }}</span>
        <div class="switch_bg">
          <ThemeSwitch />
          <div class="clear"></div>
        </div>
      </li>
      <li class="change_language">
        <span class="icon">LANG</span
        ><span class="text">{{ $t("data.chat.drawer.changeLang") }}</span>
        <div class="switch_bg">
          <ChangeLanguage />
          <div class="clear"></div>
        </div>
      </li>
      <li>
        <button @click="logout">
          <span class="icon icon_logout">LGT</span
          ><span class="text">{{ $t("data.chat.drawer.logout") }}</span>
        </button>
      </li>
    </ul>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { useLogin } from "@/views/pages/login/useLogin";
import ThemeSwitch from "@/views/components/theme/ThemeSwitch.vue";
import ChangeLanguage from "@/views/components/langSwitch/ChangeLanguage.vue";
import { useDrawer } from "@/views/pages/chat/Drawer/useDrawer";
import { useModalManager } from "@/views/pages/chat/ModalManager/useModalManager";
export default defineComponent({
  name: "Drawer",
  components: { ThemeSwitch, ChangeLanguage },
  setup() {
    const { logout } = useLogin();
    const { isDrawerActive } = useDrawer();
    const { openModal } = useModalManager();
    return { logout, isDrawerActive, openModal };
  }
});
</script>
