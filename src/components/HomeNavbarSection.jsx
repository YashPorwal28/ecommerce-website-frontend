import React, { useState } from "react";

import topDown from "../assets/Home/topDown.svg";
import magnifier from "../assets/Home/magnifier.svg";
import { IoIosSearch } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../assets/Home/SHOP.CO.svg";

const HomeNavbarSection = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [inputVisible , setInputVisible ] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const toggelSearch = ()=>{
    setInputVisible(!inputVisible);
  }

  return (
    <div className="flex justify-center py-2   ">
      <div className="w-11/12 smallbox py-3 px-2 flex   justify-between items-center relative border-b border-black border-opacity-10 pb-7">
      <RxHamburgerMenu className="lg:hidden " onClick={toggleMenu} />
        <img className=" w-[100px] mr-2 sm:w-[200px]" src={logo} alt="" />

        <div className={`categories  justify-center items-center absolute top-10 bg-white px-3 ${menuVisible ? 'flex' : 'hidden'}  lg:flex lg:relative lg:top-0 `}>
          <ul className=" flex flex-col gap-2 lg:flex-row lg:gap-7 xl:gap-9">
            <li className=" items-center flex ">
              Shop <img src={topDown} alt="" />
            </li>
            <li className="">On Sale</li>
            <li>New Arrivals</li>
            <li>Brands</li>
          </ul>
        </div>

        <div className="flex justify-between items-center gap-[20px]">
          <div className="Search flex items-center sm:relative text-black focus-within:text-gray-800 gap-3 mr-[25px] ">
            <IoIosSearch onClick={toggelSearch} className="  absolute ml-2" />
            <input
              className={` ${inputVisible ? 'flex' : 'hidden'}  w-[100px] sm:w-[350px]  border-black pl-7 rounded-xl focus:outline-none font-semibold lg:flex`}
              type="text"
              placeholder="Search for products..."
              name=""
              id=""
            />
          </div>
          <div className="cart">
            <FiShoppingCart />
          </div>
          <div className="user">
            <FaRegUser />
          </div>

          {/* <div className="inputs w-[550px] flex relative items-center text-gray-400 focus-within:text-gray-800">
          <IoIosSearch
            size={27}
            className="absolute ml-3 pointer-events-none"
            />
          <input
            type="text"
            placeholder="Search for products..."
            name="search"
            id=""
            autoComplete="off"
            className=" hidden absolute lg:flex pr-3 pl-10 w-[550px] font-semibold py-2 px-2 rounded-[62px] text-black border-none ring-2 ring-gray-300 focus:outline-none focus:ring-gray-500 "
            />
        </div>

        <div className="cart_profile flex gap-6 items-center">
          <FiShoppingCart size={27} />
          <FaRegUser size={27} />
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default HomeNavbarSection;
