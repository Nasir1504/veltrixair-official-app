const ICCardSkeleton = () => {
  return (
    <div
      className="relative flex flex-col justify-start items-center w-[80%] rounded-[0.6vw] p-[0.6%]
      bg-[linear-gradient(90deg,rgba(60,60,60,1)_0%,rgba(52,52,52,1)_100%)] animate-pulse"
    >
      <div className="w-full min-h-[220px] border border-white flex">
        
        {/* Left Content */}
        <div className="w-[70%] flex flex-col px-[2%] py-[1%] gap-[20px]">

          {/* Button placeholder */}
          <div className="bg-gray-600 w-[14%] h-[30px] rounded"></div>

          {/* Title placeholder */}
          <div className="bg-gray-600 h-[30px] w-[60%] rounded"></div>

          {/* Paragraph placeholder */}
          <div className="bg-gray-600 h-[20px] w-[90%] rounded"></div>
          <div className="bg-gray-600 h-[20px] w-[80%] rounded"></div>
        </div>

        {/* Right Video placeholder */}
        <div className="w-[30%] bg-gray-700 rounded-r-[0.5vw]"></div>
      </div>

      <div className="w-full min-h-[220px]"></div>
    </div>
  );
};

export default ICCardSkeleton;