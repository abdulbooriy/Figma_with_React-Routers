import React from "react";
import green__pointer from "../../assets/images/green__pointer.svg";
import pink__pointer from "../../assets/images/pink__pointer.svg";

const Pricing = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="w-[561px] h-[136px] mt-10 text-center mx-auto text-thirty font-[Poppins] flex flex-col gap-4">
          <h2 className="text-5xl font-semibold">Our Pricing Plans</h2>
          <p className="opacity-70">
            When you’re ready to go beyond prototyping in Figma, Webflow is
            ready to help you bring your designs to life — without coding them.
          </p>
        </div>

        <div className="w-[406px] h-[745px] bg-newcolor rounded-[12px] font-[Poppins] pl-[48px]">
          <div>
            <div className="flex items-center gap-2 pt-[64px]">
              <strong className="text-[38px] font-semibold text-thirty">
                $299
              </strong>
              <a href="#">
                <span className="text-[#2405F2] font-[#2405F2]">
                  Per Design
                </span>
              </a>
            </div>

            <div className="py-5">
              <h3 className="text-2xl text-thirty font-normal">Landing Page</h3>
              <p className="opacity-70 pt-2">
                When you’re ready to go beyond prototyping in Figma,{" "}
              </p>
            </div>
          </div>

          <div className="w-[217px] h-[220px] mt-[78px] flex flex-col gap-5 text-thirty">
            <div className="flex gap-3">
              <img src={green__pointer} alt="green pointer image" />
              <p>All limited links</p>
            </div>
            <div className="flex gap-3">
              <img src={green__pointer} alt="green pointer image" />
              <p>Own analytics platform</p>
            </div>
            <div className="flex gap-3">
              <img src={green__pointer} alt="green pointer image" />
              <p>Chat support</p>
            </div>
            <div className="flex gap-3">
              <img src={pink__pointer} alt="pink pointer image" />
              <p className="opacity-70">Optimize hashtags</p>
            </div>
            <div className="flex gap-3">
              <img src={pink__pointer} alt="pink pointer image" />
              <p className="opacity-70">Unlimited users</p>
            </div>
          </div>

          <div className="w-[254px] h-[64px] mt-[79px]">
            <button className="w-full h-full bg-thirty rounded-[41px] text-newcolor">
              <spasn>Get started</spasn>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
