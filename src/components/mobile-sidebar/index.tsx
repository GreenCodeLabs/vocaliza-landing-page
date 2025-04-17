"use client";
import { languageAtom, translationsAtom } from "@/stores/language-atom";
import { sidebarIsOpenAtom } from "@/stores/sidebar-atom";
import { useAtom, useAtomValue } from "jotai";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { Icons } from "../ui/icons";
import { DropdownMenu } from "./dropdown-menu";

export const MobileSidebar = () => {
  const t = useAtomValue(translationsAtom);
  const [open, setOpen] = useAtom(sidebarIsOpenAtom);
  const [language, setLanguage] = useAtom(languageAtom);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", open);
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);

  return (
    <>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => setOpen(false)}
          className="min-[650px]:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
        />
      )}

      <motion.aside
        initial={{ x: "100%" }}
        animate={{ x: open ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
        className="min-[650px]:hidden w-3/4 h-screen fixed top-0 right-0 z-50 shadow-xl overflow-y-auto bg-white"
      >
        <div className="w-full min-h-screen flex flex-col gap-5 p-5">
          <div className="w-full flex justify-between items-center">
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="logo vocaliza"
                width={1024}
                height={1024}
                className="w-32"
                priority
              />
            </Link>
            <Icons.Close
              onClick={() => setOpen(false)}
              className="w-6 h-6 cursor-pointer"
            />
          </div>

          <hr className="w-full opacity-10" />

          <nav className="w-full flex flex-col gap-1">
            <button
              onClick={() => {
                setLanguage(language === "pt" ? "en" : "pt");
              }}
              className="w-full flex items-center gap-2 py-3 px-3 rounded-xl text-sm cursor-pointer duration-300 text-gray-800 hover:text-white hover:bg-blue-500"
            >
              <Icons.Translate /> {language === "pt" ? "Inglês" : "Portuguese"}
            </button>

            <Link
              href={t.header.links.login.url}
              key={t.header.links.login.name}
              className="w-full flex items-center gap-2 py-3 px-3 rounded-xl text-sm duration-300 text-gray-800 hover:text-white hover:bg-blue-500"
            >
              {t.header.links.login.name}
            </Link>
            <Link
              href={t.header.links.startFreeTrial.url}
              key={t.header.links.startFreeTrial.name}
              className="w-full flex items-center gap-2 py-3 px-3 rounded-xl text-sm duration-300 text-gray-800 hover:text-white hover:bg-blue-500"
            >
              {t.header.links.startFreeTrial.name}
            </Link>
            {t.header.navbar.links.map((item) => (
              <Link
                href={item.url}
                key={item.name}
                className="w-full flex items-center gap-2 py-3 px-3 rounded-xl text-sm duration-300 text-gray-800 hover:bg-gray-100"
              >
                {item.name}
              </Link>
            ))}

            <DropdownMenu
              title={t.header.navbar.solutions.title}
              items={[
                t.header.navbar.solutions.industries,
                t.header.navbar.solutions.usecases,
              ]}
            />

            <DropdownMenu
              title={t.header.navbar.resources.title}
              items={[
                { title: "Links", links: t.header.navbar.resources.links },
                {
                  title: "Redes Sociais",
                  links: t.header.navbar.resources.socialMedias,
                },
              ]}
            />
          </nav>
        </div>
      </motion.aside>
    </>
  );
};
