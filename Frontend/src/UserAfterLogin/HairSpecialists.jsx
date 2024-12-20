import Doctor1 from "../assets/Doctor1.png";
import Doctor4 from "../assets/Doctor4.png";
import Doctor3 from "../assets/Doctor3.png";

const Specialists_data = [
  {
    img: Doctor1,
    name: "Dr Willy ",
    type: "Hair Transplant Specialist",
    status: "Available",
  },
  {
    img: Doctor3,
    name: "Dr Sushant",
    type: "Trichologist",
    status: "Busy",
  },
  {
    img: Doctor4,
    name: "Dr Wangdu ",
    type: "Trichologist",
    status: "Busy",
  },
];

const HairSpecialists = () => {
  return (
    <div className="w-full bg-white py-4 ">
      <div className="max-w-[1280px] mx-auto px-4 ">
        <h1 className="text-2xl font-extrabold p-2 ">Hair Specialists</h1>
        <div className="bg-gray-100 my-2 py-4 px-2 grid md:grid-cols-3 gap-6">
          {Specialists_data.map((item, index) => (
            <div className="bg-[#e7e6e6] p-4 rounded-2xl" key={index}>
              <div className="flex items-center justify-center">
                <img
                  src={item.img}
                  alt=""
                  className="h-20 w-20 rounded-full bg-white"
                />
              </div>
              <div className="py-2">
                <h1 className="font-bold">{item.name}</h1>
                <h1 className="text-xs ">{item.type}</h1>
              </div>
              <div className="py-2 flex justify-between items-center">
                <h1
                  className={`${
                    item.status === "Busy" ? "text-red-500" : "text-[#009963]"
                  }`}
                >
                  {item.status}
                </h1>
                <button
                  className={`${
                    item.status === "Busy"
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-[#009963] cursor-pointer hover:bg-[#bee1d5] hover:text-[#3d3a3a]"
                  } text-[10px] text-white font-bold px-3 rounded-md p-2 duration-150`}
                >
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
          {/* 
          <div className="bg-red-300">
            <h1>second</h1>
          </div>
          <div className="bg-red-300">
            <h1>third</h1>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HairSpecialists;
