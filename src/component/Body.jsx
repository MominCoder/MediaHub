import SideBar from "./SideBar";
import MainContainer from "./MainContainer";
import { useSelector } from "react-redux";
import SideMenu from "./SideMenu";

const Body = () => {
  const isSidebarOpen = useSelector((store) => store.app.isSidebarOpen);

  return (
    <div className="flex gap-10 select-none">
      <SideMenu hidden={isSidebarOpen} />
      <SideBar hidden={!isSidebarOpen} />
      <MainContainer />
    </div>
  );
};

export default Body;
