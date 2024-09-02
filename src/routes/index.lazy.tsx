import Search from "@/components/search";
import TextField from "@/components/text-field";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { createLazyFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const [text, setText] = useState<string>("");
  const [search, setSearch] = useState<string>("");

  return (
    <div className="p-2">
      <h3 className="font-light">Welcome Home!</h3>
      <div className="flex flex-col gap-2 items-start">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
      </div>

      <TextField
        value={text}
        onChange={setText}
        id="test"
        title="Email"
        caption="Email"
        placeHolder="Email"
        type="Email"
        className="mt-20"
      />

      <Search
        className="mt-20"
        placeHolder="Search"
        value={search}
        onChange={setSearch}
      />

      <Dialog>
        <DialogTrigger className="mt-20">
          <Button size="md" type="button">
            Open Dialog
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
