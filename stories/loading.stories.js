import Loading from "@/views/components/loading/Loading.vue";
import "@/assets/styles/index.scss";

export default {
  component: Loading,
  title: "Loading"
};

export const loading = () => ({
  components: { Loading },
  template: "<Loading/>"
});
