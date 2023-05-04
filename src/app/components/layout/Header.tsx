import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <header className="flex justify-between max-w-screen-xl mx-auto bg-white py-6 px-2 sticky top-0 items-center">
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
  );
};

export default Header;
