import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { BlockerView } from "./views/blocker-view.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BlockerView>
        <RouterProvider router={router} />
      </BlockerView>
    </Provider>
  </React.StrictMode>,
);
