// import Title from "./Title";
// import { FaQuoteLeft } from "react-icons/fa6";
// import Testimonial1 from "../assets/Doctor1.png";
// import Testimonial2 from "../assets/Doctor2.png";
// import Testimonial3 from "../assets/Doctor3.png";
// import Testimonial4 from "../assets/Doctor1.png";
// import Testimonial5 from "../assets/Doctor2.png";
// import { Carousel } from "primereact/carousel";

// const Testimonial = () => {
//   const Testimonial_data = [
//     {
//       id: 1,
//       icon: <FaQuoteLeft size={60} />,
//       img: Testimonial1,
//       des: "The entire process, from consultation to treatment, was seamless and professional. The team truly goes above and beyond to ensure .",
//       name: "Willy Bhai",
//       type: "Patient",
//     },

//     {
//       id: 2,
//       icon: <FaQuoteLeft size={60} />,
//       img: Testimonial2,
//       des: "The doctors here are incredibly caring. The treatment plan they provided was highly effective, and I couldn't be more satisfied.",
//       name: "Sus Bhai",
//       type: "Patient",
//     },
//     {
//       id: 3,
//       icon: <FaQuoteLeft size={60} />,
//       img: Testimonial3,
//       des: "This clinic changed my life. The expertise and compassion shown by the doctors and staff are unmatched. Highly recommend their services!",
//       name: "Sushnts Bhai",
//       type: "Patient",
//     },
//     {
//       id: 4,
//       icon: <FaQuoteLeft size={60} />,
//       img: Testimonial4,
//       des: "The staff at this clinic are extremely professional and kind. They made me feel valued and cared for throughout my journey.",
//       name: "Ravi Bhai",
//       type: "Patient",
//     },
//     {
//       id: 5,
//       icon: <FaQuoteLeft size={60} />,
//       img: Testimonial5,
//       des: "I had a wonderful experience with the team here. They explained everything clearly and helped me achieve excellent results.",
//       name: "Kavi Bhai",
//       type: "Patient",
//     },
//   ];

//   const responsiveOptions = [
//     {
//       breakpoint: "1400px",
//       numVisible: 3,
//       numScroll: 1,
//     },
//     {
//       breakpoint: "1020px",
//       numVisible: 2,
//       numScroll: 1,
//     },
//     {
//       breakpoint: "767px",
//       numVisible: 2,
//       numScroll: 1,
//     },
//     {
//       breakpoint: "640px",
//       numVisible: 1,
//       numScroll: 1,
//     },
//   ];

//   const testimonialTemplate = (item) => {
//     return (
//       <div className="bg-[#f2f5f3] p-2 py-4 mx-4 rounded-2xl min-h-[300px]">
//         {item.icon}
//         <h1 className="mt-6 ">{item.des}</h1>
//         <div className="mt-6 py-4 flex items-center gap-4">
//           <img
//             src={item.img}
//             alt=""
//             className="h-20 w-20 rounded-full bg-white"
//           />
//           <div>
//             <h1>{item.name}</h1>
//             <p>{item.type}</p>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="w-full  py-10 " id="testimonial">
//       <Title title="Testimonial" />
//       <div className="max-w-[1280px] mx-auto">
//         <Carousel
//           value={Testimonial_data}
//           itemTemplate={testimonialTemplate}
//           responsiveOptions={responsiveOptions}
//           numVisible={3}
//           numScroll={1}
//           showNavigators
//           showIndicators
//           className="custom-carousel"
//         />
//       </div>
//     </div>
//   );
// };

// export default Testimonial;
import Title from "./Title";
import { FaQuoteLeft } from "react-icons/fa6";
import Testimonial1 from "../assets/Doctor1.png";
import Testimonial2 from "../assets/Doctor2.png";
import Testimonial3 from "../assets/Doctor3.png";
import Testimonial4 from "../assets/Doctor1.png";
import Testimonial5 from "../assets/Doctor2.png";
import { Carousel } from "primereact/carousel";

const Testimonial = () => {
  const Testimonial_data = [
    {
      id: 1,
      icon: <FaQuoteLeft size={60} />,
      img: Testimonial1,
      des: "The entire process, from consultation to treatment, was seamless and professional. The team truly goes above and beyond to ensure .",
      name: "Willy Bhai",
      type: "Patient",
    },

    {
      id: 2,
      icon: <FaQuoteLeft size={60} />,
      img: Testimonial2,
      des: "The doctors here are incredibly caring. The treatment plan they provided was highly effective, and I couldn't be more satisfied.",
      name: "Sus Bhai",
      type: "Patient",
    },
    {
      id: 3,
      icon: <FaQuoteLeft size={60} />,
      img: Testimonial3,
      des: "This clinic changed my life. The expertise and compassion shown by the doctors and staff are unmatched. Highly recommend their services!",
      name: "Sushnts Bhai",
      type: "Patient",
    },
    {
      id: 4,
      icon: <FaQuoteLeft size={60} />,
      img: Testimonial4,
      des: "The staff at this clinic are extremely professional and kind. They made me feel valued and cared for throughout my journey.",
      name: "Ravi Bhai",
      type: "Patient",
    },
    {
      id: 5,
      icon: <FaQuoteLeft size={60} />,
      img: Testimonial5,
      des: "I had a wonderful experience with the team here. They explained everything clearly and helped me achieve excellent results.",
      name: "Kavi Bhai",
      type: "Patient",
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

  const testimonialTemplate = (item) => {
    return (
      <div className="bg-[#f2f5f3] p-2 py-4 mx-4 rounded-2xl min-h-[300px]">
        {item.icon}
        <h1 className="mt-6 ">{item.des}</h1>
        <div className="mt-6 py-4 flex items-center gap-4">
          <img
            src={item.img}
            alt=""
            className="h-20 w-20 rounded-full bg-white"
          />
          <div>
            <h1>{item.name}</h1>
            <p>{item.type}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full  py-10 " id="testimonial">
      <Title title="Testimonial" />
      <div className="max-w-[1280px] mx-auto">
        <Carousel
          value={Testimonial_data}
          itemTemplate={testimonialTemplate}
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

export default Testimonial;
