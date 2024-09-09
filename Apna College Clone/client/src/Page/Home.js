import React from "react";
import Typewriter from "typewriter-effect";

import img2 from "../assets/2.png";
import Container from "../components/Container";
import Batch from "../components/Batch";
function Home() {
  return (
    <>
      <div className="bg-gradient-to-r from-[#ffffff] to-[#d1d7ee] px-28 h-screen">
        <div className="flex justify-between ">
          <div className="flex flex-col gap-10 justify-center">
            <h1 className="font-bold text-5xl">Learn & become the</h1>
            <h1 className="text-[#5e75c8] font-bold text-5xl">
              Top 1% software <br /> developer{" "}
            </h1>
            <div className=" font-semibold text-2xl">
              <Typewriter
                options={{
                  strings: [
                    "C++ DSA",
                    "Python DSA",
                    "Java DSA",
                    "Javascript DSA",
                    "C DSA",
                    "C++ DSA",
                    "Python DSA",
                    "Java DSA",
                    "Javascript DSA",
                    "C DSA",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <div>
              <button className="bg-[#5e75c8] text-white text-2xl px-4 py-2 rounded-md font-semibold">
                Explore new batches <i class="ri-arrow-right-s-line"></i>
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center h-screen">
            <img src={img2} alt="not showing" />
          </div>
        </div>
      </div>

      <Container/>
      <Batch/>
    </>
  );
}

export default Home;
