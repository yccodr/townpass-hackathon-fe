import { createFileRoute } from "@tanstack/react-router";
import useSWR from "swr";
import type { Site } from "../lib/domain/site";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useHeaderStore } from "@/lib/hooks/header";
import { useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import Badge from "@/components/badge";
import { useBeacon } from "@/lib/hooks/beacon";
import { Radio } from "lucide-react";

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
      icon: "/assets/temple-1.jpg",
      description: "從行天宮走到外太空",
      acquired: true,
    },
    subBadges: [
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
    ],
  } satisfies Site;
};

function Site() {
  const { data: site, isLoading } = useSWR<Site>("/api/v1/site", mockFetcher);
  const headerStore = useHeaderStore();
  const { beaconData } = useBeacon();
  const notNearBeacon = beaconData === null;

  useEffect(() => {
    if (notNearBeacon) return;

    headerStore.setTitle(site?.name ?? "");

    return () => {
      headerStore.resetTitle();
    };
  }, [site]);

  if (notNearBeacon)
    return (
      <div className="container h-full grid place-items-center">
        <div className="flex flex-col place-items-center gap-4 pb-40">
          <Radio className="h-20 w-20" strokeWidth={1.3} />
          <p className="text-center">
            請更靠近印有
            <br />
            上面圖示的指示牌
          </p>
        </div>
      </div>
    );

  if (isLoading) return <div>Loading...</div>;

  if (site === undefined) return <div>No site</div>;

  return (
    <div className="px-5 container">
      <div className="mb-4">
        <img src={site.mainBadge.icon} className="rounded-lg" />
      </div>

      <div className="flex gap-4 place-items-center justify-between">
        <h2 className="px-0.5 text-2xl font-semibold">徽章</h2>
        <div className="flex flex-col items-end">
          <span className="text-sm italic">
            {site.progress}/{site.total}
          </span>
          <Progress
            value={(site.progress / site.total) * 100}
            className="w-20 h-1"
          />
        </div>
      </div>

      <ScrollArea className="-mx-5">
        <ul className="flex w-max space-x-4 my-2 mx-5">
          {site?.subBadges.map((badge) => (
            <li key={badge.description} className="max-w-48">
              <Badge badge={badge} />
            </li>
          ))}
        </ul>

        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
