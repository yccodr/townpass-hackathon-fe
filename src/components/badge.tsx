import React from "react";
import { Badge } from "@/lib/domain/badge";

import { Card, CardContent } from "./ui/card";
import { cn } from "@/lib/utils";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  badge: Badge;
  className?: string;
}

function BadgeComponent(props: IProps) {
  return (
    <Card className="h-full border-none">
      <CardContent className="p-0 flex flex-col gap-3 place-items-center">
        {/* <h1>{props.badge.icon}</h1> */}
        <img
          src={props.badge.icon}
          className={cn("rounded-lg", {
            grayscale: props.badge.acquired === false,
          })}
        />
        <p className="font-semibod">{props.badge.description}</p>
      </CardContent>
    </Card>
  );
}

export default BadgeComponent;
