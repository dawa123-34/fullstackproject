import { createBrowserRouter } from "react-router-dom";
import Home from "./src/pages/home/Home";
import About from "./src/pages/about/About";
import SingleService from "./src/pages/singleService/SingleService";
import Admin from "./src/admin/Admin";
import PublicLayout from "./src/layouts/PublicLayout"; 
import AdminLayout from "./src/layouts/AdminLayout";
import CreateService from "./src/admin/adminPages/CreateService";
import ShowServices from "./src/admin/adminPages/ShowServices";
import UpdateService from "./src/admin/adminPages/UpdateService";
import LoginPage from "./src/auth/pages/LoginPage";
import ProtectedRoute from "./src/auth/component/ProtectedRoute";
import ForgotPasswordPage from "./src/auth/pages/ForgotPasswordPage";
import VerifyOtpPage from "./src/auth/pages/VerifyOtpPage";
import ResetPasswordPage from "./src/auth/pages/ResetPasswordPage";
import RegisterAdminPage from "./src/auth/pages/RegisterAdminPage";

const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/singleService/:id", element: <SingleService /> },
    ],
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute>
    <AdminLayout />,
    </ProtectedRoute>
    ),
    children: [
      { path: "", element: <Admin /> },
      { path: "createService", element: <CreateService /> },
      { path: "showServices", element: <ShowServices/>},
      { path: "updateService/:id", element: <UpdateService/>},
      
    ],
  },

  { path: "/login", element: <LoginPage/>},
  { path: "/forgotPassword", element: <ForgotPasswordPage/>},
  { path: "/verifyOtp", element: <VerifyOtpPage/>},
  { path: "/resetPassword", element: <ResetPasswordPage/>},
  { path: "/registerAdmin", element: <RegisterAdminPage/>}
]);

export default router; 
