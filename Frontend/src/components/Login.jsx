import { FaRegUser, FaLock } from "react-icons/fa";
import Login_Img from "../assets/loginpageImg.png";
import InputField from "./Input_Field";
import Logo from "../assets/Logo.png";
import { Link as RouterLink } from "react-router-dom";

const Login = () => {
  return (
    <div className=" text-white w-full ">
      <div className="w-full bg-black ">
        <div className="p-2 px-4 max-w-[1200px] mx-auto">
          <RouterLink to="/">
            <img src={Logo} alt="" className="h-10 min-w-28" />
          </RouterLink>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto grid md:grid-cols-5 gap-6 md:p-10 p-2 h-screen">
        <div className="bg-white text-black md:col-span-2 col-span-5 flex flex-col md:items-center justify-center px-6 md:text-start text-center">
          <div className="">
            <h1 className="text-5xl font-bold py-2 text-[#009963] ">WELCOME</h1>
            <p className="text-xs">We are glad to see you back with us</p>
          </div>
          <InputField icon={FaRegUser} type="text" placeholder="Username" />
          <InputField icon={FaLock} type="password" placeholder="password" />
          <button className="w-full bg-[#009963] cursor-pointer text-white font-bold px-6 rounded-md p-2 hover:bg-[#bee1d5] hover:text-[#3d3a3a] duration-150">
            Next
          </button>
          <h2 className="my-4 text-red-500">Forgot Password?</h2>
          <h2>
            Don’t have an account ?{" "}
            <RouterLink to="/Register">
              <span className="font-bold underline cursor-pointer">
                Sign Up
              </span>
            </RouterLink>
          </h2>
        </div>
        <div className="md:col-span-3 col-span-5 flex justify-center items-center p-2 ">
          <img src={Login_Img} alt="" className="    " />
        </div>
      </div>
    </div>
  );
};
export default Login;
