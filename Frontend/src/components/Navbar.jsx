import Logo from "../assets/Logo.png";
import Button from "./Button";

const Navbar = () => {
    return(
        <div className="bg-black max-w-full mx-auto text-white">
        <div className="max-w-[1240px] mx-auto  bg-black ">
            <div className="flex justify-between h-24 items-center">
                <div className="">
                    <img src={Logo} alt=""  className="h-10 w-28" />
                </div>
                <nav className="n">
                    <ul className="flex gap-14 px-1 font-bold text-[16px]">
                        <li className="mx-4 bg-[#009963] px-4 p-1 rounded-md">Home</li>
                        <li className="mx-4">Features</li>
                        <li className="mx-4">Doctors</li>
                        <li className="mx-4">Testimonials</li>
                        <li className="mx-4">contact</li>
                    </ul>
                </nav>
                <div>
                   <Button button="Get Started"/>
                </div>

            </div>
           
        </div>
        </div>
    )
}

export default Navbar;