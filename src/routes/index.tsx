import { createBrowserRouter } from "react-router-dom";
import App from "../views/App.tsx";
import { Another } from "../views/Another.tsx";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/another",
      element: <Another />,
    },
  ],
  {
    basename: "/react-router-use-blocker-exploration",
  },
);
