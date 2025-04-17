"use client";
import { translationsAtom } from "@/stores/language-atom";
import { useAtomValue } from "jotai";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Icons } from "../icons";

export const NavbarHamburguerMenu = () => {
  const [open, setOpen] = useState(false);
  const t = useAtomValue(translationsAtom);

  const handleClickOutside = (event: MouseEvent) => {
    if (!(event.target && event.target instanceof Element)) return;
    if (!event.target.closest(".navbar-hamburguer-menu")) setOpen(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className={`max-[1100px]:flex hidden relative navbar-hamburguer-menu`}>
      <button
        onClick={() => setOpen(!open)}
        className={`flex justify-center items-center p-2 rounded-full cursor-pointer duration-300 text-gray-800 ${
          open ? "bg-gray-100" : "hover:bg-gray-100"
        }`}
      >
        <Icons.Menu />
      </button>
      {open && (
        <div className="w-max flex flex-col gap-1 p-3 absolute top-10 right-0 z-50 rounded-2xl shadow-sm animate-fade-in bg-white">
          {t.header.navbar.links.map((item) => (
            <Link
              href={item.url}
              key={item.name}
              className="w-full flex items-center gap-2 py-2 px-3 rounded-2xl text-sm duration-300 text-gray-800 hover:bg-gray-100"
            >
              {item.icon} {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
