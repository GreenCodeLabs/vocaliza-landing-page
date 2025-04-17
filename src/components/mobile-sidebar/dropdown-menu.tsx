"use client";

import Link from "next/link";
import { useState } from "react";
import { Icons } from "../ui/icons";

interface DropdownItem {
  title: string;
  links: { name: string; url: string }[];
}

export const DropdownMenu = ({
  title,
  items,
}: {
  title: string;
  items: DropdownItem[];
}) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!items?.length) return null;

  return (
    <div className="w-full flex flex-col gap-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex justify-between items-center py-3 px-3 rounded-xl cursor-pointer text-sm hover:bg-gray-100 duration-300 ${
          isOpen && "bg-gray-100"
        }`}
      >
        {title}
        <Icons.ChevronDown
          className={`${isOpen ? "rotate-180" : ""} duration-300`}
        />
      </button>
      {isOpen && (
        <nav className="w-full h-[200px] flex flex-col gap-2 py-2 px-3 overflow-y-auto">
          {items.map(({ title, links }) => (
            <div key={title} className="w-full flex flex-col gap-2">
              <p className="text-sm">{title}</p>
              {links.map((link) => (
                <Link
                  href={link.url}
                  key={link.name}
                  className="w-full flex items-center gap-2 py-2 px-3 rounded-xl text-sm duration-300 text-gray-800 hover:bg-gray-100"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          ))}
        </nav>
      )}
    </div>
  );
};
