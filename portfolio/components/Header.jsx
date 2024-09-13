import React from "react";
import Link from "next/link";
import { Button } from "./ui/Button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="py-12 xl:py-12 text-white ">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Rostyslav<span className="text-accent">.</span>
          </h1>
        </Link>

        {/**desktop nav and hire button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="contact">
            <Button className="ml-auto">Hire me</Button>
          </Link>
        </div>

        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
