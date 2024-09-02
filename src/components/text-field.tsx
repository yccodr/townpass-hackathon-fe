import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";

interface IProps {
  className?: string;
  id: string;
  title: string;
  caption?: string;
  placeHolder?: string;
  isError?: boolean;
  helperText?: string;
}

const TextField = (props: IProps) => {
  return (
    <div
      className={cn(
        "grid w-full max-w-sm items-center gap-1.5",
        props.className
      )}
    >
      <Label htmlFor={props.id} className="mb-3 px-2.5 font-semibold">
        {props.title}
      </Label>
      <Input
        type="email"
        id={props.id}
        placeholder={props.placeHolder}
        isError={props.isError}
      />

      <div className="flex flex-row justify-between">
        {props.caption && (
          <Label htmlFor={props.id} className="px-4 text-sm">
            {props.caption}
          </Label>
        )}

        {props.helperText && (
          <Label htmlFor={props.id} className="px-4 text-sm text-destructive">
            {props.helperText}
          </Label>
        )}
      </div>
    </div>
  );
};

export default TextField;
