// Dashboard.js
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../Components/Dashboard/Sidebar/Sidebar";
import Navbar from "../../Components/Shared/Navbar";

const Dashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

        <div className="flex-1 bg-gray-50 overflow-y-auto pl-64">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
