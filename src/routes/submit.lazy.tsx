import { createLazyFileRoute } from "@tanstack/react-router";
import { format } from "date-fns";
import type { DateRange } from "react-day-picker";

export const Route = createLazyFileRoute("/submit")({
  component: Submit,
});

function Submit() {
  const searchParams = Route.useSearch<{
    text: string;
    dateRange: DateRange;
  }>();

  return (
    <div className="p-5 container py-10">
      <h1>Submit</h1>

      <div>Text: {searchParams.text}</div>
      <div>Date: {format(searchParams.dateRange.from ?? "", "P")}</div>
    </div>
  );
}
