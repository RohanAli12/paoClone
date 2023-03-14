"use client";

import Image from "next/image";
import Link from "next/link";
import Wrapper from "../shared/Wrapper";
import logo from "/public/assets/logo.png";

const Header = () => {
  return (
    <>
    <Wrapper>
      <header className="flex justify-between   bg-white  py-4  sticky top-0 items-center  ">
        {/* logo */}
        <div>
          {/* <h2 className="text-xl font-bold">Panaverse Dao</h2> */}
          <Image src={logo} alt={"Panaverse Dao"} width={100}  height={10} />
        </div>
        {/* Navigation bar */}
        <ul className="flex space-x-3 sm:space-x-6 font-small sm:medium">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/courses"}>Courses</Link>
          </li>
        </ul>
      </header>
    </Wrapper>
    </>
  );
};

export default Header;
