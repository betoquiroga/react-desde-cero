import React from "react";
import "../styles/styles.scss";
import CoursesProvider from "./Context/CoursesProvider";
import AppRoutes from "./AppRoutes";
import CartProvider from "./Context/Cart/CartProvider";

const App = () => (
  <CoursesProvider>
    <CartProvider>
      <AppRoutes />
    </CartProvider>
  </CoursesProvider>
);

export default App;
