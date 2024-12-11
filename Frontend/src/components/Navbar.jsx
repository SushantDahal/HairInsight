import { useState } from "react";
import Logo from "../assets/Logo.png";
import Button from "./Button";
import { Divide as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [nav, setNav] = useState("false");
  return (
    <div className="bg-black max-w-full mx-auto text-white">
      <div className="max-w-[1320px] mx-auto   bg-blue-300 px-4 ">
        <div className="flex justify-between h-24 items-center">
          <div className="">
            <img src={Logo} alt="" className="h-10 min-w-28" />
          </div>
          <div className="lg:flex hidden justify-between items-center  bg-blue-900">
            <nav className="bg-red-800">
              <ul className="flex gap-10 px-1 font-bold text-[16px]">
                <li className=" bg-[#009963] px-4 p-1 rounded-md">Home</li>
                <li className=" bg-[#009963] px-4 p-1 rounded-md">Features</li>
                <li className=" bg-[#009963] px-4 p-1 rounded-md">Doctors</li>
                <li className=" bg-[#009963] px-4 p-1 rounded-md">
                  Testimonials
                </li>
                <li className=" bg-[#009963] px-4 p-1 rounded-md">contact</li>
              </ul>
            </nav>
            <div className="px-2 ml-10">
              <Button button="Get Started" />
            </div>
          </div>
          <div className="grid lg:hidden">
            <Hamburger />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
