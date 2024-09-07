import type { Badge } from "./badge";

export type Site = {
  id: number;
  name: string;
  progress: number;
  total: number;
  mainBadge: Badge;
  subBadges: Badge[];
};
