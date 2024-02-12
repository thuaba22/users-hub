import { Link } from "react-router-dom";
import Logo from "./Logo";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut().then().catch();
  };
  return (
    <div className="navbar bg-[#F3F0FF]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link className="font-bold" to="/">
                Users
              </Link>
            </li>

            <li>
              <Link className="font-bold" to="/add-user">
                Add User
              </Link>
            </li>
          </ul>
        </div>
        <Logo></Logo>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link className="font-bold" to="/">
              Users
            </Link>
          </li>

          <li>
            <Link className="font-bold" to="/add-user">
              Add User
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <button
            onClick={handleSignOut}
            className="btn capitalize bg-[#5F33E1] text-white hover:bg-[#5F33E1]"
          >
            Sign Out
          </button>
        ) : (
          <Link to="/login">
            <button className="btn capitalize ml-2 bg-[#5F33E1] text-white hover:bg-[#5F33E1]">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
