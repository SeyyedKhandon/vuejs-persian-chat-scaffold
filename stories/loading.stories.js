import Loading from "@/views/components/loading/Loading.vue";
import "@/assets/styles/themes/index.scss";
import "@/assets/styles/components/_Loading.scss";
export default {
  component: Loading,
  title: "Loading"
};

export const loading = () => ({
  components: { Loading },
  template: "<Loading/>"
});
