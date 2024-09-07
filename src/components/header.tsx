import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link, useRouterState } from "@tanstack/react-router";
import { Badge, HomeIcon, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function Header() {
  const router = useRouterState();

  return (
    <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
      <header className="sticky top-0 mt-2 z-30 flex h-14 items-center gap-4 bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="ghost" className="sm:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="sm:max-w-xs">
            <nav className="grid gap-6 text-lg font-normal">
              <Link
                to="/"
                className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
              >
                <HomeIcon className="h-5 w-5 transition-all group-hover:scale-110" />
                <span
                  className={cn("sr-only", {
                    "font-bold": router.location.pathname === "/",
                  })}
                >
                  Home
                </span>
              </Link>

              <Link
                to="/badges"
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
              >
                <Badge className="h-5 w-5" />
                <span
                  className={cn({
                    "font-bold": router.location.pathname === "/badges",
                  })}
                >
                  Badges
                </span>
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </header>
    </div>
  );
}

export default Header;
