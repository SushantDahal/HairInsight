import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-[black] text-white w-full pt-4 pb-20 " id="footer">
      <div className=" max-w-[1240px] mx-auto grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 p-4 gap-4">
        <div className=" border-b-4 md:border-none border-white pb-4">
          <h1 className="text-xl font-bold mb-4 ">HAIRINSIGHT</h1>
          <p>The ultimate destination for all of your medical needs</p>
          <div className="flex gap-2 mt-4">
            <FaFacebook size={30} />
            <FaTwitter size={30} />
            <FaInstagram size={30} />
            <FaTiktok size={30} />
          </div>
        </div>
        <div className=" border-b-4 md:border-none border-white px-4">
          <h1 className="text-xl font-bold mb-4 ">Explore</h1>
          <ul>
            <li>Home</li>
            <li className="py-2">Surgery</li>
            <li>OPD</li>
            <li className="py-2"> Speciality</li>
            <li>Consultation</li>
          </ul>
        </div>
        <div className=" border-b-4 md:border-none border-white px-4">
          <h1 className="text-xl font-bold mb-4 ">About Us</h1>
          <ul>
            <li>Who we are</li>
            <li className="py-2">Our Vision</li>
            <li>Our Team</li>
            <li className="py-2"> Terms and Conditions</li>
            <li>FAQs</li>
          </ul>
        </div>{" "}
        <div className=" border-b-4 md:border-none border-white px-4">
          <h1 className="text-xl font-bold mb-4 ">Explore</h1>
          <ul>
            <li>977 9819067819</li>
            <li className="py-2">sushandahal246@gmail.com</li>
            <li>Itahari-2, Sunsari</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Footer;
