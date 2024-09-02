import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { HTMLInputTypeAttribute } from "react";

interface IProps {
  className?: string;
  id: string;
  title: string;
  caption?: string;
  placeHolder?: string;
  disabled?: boolean;
  isError?: boolean;
  helperText?: string;
  type?: HTMLInputTypeAttribute;

  value?: string;
  onChange?: (value: string) => void;
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
        type={props.type ?? "text"}
        id={props.id}
        placeholder={props.placeHolder}
        isError={props.isError}
        disabled={props.disabled}
        value={props.value ?? ""}
        onChange={(e) => props.onChange?.(e.target.value)}
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
