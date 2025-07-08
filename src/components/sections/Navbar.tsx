"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { useUiStore } from "@/stores/uiStore";
import {
  Sheet,
  SheetHeader,
  SheetTitle,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Navbar = () => {
  const { isMobileMenuOpen, setMobileMenuOpen } = useUiStore();

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-14 items-center px-4 md:px-20">
        {/* Desktop Version */}
        <Link href={"/"} className="mr-6 flex items-center space-x-2">
          <div className="relative w-[50px] h-[50px]">
            <Image src={"/logo.svg"} alt={"Logo"} fill loading="lazy" />
          </div>
        </Link>
        <nav className="hidden flex-1 items-center justify-end space-x-6 text-sm font-medium md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Version */}
        <div className="flex flex-1 items-center justify-end md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-4">
              <SheetHeader>
                <SheetTitle>
                  {" "}
                  <Link href={"/"}>
                    <div className="relative w-[50px] h-[50px]">
                      <Image
                        src={"/logo.svg"}
                        alt={"Logo"}
                        fill
                        loading="lazy"
                      />
                    </div>
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col space-y-3">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
