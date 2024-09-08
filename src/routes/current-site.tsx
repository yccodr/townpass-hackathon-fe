import { createFileRoute } from "@tanstack/react-router";
import useSWR from "swr";
import type { Site, SiteTemple, SiteArt } from "../lib/domain/site";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useHeaderStore } from "@/lib/hooks/header";
import { useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import Badge from "@/components/badge";
import { useBeacon } from "@/lib/hooks/beacon";
import { ExternalLink, Radio, Route as RouteIcon } from "lucide-react";
import { motion } from "framer-motion";
import AppleFadeIn from "@/components/animation/apple-fade-in";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";

export const Route = createFileRoute("/current-site")({
  component: Site,
});

// const mockSportFetcher = async (_: string) => {
//   return {
//     type: "sport",
//     id: 1,
//     name: "Taipei Dome",
//     location: "台北市信義區忠孝東路四段515號",
//     image: "/assets/dome.jpg",
//     events: [
//       {
//         name: "2024 CPBL All Stars",
//         description: "中華職棒明星賽",
//         subEvents: [
//           {
//             name: "Meet Fubon Angles!",
//             acquire: false,
//           },
//           {
//             name: "Meet Passion Sister!",
//             acquire: true,
//           },
//         ],
//       },
//       {
//         name: "0921 W vs B",
//         description: "[CPBL] Dragon vs Brothers - 周思齊引退賽",
//         subEvents: [
//           {
//             name: "Hit",
//             acquire: false,
//           },
//           {
//             name: "Homerun",
//             acquire: false,
//           },
//         ],
//       },
//     ],
//   } satisfies Site;
// };

// const mockArtFetcher = async (_: string) => {
//   return {
//     type: "art",
//     id: 1,
//     name: "國立故宮博物院",
//     location: "",
//     image: "/assets/national-palace.jpeg",
//     events: [
//       {
//         name: "公主駕到！",
//         description: "清代文獻中的公主身影",
//         subEvents: [
//           {
//             name: "皇帝的女兒",
//             acquire: true,
//           },
//           {
//             name: "家當大開箱",
//             acquire: true,
//           },
//           {
//             name: "聯姻任務",
//             acquire: false,
//           },
//           {
//             name: "說再見太匆匆",
//             acquire: false,
//           },
//           {
//             name: "結語：回望公主",
//             acquire: false,
//           },
//         ],
//       },
//     ],
//   } satisfies Site;
// };

// interface SiteSportPageProps {
//   site: SiteSport;
// }

// function SiteSportPage({ site }: SiteSportPageProps) {
//   return (
//     <div className="px-5 container space-y-5">
//       <img src={site.image} className="rounded-lg" />
//       {site.events.map((value, idx) => {
//         return (
//           <AppleFadeIn key={idx}>
//             <div className="flex flex-col px-5 container space-y-1">
//               <span className="text-2xl">{value.name}</span>
//               <span className="text-xs">{value.description}</span>

//               <ScrollArea className="-mx-5">
//                 <motion.div
//                   initial={{ opacity: 0, x: 100 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{
//                     duration: 0.5,
//                     ease: [0.16, 1, 0.3, 1], // Custom ease curve for a more Apple-like feel
//                     delay: 0.2, // Short delay before animation starts
//                   }}
//                 >
//                   <ul className="flex w-max space-x-3 my-2 mx-5">
//                     {value.subEvents.map((sub, subIdx) => {
//                       return (
//                         <Card
//                           key={subIdx}
//                           className={cn(
//                             "bg-primary",
//                             { "bg-gray-50": !sub.acquire },
//                             ""
//                           )}
//                         >
//                           <CardContent className="justify-center flex">
//                             <span className="text-center font-bold">
//                               {sub.name}
//                             </span>
//                           </CardContent>
//                         </Card>
//                       );
//                     })}
//                   </ul>
//                 </motion.div>

//                 <ScrollBar orientation="horizontal" />
//               </ScrollArea>
//             </div>
//           </AppleFadeIn>
//         );
//       })}
//     </div>
//   );
// }

interface SiteArtPageProps {
  site: SiteArt;
}

function SiteArtPage({ site }: SiteArtPageProps) {
  return (
    <div className="px-5 container space-y-5">
      <img src={site.image} className="rounded-lg" />
      <AppleFadeIn>
        <div className="flex flex-col px-5 container space-y-1">
          <span className="text-2xl">{site.info.event.name}</span>
          <span className="text-xs">{site.info.event.description}</span>

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
              <ul className="flex w-max space-x-3 my-2 mx-5">
                {site.info.event.subevents.map((sub, subIdx) => {
                  return (
                    <Card key={subIdx} className={cn("bg-primary")}>
                      <CardContent className="justify-center flex">
                        <span className="text-center font-bold">
                          {sub.name}
                        </span>
                      </CardContent>
                    </Card>
                  );
                })}
              </ul>
            </motion.div>

            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </AppleFadeIn>
    </div>
  );
}

interface SiteTemplePageProps {
  site: SiteTemple;
}
function SiteTemplePage({ site }: SiteTemplePageProps) {
  return (
    <div className="px-5 container pb-32">
      <div className="mb-4">
        <AppleFadeIn>
          <img
            src={`/assets/${site.mainBadge.iconPath}.jpg`}
            className="rounded-lg"
          />
        </AppleFadeIn>
      </div>

      <div className="grid grid-cols-2 mx-4 my-6 place-items-center">
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="ghost"
              className="flex flex-col gap-1 place-items-center"
            >
              <RouteIcon className="h-5 w-5" />
              <strong className="text-sm">參拜路線</strong>
            </Button>
          </DialogTrigger>

          <DialogContent className="p-4">
            <DialogHeader className="flex gap-1 place-items-center">
              <strong>參拜路線</strong>
            </DialogHeader>

            {site.mainBadge.description.WorshipOrder.split(" ").map(
              (line, index) => (
                <p key={index} className="text-sm">
                  {line}
                </p>
              )
            )}
          </DialogContent>
        </Dialog>

        <a href={site.mainBadge.description.LinkRef} target="_blank">
          <Button
            variant="ghost"
            className="flex flex-col gap-1 place-items-center"
          >
            <ExternalLink className="h-5 w-5" />
            <span className="text-sm">參考連結</span>
          </Button>
        </a>
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
            {site?.subBadges.map((badge, index) => (
              <li key={index} className="max-w-48">
                <Badge badge={badge} />
              </li>
            ))}
          </ul>
        </motion.div>

        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      <div className="px-1">{site.mainBadge.description.History}</div>
    </div>
  );
}

const mockType = (mm: number) => {
  switch (mm) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
      return "temple";
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
      return "art";
  }
};

function Site() {
  const headerStore = useHeaderStore();
  const { beaconData } = useBeacon();
  const notNearBeacon = beaconData === null;
  const DEFAULT_MINOR = 11;

  const { data: site, isLoading } = useSWR<Site>(
    notNearBeacon
      ? undefined
      : `https://townpass-hackathon-be-443073150939.asia-east1.run.app/api/v1/beacon?mm=${beaconData?.minor ?? DEFAULT_MINOR}&id=1`
  );

  const siteType = mockType(beaconData?.minor ?? DEFAULT_MINOR);

  console.log("mm:", beaconData?.minor);
  console.log("siteType:", siteType);
  console.log("notNearBeacon:", notNearBeacon);

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

  switch (siteType) {
    case "temple":
      return <SiteTemplePage site={site as SiteTemple} />;

    // case "sport":
    //   return <SiteSportPage site={site as SiteSport} />;

    case "art":
      return <SiteArtPage site={site as SiteArt} />;

    default:
      return <div>No Site</div>;
  }
}
