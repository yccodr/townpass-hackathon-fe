import { createFileRoute } from "@tanstack/react-router";
import useSWR from "swr";
import type { Site, SiteSport, SiteTemple } from "../lib/domain/site";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useHeaderStore } from "@/lib/hooks/header";
import { useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import Badge from "@/components/badge";
import { useBeacon } from "@/lib/hooks/beacon";
import { Radio } from "lucide-react";
import { motion } from "framer-motion";
import AppleFadeIn from "@/components/animation/apple-fade-in";
import { useUser } from "@/lib/hooks/user";

export const Route = createFileRoute("/current-site")({
  component: Site,
});

// const mockFetcher = async (_: string) => {
//   return {
//     type: "temple",
//     id: 1,
//     name: "龍山寺",
//     progress: 2,
//     total: 10,
//     mainBadge: {
//       icon: "/assets/temple-1.jpg",
//       description: "從行天宮走到外太空",
//       acquired: true,
//     },
//     subBadges: [
//       {
//         icon: "/assets/temple-1.jpg",
//         description: "從行天宮走到外太空",
//         acquired: true,
//       },
//       {
//         icon: "/assets/temple-2.png",
//         description: "我是一個台灣人",
//         acquired: false,
//       },
//     ],
//   } satisfies Site;
// };

const mockSportFetcher = async (_: string) => {
  return {
    type: "sport",
    id: 1,
    name: "Taipei Dome",
    events: [
      {
        name: "2024 CPBL AllStars",
        description: "2024 CPBL AllStars Game",
        subEvents: [
          {
            name: "Meet FA!",
          },
        ],
      },
    ],
  } satisfies Site;
};

interface SiteSportPageProps {
  site: SiteSport;
}

function SiteSportPage({ site }: SiteSportPageProps) {
  return <div className="px-5 container">{site.name}</div>;
}

interface SiteTemplePageProps {
  site: SiteTemple;
}
function SiteTemplePage({ site }: SiteTemplePageProps) {
  return (
    <div className="px-5 container">
      <div className="mb-4">
        <AppleFadeIn>
          <img src={site.mainBadge.icon} className="rounded-lg" />
        </AppleFadeIn>
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
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1], // Custom ease curve for a more Apple-like feel
            delay: 0.2, // Short delay before animation starts
          }}
        >
          <ul className="flex w-max space-x-4 my-2 mx-5">
            {site?.subBadges.map((badge) => (
              <li key={badge.description} className="max-w-48">
                <Badge badge={badge} />
              </li>
            ))}
          </ul>
        </motion.div>

        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}

function Site() {
  const { data: site, isLoading } = useSWR<Site>(
    "/api/v1/site",
    mockSportFetcher
  );
  const headerStore = useHeaderStore();
  const { beaconData } = useBeacon();
  const notNearBeacon = false && beaconData === null;
  const { user, isLoading: isUserLoading } = useUser();

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

  if (isLoading || isUserLoading) return <div>Loading...</div>;

  console.log("You are:", user);

  if (site === undefined) return <div>No site</div>;

  switch (site?.type) {
    case "temple":
      return <SiteTemplePage site={site} />;

    case "sport":
      return <SiteSportPage site={site} />;

    default:
      return <div>No Site</div>;
  }
}
