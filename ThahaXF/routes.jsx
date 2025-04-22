import { createBrowserRouter } from "react-router-dom";
import Home from "./src/pages/home/Home";
import About from "./src/pages/about/About";
import SingleService from "./src/pages/singleService/singleService";
import Admin from "./src/admin/Admin";
import PublicLayout from "./src/layouts/PublicLayout"; 
import AdminLayout from "./src/layouts/AdminLayout";
import CreateService from "./src/admin/adminPages/CreateService";
import ShowServices from "./src/admin/adminPages/ShowServices";
import UpdateService from "./src/admin/adminPages/UpdateService";

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
    element: <AdminLayout />,
    children: [
      { path: "", element: <Admin /> },
      { path: "createService", element: <CreateService /> },
      { path: "showServices", element: <ShowServices/>},
      { path: "updateService/:id", element: <UpdateService/>}
    ],
  },
]);

export default router; // ✅ Add this line!
