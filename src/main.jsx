import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";

import AnimatedCursor from "react-animated-cursor";
import router from "./routes/routers";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="max-w-screen-xl mx-auto">
    <AnimatedCursor />
    <RouterProvider router={router} />
  </div>
);
