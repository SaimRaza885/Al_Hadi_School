import { RouterProvider } from "react-router-dom";
import { router } from "@/routes/index";

export function App() {
  return <RouterProvider router={router} />;
}