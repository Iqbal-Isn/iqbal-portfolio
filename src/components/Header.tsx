"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ThemeToggle from "./ThemeToggle";

const navigation = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <h2 className="font-bold text-2xl tracking-tighter text-[var(--text-primary)]">ISN.</h2>
          </a>
        </div>
        <div className="flex lg:hidden items-center">
          <div className="mr-2">
             <ThemeToggle />
          </div>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[var(--text-secondary)]"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8 items-center">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#"
            className="rounded-full bg-[var(--primary-accent)] px-5 py-2 text-sm font-medium text-white shadow-sm hover:opacity-90 transition-opacity"
          >
            Hire Me
          </a>
          <div className="pl-4 border-l border-[var(--border-subtle)]">
             <ThemeToggle />
          </div>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[var(--bg-primary)] p-6 sm:max-w-sm ring-1 ring-[var(--border-subtle)]">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
               <h2 className="font-bold text-2xl tracking-tighter text-[var(--text-primary)]">ISN.</h2>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-[var(--border-subtle)]">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
