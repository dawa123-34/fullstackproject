import { createBrowserRouter } from "react-router-dom";
import Home from "./src/pages/home/Home";
import About from "./src/pages/about/About";
import SingleService from "./src/pages/singleService/singleService";

const router = createBrowserRouter([
    {
        path : "/",
        element : <Home/>
    },
    {
        path :"/about",
        element : <About/>
    },
    {
        path: "/singleService/:id", // ✅ Register the route
        element: <SingleService />
      }
])

export default router