import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { RiShoppingCartLine } from "react-icons/ri";
import { GoPerson } from "react-icons/go";
import { AiOutlineMenu } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { userLoggedOut } from "../../feature/auth/authSlice";
import { setSearchString } from "../../feature/search/searchSlice";
import { Link } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);

  console.log(user);

  const cart = useSelector((state) => state.cart?.cart);

  console.log(cart);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogOut = () => {
    dispatch(userLoggedOut());
  };

  const handleSearchInputChange = (event) => {
    dispatch(setSearchString(event.target.value));
  };

  return (
    <nav className="flex justify-between px-4 lg:px-20 py-5 items-center bg-white border-b-2 z-10">
      <div className="flex items-center">
        <h1 className="text-xl lg:text-2xl text-gray-800 font-bold">ZayNax</h1>
      </div>

      <div className="lg:hidden flex items-center gap-8">
        {!user?.user_id && (
          <div className="flex items-center border-b-2">
            <CiSearch size={20} className="text-gray-500" />
            <input
              onChange={(e) => handleSearchInputChange(e)}
              className="ml-1 mb-1 text-base text-gray-600 outline-none bg-transparent"
              type="text"
              name="search"
              id="search"
              placeholder="Search"
            />
          </div>
        )}
        <AiOutlineMenu
          size={24}
          className="text-gray-800 cursor-pointer"
          onClick={toggleMenu}
        />
      </div>

      {/* Dropdown menu for mobile and tablet */}
      {isMenuOpen && (
        <div className="lg:hidden z-10 absolute w-1/3 right-2 top-14 bg-white border rounded-md shadow-md py-2">
          <div className="flex flex-col items-center space-y-2">
            {!user?.user_id && (
              <Link to={"/cart"} className="flex items-center">
                <RiShoppingCartLine size={20} className="text-gray-500" />
                <p className="ml-1">Cart</p>
                <div className="px-1.5 rounded-full bg-yellow-300 block text-sm">
                  {cart?.length}
                </div>
              </Link>
            )}
            <div className="flex items-center">
              <GoPerson size={20} className="text-gray-500" />

              <p className="ml-1">
                {user?.user_id ? user?.user_id : "Profile"}{" "}
              </p>
            </div>
            {user && (
              <div className="inline-block ml-5">
                <button
                  onClick={handleLogOut}
                  type="submit"
                  className="bg-primary font-medium w-full text-black px-6 py-1 shadow rounded-xl focus:outline-none"
                >
                  Log Out
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Regular navigation for larger screens */}

      {!user?.user_id && (
        <div className="lg:flex ml-64 hidden border-b-2 w-1/3 items-center">
          <CiSearch size={22} className="text-gray-500" />
          <input
            onChange={(e) => handleSearchInputChange(e)}
            className="ml-1 mb-1 text-base text-gray-600 outline-none bg-transparent"
            type="text"
            name="search"
            id="search"
            placeholder="Search"
          />
        </div>
      )}

      <div className="hidden lg:flex items-center space-x-6">
        <ul className="flex items-center space-x-6 lg:ml-auto">
          {!user?.user_id && (
            <Link to={"/cart"}>
              <li className="font-semibold flex items-center justify-center gap-1 text-gray-700">
                <RiShoppingCartLine size={23} />
                <p>Cart</p>
                <div className="px-1.5 rounded-full bg-yellow-300 block text-sm">
                  {cart?.length}
                </div>
              </li>
            </Link>
          )}
          <li className="font-semibold text-gray-700 flex items-center gap-1">
            <GoPerson size={25} />
            <span className="uppercase">{user?.user_id}</span>
          </li>
        </ul>
        {user && (
          <div className="inline-block ml-5">
            <button
              onClick={handleLogOut}
              type="submit"
              className="bg-primary font-medium w-full text-black px-6 py-1 shadow rounded-xl focus:outline-none"
            >
              Log Out
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
