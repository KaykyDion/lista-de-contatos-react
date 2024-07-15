import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import EditContact from "./pages/EditContact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/edit",
    element: <EditContact />,
  },
]);

export default router;
