import React from "react";
import facebook__icon from "../../assets/icons/facebook__icon__work.svg";
import twitter__icon from "../../assets/icons/twitter__icon__work.svg";
import linkedin__icon from "../../assets/icons/linkedin__icon__work.svg";
import instagram__icon from "../../assets/icons/instagram__icon__work.svg";

const Work = () => {
  return (
    <section className="w-full h-[416px] bg-[#F4F6FC]">
      <div className="container mx-auto flex justify-center">
        <div className="w-[733px] h-[224px] text-center  text-thirty font-[Poppins] pt-24">
          <p className="font-medium opacity-70">What we created</p>
          <h2 className="text-5xl font-semibold mt-2.5">Our Work Portfolio</h2>
          <p className=" mt-6 font-medium">
            We help teams create great digital products by providing them with
            tools and technology to make the design-to-code process universally
            accessible.
          </p>
          <div className="flex justify-center">
            <div className="w-36 h-4 flex justify-between mt-[28px]">
              <a href="https://www.facebook.com/" target="_blank">
                <img src={facebook__icon} alt="facebook__icon" />
              </a>
              <a href="https://x.com/i/flow/login" target="_blank">
                <img src={twitter__icon} alt="twitter__icon" />
              </a>
              <a href="https://www.instagram.com/" target="_blank">
                <img src={instagram__icon} alt="instagram__icon" />
              </a>
              <a href="https://www.linkedin.com/" target="_blank">
                <img src={linkedin__icon} alt="linkedin__icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
