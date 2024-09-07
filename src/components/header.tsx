import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link, useRouterState } from "@tanstack/react-router";
import { Badge, HomeIcon, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useHeaderStore } from "@/lib/hooks/header";

function Header() {
  const router = useRouterState();
  const headerStore = useHeaderStore();

  return (
    <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
      <header className="sticky top-0 z-30 flex h-[var(--header-height)] items-center gap-4 bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              size="icon"
              variant="link"
              className="sm:hidden text-foreground"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="sm:max-w-xs">
            <nav className="grid gap-6 text-lg font-normal mt-12">
              <Link
                to="/current-site"
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
              >
                <HomeIcon
                  strokeWidth={
                    router.location.pathname === "/current-site" ? 3 : 2
                  }
                  className="h-5 w-5"
                />
                <span
                  className={cn({
                    "font-bold": router.location.pathname === "/current-site",
                  })}
                >
                  當前位置
                </span>
              </Link>

              <Link
                to="/badges"
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
              >
                <Badge
                  strokeWidth={router.location.pathname === "/badges" ? 3 : 2}
                  className="h-5 w-5"
                />
                <span
                  className={cn({
                    "font-bold": router.location.pathname === "/badges",
                  })}
                >
                  所有徽章
                </span>
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        <div className="font-bold text-lg">{headerStore.title}</div>
      </header>
    </div>
  );
}

export default Header;
