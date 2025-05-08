import React from "react";
import hero__image from "../../assets/images/hero__image.svg";

const Hero = () => {
  return (
    <section className="w-full h-[760px] bg-bg-primary">
      <div className="container mx-auto">
        <div className="flex items-center pt-[126px] gap-[60px]">
          <div>
            <h1 className="w-[582px] text-[54px] font-semibold font-[Poppins] text-primary text-xs-[74px] pb-[24px]">
              Building stellar websites for early startups
            </h1>
            <p className="w-[562px] font-[Poppins] text-primary font-medium opacity-70 pb-[48px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
            <div className="flex items-center gap-10 font-[Poppins]">
              <button className="w-[230px] h-[64px] bg-[#FCD980] rounded-[41px] text-[18px]">
                <a href="#">
                  <span>View our work</span>
                </a>
              </button>
              <button className="text-primary">
                <a href="#">
                  <span>View Pricing</span>
                </a>
              </button>
            </div>
          </div>
          <div>
            <img src={hero__image} alt="hero image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
