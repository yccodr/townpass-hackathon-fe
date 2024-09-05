import DatePicker from "@/components/date-picker";
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
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { createLazyFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createLazyFileRoute("/components")({
  component: Index,
});

function Index() {
  const [text, setText] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [select, setSelect] = useState<string>("");
  const [goblinMode, setGoblinMode] = useState<boolean>(false);
  const [date, setDate] = useState<Date | undefined>(undefined);

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
        placeholder="Email"
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

      <Select value={select} onValueChange={setSelect}>
        <SelectTrigger className="w-[180px] mt-20">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <div className="mt-1 px-1">
        Current Selection: <strong>{select}</strong>
      </div>

      <div className="flex items-center space-x-2 mt-12">
        <Switch
          id="goblin-mode"
          checked={goblinMode}
          onCheckedChange={setGoblinMode}
          variant="destructive"
        />
        <Label htmlFor="goblin-mode">Goblin Mode</Label>
      </div>

      <DatePicker className="mt-20" date={date} setDate={setDate} />
    </div>
  );
}
