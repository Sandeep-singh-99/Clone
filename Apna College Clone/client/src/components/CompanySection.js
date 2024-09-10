import React from "react";
import img1 from "../assets/c1.png";
import img2 from "../assets/c2.png";
import img3 from "../assets/c3.png";
import img4 from "../assets/c4.png";
import img5 from "../assets/c5.png";
import img6 from "../assets/c6.png";
import img7 from "../assets/c7.png";
import img8 from "../assets/c8.png";
import img9 from "../assets/c9.png";
import img10 from "../assets/c10.png";
import img11 from "../assets/c11.png";
import img12 from "../assets/c12.png";
import img13 from "../assets/c13.png";
import img14 from "../assets/c14.png";
import img15 from "../assets/c15.png";
import img16 from "../assets/c16.png";
import img17 from "../assets/c17.png";
import img18 from "../assets/c18.png";

function CompanySection() {
  return (
    <div className="bg-[#f8f8fd] pb-24">
      <div className="flex justify-center py-10">
        <h1 className="text-3xl">
          Thousands of students achieved their{" "}
          <span className="text-[#5e75c8] text-3xl font-bold">
            dream job at
          </span>{" "}
        </h1>
      </div>

      <div className="flex justify-center pt-5 pb-5">
        <div className="grid grid-cols-6 gap-20">
          <div className="flex flex-col w-[130px] gap-5">
            <img src={img1} alt="not showing" />
            <img src={img2} alt="not showing" />
            <img src={img3} alt="not showing" />
          </div>

          <div className="flex flex-col w-[130px] gap-5">
            <img src={img4} alt="not showing" />
            <img src={img5} alt="not showing"/>
            <img src={img6} alt="not showing" />
          </div>

          <div className="flex flex-col w-[130px] gap-5">
            <img src={img7} alt="not showing" />
            <img src={img8} alt="not showing" />
            <img src={img9} alt="not showing" />
          </div>

          <div className="flex flex-col w-[130px] gap-5">
            <img src={img10} alt="not showing" />
            <img src={img11} alt="not showing" />
            <img src={img12} alt="not showing" />
          </div>

          <div className="flex flex-col w-[130px] gap-5">
            <img src={img13} alt="not showing" />
            <img src={img14} alt="not showing" />
            <img src={img15} alt="not showing" />
          </div>

          <div className="flex flex-col w-[130px] gap-5">
            <img src={img16} alt="not showing" />
            <img src={img17} alt="not showing" />
            <img src={img18} alt="not showing" />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
            <h1 className="text-xl text-[#7e7e81]">+ many more</h1>
        </div>
    </div>
  );
}

export default CompanySection;
