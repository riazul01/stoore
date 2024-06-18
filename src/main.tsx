import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "routes/router.tsx";
import "./index.css";
import ProductsContextProvider from "context/ProductsContextProvider";
import CartContextProvider from "context/CartContextProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProductsContextProvider>
      <CartContextProvider>
        <RouterProvider router={router} />
      </CartContextProvider>
    </ProductsContextProvider>
  </React.StrictMode>,
);
