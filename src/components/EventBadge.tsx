import React from "react";
import { Badge } from "@/lib/domain/badge";

import { format } from "date-fns";
import { Badge as BadgeIcon, Clock3 } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  badge: Badge;
  className?: string;
}

export function EventBadge(props: IProps) {
  return (
    <Dialog>
      <DialogTrigger className="flex flex-col place-items-center gap-4 py-6 border rounded">
        <BadgeIcon className="w-8 h-8 text-primary" />
        <div className="flex place-items-center gap-1">
          <Clock3 className="w-4 h-4 text-primary" />
          {format(props.badge.obtainedAt, "P")}
        </div>
      </DialogTrigger>

      <DialogContent>
        <h3 className="text-xl font-bold">{props.badge.name}</h3>
        <p>{props.badge.description}</p>
        <small>於 {format(props.badge.obtainedAt, "P p")} 取得</small>
      </DialogContent>
    </Dialog>
  );
}
