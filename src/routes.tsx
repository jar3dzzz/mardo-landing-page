import { createBrowserRouter } from "react-router";
import { Layout } from "./app/components/layout/layout";
import { Home } from "./app/pages/home";
import { Menu } from "./app/pages/menu";
import { Location } from "./app/pages/location";
import { NotFound } from "./app/pages/not-found";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "menu", Component: Menu },
      { path: "location", Component: Location },
      { path: "*", Component: NotFound },
    ],
  },
]);
