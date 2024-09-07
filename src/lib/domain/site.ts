import type { Badge } from "./badge";

export type SiteTemple = {
  type: "temple";
  id: number;
  name: string;
  progress: number;
  total: number;
  mainBadge: Badge;
  subBadges: Badge[];
};

export type SiteSport = {
  type: "sport";
  id: number;
  name: string;
  events: {
    name: string;
    description: string;
    subEvents: {
      name: string;
    }[];
  }[];
};

export type Site = SiteTemple | SiteSport;
