"use client";

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <nav className=" flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <div className="relative inline-block">
        <button onClick={() => setDropdown(!dropdown)}>
          <Image
            src="menu.svg"
            alt="menu"
            width={32}
            height={32}
            className="inline-block lg:hidden"
          />
        </button>

        {dropdown && (
          <div className=" w-44 h-48 bg-[#F5F7F8] p-3 absolute -ml-36 mt-2 text-right lg:hidden rounded-md">
            {NAV_LINKS.map((link) => (
              <div className="mb-3">
                <Link
                  href={link.href}
                  key={link.key}
                  className="regular-16 text-gray-50 cursor-pointer pb-1.5 transition-all hover:font-bold "
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
