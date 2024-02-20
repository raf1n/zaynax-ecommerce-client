import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Shared/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className=" bg-gray-50 h-[89vh]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
