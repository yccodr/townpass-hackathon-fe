import { createLazyFileRoute } from "@tanstack/react-router";
import BadgeComponent from "@/components/badge";
import { useEffect } from "react";
import { useHeaderStore } from "@/lib/hooks/header";
import useSWR from "swr";

export const Route = createLazyFileRoute("/badges")({
  component: Home,
});

function Home() {
  const { data: badges, isLoading } = useSWR<
    { IconPath: string; LocationName: string }[]
  >(
    "https://townpass-hackathon-be-443073150939.asia-east1.run.app/api/v1/collections/1"
  );
  const headerStore = useHeaderStore();

  useEffect(() => {
    headerStore.setTitle("所有徽章");

    return () => {
      headerStore.resetTitle();
    };
  }, []);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="px-5 container grid grid-cols-2 gap-3 place-items-stretch">
      {badges?.map((badge) => (
        <BadgeComponent
          key={badge.IconPath}
          badge={{
            iconPath: badge.IconPath,
            description: {
              History: "",
              InCharge: "",
              LinkRef: "",
              MainDeity: badge.LocationName,
              WorshipOrder: "",
            },
          }}
        />
      ))}
    </div>
  );
}
