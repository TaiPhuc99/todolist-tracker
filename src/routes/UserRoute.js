import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";

export const userRoute = [
  {
    path: "/",
    element: <HomePage />,
    exact: true,
  },
  {
    path: "/about",
    element: <AboutPage />,
    exact: true,
  },
];
