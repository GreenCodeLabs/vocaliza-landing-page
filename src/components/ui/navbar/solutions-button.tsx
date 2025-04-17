import { Icons } from "@/components/ui/icons";
import { translationsAtom } from "@/stores/language-atom";
import { useAtomValue } from "jotai";
import Link from "next/link";

export const SolutionsButton = () => {
  const t = useAtomValue(translationsAtom);

  return (
    <div className="relative group flex justify-center">
      <button
        type="button"
        className="flex items-center gap-1 rounded-full cursor-pointer"
      >
        {t.header.navbar.solutions.title}
        <Icons.ChevronDown className="group-hover:rotate-180 duration-300" />
      </button>
      <div className="hidden group-hover:flex py-3 absolute top-5 z-50">
        <div className="flex gap-5 p-5 rounded-2xl shadow-sm animate-fade-in bg-white">
          <div className="w-[130px] flex flex-col gap-2">
            <h4 className="text-sm uppercase tracking-widest text-gray-600">
              {t.header.navbar.solutions.industries.title}
            </h4>
            <nav className="w-full flex flex-col gap-1 text-xs">
              {t.header.navbar.solutions.industries.links.map((link) => (
                <Link
                  key={link.name}
                  href={link.url}
                  className="w-full p-2 rounded-lg duration-300 hover:bg-gray-100"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="w-[130px] flex flex-col gap-2">
            <h4 className="text-sm uppercase tracking-widest text-gray-600">
              {t.header.navbar.solutions.usecases.title}
            </h4>
            <nav className="w-full flex flex-col gap-1 text-xs">
              {t.header.navbar.solutions.usecases.links.map((link) => (
                <Link
                  key={link.name}
                  href={link.url}
                  className="w-full p-2 rounded-lg duration-300 hover:bg-gray-100"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
