import "./App.css";
import Table from "./components/userTable";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout";
import UserForm from "./components/UserForm";
import UserProvider from "./context/users/userProvider";
import UserDataProvider from "./context/userData/userDataProvider";

function App() {
  return (
    <UserDataProvider>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}></Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </UserDataProvider>
  );
}

export default App;
