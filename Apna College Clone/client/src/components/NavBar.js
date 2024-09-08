import React from "react";
import img1 from "../assets/1.png";

function NavBar() {
  return (
    <div className="bg-[#ffffff]">
      <div className="px-28 py-3 flex justify-between items-center">
        <img className=" h-14 fill-inherit" src={img1} alt="not showing" />
        <div className="flex items-center gap-5">
            <button className="bg-[#5e75c8] text-white px-4 py-2 rounded-md font-semibold">New Sigma 4.0</button>
            <label className="font-semibold text-lg">Home</label>
            <label className="font-semibold text-lg">New Courses</label>
            <label className="font-semibold text-lg">Log in</label>
            <button className="border-2 border-[#5e75c8] text-[#5e75c8] px-4 py-2 rounded-md font-semibold">Sign up</button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
