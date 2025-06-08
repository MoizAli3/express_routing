import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import UserProvider from "./context/users/userProvider";
import UserDataProvider from "./context/UserData/UserDataProvider.jsx";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import Product from "./pages/Product";
import Users from "./pages/Users";
import ProductProvider from "./context/products/ProductProvider";
import ProductPageProvider from "./context/productPage/productPageProvider";

function App() {
  return (
    <ProductPageProvider>
      <UserDataProvider>
        <ProductProvider>
          <UserProvider>
            <MantineProvider>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Layout />}>
                    <Route path="products" element={<Product />} />
                    <Route path="users" element={<Users />} />
                  </Route>
                </Routes>
              </BrowserRouter>
            </MantineProvider>
          </UserProvider>
        </ProductProvider>
      </UserDataProvider>
    </ProductPageProvider>
  );
}

export default App;
