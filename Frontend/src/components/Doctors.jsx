import Doctor1 from "../assets/Doctor1.png";
import Doctor2 from "../assets/Doctor4.png";
import Doctor3 from "../assets/Doctor3.png";
import Doctor4 from "../assets/Doctor4.png";
import Title from "./Title";
import { Carousel } from "primereact/carousel";

const Doctors = () => {
  const doctor_data = [
    {
      name: "Dr Willy Bhai",
      type: "Trichologist",
      img: Doctor3,
      star: "⭐ ⭐ ⭐ ⭐ ⭐ ",
    },
    {
      name: "Dr Sushant",
      type: "Trichologist",
      img: Doctor1,
      star: "⭐ ⭐ ⭐ ⭐ ⭐ ",
    },
    {
      name: "Dr susan",
      type: "Trichologist",
      img: Doctor2,
      star: "⭐ ⭐ ⭐ ⭐ ⭐ ",
    },
    {
      name: "Dr Willy",
      type: "Trichologist",
      img: Doctor1,
      star: "⭐ ⭐ ⭐ ⭐ ⭐ ",
    },
    {
      name: "Dr Willy Bhai",
      type: "Trichologist",
      img: Doctor4,
      star: "⭐ ⭐ ⭐ ⭐ ⭐ ",
    },
  ];

  const responsiveOptions = [
    {
      breakpoint: "1400px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "1020px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "640px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const DoctorTemplate = (item) => {
    return (
      <div className="bg-white mx-4 px-2 shadow-black shadow-sm text-[#968AB8]">
        <div>
          <h1>{item.name}</h1>
          <h2 className="text-xs pb-2 pt-1">{item.type}</h2>
          <h1 className="text-[9px]">{item.star}</h1>
        </div>
        <div className="flex items-center justify-center">
          <img src={item.img} alt="" className="h-[400px]" />
        </div>
      </div>
    );
  };
  return (
    <div className="w-full " id="doctors">
      <Title title="Top Rated Doctors" />
      <div className="max-w-[1280px] mx-auto px-8 py-4 gap-6  ">
        <Carousel
          value={doctor_data}
          itemTemplate={DoctorTemplate}
          responsiveOptions={responsiveOptions}
          numVisible={3}
          numScroll={1}
          showNavigators
          showIndicators
          className="custom-carousel"
        />
      </div>
    </div>
  );
};
export default Doctors;
