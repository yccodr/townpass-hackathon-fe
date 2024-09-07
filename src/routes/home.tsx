// import { DatePickerWithRange } from "@/components/date-range-picker";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
import { useNavigate, createFileRoute } from "@tanstack/react-router";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { EventBadge } from "@/components/EventBadge";

// import { createFileRoute } from "@tanstack/react-router";
// import { useState } from "react";

export const Route = createFileRoute("/home")({
  component: Home,
});

function Home() {
  const searchParams = Route.useSearch<{
    major: Number;
    minor: Number;
  }>();

  return (
    <div className="p-5 container py-10">
      <EventBadge />
    </div>
  );
}
