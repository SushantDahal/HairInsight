const Assessment = () => {
  return (
    <div className="w-full bg-white py-4">
      <div className="max-w-[1280px] mx-auto px-4 ">
        <h1 className="text-2xl font-extrabold p-2 ">Hair Loss Assessment</h1>
        <div className="bg-gray-100 my-2 py-4 px-2">
          <h2 className="text-xs pb-4">
            Determine your hair loss stage and get personalized remedies.
          </h2>
          <div className="flex gap-4">
            <button className="bg-[#009963] text-[8px] sm:text-[14px] cursor-pointer text-white font-bold sm:px-4 px-2 rounded-md p-2 hover:bg-[#bee1d5] hover:text-[#3d3a3a] duration-150">
              Start Assessment
            </button>
            <button className="bg-[#000000] text-[8px] sm:text-[14px] cursor-pointer text-white font-bold sm:px-4 px-2 rounded-md p-2 hover:bg-[#bee1d5] hover:text-[#3d3a3a] duration-150">
              View result
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Assessment;
