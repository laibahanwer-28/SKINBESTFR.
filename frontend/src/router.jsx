import { createBrowserRouter } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Assessment from "./pages/Assessment";
import Routine from "./pages/Routine";
import Profile from "./pages/Profile";
import Results from "./pages/Results";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/assessment",
    element: <Assessment />,
  },
  {
  path: "/results",
  element: <Results />,
},
  {
    path: "/routine",
    element: <Routine />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

export default router;
