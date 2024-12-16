import { FaRegUser, FaLock } from "react-icons/fa";
import { GoNumber } from "react-icons/go";
import { MdEmail } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";
import Login_Img from "../assets/Register.png";
import InputField from "./Input_Field";
import Logo from "../assets/Logo.png";
import Button from "./Button";
import { Link as RouterLink } from "react-router-dom";

const Register = () => {
  return (
    <div className="  w-full text-white min-w-[530px]">
      <div className="w-full bg-black ">
        <div className="p-2 px-4 max-w-[1200px] mx-auto">
          <RouterLink to="/">
            <img src={Logo} alt="" className="h-10 min-w-28" />
          </RouterLink>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto grid md:grid-cols-5 gap-6 p-4 h-screen ">
        <div className="flex flex-col justify-center  items-center p-2  md:col-span-3 col-span-5  bg-black ">
          <h1 className="px-4 my-4 max-w-[470px] mx-auto ">
            Register as a doctor, patient, or admin to access our comprehensive
            healthcare platform.
          </h1>
          <img src={Login_Img} alt="" className="    " />
        </div>
        <div className="bg-white text-black md:col-span-2 col-span-5 flex flex-col justify-center px-6 md:border-none border-t-2 ">
          <div className="flex flex-col md:justify-normal justify-center md:items-start items-center">
            <h1 className="text-5xl font-bold py-2 mb-4  text-[#009963] ">
              REGISTER
            </h1>
            <div className="grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-3  gap-2 my-2">
              <Button button="User" />
              <Button button="Doctor" />
              <Button button="Admin" />
            </div>
          </div>
          {/* inputfield */}
          <InputField icon={FaRegUser} type="text" placeholder="Username" />
          <InputField
            icon={GoNumber}
            max-length={10}
            type="number"
            placeholder="Phone Number"
          />
          <InputField icon={MdEmail} type="email" placeholder="Email" />
          <InputField icon={FaLock} type="password" placeholder="password" />
          <InputField
            icon={FaLock}
            type="password"
            placeholder="Confirm Password"
          />
          {/* inputfield end */}
          {/* Gender part */}
          <div className="flex items-center gap-4 my-4">
            <h1 className=" text-[18px]">Gender:</h1>
            <div>
              <label htmlFor="" className="mx-2 text-[14px]">
                Male
              </label>{" "}
              <input type="checkbox" />
            </div>
            <div>
              <label htmlFor="" className="mx-1 text-[14px]">
                Female
              </label>{" "}
              <input type="checkbox" />
            </div>
            <div>
              <label htmlFor="" className="mx-2 text-[14px]">
                Others
              </label>{" "}
              <input type="checkbox" />
            </div>
          </div>
          {/* Gender part end */}
          <InputField
            icon={CiCalendarDate}
            type="date"
            placeholder="Username"
          />
          <button className="w-full bg-[#009963] cursor-pointer text-white font-bold px-6 rounded-md p-2 hover:bg-[#bee1d5] hover:text-[#3d3a3a] duration-150">
            Next
          </button>

          <RouterLink to="/Login ">
            <h2 className="text-center my-5 text-red-500 cursor-pointer">
              Already have an account ?{" "}
            </h2>
          </RouterLink>
        </div>
      </div>
    </div>
  );
};
export default Register;
