import { Icons } from "@/components/ui/icons";
import { translationsAtom } from "@/stores/language-atom";
import { useAtomValue } from "jotai";
import Link from "next/link";

export const ResourcesButton = () => {
  const t = useAtomValue(translationsAtom);

  return (
    <div className="relative group flex justify-center">
      <button
        type="button"
        className="flex items-center gap-1 rounded-full cursor-pointer"
      >
        {t.header.navbar.resources.title}
        <Icons.ChevronDown className="group-hover:rotate-180 duration-300" />
      </button>
      <div className="hidden group-hover:flex py-3 absolute top-5 z-50">
        <div className="min-w-[300px] grid grid-cols-[1fr_1fr] gap-5 p-5 rounded-2xl shadow-sm animate-fade-in bg-white">
          <div className="w-full flex flex-col gap-2 text-xs">
            {/* Links */}
            {t.header.navbar.resources.links.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                className="w-full p-2 rounded-lg duration-300 hover:bg-gray-100"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="w-full flex flex-col gap-2 text-xs">
            {/* Social Medias */}
            {t.header.navbar.resources.socialMedias.map((socialMedia) => (
              <Link
                key={socialMedia.name}
                href={socialMedia.url}
                className="w-full flex items-center gap-2 p-2 rounded-lg duration-300 hover:bg-gray-100"
              >
                {socialMedia.icon}
                {socialMedia.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
