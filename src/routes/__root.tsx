import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Header from "@/components/header";
import Providers from "../providers";

export const Route = createRootRoute({
  component: Root,
});

function Root() {
  return (
    <Providers>
      <Header />
      <Outlet />
      <TanStackRouterDevtools />
    </Providers>
  );
}
