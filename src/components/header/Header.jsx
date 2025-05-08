import React from "react";
import logo from "../../assets/images/Logo.svg";

const Header = () => {
  return (
    <header className="w-full h-[92px] bg-bg-primary">
      <div className="container mx-auto">
        <nav className="h-[92px] flex items-center justify-between">
          <div>
            <a href="#">
              <img src={logo} alt="logo image" />
            </a>
          </div>

          <div className="flex items-center gap-10 font-[Poppins] font-medium">
            <ul className="flex gap-10 text-secondary">
              <li>
                <a href="#">
                  <span className="text-primary">Home</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>About us</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Pricing</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Work</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Blog</span>
                </a>
              </li>
            </ul>

            <button className="w-[185px] h-[60px] bg-transparent border-2 border-[#474975] rounded-[41px] text-primary">
              <a href="#">Contact us</a>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
