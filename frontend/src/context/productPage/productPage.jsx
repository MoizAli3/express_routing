import { createContext } from "react";

const ProductPage = createContext({
  productPage: false,
  setProductPage: () => {}, // Provide a no-op function as default
});

export default ProductPage;
