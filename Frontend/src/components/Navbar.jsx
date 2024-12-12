import { useState } from "react";
import Logo from "../assets/Logo.png";
import Button from "./Button";
import { Divide as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [nav, setNav] = useState("false");

  function HandleNav() {
    console.log("sushan");
    setNav(!nav);
  }

  return (
    <div className="bg-black max-w-full mx-auto text-white">
      <div className="max-w-[1320px] mx-auto    px-4 ">
        <div className="flex justify-between h-24 items-center">
          <div className="">
            <img src={Logo} alt="" className="h-10 min-w-28" />
          </div>
          <div className="lg:flex hidden justify-between items-center  ">
            <nav>
              <ul className="flex gap-10 px-1 font-bold text-[16px]">
                <li className="bg-[#009963]  px-4 p-1 rounded-md">Home</li>
                <li className="  px-4 p-1 rounded-md">Features</li>
                <li className="  px-4 p-1 rounded-md">Doctors</li>
                <li className="  px-4 p-1 rounded-md">Testimonials</li>
                <li className="  px-4 p-1 rounded-md">contact</li>
              </ul>
            </nav>
            <div className="px-2 ml-10">
              <Button button="Get Started" />
            </div>
          </div>
          <div className="grid lg:hidden " onClick={HandleNav}>
            <Hamburger />
            <div
              className={`fixed top-0 left-0 w-[40%] h-[100%] z-50  bg-gradient-to-b from-[#000000] via-[#ffffff] to-[#5bea73]     text-white  transition-transform ${
                nav
                  ? "transform duration-700 -translate-x-full bg-green-950 "
                  : "transform duration-500 -translate-y-0 "
              }`}
            >
              <div className="flex flex-col py-6 justify-between items-center ">
                <nav className="">
                  <ul className=" flex flex-col gap-6 px-1 font-bold text-[16px]">
                    <li className=" bg-[#009963] px-4 p-1 rounded-md">Home</li>
                    <li className="  px-4 p-1 rounded-md">Features</li>
                    <li className="  px-4 p-1 rounded-md">Doctors</li>
                    <li className="  px-4 p-1 rounded-md">Testimonials</li>
                    <li className="  px-4 p-1 rounded-md">contact</li>
                  </ul>
                </nav>
                <div className="px-2 my-8 shadow-white shadow-2xl">
                  <Button button="Get Started" />
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
