import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About.jsx";
import MainLayout from "./components/Layout.jsx";

//Configure routing
const routing = createBrowserRouter([{
  path: "/",
  element: <MainLayout />,
  children:[
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/about",
      element: <About />
    },
  ],
}])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <RouterProvider router={routing} />
    </Provider>
  </StrictMode>
);
