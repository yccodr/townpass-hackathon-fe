import BadgeComponent from "@/components/badge";
import { createLazyFileRoute } from "@tanstack/react-router";
import type { Badge } from "@/lib/domain/badge";
import { useEffect } from "react";
import { useHeaderStore } from "@/lib/hooks/header";

export const Route = createLazyFileRoute("/badges")({
  component: Home,
});

const mockBadges: Badge[] = [
  {
    icon: "/assets/temple-1.jpg",
    description: "從行天宮走到外太空",
    acquired: true,
  },
  {
    icon: "/assets/temple-2.png",
    description: "我是一個台灣人",
    acquired: false,
  },
];

function Home() {
  const headerStore = useHeaderStore();

  useEffect(() => {
    headerStore.setTitle("所有徽章");

    return () => {
      headerStore.resetTitle();
    };
  }, []);

  return (
    <div className="px-5 container grid grid-cols-2 gap-3 place-items-stretch">
      {mockBadges.map((badge, index) => (
        <BadgeComponent key={index} badge={badge} />
      ))}
    </div>
  );
}
