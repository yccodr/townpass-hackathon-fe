import { createFileRoute } from "@tanstack/react-router";
import useSWR from "swr";
import type { Site } from "../lib/domain/site";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { EventBadge } from "@/components/EventBadge";
import { useHeaderStore } from "@/lib/hooks/header";
import { useEffect } from "react";
import { Progress } from "@/components/ui/progress";

export const Route = createFileRoute("/current-site")({
  component: Site,
});

const mockFetcher = async (_: string) => {
  return {
    id: 1,
    name: "龍山寺",
    progress: 2,
    total: 10,
    mainBadge: {
      icon: "🧙‍♂️",
      description: "從行天宮走到外太空",
      acquired: true,
    },
    subBadges: [
      {
        icon: "🧙‍♂️",
        description: "從行天宮走到外太空",
        acquired: true,
      },
      {
        icon: "👨‍💻",
        description: "我是一個台灣人",
        acquired: false,
      },
    ],
  } satisfies Site;
};

function Site() {
  const { data: site, isLoading } = useSWR<Site>("/api/v1/site", mockFetcher);
  const headerStore = useHeaderStore();

  useEffect(() => {
    headerStore.setTitle(site?.name ?? "");

    return () => {
      headerStore.resetTitle();
    };
  }, [site]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="p-5 container py-10">
      <div className="flex gap-4 place-items-center justify-between">
        <h2 className="text-2xl font-semibold">徽章</h2>
        <div className="flex flex-col items-end">
          <span className="text-sm italic">1/3</span>
          <Progress value={(1 / 3) * 100} className="w-20 h-1" />
        </div>
      </div>

      <ScrollArea>
        <ul className="flex w-max space-x-4 p-4">
          {site?.subBadges.map((badge) => (
            <li key={badge.description} className="max-w-48">
              <EventBadge badge={badge} />
            </li>
          ))}
        </ul>

        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
