<template>
  <aside class="app-drawer-container">
    <div class="app-drawer">
      <h2>AppSidebar/Drawer</h2>
      <ul>
        <li class="add_group">
          <span class="icon">GRP</span><span class="text">Create Group</span>
        </li>
        <li class="add_channel">
          <span class="icon"> CHNL</span
          ><span class="text">Create Channel</span>
        </li>
        <li class="add_contacts">
          <span class="icon"> CHNL</span><span class="text">Contacts</span>
        </li>
        <li class="calls">
          <a ng-href="#" target="_blank"
            ><span class="icon">CALS</span><span class="text">Calls</span></a
          >
        </li>
        <li class="setting">
          <span class="icon">STNG</span><span class="text">Settings</span>
        </li>
        <li class="switch_night">
          <span class="icon">SDark</span><span class="text">Night Mode</span>
          <div class="switch_bg">
            <ThemeSwitch />
            <div class="clear"></div>
          </div>
        </li>
        <li class="change_language">
          <span class="icon">LANG</span
          ><span class="text">Change Language</span>
          <div class="switch_bg">
            <ChangeLanguage />
            <div class="clear"></div>
          </div>
        </li>
        <li>
          <button @click="logout">
            <span class="icon icon_logout">LGT</span
            ><span class="text">{{ $t("data.logout.button") }}</span>
          </button>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { useLogin } from "@/hooks/accessControl/useLogin";
import ThemeSwitch from "@/views/components/ThemeSwitch.vue";
import ChangeLanguage from "@/views/components/ChangeLanguage.vue";

export default defineComponent({
  name: "AppSidebar",
  components: { ThemeSwitch, ChangeLanguage },
  setup(_props, context) {
    const { logout } = useLogin(context);
    return { logout };
  }
});
</script>
