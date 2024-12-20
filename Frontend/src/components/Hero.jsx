import HeroImg from "../assets/hairfall.png";
import Button from "./Button";
import { Typewriter } from "react-simple-typewriter";
import { Link as RouterLink } from "react-router-dom";

const Hero = () => {
  return (
    <div className="max-w-full bg-grey md:pt-10 md:mt-10 my-4 py-4" id="/">
      <div className="max-w-[1280px] mx-auto bg-white grid  md:grid-cols-2 md:gap-4">
        <div className="p-4 px-8 flex flex-col items-center md:items-start  justify-center ">
          <h1 className="md:text-[65px] text-[40px]   leading-tight font-extrabold">
            LET'S
          </h1>
          <h1 className="md:text-[65px] text-[40px]  text-center leading-tight font-extrabold md:w-[310px] w-[200px] relative right-10 px-6 bg-black  ml-5  -rotate-6 text-white">
            <Typewriter
              words={["Revive♻️", "grow⚡️", "Heal🤩"]}
              loop={""}
              cursor
              cursorStyle="."
              typeSpeed={70}
              deleteSpeed={30}
              delaySpeed={1000}
            />
          </h1>
          <h1 className="md:text-[65px] text-[40px]   leading-tight font-extrabold">
            Your Hair's
          </h1>
          <h1 className="md:text-[65px] text-[40px]   leading-tight font-extrabold">
            HEALTH.
          </h1>
          <p className="text-[15px] text-[#234A6B]  pt-2 pb-4  leading-tight ">
            Personalized consultations, expert advice, and early-stage hair fall
            detection - all in one place.
          </p>
          <RouterLink to="/afterLogin">
            <Button button="SCAN" />
          </RouterLink>
        </div>
        <div className=" p-1 px-4">
          <img src={HeroImg} alt="" className="rounded-t-2xl " />
        </div>
      </div>
    </div>
  );
};
export default Hero;
