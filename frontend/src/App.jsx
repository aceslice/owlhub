import "./assets/css/style.css";
import LandingPage from "./pages/LandingPage";
import Authpage from "./pages/Authpage";
import Topnav from "./components/topnav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Coursepage from "./pages/CoursePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/auth" element={<Authpage />}></Route>
        <Route path="/courses" element={<Coursepage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
