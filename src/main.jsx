import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // Import Tailwind CSS here
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "./pages/AboutPage.jsx";
import DetailPage from "./pages/DetailPage.jsx";
import MainLayout, { AdminLayout } from "./components/Layout.jsx";
import { ThemeProvider } from "@material-tailwind/react";
import Dashboard from "./components/Dashboard.jsx";
import AdminListMovie from "./components/AdminListMovie.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store.js";

// Configure routing
const routing = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/movies/:id",
        element: <DetailPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },

    ],
  },
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      {
        path: "/admin",
        element: <Dashboard />,
      },
      {
        path: "/admin/list",
        element: <AdminListMovie />,
      },
    ],
  },
],
  {
    basename: "/final_project_movie", // 👈 this line fixes routing on GitHub Pages
  }
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
    <ThemeProvider>
      <RouterProvider router={routing} />
    </ThemeProvider>
    </Provider>
  </StrictMode>
);
