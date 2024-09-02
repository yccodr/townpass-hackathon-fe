import TextField from "@/components/text-field";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { createLazyFileRoute } from "@tanstack/react-router";
import useSWR from "swr";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

const authFetcher = (url: string) => fetch(url, {}).then((res) => res.json());

type BookResponse = {
  kind: string;
  items: Array<{
    id: string;
    volumeInfo: {
      title: string;
      description: string;
    };
  }>;
};

function Index() {
  return (
    <div className="p-2">
      <h3 className="font-light">Welcome Home!</h3>
      <div className="flex flex-col gap-2 items-start">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
      </div>

      <TextField id="test" title="Email" caption="Email" className="mt-20" />
    </div>
  );
}
