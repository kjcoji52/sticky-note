import { configureStore } from "@reduxjs/toolkit";
import achievements from "./modules/achievements";

export default configureStore({
  reducer: {
    achievements: achievements,
  }
});
