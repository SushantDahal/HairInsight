import { useState } from "react";
import Logo from "../assets/Logo.png";
import Button from "./Button";
import { Divide as Hamburger } from "hamburger-react";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
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
                  to="features"
                  spy={true}
                  smooth={true}
                  offset={30}
                  duration={500}
                >
                  <li className="  px-4 p-1 rounded-md">Features</li>
                </Link>
                <Link
                  to="doctors"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  <li className="  px-4 p-1 rounded-md">Doctors</li>
                </Link>{" "}
                <Link
                  to="testimonial"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <li className="  px-4 p-1 rounded-md">Testimonials</li>
                </Link>
                <Link
                  to="footer"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <li className="  px-4 p-1 rounded-md">contact</li>
                </Link>
              </ul>
            </nav>
            <RouterLink to="/Login">
              <div className="px-2 ml-10">
                <Button button="Get Started" />
              </div>
            </RouterLink>
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
                    <Link
                      to="/"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                    >
                      <li className="  px-4 p-1 rounded-md">Home</li>
                    </Link>
                    <Link
                      to="features"
                      spy={true}
                      smooth={true}
                      offset={30}
                      duration={500}
                    >
                      <li className="  px-4 p-1 rounded-md">Features</li>
                    </Link>
                    <Link
                      to="doctors"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                    >
                      <li className="  px-4 p-1 rounded-md">Doctors</li>
                    </Link>{" "}
                    <Link
                      to="testimonial"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                    >
                      <li className="  px-4 p-1 rounded-md">Testimonials</li>
                    </Link>
                    <Link
                      to="footer"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                    >
                      <li className="  px-4 p-1 rounded-md">contact</li>
                    </Link>
                  </ul>
                </nav>
                <RouterLink to="/Login">
                  <div className="px-2 my-8 shadow-white shadow-2xl">
                    <Button button="Get Started" />
                  </div>
                </RouterLink>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
