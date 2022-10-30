import { createStore } from "vuex";
import snackbar from "./modules/snackbar";
import room from "./modules/room";

export default createStore({
  modules: {
    snackbar,
    room,
  },
});
