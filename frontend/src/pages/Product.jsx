import React from "react";
import { useEffect, useContext } from "react";
import axios from "axios";
import Products from "../context/products/product";
import ProductsTable from "../components/product/ProductsTable";
import ProductPage from "../context/productPage/productPage";
import ProductForm from "../components/product/ProductForm";

function Product() {
  const { setProducts } = useContext(Products);
  const { productPage } = useContext(ProductPage);

  // const apiUrl = import.meta.env.REACT_APP_API_URL;

  useEffect(() => {
    axios
      .get(`https://express-routing-1.onrender.com/api/products`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, [setProducts]);

  return <>{productPage ? <ProductForm /> : <ProductsTable />}</>;
}

export default Product;
