import { createBrowserRouter } from "react-router";
import { Layout } from "./components/layout";
import { Home } from "./pages/home";
import { Menu } from "./pages/menu";
import { Location } from "./pages/location";
import { NotFound } from "./pages/not-found";

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
