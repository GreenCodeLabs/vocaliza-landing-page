"use client";
import { translationsAtom } from "@/stores/language-atom";
import { sidebarIsOpenAtom } from "@/stores/sidebar-atom";
import { useAtom, useAtomValue } from "jotai";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Icons } from "./ui/icons";
import { LanguageSwitcher } from "./ui/language-switcher";
import { NavbarLink } from "./ui/navbar/navbar-link";
import { ResourcesButton } from "./ui/navbar/resources-button";
import { SolutionsButton } from "./ui/navbar/solutions-button";
import { NavbarHamburguerMenu } from "./ui/navbar/navbar-hamburguer-menu";

export const Header = () => {
  const t = useAtomValue(translationsAtom);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [, setSidebarIsOpen] = useAtom(sidebarIsOpenAtom);

  useEffect(() => {
    setScrollPosition(window.scrollY);

    window.addEventListener("scroll", () => {
      setScrollPosition(window.scrollY);
    });
  }, []);

  return (
    <header className="w-full px-5 fixed top-0 left-0 right-0 z-50">
      <div
        className={`max-w-[1200px] w-full h-20 flex justify-between items-center px-5 mx-auto rounded-full text-sm border duration-300 ${
          scrollPosition > 50
            ? "mt-8 backdrop-blur border-gray-200 bg-white/90"
            : "mt-0 bg-transparent border-transparent"
        }`}
      >
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="vocaliza logo"
            width={1024}
            height={1024}
            className="w-36 hover:opacity-65 duration-300"
            priority
          />
        </Link>

        {/* Navbar */}
        <nav className="max-[1100px]:hidden flex items-center gap-5">
          {t.header.navbar.links.map((item, index) => (
            <NavbarLink href={item.url} key={index}>
              {item.name}
            </NavbarLink>
          ))}
          <SolutionsButton />
          <ResourcesButton />
        </nav>

        <div className="max-[650px]:hidden flex items-center gap-5">
          <NavbarHamburguerMenu />
          <Link
            href="#"
            className="relative duration-300 hover:text-blue-500 hover:after:w-full after:w-0 after:h-0.5 after:absolute after:-bottom-1 after:left-0 after:right-0 after:bg-blue-500 after:duration-300"
          >
            {t.header.links.login.name}
          </Link>
          <Link
            href="#waitlist"
            className="px-6 py-2 rounded-full font-medium duration-300 text-white bg-blue-500 hover:bg-blue-600;"
          >
            {t.header.links.startFreeTrial.name}
          </Link>
          <div className="w-px h-6 bg-gray-300"></div>
          <LanguageSwitcher />
        </div>

        <button
          onClick={() => setSidebarIsOpen(true)}
          className="max-[650px]:flex hidden justify-center items-center p-2 rounded-full cursor-pointer duration-300 text-gray-800 hover:bg-gray-100"
        >
          <Icons.Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
};
