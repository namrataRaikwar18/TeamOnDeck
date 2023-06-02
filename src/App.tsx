import React from "react";
import "./App.css";
import Login from "./Common_Components/Auth/Login/Login";
import ForgotPswrd from "./Common_Components/Auth/Forgot_Pswrd/ForgotPswrd";
import PswrdEmail from "./Common_Components/Auth/Pswrd_Email/PswrdEmail";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from 'react-router-dom';
function AppRoutes() {
  const routes = useRoutes(
    [
      {path:'/',element:<Login/>},
      {path:'/forgotpswrd',element:<ForgotPswrd/>},
      {path:'/pswrdemail',element:<PswrdEmail/>}

    ]
  )
  return routes;
}
function App() {
  return <div className="App">
    <Router>
      <AppRoutes />
    </Router>
    
  </div>;
}

export default App;
