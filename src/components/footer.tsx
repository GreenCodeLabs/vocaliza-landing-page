"use client";
import { translationsAtom } from "@/stores/language-atom";
import { useAtomValue } from "jotai";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  const t = useAtomValue(translationsAtom);

  return (
    <footer className="w-full px-5 border-t border-gray-200">
      <div className="sm:max-w-[1200px] max-w-[1440px] w-full flex max-sm:flex-col justify-between items-center gap-5 py-5 mx-auto">
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

        <p className="text-sm text-center text-gray-600">
          {t.footer.watermark}
        </p>

        <nav className="flex items-center gap-5 md:gap-5">
          {t.footer.links.map((link) => (
            <Link
              key={link.name}
              href="#"
              className="text-sm hover:underline underline-offset-2"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
};
