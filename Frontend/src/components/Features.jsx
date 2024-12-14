import Title from "./Title";
import { FaFileExport, FaCodepen, FaJediOrder } from "react-icons/fa";

const Features = () => {
  return (
    <div className="w-full py-6 mb-4 " id="features">
      <Title title="Features " />
      <div className="max-w-[1280px] mx-auto bg-white py-4">
        <div className="grid md:grid-cols-3 gap-4 px-10 max-w-[1100px] mx-auto py-2 ">
          <div className="p-4  bg-gradient-to-b from-[#F0F9ED] via-[#ffffff] to-[#8df86a] bg-[length:100%_200%] bg-[position:top] hover:bg-[position:bottom] duration-300">
            <FaFileExport className="text-2xl text-[#234A6B]  my-1" />
            <h1 className="text-xl font-semibold text-[#968AB8]">
              Expert Consultations
            </h1>
            <h2 className="text-[#234A6B] text-[14px] pt-2">
              Connect with certified hair specialists for personalized advice
              and treatments.
            </h2>
          </div>
          <div className="p-4  bg-gradient-to-b from-[#F5F9F8] via-[#ffffff] to-[#8df86a] bg-[length:100%_200%] bg-[position:top] hover:bg-[position:bottom] duration-300 ">
            <FaCodepen className="text-2xl text-[#234A6B]  my-1" />
            <h1 className="text-xl font-semibold text-[#968AB8]">
              Hair Loss Stage Detection
            </h1>
            <h2 className="text-[#234A6B] text-[14px] pt-2">
              Identify your hair loss stage and receive tailored remedies and
              solutions.
            </h2>
          </div>
          <div className="p-4  bg-gradient-to-b from-[#F9F6F2] via-[#ffffff] to-[#8df86a] bg-[length:100%_200%] bg-[position:top] hover:bg-[position:bottom] duration-300  ">
            <FaJediOrder className="text-2xl text-[#234A6B]  my-1" />
            <h1 className="text-xl font-semibold text-[#968AB8]">
              Easy Appointment Booking
            </h1>
            <h2 className="text-[#234A6B] text-[14px] pt-2">
              PBook, cancel, or reschedule appointments with your preferred hair
              specialist.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Features;
