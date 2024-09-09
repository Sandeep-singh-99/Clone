import React from "react";

function Container() {
  return (
    <>
      <div className="bg-gradient-to-r from-indigo-400 to-indigo-600 py-10">
        <div className="flex  justify-center items-center ">
          <h1 className="text-white text-lg font-bold">
            INDIA'S MOST LOVED CODING COMMUNITY
            <i class="ri-heart-fill ml-2 text-2xl text-[#ff1e34]"></i>
          </h1>
        </div>

        <div className="flex justify-center items-center pt-5 gap-36">
            <div className="text-white text-xl font-bold flex justify-center items-center flex-col">
                <h1> <i class="ri-group-fill"></i> 5,000,000+</h1>
                <h2 className="text-lg">HAPPY LEARNERS</h2>
            </div>

            <div className="text-white text-xl font-bold flex flex-col justify-center items-center ">
                <h1> <i class="ri-hand-heart-fill"></i> 2 CRORE+</h1>
                <h2 className="text-lg">MONTHLY VIEWS</h2>
            </div>

            <div className="text-white text-xl font-bold flex flex-col justify-center items-center">
                <h1> <i class="ri-links-fill"></i> 100,000+</h1>
                <h2 className="text-lg">NEW MONTHLY SUBSCRIBERS</h2>
            </div>
          </div>
      </div>
    </>
  );
}

export default Container;
