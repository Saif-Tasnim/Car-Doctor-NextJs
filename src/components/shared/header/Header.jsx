"use client";
import React, { useState } from "react";
import logo from "@/assets/logo.svg";
import Image from "next/image";
import { navbar } from "@/utlis/navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Hamburger from "hamburger-react";
import { Icon } from "@/components/core/Icon";
import ThemeSwitcher from "../theme-switcher/ThemeSwitcher";

const Header = () => {
  const navItems = navbar;
  const pathname = usePathname();
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="flex justify-around items-center py-4">
      <div>
        <Image src={logo} alt="logo"></Image>
      </div>

      <div>
        {navItems.map((ni) => (
          <Link
            className={`mr-8 hover:text-primary ${
              pathname === ni.path ? "text-primary" : ""
            }`}
            href={ni.path}
            key={ni.path}
          >
            {ni.name}
          </Link>
        ))}
      </div>

      <div className="hidden md:flex gap-5 text-dark-2 dark:text-white">
        <ThemeSwitcher/>
        <button>
          <Icon.ShoppingBag />
        </button>

        <Link href="/">
          <button className="btn bg-transparent border-primary text-primary hover:bg-primary hover:text-white hover:border-primary">
            Appointment
          </button>
        </Link>
      </div>

      {/* mobile responsiveness */}
      <div className="block md:hidden">
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          size={24}
          direction="right"
          duration={0.6}
        />
      </div>
    </div>
  );
};

export default Header;
