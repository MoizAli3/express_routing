import { Outlet } from "react-router";
import SideMenu from "./components/SideMenu";
import Home from "./pages/Home";


export default function Layout() {
  return (
    <>
      <SideMenu component={Home} />
      {/* <Outlet /> */}
    </>
  );
}
