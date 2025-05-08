import logo from "../../assets/images/Logo.svg";
import { NavLink } from "react-router-dom";
import "./style.css";

const Header = () => {
  return (
    <header className="w-full h-[92px] bg-bg-primary">
      <div className="container mx-auto">
        <nav className="h-[92px] flex items-center justify-between">
          <div>
            <NavLink to={"/"}>
              {" "}
              <img src={logo} alt="logo image" />
            </NavLink>
          </div>

          <div className="flex items-center gap-10 font-[Poppins] font-medium">
            <ul className="flex gap-10 text-secondary">
              <li>
                <NavLink className="header__link" to={"/"}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="header__link" to={"/about"}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink className="header__link" to={"/pricing"}>
                  Pricing
                </NavLink>
              </li>
              <li>
                <NavLink className="header__link" to={"/work"}>
                  Work
                </NavLink>
              </li>
              <li>
                <NavLink className="header__link" to={"/blog"}>
                  Blog
                </NavLink>
              </li>
            </ul>

            <NavLink className="header__link" to={"/contact/us"}>
              {" "}
              <button className="w-[185px] h-[60px] bg-transparent border-2 border-[#474975] rounded-[41px] text-primary cursor-pointer">
                Contact us
              </button>
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
