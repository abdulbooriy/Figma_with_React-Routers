import green__pointer from "../../assets/images/green__pointer.svg";
import pink__pointer from "../../assets/images/pink__pointer.svg";

const Pricing = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="w-[561px] h-[136px] text-center mx-auto text-thirty font-[Poppins] flex flex-col gap-4 mt-[128px]">
          <h2 className="text-5xl font-semibold">Our Pricing Plans</h2>
          <p className="opacity-70">
            When you’re ready to go beyond prototyping in Figma, Webflow is
            ready to help you bring your designs to life — without coding them.
          </p>
        </div>

        <div className="flex gap-8 mt-16">
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
                <h3 className="text-2xl text-thirty font-normal">
                  Landing Page
                </h3>
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

            <div className="w-[254px] h-[64px] mt-[79px] ml-[20px]">
              <button className="w-full h-full bg-thirty rounded-[41px] text-newcolor cursor-pointer">
                <span>Get started</span>
              </button>
            </div>
          </div>

          <div className="w-[406px] h-[745px] bg-bg-primary rounded-[12px] font-[Poppins] pl-[48px]">
            <div className="flex items-center gap-2 pt-[64px]">
              <strong className="text-[38px] font-semibold text-primary">
                $399
              </strong>
              <a href="#">
                <span className="text-[#FCD980] font-[#2405F2]">
                  Multi Design
                </span>
              </a>
            </div>

            <div className="py-5 text-primary">
              <h3 className="text-2xl font-normal">Website Page</h3>
              <p className="opacity-70 pt-2">
                When you’re ready to go beyond prototyping in Figma, Webflow’s
                ready to help.{" "}
              </p>
            </div>

            <div className="w-[217px] h-[220px] mt-[50px] flex flex-col gap-5 text-primary">
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
                <img src={green__pointer} alt="pink pointer image" />
                <p>Optimize hashtags</p>
              </div>
              <div className="flex gap-3">
                <img src={green__pointer} alt="pink pointer image" />
                <p>Unlimited users</p>
              </div>
            </div>

            <div className="w-[254px] h-[64px] mt-[79px] ml-[20px]">
              <button className="w-full h-full bg-[#FCD980] rounded-[41px] text-thirty cursor-pointer">
                <span>Get started</span>
              </button>
            </div>
          </div>

          <div className="w-[406px] h-[745px] bg-newcolor rounded-[12px] font-[Poppins] pl-[48px]">
            <div>
              <div className="flex items-center gap-2 pt-[64px]">
                <strong className="text-[38px] font-semibold text-thirty">
                  $499 +
                </strong>
                <a href="#">
                  <span className="text-[#2405F2] font-[#2405F2]">
                    Per Design
                  </span>
                </a>
              </div>

              <div className="py-5">
                <h3 className="text-2xl text-thirty font-normal">
                  Complex Project
                </h3>
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
                <img src={green__pointer} alt="green pointer image" />
                <p>Optimize hashtags</p>
              </div>
              <div className="flex gap-3">
                <img src={green__pointer} alt="green pointer image" />
                <p>Unlimited users</p>
              </div>
              <div className="flex gap-3">
                <img src={green__pointer} alt="green pointer image" />
                <p>Assist and Help</p>
              </div>
            </div>

            <div className="w-[254px] h-[64px] mt-[79px] ml-[20px]">
              <button className="w-full h-full bg-thirty rounded-[41px] text-newcolor cursor-pointer">
                <span>Get started</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
