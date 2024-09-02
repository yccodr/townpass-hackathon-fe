import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "./ui/calendar";

interface IProps {
  className?: string;
  date?: Date;
  setDate: (date: Date | undefined) => void;
}

const DatePicker = (props: IProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !props.date && "text-muted-foreground",
            props.className
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {props.date ? format(props.date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={props.date}
          onSelect={(date) => props.setDate?.(date)}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};

export default DatePicker;
