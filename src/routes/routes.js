import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Movies from "../components/Movies/Movies";
import Series from "../components/Series/Series";
import Main from "../layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/*",
        element: (
          <div className="text-5xl text-center text-red-700 font-semibold">
            Page Not Found 😿
          </div>
        ),
      },
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/movies",
        element: <Movies></Movies>,
      },
      {
        path: "/tvseries",
        element: <Series></Series>,
      },
    ],
  },
]);
