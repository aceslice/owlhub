import LandingPage from "./pages/LandingPage";
import Topnav from "./components/topnav";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Coursepage from "./pages/CoursePage";
import AuthComponent from "./pages/AuthComponent";
import LoginComponent from "./pages/LoginComponent";
import SignupPage from "./pages/SignupPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/courses",
    element: <Coursepage />,
  },
  {
    path: "/auth",
    element: <AuthComponent />,
  },
  {
    path: "/login",
    element: <LoginComponent />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}
export default App;
