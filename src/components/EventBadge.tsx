import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { cn } from "@/lib/utils";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  IconName?: string;
  Title?: string;
  Progress?: Number;
}

export function EventBadge({ className }: IProps) {
  return (
    <Card className={cn("w-1/2 h-1/4 justify-items-center", className)}>
      {/* <CardHeader>
        <CardTitle>Title </CardTitle>
        <CardDescription>CardDescription</CardDescription>
      </CardHeader> */}
      <CardContent className="flex flex-col justify-center justify-items-center align-middle">
        {/* <span className="text-sm font-semibold">content</span> */}
        <img src="src/assets/icon.png" className="w-1/2"></img>
        <CardTitle className="justify-center">Title</CardTitle>
      </CardContent>
      <CardFooter className="flex justify-between">
        {/* <Button variant="outline">Cancel</Button> */}
        {/* <Button>Accept</Button> */}
      </CardFooter>
    </Card>
  );
}
