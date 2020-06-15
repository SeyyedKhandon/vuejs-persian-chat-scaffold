import { AppOverlay } from "./index";
const setOverlay = (state: AppOverlay, flag: boolean) => (state.overlay = flag);
const setDrawer = (state: AppOverlay, flag: boolean) => {
  state.overlay = flag;
  state.drawer = flag;
  state.modal = false;
};
const setModal = (state: AppOverlay, flag: boolean) => {
  state.overlay = flag;
  state.modal = flag;
  state.drawer = false;
};
const closeOverlays = (state: AppOverlay) => {
  state.overlay = false;
  state.drawer = false;
  state.modal = false;
};

export default {
  closeOverlays,
  setOverlay,
  setDrawer,
  setModal
};
