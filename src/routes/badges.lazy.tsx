import { EventBadge } from "@/components/EventBadge";
import { createLazyFileRoute } from "@tanstack/react-router";
import type { Badge } from "@/lib/domain/badge";

export const Route = createLazyFileRoute("/badges")({
  component: Home,
});

const mockBadges: Badge[] = [
  {
    id: 1,
    name: "行天宮",
    description: "從行天宮走到外太空",
    obtainedAt: new Date(),
  },
  {
    id: 2,
    name: "國立台灣大學體育館",
    description: "#TaipeiCodefest",
    obtainedAt: new Date(),
  },
  {
    id: 3,
    name: "國立台灣大學體育館",
    description: "#TaipeiCodefest",
    obtainedAt: new Date(),
  },
  {
    id: 4,
    name: "國立台灣大學體育館",
    description: "#TaipeiCodefest",
    obtainedAt: new Date(),
  },
  {
    id: 5,
    name: "國立台灣大學體育館",
    description: "#TaipeiCodefest",
    obtainedAt: new Date(),
  },
  {
    id: 6,
    name: "國立台灣大學體育館",
    description: "#TaipeiCodefest",
    obtainedAt: new Date(),
  },
  {
    id: 7,
    name: "國立台灣大學體育館",
    description: "#TaipeiCodefest",
    obtainedAt: new Date(),
  },
  {
    id: 8,
    name: "國立台灣大學體育館",
    description: "#TaipeiCodefest",
    obtainedAt: new Date(),
  },
];

function Home() {
  return (
    <div className="p-5 container py-10 grid grid-cols-2 gap-3 place-items-stretch">
      {mockBadges.map((badge) => (
        <EventBadge key={badge.id} badge={badge} />
      ))}
    </div>
  );
}
