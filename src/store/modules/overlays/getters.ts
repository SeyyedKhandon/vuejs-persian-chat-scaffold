import { AppOverlay } from "./index";

const isOverlayActive = (state: AppOverlay) => state.overlay;
const isDrawerActive = (state: AppOverlay) => state.drawer;
const isModalActive = (state: AppOverlay) => state.modal;

export default { isOverlayActive, isDrawerActive, isModalActive };
