import BadgeComponent from "@/components/badge";
import { createLazyFileRoute } from "@tanstack/react-router";
import type { Badge } from "@/lib/domain/badge";

export const Route = createLazyFileRoute("/badges")({
  component: Home,
});

const mockBadges: Badge[] = [];

function Home() {
  return (
    <div className="p-5 container py-10 grid grid-cols-2 gap-3 place-items-stretch">
      {mockBadges.map((badge, index) => (
        <BadgeComponent key={index} badge={badge} />
      ))}
    </div>
  );
}
