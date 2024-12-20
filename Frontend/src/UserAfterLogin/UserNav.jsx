import { useState } from "react";
import profile from "../assets/Doctor1.png";
import Logo from "../assets/Logo.png";

import { Divide as Hamburger } from "hamburger-react";
import { IoNotifications } from "react-icons/io5";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const UserNav = () => {
  const [nav, setNav] = useState("false");

  function HandleNav() {
    console.log("sushan");
    setNav(!nav);
  }
  const [activeItem, setActiveItem] = useState("Home"); // Default active item

  return (
    <div className="bg-black max-w-full mx-auto text-white sticky top-0 z-40">
      <div className="max-w-[1320px] mx-auto    px-4 ">
        <div className="flex justify-between h-24 items-center">
          <div className="">
            <img src={Logo} alt="" className="h-10 min-w-28" />
          </div>
          <div className="lg:flex hidden justify-between items-center  ">
            <nav>
              <ul className=" flex  gap-6 px-1 font-bold text-[16px] cursor-pointer">
                <Link
                  to="/"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  <li className="  px-4 p-1 rounded-md ">Home</li>
                </Link>
                <Link
                  to="Specialists"
                  spy={true}
                  smooth={true}
                  offset={30}
                  duration={500}
                >
                  <li className="  px-4 p-1 rounded-md">Specialists</li>
                </Link>
                <Link
                  to="Appointments"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  <li className="  px-4 p-1 rounded-md">Appointments</li>
                </Link>{" "}
                <Link
                  to="Doctors"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <li className="  px-4 p-1 rounded-md">Doctors</li>
                </Link>
                <Link
                  to="Logout"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <li className="  px-4 p-1 rounded-md">Logout</li>
                </Link>
              </ul>
            </nav>
            <RouterLink to="">
              <div className="flex gap-4 px-2 ml-10 ">
                <div className="flex items-center  relative px-2 ">
                  <IoNotifications size={20} />
                  <span className="absolute right-0 top-0 ">3</span>
                </div>
                <img
                  src={profile}
                  alt=""
                  className="h-12 w-12 rounded-full bg-white"
                />
              </div>
            </RouterLink>
          </div>
          <div className="grid lg:hidden " onClick={HandleNav}>
            <Hamburger />
            <div
              className={`fixed top-0 left-0 w-[40%] h-[100%] z-50  bg-gradient-to-b from-[#000000] via-[#343232] to-[#5bea73]     text-white  transition-transform ${
                nav
                  ? "transform duration-700 -translate-x-full bg-green-950 "
                  : "transform duration-500 -translate-y-0 "
              }`}
            >
              <div className="flex flex-col py-6 justify-between items-center ">
                <nav className="">
                  <ul className=" flex flex-col gap-6 px-1 font-bold text-[16px]">
                    <Link
                      to="/"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                    >
                      <li className="  px-4 p-1 rounded-md ">Home</li>
                    </Link>
                    <Link
                      to="Specialists"
                      spy={true}
                      smooth={true}
                      offset={30}
                      duration={500}
                    >
                      <li className="  px-4 p-1 rounded-md">Specialists</li>
                    </Link>
                    <Link
                      to="Appointments"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                    >
                      <li className="  px-4 p-1 rounded-md">Appointments</li>
                    </Link>{" "}
                    <Link
                      to="Doctors"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                    >
                      <li className="  px-4 p-1 rounded-md">Doctors</li>
                    </Link>
                    <Link
                      to="Logout"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                    >
                      <li className="  px-4 p-1 pb-4 rounded-md">Logout</li>
                    </Link>
                  </ul>
                </nav>
                <hr className="w-full" />
                <RouterLink to="">
                  <div className=" mr-14 mt-6 flex flex-col gap-4 py-2  ">
                    <div className="flex items-center  relative px-2 ">
                      <IoNotifications size={20} />
                      <span className="absolute right-3 top-[-10px]">3</span>
                    </div>
                    <div>
                      <img
                        src={profile}
                        alt=""
                        className="h-12 w-12 rounded-full bg-white"
                      />
                    </div>
                  </div>
                </RouterLink>
                <hr className="w-full" />
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserNav;
