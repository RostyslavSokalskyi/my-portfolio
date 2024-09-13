"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

export default function MobileNav() {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex items-center justify-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="bg-primary">
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Rostyslav<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>

        <nav className="flex flex-col gap-8 justify-center items-center">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`${
                link.path === pathname && "text-accent border-b-2 border-accent"
              } text-xl capitalize  hover:text-accent transition-all `}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
