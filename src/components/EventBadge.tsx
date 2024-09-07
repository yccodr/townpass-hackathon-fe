import React from "react";
import { Badge } from "@/lib/domain/badge";

import { Card, CardContent } from "./ui/card";
import { cn } from "@/lib/utils";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  badge: Badge;
  className?: string;
}

export function EventBadge(props: IProps) {
  return (
    <Card className="h-full p-4">
      <CardContent className="p-0">
        {/* <h1>{props.badge.icon}</h1> */}
        <img
          src="https://www.ht.org.tw/images/all/logo.png"
          className={cn({ grayscale: props.badge.acquired })}
        />
        <p>{props.badge.description}</p>
      </CardContent>
    </Card>
  );
}
