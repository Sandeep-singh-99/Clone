import React from "react";
import img1 from "../assets/1.png";

function Footer() {
  return (
    <div className="bg-white space-y-5 pt-10">
      <div className="flex justify-between px-28 py-5">
        <div className="flex flex-col gap-5 w-2/12">
          <img
            className="h-14 w-28 fill-inherit"
            src={img1}
            alt="not showing"
          />
          <label className="text-[#5e75c8] text-lg">
            Where education meets real-world needs.
          </label>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="text-[#5e75c8] font-bold text-lg">HELPFUL LINKS</h1>
          <div className="flex flex-col  text-[#5e75c8] text-lg">
            <label> <i class="ri-arrow-right-s-line"></i> Courses</label>
            <label> <i class="ri-arrow-right-s-line"></i> Privacy Policy</label>
            <label> <i class="ri-arrow-right-s-line"></i> REFUND & CANCELLATION POLICY</label>
            <label> <i class="ri-arrow-right-s-line"></i> TERMS & CONDITIONS</label>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="font-bold text-lg">GET IN TOUCH</h1>
          <div className="flex flex-col text-lg">
            <label> <i class="ri-mail-fill text-[#1f1f7c] text-2xl"></i> alpha@apnacollege.in</label>
            <label> <i class="ri-mail-fill text-[#1f1f7c] text-2xl"></i> delta@apnacollege.in</label>
            <label> <i class="ri-mail-fill text-[#1f1f7c] text-2xl"></i> signma@apnacollege.in</label>
            <label> <i class="ri-user-settings-fill text-[#1f1f7c] text-2xl"></i> Support Team : 10am-6pm</label>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="font-bold text-lg">CONNECT WITH US</h1>
          <div className="flex flex-col text-[#5e75c8] text-lg">
            <label>Facebook <i class="ri-facebook-box-fill text-[#5e75c8]"></i></label>
            <label>Twitter <i class="ri-twitter-fill text-[#5e75c8]"></i> </label>
            <label>Instagram <i class="ri-instagram-line text-[#5e75c8]"></i></label>
            <label>LinkedIn <i class="ri-linkedin-box-fill text-[#5e75c8]"></i></label>
            <label>Youtube <i class="ri-youtube-fill text-[#5e75c8]"></i></label>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center text-lg">
        <h1>Copyright <i class="ri-copyright-line"></i> 2024</h1>
      </div>
    </div>
  );
}

export default Footer;
