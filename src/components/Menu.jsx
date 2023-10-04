import React from "react";
import { Link } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/outline";

const Menu = ({ showMenu, active }) => {
  return (
    <ul
      className={
        active
          ? "flex-col flex items-center fixed inset-0 left-1/4 uppercase bg-black/40 backdrop-blur-lg gap-8 md:hidden z-50"
          : "hidden"
      }
    >
      <XMarkIcon
        className="block h-6 w-6 cursor-pointer mt-8"
        onClick={showMenu}
      />
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/">Franchise</Link>
      </li>
      <li>
        <Link to="/">About Us</Link>
      </li>
      <li>
        <Link to="/">Products</Link>
      </li>
      <li>
        <Link to="/">Media</Link>
      </li>
      <li>
        <Link to="/">Contact Us</Link>
      </li>
    </ul>
  );
};

export default Menu;
