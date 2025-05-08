import { Route, Routes } from "react-router-dom";
import Home from "./home/Main";
import About from "./aboutus/AboutUs";
import Pricing from "./pricing/Pricing";
import Work from "./work/Work";
import Blog from "./blog/Blog";
import ContactUs from "./contactus/ContactUs";

const MainRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/work" element={<Work />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact/us" element={<ContactUs />} />
    </Routes>
  );
};

export default MainRouters;
