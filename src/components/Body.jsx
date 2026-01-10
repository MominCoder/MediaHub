import SideBar from "./SideBar";
import { useSelector } from "react-redux";
import SideMenu from "./SideMenu";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Body = () => {
  const isSidebarOpen = useSelector((store) => store.app.isSidebarOpen);

  return (
    <>
      <Header />
      <div className="flex gap-10 select-none">
        <SideMenu hidden={isSidebarOpen} />
        <SideBar hidden={!isSidebarOpen} />
        <Outlet />
      </div>
    </>
  );
};

export default Body;
