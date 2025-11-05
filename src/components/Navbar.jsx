import React, { useContext, useState, useEffect, useRef } from "react";
import { AppContext } from "../context/AppContext";
import { href, Link } from "react-router"; // Make sure to import from react-router-dom
import toast from "react-hot-toast";
import { Key, MenuIcon } from "lucide-react";
import { div } from "motion/react-client";

const navitems = [
  { title: "Home", href: '/' },
  { title: "Hotel", href: '/hotel' },
  { title: "Room", href: '/room' },
  { title: "About", href: '/about' },

]

const Navbar = () => {
  const { navigate, user, setUser } = useContext(AppContext);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const logout = async () => {
    setUser(false);
    toast.success("Logout successful!");
    navigate("/");
  };

  const handleMenuBtnClick = () => {
    setIsMenuVisible(prev => !prev)
  }

  return (
    <header className="bg-blue-700 text-white px-10 py-5 flex justify-between items-center shadow-md fixed top-0 left-0 w-full z-50">
      {/* Logo */}
      <div className="flex items-center gap-4">
        <img src="/hotel.jpg" alt="logo" className="h-10" />
        <h1 className="text-2xl font-bold">
          <Link to="/" className="flex gap-1">
            <span className="text-white">Stay</span>
            <span className="text-orange-500">here.</span>
          </Link>
        </h1>
      </div>

      {/*Desktop Navigation */}
      <nav className="space-x-10 text-lg items-center hidden md:flex">


        <Link
          to="/"
          className="hover:text-orange-500 relative after:block 
          after:h-[2px] after:w-0 after:bg-orange-500 after:mt-1 after:transition-width after:duration-500 after:origin-left
          hover:after:w-full"
        >
          Home
        </Link>

        <Link
          to="/hotel"
          className="hover:text-orange-500 relative after:block 
          after:h-[2px] after:w-0 after:bg-orange-500 after:mt-1 after:transition-width after:duration-500 after:origin-left
          hover:after:w-full"
        >
          Hotels
        </Link>

        <Link
          to="/room"
          className="hover:text-orange-500 relative after:block 
          after:h-[2px] after:w-0 after:bg-orange-500 after:mt-1 after:transition-width after:duration-500 after:origin-left
          hover:after:w-full"
        >
          Rooms
        </Link>

        <Link
          to="/about"
          className="hover:text-orange-500 relative after:block 
          after:h-[2px] after:w-0 after:bg-orange-500 after:mt-1 after:transition-width after:duration-500 after:origin-left
          hover:after:w-full"
        >
          About
        </Link>




        {/* User login/logout */}
        {user ? (
          <div className="relative group inline-block">
            <img
              src="/login.png"
              alt="login"
              className="w-10 h-10 rounded-full cursor-pointer"
            />

            {/* Dropdown menu */}
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:visible transition duration-300 z-50">
              <ul className="py-2">
                <li>
                  <Link
                    to="/my-booking"
                    className="block px-4 py-2 text-medium text-gray-700 hover:bg-gray-100 hover:text-indigo-700"
                  >
                    My Booking
                  </Link>
                </li>
                <li>
                  <button
                    onClick={logout}
                    className="block w-full text-left px-4 py-2 text-medium text-gray-700 hover:bg-gray-100 hover:text-red-700"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-black hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md text-sm transition cursor-pointer"
          >
            Login
          </button>
        )}
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden  flex gap-4 items-center ">
         {user ? (
          <div  className="relative group inline-block">
            <img
              src="/login.png"
              alt="login"
              className="w-10 h-10 rounded-full cursor-pointer"
              
            />

            {/* Dropdown menu */}
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:visible transition duration-300 z-50">
              <ul className="py-2">
                <li>
                  <Link
                    to="/my-booking"
                    className="block px-4 py-2 text-medium text-gray-700 hover:bg-gray-100 hover:text-indigo-700"
                  >
                    My Booking
                  </Link>
                </li>
                <li>
                  <button
                    onClick={logout}
                    className="block w-full text-left px-4 py-2 text-medium text-gray-700 hover:bg-gray-100 hover:text-red-700"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-black hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md text-sm transition cursor-pointer"
          >
            Login
          </button>
        )}
        <div className="z-990" onClick={() => handleMenuBtnClick()} >
          <MenuIcon />

        </div>
        {isMenuVisible ? <div ref={menuRef} className="w-[40%] rounded-l- bg-indigo-400 h-60 justify-around flex flex-col absolute right-0 top-20 z-50">
          {
            navitems.map((item, index) => {
              return (

                <Link className="text-2xl mx-auto " to={item.href} onClick={()=>handleMenuBtnClick()}>
                  {item.title}

                </Link>

              )

            })
          }
         
        </div> : ""}

      </nav>
    </header>
  );
};

export default Navbar;
