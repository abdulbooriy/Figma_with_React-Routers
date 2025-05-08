import about_us__image from "../../assets/images/aboutus__image.png";

const AboutUs = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="w-full h-[337px] flex gap-[47px] items-center mt-[128px]">
          <div className="w-[595px] font-[Poppins] text-thirty">
            <h3 className="text-[18px] font-normal pb-2">About us</h3>
            <h1 className="text-[54px] font-semibold pb-[31px]">
              Our designs solve problems
            </h1>
            <p className="opacity-70">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          <div className="w-[640px] h-[337px]">
            <img
              className="w-full h-full"
              src={about_us__image}
              alt="about us image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
