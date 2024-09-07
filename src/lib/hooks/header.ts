import { create } from "zustand";

type HeaderStore = {
  title: string;
  setTitle: (title: string) => void;
  resetTitle: () => void;
};

export const useHeaderStore = create<HeaderStore>((set) => {
  return {
    title: "",
    setTitle: (title) => set({ title }),
    resetTitle: () => {
      set({ title: "" });
    },
  } satisfies HeaderStore;
});
