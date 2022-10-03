import { createBrowserRouter } from "react-router-dom";
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
    ],
  },
]);
