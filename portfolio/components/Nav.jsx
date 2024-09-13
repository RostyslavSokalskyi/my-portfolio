"use client";

import React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className="flex  gap-8 ">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.path}
          className={`${
            pathname === link.path && "text-accent border-b-2 border-accent"
          } capitalize font-medium hover:text-accent transition-all `}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
