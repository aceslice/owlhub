import LandingPage from "./pages/LandingPage";
import Topnav from "./components/topnav";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Coursepage from "./pages/CoursePage";
import AuthComponent from "./pages/AuthComponent";
import LoginComponent from "./pages/LoginComponent";
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
]);
function App() {
  return <RouterProvider router={router} />;
}
export default App;
