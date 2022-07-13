import React from "react";
import { Link, useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import { auth } from "../../firebase";

const NavBar = () => {
  const navigate = useNavigate();
  const signOut = async () => {
    await signOut(auth);
    navigate("/login");
  };
  return (
    <nav className="bg-black px-2 sm:px-4 py-2 rounded text-xl">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link to="/" className="flex ">
          <img
            src="data:image/jpeg;base64,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"
            alt="movie log"
            className="h-6 mr-3 sm:h-9"
          />
          <span className="text-white font-bold">MoviesWorld</span>
        </Link>
        <div className="flex items-center md:order-2">
          <button
            type="button"
            className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            onClick={signOut}
          >
            <LogoutIcon />
          </button>
          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              className="hidden w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="mobile-menu-2"
        >
          <ul className="flex flex-col  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:text-xl">
            <li>
              <a
                href="/"
                className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <Link
                to="/favourites"
                className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Favourites
              </Link>
            </li>

            <li>
              <Link
                to="/movies"
                className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Movies
              </Link>
            </li>
            <li>
              <Link
                to="/tvShow"
                className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Tv Shows
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
