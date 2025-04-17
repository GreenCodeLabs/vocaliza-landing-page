"use client";
import { languageAtom } from "@/stores/language-atom";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { Icons } from "./icons";

export const LanguageSwitcher = () => {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useAtom(languageAtom);

  const handleClickOutside = (event: MouseEvent) => {
    if (!(event.target && event.target instanceof Element)) return;
    if (!event.target.closest(".language-switcher")) setOpen(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="language-switcher relative select-none">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 cursor-pointer hover:opacity-50 duration-300"
      >
        {language.toUpperCase()} <Icons.ChevronDown />
      </button>
      {open && (
        <div className="flex flex-col gap-2 p-2 absolute top-8 right-0 z-50 rounded-2xl shadow-sm animate-fade-in bg-white">
          {language === "en" && (
            <button
              onClick={() => {
                setLanguage("pt");
                setOpen(false);
              }}
              className="w-full flex items-center gap-2 p-2 rounded-lg cursor-pointer duration-300 hover:bg-gray-100"
            >
              PT
            </button>
          )}
          {language === "pt" && (
            <button
              onClick={() => {
                setLanguage("en");
                setOpen(false);
              }}
              className="w-full flex items-center gap-2 p-2 rounded-lg cursor-pointer duration-300 hover:bg-gray-100"
            >
              EN
            </button>
          )}
        </div>
      )}
    </div>
  );
};
