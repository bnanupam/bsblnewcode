"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "@/assets/images/BSBL-N-Digital.png";
import Link from "next/link";
import { TfiMenu } from "react-icons/tfi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="bg-transparent relative z-30 h-24 w-full  ">
        <div className=" lg:container w-full">
          <div className="w-full lg:w-3/4 fixed top-0">
            <div className=" pt-5  h-full w-full flex justify-between text-white">
              <Link href="/">
                <div className=" flex justify-center items-center gap-1">
                  <Image
                    src={Logo}
                    alt="logo"
                    width={90}
                    height={90}
                    className=" rounded-md"
                  />
                  <h3 className="hidden md:inline-block font-semibold">
                    BSBL Digital
                  </h3>
                </div>
              </Link>
              <div className="w-[50%] flex justify-end items-center">
                <ul
                  id="mobile-menu-2"
                  className="hidden w-full lg:flex justify-between text-lg"
                >
                  <li className="">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="">
                    <Link href="/">Service</Link>
                  </li>
                  <li className="">
                    <Link href="/">About</Link>
                  </li>
                  <li className="">
                    <Link href="/">Portfolio</Link>
                  </li>
                  <li className="">
                    <Link href="/">Contact</Link>
                  </li>
                </ul>
                <button
                  type="button"
                  className="lg:hidden px-4 py-2 rounded-md  hover:bg-primary-dark"
                  onClick={toggleMenu}
                  data-collapse-button="mobile-menu-2"
                  aria-controls="mobile-menu-2"
                  aria-expanded="false"
                >
                  <TfiMenu className="text-blue-700" />
                </button>
              </div>
              {isOpen && (
                <div
                  id="mobile-menu-2"
                  text-primary
                  className="lg:hidden p-3 justify-between items-center rounded-lg absolute  mt-[75px] w-full backdrop-blur-sm bg-primary-foreground text-white"
                >
                  <ul className=" w-full flex gap-3 flex-col justify-center items-center text-xl">
                    <li className="">
                      <Link href="/">Home</Link>
                    </li>
                    <li className="">
                      <Link href="/">Service</Link>
                    </li>
                    <li className="">
                      <Link href="/">About</Link>
                    </li>
                    <li className="">
                      <Link href="/">Portfolio</Link>
                    </li>
                    <li className="">
                      <Link href="/">Contact</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
