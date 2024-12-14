import Title from "./Title";
import WorkImg from "../assets/How.png";
const Work = () => {
  const data = [
    {
      sn: "1",
      des: "Sign up and complete your hair health profile.",
    },
    {
      sn: "2",
      des: "Upload a photo for a hair health scan.",
    },
    {
      sn: "3",
      des: "Browse and select a hair specialist.",
    },
    {
      sn: "4",
      des: "Book an appointment and make a secure payment.",
    },
    {
      sn: "5",
      des: "Receive personalized advice and treatment plans.",
    },
  ];
  return (
    <div className="max-w-full  py-10">
      <Title title="How It work" />

      <div className=" max-w-[1280px] mx-auto grid md:grid-cols-2 gap-4 mx:px-0 px-8">
        <div className="bg-[#234A6B]">
          <img src={WorkImg} alt="" className="mx-auto px-2 p-2" />
        </div>
        <div className="flex flex-col justify-center gap-4">
          {data.map((item) => (
            <div
              key={item.sn}
              className="flex items-center bg-white px-4 gap-4 py-2"
            >
              <h1 className="p-2 px-4 bg-[#234A6B] rounded-full text-white font-extrabold">
                {item.sn}
              </h1>
              <h1 className="text-[#234A6B] ">{item.des}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Work;
