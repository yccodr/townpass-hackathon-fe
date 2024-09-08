import { createRootRoute, Outlet } from "@tanstack/react-router";
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
    </Providers>
  );
}
