import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ContactForm from "./pages/ContactForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/edit",
    element: <ContactForm />,
  },
  {
    path: "/new-contact",
    element: <ContactForm />,
  },
]);

export default router;
