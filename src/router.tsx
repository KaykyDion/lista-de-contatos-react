import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import EditContact from "./pages/EditContact";
import NewContact from "./pages/NewContact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/edit",
    element: <EditContact />,
  },
  {
    path: "/new-contact",
    element: <NewContact />,
  },
]);

export default router;
