type RoutePair = {
  path: string
  relativePath: (params?: any) => string
}

type Routes = "base"
type RouteProps = { [K in Routes]: RoutePair }

export const routes: RouteProps = {
  base: {
    path: "/",
    relativePath: () => "/",
  },
}
