import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { HomePage } from "./pages/Home";
import { AboutPage } from "./pages/About";
import { MoviesPage } from "./pages/Movies";
import { ContactPage } from "./pages/Contact";
import { AppLayout } from "./components/Layouts/AppLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/movies",
          element: <MoviesPage />,
        },
        {
          path: "/contact",
          element: <ContactPage />,
        }, 
      ],
    },
  ]);

  return (
    <div className="container-fluid bg-dark text-white">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
