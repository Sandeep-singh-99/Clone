import React from "react";

import Typewriter from "typewriter-effect";
function Community() {
  return (
    <div className="bg-[#f8f8fd]">
      <div className="flex flex-col justify-center items-center py-10">
        <h1 className="text-3xl font-semibold">JOIN US ON</h1>
        <div className="text-xl font-semibold text-pink-600">
          <Typewriter
            options={{
              strings: ["#Youtube", "#Instagram", "#Telegram"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>

      <div className="flex justify-center gap-36 items-center pt-5 pb-36">
        <div className="flex flex-col justify-center items-center">
          <i class="ri-youtube-fill text-red-600 text-3xl"></i>
          <h1 className="text-xl ">Youtube</h1>
        </div>

        <div className="flex flex-col justify-center items-center">
          <i class="ri-instagram-fill text-pink-600 text-3xl"></i>
          <h1 className="text-xl ">Instagram</h1>
        </div>

        <div className="flex flex-col justify-center items-center">
          <i class="ri-telegram-2-fill text-blue-600 text-3xl"></i>
          <h1 className="text-xl">Telegram</h1>
        </div>
      </div>
    </div>
  );
}

export default Community;
