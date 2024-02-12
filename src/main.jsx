import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router.jsx";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import AuthProvider from "./providers/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ToastContainer></ToastContainer>

      <RouterProvider router={router} />
    </AuthProvider>{" "}
  </React.StrictMode>
);
