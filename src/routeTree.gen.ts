/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AppImport } from './routes/app'

// Create Virtual Routes

const SubmitLazyImport = createFileRoute('/submit')()
const ComponentsLazyImport = createFileRoute('/components')()

// Create/Update Routes

const SubmitLazyRoute = SubmitLazyImport.update({
  path: '/submit',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/submit.lazy').then((d) => d.Route))

const ComponentsLazyRoute = ComponentsLazyImport.update({
  path: '/components',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/components.lazy').then((d) => d.Route))

const AppRoute = AppImport.update({
  path: '/app',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/app': {
      id: '/app'
      path: '/app'
      fullPath: '/app'
      preLoaderRoute: typeof AppImport
      parentRoute: typeof rootRoute
    }
    '/components': {
      id: '/components'
      path: '/components'
      fullPath: '/components'
      preLoaderRoute: typeof ComponentsLazyImport
      parentRoute: typeof rootRoute
    }
    '/submit': {
      id: '/submit'
      path: '/submit'
      fullPath: '/submit'
      preLoaderRoute: typeof SubmitLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  AppRoute,
  ComponentsLazyRoute,
  SubmitLazyRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/app",
        "/components",
        "/submit"
      ]
    },
    "/app": {
      "filePath": "app.tsx"
    },
    "/components": {
      "filePath": "components.lazy.tsx"
    },
    "/submit": {
      "filePath": "submit.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
