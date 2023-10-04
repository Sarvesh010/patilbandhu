import React, { useState } from "react";
import logo from "./images/logo.png";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import { Bars3Icon } from "@heroicons/react/24/outline";

const Header = () => {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };

  return (
    <div className="w-full bg-transparent ">
      {/* sticky top-0 */}
      <div className=" fixed top-0 z-10 w-full flex justify-between p-0 items-center text-xl text-white">
        <div className="h-24 w-24">
          <Link to="/">
            <img src={logo} alt="Patil Bandhu logo" />
          </Link>
        </div>

        <nav>
          <div className="absolute right-6 md:hidden top-6 scale-150 ">
            <Bars3Icon
              className="block h-6 w-6 cursor-pointer"
              onClick={showMenu}
            />
          </div>
          <ul className="hidden mr-10 md:flex gap-8 p-6 uppercase ">
            <li>
              <Link to="/">Home</Link>
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

          <Menu showMenu={showMenu} active={active} />
        </nav>
      </div>
    </div>
  );
};

export default Header;
