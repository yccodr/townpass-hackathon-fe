import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Providers from "../providers";

export const Route = createRootRoute({
  component: () => (
    <Providers>
      <Outlet />
      <TanStackRouterDevtools />
    </Providers>
  ),
});
