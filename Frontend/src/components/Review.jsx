import Title from "./Title";
const Review = () => {
  return (
    <div className="w-full md:py-10 pb-10 ">
      <Title title="'Where Hair Finds Hope' " />
      <div className="max-w-[1280px] mx-auto bg-white py-4 cursor-pointer">
        <div className="grid md:grid-cols-3 gap-16 px-10 max-w-[1100px] mx-auto py-2  ">
          {/* <div className="py-10 text-center font-bold bg-[#F0F9ED] rounded-tr-2xl rounded-bl-2xl">
            <h1 className="text-3xl text-[#968AB8]">4</h1>
            <h2 className="text-[#234A6B]">Verified Trichologist</h2>
          </div> */}
          <div className="py-10 text-center font-bold rounded-tr-2xl rounded-bl-2xl bg-gradient-to-b from-[#F0F9ED] via-[#ffffff] to-[#8df86a] bg-[length:100%_200%] bg-[position:top] hover:bg-[position:bottom] duration-300">
            <h1 className="text-3xl text-[#968AB8]">4</h1>
            <h2 className="text-[#234A6B]">Verified Trichologist</h2>
          </div>

          <div className="py-10 text-center font-bold rounded-tr-2xl rounded-bl-2xl bg-gradient-to-b from-[#F5F9F8] via-[#ffffff] to-[#8df86a] bg-[length:100%_200%] bg-[position:top] hover:bg-[position:bottom] duration-300">
            <h1 className="text-3xl text-[#968AB8]">100+</h1>
            <h2 className="text-[#234A6B]">Happy Customers</h2>
          </div>
          <div className="py-10 text-center font-bold rounded-tr-2xl rounded-bl-2xl bg-gradient-to-b from-[#F9F6F2] via-[#ffffff] to-[#8df86a] bg-[length:100%_200%] bg-[position:top] hover:bg-[position:bottom] duration-300">
            <h1 className="text-3xl text-[#968AB8]">90%</h1>{" "}
            <h2 className="text-[#234A6B]">Positive FeedBack</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Review;
