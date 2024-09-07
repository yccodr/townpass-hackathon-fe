import { create } from "zustand";
import { Site } from "../domain/site";

type SiteStore = {
  currentSite: Site | null;
  setSite: (site: Site) => void;
  resetSite: () => void;
};

export const useSiteStore = create<SiteStore>((set) => ({
  currentSite: null,
  setSite: (site) => set({ currentSite: site }),
  resetSite: () => set({ currentSite: null }),
}));
