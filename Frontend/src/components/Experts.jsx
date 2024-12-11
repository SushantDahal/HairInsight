import Expert from "../assets/experts.png";
import Button from "./Button";
const Experts = () => {
  return (
    <div className="max-w-full  ">
      <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 bg-white">
        <div className="px-10 flex flex-col justify-center  text-[#234A6B] ">
          <div className="  py-4 px-5  flex flex-col  md:justify-start md:items-start   justify-center items-center">
            <h1 className="lg:text-[48px] md:text-[30px] text-[40px] font-bold  text-[#234A6B]  py-2">
              Meet Our Experts
            </h1>
            <p className=" mb-4 ">
              Loren Gypsum is simply dummy text of the printing and typesetting
              industry. Loren Gypsum has been the industry's standard dummy text
              ever since the 1500s, when an printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
            <Button button="Learn More" />
          </div>
        </div>
        <div className="p-10">
          <img src={Expert} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Experts;
