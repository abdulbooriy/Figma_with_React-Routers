import React from "react";

const ContactUs = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="w-[562px] h-[136px] mt-32 mx-auto text-thirty text-center font-[Poppins]">
          <h2 className="text-5xl font-semibold">Contact Us</h2>
          <p className="mt-4 opacity-70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>

        <div className="w-[1061px] h-[640px] bg-newcolor mx-auto py-[55px] px-[77px] rounded-[12px]">
          <form className="flex flex-wrap gap-7" action="">

            <div className="w-[438px] h-[102px] font-[Poppins] text-[#000000] ">
              <label htmlFor="name">
                <span>Name</span>
              </label>
              <input
                id="name"
                name="name"
                className="w-full h-16 indent-8 border-[1px] border-[#0000001F] rounded-[8px] outline-none text-[16px] font-normal mt-3 text-[#000000]"
                type="text"
                placeholder="Enter your name"
              />
            </div>

            <div className="w-[438px] h-[102px] font-[Poppins] text-[#000000] ">
              <label htmlFor="email">
                <span>Email</span>
              </label>
              <input
                id="email"
                name="email"
                className="w-full h-16 indent-8 border-[1px] border-[#0000001F] rounded-[8px] outline-none text-[16px] font-normal mt-3"
                type="text"
                placeholder="Enter your Emial"
              />
            </div>

            <div className="w-[438px] h-[102px] font-[Poppins] text-[#000000] ">
              <label htmlFor="subject">
                <span>Subject</span>
              </label>
              <input
                id="subject"
                name="subject"
                className="w-full h-16 indent-8 border-[1px] border-[#0000001F] rounded-[8px] outline-none text-[16px] font-normal mt-3"
                type="text"
                placeholder="Provide context"
              />
            </div>

            <div className="w-[438px] h-[102px] font-[Poppins] text-[#000000] ">
              <label htmlFor="subject">
                <span>Subject</span>
              </label>
              <select
                id="subject"
                name="subject"
                className="w-full h-16 indent-8 border-[1px] border-[#0000001F] rounded-[8px] outline-none text-[16px] font-normal mt-3"
                type="text"
              />
            </div>

            <div className="w-[908px] h-[176px] font-[Poppins] text-[#000000]">
              <label htmlFor="message">
                <span>Message</span>
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Write your  question here"
                className="w-full h-[138px] mt-3 rounded-[8px] py-[18px] px-[32px] outline-none border-[1px] border-[#0000001F]"></textarea>
            </div>

            <div className="w-64 h-16 bg-thirty rounded-[41px] font-[Poppins]">
              <button className="w-full h-full text-[18px] font-medium text-primary cursor-pointer">
                <span>Send Messege</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
