import React from "react";
import "./App.css";
import Login from "./Common_Components/Auth/Login/Login";
import ForgotPswrd from "./Common_Components/Auth/Forgot_Pswrd/ForgotPswrd";
import PswrdEmail from "./Common_Components/Auth/Pswrd_Email/PswrdEmail";
import { Routes, Route } from "react-router-dom";
import { DashBoard, Profile } from "./Employee_web_UI/Pages";

// function AppRoutes() {
//   const routes = useRoutes([
    // { path: "/", element: <DashBoard /> },
    // { path: "/login", element: <Login /> },
    // { path: "/forgotpswrd", element: <ForgotPswrd /> },
    // { path: "/pswrdemail", element: <PswrdEmail /> },
    // { path: "/profile", element: <Profile /> },
//   ]);
//   return routes;
// }
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpswrd" element={<ForgotPswrd />} />
        <Route path="/pswrdemail" element={<PswrdEmail />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
