import React from "react";
import hero__image from "../../assets/images/hero__image.svg";
import arrow__icon from "../../assets/icons/arrow__icon.svg";

const Hero = () => {
  return (
    <section className="w-full h-[700px] bg-bg-primary">
      <div className="container mx-auto pt-[126px]">
        <div className="flex items-center gap-[60px]">
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
              <div className="flex items-center gap-4">
                <a href="#">
                  <span className="text-primary">View Pricing</span>
                </a>
                <a href="#">
                  <img src={arrow__icon} alt="arrow icon" />
                </a>
              </div>
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
