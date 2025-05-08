import React from "react";
import blog__image from "../../assets/images/blog__image.png";

const Blog = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="mt-[128px] font-[Poppins] text-thirty">
          <div className="w-[949px] text-center mx-auto">
            <h2 className="text-5xl font-semibold">
              A UX Case Study on Creating a Studious Environment for Students
            </h2>
            <div className="flex justify-center pt-4 gap-1.5">
              <p>Andrew Jonson</p>
              <p>Posted on 27th January 2021</p>
            </div>
          </div>
          <div className="mt-8">
            <img src={blog__image} alt="blog image" />
          </div>
          <div className="w-[831px] text-center mx-auto mt-12">
            <p className="opacity-70">
              Apparently we had reached a great height in the atmosphere, for
              the sky was a dead black, and the stars had ceased to twinkle. By
              the same illusion which lifts the horizon of the sea to the level
              of the spectator on a hillside.
            </p>
          </div>
          <div className="flex justify-center mt-4 text-[#2405F2]">
            <a href="#">
              <span>Read more</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
