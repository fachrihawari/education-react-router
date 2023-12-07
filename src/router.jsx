import { createBrowserRouter, redirect } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Detail from "./views/Detail";
import MainLayout from "./components/MainLayout";
import Login from "./views/Login";
import AboutHiringPartner from "./views/AboutHiringPartner";
import AboutIntensive from "./views/AboutIntensive";

const homeRouter = [
  {
    path: "/",
    element: <Home />,
  },
];

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      ...homeRouter,
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "intensive",
            element: <AboutIntensive />,
          },
          {
            path: "hiring-partner",
            element: <AboutHiringPartner />,
          },
        ],
      },
      {
        path: "/users/:id",
        element: <Detail />,
        loader: () => {
          if (!localStorage.access_token) {
            return redirect("/login");
          }

          return null;
        },
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    loader: () => {
      if (localStorage.access_token) {
        return redirect("/");
      }

      return null;
    },
  },
]);

export default router;
