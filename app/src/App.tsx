import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Chat } from "./screens/Chat";
import { Login } from "./screens/Login";
import { Register } from "./screens/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Chat />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
]);

export function App() {
  return (
    <RouterProvider router={router} />
  )
}
