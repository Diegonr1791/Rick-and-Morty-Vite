import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "@/pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  /*
  {
    path: "/episodes",
    element: <Episodes />,
  },
  {
    path: "/planets",
    element: <Planets />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/detail/:id",
    element: <Detail />,
  },
  {
    path: "/favorites",
    element: <Favorites />,
  }, */
]);

const NavigationProvider = () => <RouterProvider router={router} />;

export default NavigationProvider;
