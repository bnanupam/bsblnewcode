import BannerImg from "@/assets/images/BannerImg";
// import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className=" relative  bg-primary -top-24 h-[650px] w-full overflow-hidden  ">
        <div className=" container h-full ">
          <div className=" h-full flex items-center">
            <h1 className="w-full md:w-1/2 relative z-30 ">
              &#34;Crafting Digital Solutions with IT Expertise & Web
              Innovation&#34;
            </h1>
          </div>
          <div className="hidden md:block absolute z-40 bottom-0 right-0">
            <BannerImg />
          </div>
        </div>
        <div className=" absolute  -top-[200px] -left-[270px] w-[500px] h-[500px] rounded-full border-primary-foreground border-[40px]"></div>
        <div className=" absolute -bottom-20 left-[410px]  w-[300px] h-[300px] rounded-full border-primary-foreground border-[25px]"></div>
        <div className=" absolute -top-[180px] overflow-hidden  -right-[384px] w-[950px] h-[950px] rounded-full border-primary-foreground border-[80px]"></div>
      </div>
    </>
  );
};

export default HeroSection;
