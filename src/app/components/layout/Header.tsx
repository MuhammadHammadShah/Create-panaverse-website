import React from "react";
import Link from "next/link";
import Wrapper from "../shared/Wrapper";
const Header = () => {
  return (
    <Wrapper>
      <header className="flex justify-between max-w-screen-xl mx-auto bg-white py-4 sticky top-0 items-center">
        {/* Logo side */}
        <div className="text-2xl font-extrabold">Panaverse Dao</div>
        {/* Nav Bar */}
        <div>
          <ul className="flex space-x-4 font-medium">
            <Link href={"/"}>
              <li>Home</li>
            </Link>
            <Link href="/courses">
              <li>Courses</li>
            </Link>
          </ul>
        </div>
      </header>
    </Wrapper>
  );
};

export default Header;
