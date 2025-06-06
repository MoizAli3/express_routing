import { useState } from "react";
import Products from "./product";

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState("");
  return (
    <Products.Provider value={{ products, setProducts }}>
      {children}
    </Products.Provider>
  );
};

export default ProductProvider;
