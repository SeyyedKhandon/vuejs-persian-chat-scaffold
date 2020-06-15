import Vue from "vue";
//custom directives
// import "@/vuejsCustomDirectives";
// register Vue-composition api
import VueCompositionApi from "@vue/composition-api";
Vue.use(VueCompositionApi);
// register vue-snotify
import Snotify from "vue-snotify";
Vue.use(Snotify);
// click outside component
// @ts-ignore
import vClickOutside from "v-click-outside";
Vue.use(vClickOutside);
