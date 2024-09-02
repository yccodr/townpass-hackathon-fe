import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Search as SearchIcon } from "lucide-react";

interface IProps {
  className?: string;
  placeHolder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onSubmit?: (e: React.FormEvent<HTMLInputElement>) => void;
}

const Search = (props: IProps) => {
  return (
    <div className={cn("flex items-stretch", props.className)}>
      <Input
        placeholder={props.placeHolder}
        value={props.value ?? ""}
        onChange={(e) => props.onChange?.(e.target.value)}
        onSubmit={(e) => props.onSubmit?.(e)}
        className="h-12 focus-visible:ring-0 placeholder:text-text-decorative"
      />
      <Button size="icon" className="-translate-x-2" type="submit">
        <SearchIcon className="w-6 h-6" />
      </Button>
    </div>
  );
};

export default Search;
