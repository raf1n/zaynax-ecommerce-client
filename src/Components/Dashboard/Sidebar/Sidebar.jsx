import { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [showPromotionList, setShowPromotionList] = useState(false);

  const togglePromotionList = () => {
    setShowPromotionList(!showPromotionList);
  };

  return (
    <div className="fixed top-10 left-0 h-full w-64 bg-white px-4 py-6 border-r">
      <ul className="space-y-2 mt-10">
        <li>
          <NavLink
            onClick={togglePromotionList}
            style={({ isActive }) => {
              return isActive
                ? {
                    color: "black",
                    fontWeight: "700",
                    borderRadius: "0.375rem",
                    backgroundColor: "rgb(243 244 246)",
                  }
                : {};
            }}
            to="/dashboard/promotion"
            className="block py-2 px-4 rounded-md hover:bg-gray-100 font-medium text-base"
          >
            Promotion
          </NavLink>
          {showPromotionList && (
            <ul className="ml-4 mt-2 space-y-1">
              <li>
                <NavLink
                  style={({ isActive }) => {
                    return isActive
                      ? {
                          color: "black",
                          fontWeight: "700",
                          borderRadius: "0.375rem",
                          backgroundColor: "rgb(243 244 246)",
                        }
                      : {};
                  }}
                  to="/dashboard/promotion/codes"
                  className="block py-2 px-4 rounded-md hover:bg-gray-100 font-medium text-sm"
                >
                  Promo Codes
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive }) => {
                    return isActive
                      ? {
                          color: "black",
                          fontWeight: "700",
                          borderRadius: "0.375rem",
                          backgroundColor: "rgb(243 244 246)",
                        }
                      : {};
                  }}
                  to="/dashboard/promotion/add"
                  className="block py-2 px-4 rounded-md hover:bg-gray-100 font-medium text-sm"
                >
                  Add Promo Codes
                </NavLink>
              </li>
            </ul>
          )}
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return isActive
                ? {
                    color: "black",
                    fontWeight: "700",
                    borderRadius: "0.375rem",
                    backgroundColor: "rgb(243 244 246)",
                  }
                : {};
            }}
            to="/dashboard/orders"
            className="block py-2 px-4 rounded-md hover:bg-gray-100 font-medium text-base"
          >
            Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return isActive
                ? {
                    color: "black",
                    fontWeight: "700",
                    borderRadius: "0.375rem",
                    backgroundColor: "rgb(243 244 246)",
                  }
                : {};
            }}
            to="/dashboard/products"
            className="block py-2 px-4 rounded-md hover:bg-gray-100 font-medium text-base"
          >
            Products
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
