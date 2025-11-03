import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router";
import toast from "react-hot-toast";

const Navbar = () => {

  const { navigate, user, setUser } = useContext(AppContext)
  const logout = async () => {
    setUser(false);
    toast.success('logout successful!');
    navigate('/')
  }


  return (

    <header className="bg-blue-700 text-white px-10 py-5 flex justify-between items-center shadow-md fixed top-0 left-0 w-full z-50 ">
      {/* Logo */}
      <div className="flex items-center gap-4">
        <img src="/hotel.jpg" alt="logo" className="h-10" />
        <h1 className="text-2xl font-bold">
          <Link to={'/'}>
            <span className="text-white">Stay</span>
            <span className="text-orange-400"> here.</span>
          </Link>

        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex space-x-10 text-lg items-center ">
        <Link to='/' className="hover:text-orange-300 transition" >Home</Link>
        {/* <a href="Home" className="hover:text-orange-300">Home</a> */}
        <a href="Hotels" className="hover:text-orange-300">Hotels</a>
        <a href="Rooms" className="hover:text-orange-300">Rooms</a>
        <a href="About" className="hover:text-orange-300">About</a>
      </nav>

      {
        user ? (
          <div className="relative group inline-block">
            <img src="/login.png" alt="login" className="w-10 h-10 rounded-full cursor-pointer" />


            {/* Dropdown menu */}

            <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:visible transition duration-300 z-50">
              <ul className="py-2">
                <li>
                  <Link to={'/my-booking'} className="block px-4 py-2 text-medium text-gray-700 hover:bg-gray-100 hover:text-indigo-700">My Booking</Link>
                </li>
                {/* <li onClick={logout}>
                  <Link  className="block px-4 py-2 text-medium text-gray-700 hover:bg-gray-100 hover:text-red-700">Logout</Link>
                </li> */}

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


          <button onClick={() => navigate("/login")} className="bg-black hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md text-sm transition cursor-pointer">
            Login
          </button>
        )}

    </header>


  );
};

export default Navbar;
