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
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { createLazyFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const [text, setText] = useState<string>("");
  const [search, setSearch] = useState<string>("");

  return (
    <div className="p-2 container pb-12">
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
        <DialogTrigger className="mt-20" asChild>
          <Button size="md" type="button" className="block">
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

      <Drawer>
        <DrawerTrigger className="mt-20" asChild>
          <Button size="md" type="button" className="block">
            Open Drawer
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
