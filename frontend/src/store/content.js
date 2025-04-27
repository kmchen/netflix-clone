import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useContentStore = create(
  devtools((set) => ({
    contentType: "tv",
    setContentType: (type) => set({ contentType: type }),
  }))
);
