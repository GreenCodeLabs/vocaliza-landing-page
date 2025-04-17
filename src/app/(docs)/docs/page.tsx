import { Icons } from "@/components/ui/icons";
import Link from "next/link";

export default function DocsPage() {
  return (
    <div className="w-full min-h-screen flex flex-col gap-8 justify-center items-center">
      <h1 className="text-6xl text-center font-bold animate-pulse">
        Docs Coming Soon
      </h1>
      <Link
        href="/"
        className="flex items-center gap-2 px-6 py-3 rounded-2xl cursor-pointer font-medium text-white border border-blue-500 bg-blue-500 hover:border-blue-600 hover:bg-blue-600 duration-300"
      >
        Go Back <Icons.ArrowRight />
      </Link>
    </div>
  );
}
