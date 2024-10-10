import React from "react";

const Footer = () => {
  return (
    <>
      <div className=" relative  bg-primary w-full h-[550px] overflow-hidden">
        <div className=" container ">
          <div className="w-1/4"></div>
          <div className="w-1/2">
            <div className="w-1/2"></div>
            <div className="w-1/2"></div>
          </div>
        </div>
        <div className=" absolute  -top-[200px] -left-[270px] w-[500px] h-[500px] rounded-full border-primary-foreground border-[40px]"></div>
        <div className=" absolute -bottom-20 left-[410px]  w-[300px] h-[300px] rounded-full border-primary-foreground border-[25px]"></div>
        <div className=" absolute -top-[90px] -right-[300px] w-[750px] h-[750px] rounded-full border-primary-foreground border-[80px]"></div>
      </div>
    </>
  );
};

export default Footer;
