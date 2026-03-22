"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Dumbbell } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="h-12 w-12 bg-accent flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <Dumbbell className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl text-white tracking-wider uppercase">GymTracker</span>
              <span className="text-[10px] text-muted uppercase tracking-[0.2em]">Be Strong</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-white uppercase tracking-wider hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="px-6 py-3 bg-accent font-semibold text-white uppercase tracking-wider text-sm
                       transition-all duration-300 hover:bg-accent-hover hover:-translate-y-0.5"
            >
              Join Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white hover:text-accent transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-border bg-background"
            >
              <div className="py-6 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-2 py-2 text-base font-semibold uppercase tracking-wider text-white hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="block mx-2 px-6 py-3 bg-accent text-center font-semibold text-white uppercase tracking-wider"
                >
                  Join Now
                  </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
