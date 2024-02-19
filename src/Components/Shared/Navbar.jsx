import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { RiShoppingCartLine } from "react-icons/ri";
import { GoPerson } from "react-icons/go";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between px-4 lg:px-20 py-5 items-center bg-white">
      <div className="flex items-center">
        <h1 className="text-xl lg:text-2xl text-gray-800 font-bold">ZayNax</h1>
      </div>

      <div className="lg:hidden flex items-center gap-8">
        <div className="flex items-center border-b-2">
          <CiSearch size={20} className="text-gray-500" />
          <input
            className="ml-1 mb-1 text-base text-gray-400 outline-none bg-transparent"
            type="text"
            name="search"
            id="search"
            placeholder="Search"
          />
        </div>
        <AiOutlineMenu
          size={24}
          className="text-gray-800 cursor-pointer"
          onClick={toggleMenu}
        />
      </div>

      {/* Dropdown menu for mobile and tablet */}
      {isMenuOpen && (
        <div className="lg:hidden absolute w-1/2 right-2 top-14 bg-white border rounded-md shadow-md py-2">
          <div className="flex flex-col items-center space-y-2">
            <div className="flex items-center">
              <RiShoppingCartLine size={20} className="text-gray-500" />
              <p className="ml-1">Cart</p>
              <div className="px-1.5 rounded-full bg-yellow-300 block text-sm">
                2
              </div>
            </div>
            <div className="flex items-center">
              <GoPerson size={20} className="text-gray-500" />
              <p className="ml-1">Profile</p>
            </div>
          </div>
        </div>
      )}

      {/* Regular navigation for larger screens */}

      <div className="lg:flex ml-64 hidden border-b-2 w-1/3 items-center">
        <CiSearch size={22} className="text-gray-500" />
        <input
          className="ml-1 mb-1 text-base text-gray-400 outline-none bg-transparent"
          type="text"
          name="search"
          id="search"
          placeholder="Search"
        />
      </div>

      <div className="hidden lg:flex items-center space-x-6">
        <ul className="flex items-center space-x-6 lg:ml-auto">
          <li className="font-semibold flex items-center justify-center gap-1 text-gray-700">
            <RiShoppingCartLine size={23} />
            <p>Cart</p>
            <div className="px-1.5 rounded-full bg-yellow-300 block text-sm">
              2
            </div>
          </li>
          <li className="font-semibold text-gray-700">
            <GoPerson size={25} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
