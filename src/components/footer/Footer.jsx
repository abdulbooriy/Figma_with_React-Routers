import logo from "../../assets/images/Logo.svg";
import facebook__icon from "../../assets/icons/facebook__icon.svg";
import twitter__icon from "../../assets/icons/twitter__icon.svg";
import linkedin__icon from "../../assets/icons/linkedin__icon.svg";
import instagram__icon from "../../assets/icons/instagram__icon.svg";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full min-h-[489px] h-full bg-bg-primary mt-24 pt-24">
      <div className="container mx-auto">
        <div className=" flex gap-[260px] ">
          <div>
            <NavLink to={"/"}>
              {" "}
              <img className="pb-[24px]" src={logo} alt="footer logo image" />
            </NavLink>
            <p className="font-[Poppins] font-medium text-secondary opacity-80 w-[399px] pb-[86px]">
              We are always open to discuss your project and improve your online
              presence.
            </p>
          </div>
          <div className="flex flex-col gap-3.5">
            <h1 className="text-5xl text-primary font-semibold font-[Poppins]">
              Lets Talk!
            </h1>
            <p className="font-normal font-[Poppins] text-secondary opacity-80 w-[399px]">
              We are always open to discuss your project, improve your online
              presence and help with your UX/UI design challenges.
            </p>
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
        <div className="w-[517px] h-[95px] bg-[#FCD980] flex items-center px-[37px]">
          <div className="flex gap-[29px]">
            <div className="flex flex-col gap-2">
              <p className="text-[18px] font-[Poppins] font-medium text-[#282938]">
                Email me at
              </p>
              <a
                href="https://www.website.com/contact-us/?source=SC"
                target="_blank">
                <span>contact@website.com</span>
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[18px] font-[Poppins] font-medium text-[#282938]">
                Call us
              </p>
              <a href="tel:+0927627728525">
                <span>0927 6277 28525</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
