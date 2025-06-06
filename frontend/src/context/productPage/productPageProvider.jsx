import ProductPage from "./productPage";
import { useState } from "react";

const ProductPageProvider = ({ children }) => {
  const [productPage, setProductPage] = useState(false)
  return (
    <ProductPage.Provider value={{ productPage, setProductPage }}>
      {children}
    </ProductPage.Provider>
  );
};

export default ProductPageProvider;
