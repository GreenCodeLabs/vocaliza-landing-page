import Link from "next/link";

interface NavbarLinkProps {
  children: React.ReactNode;
  href: string;
}

export const NavbarLink = ({ children, href }: NavbarLinkProps) => {
  return (
    <Link
      href={href}
      className="relative duration-300 hover:text-blue-500 hover:after:w-full after:w-0 after:h-0.5 after:absolute after:-bottom-1 after:left-0 after:right-0 after:bg-blue-500 after:duration-300"
    >
      {children}
    </Link>
  );
};
