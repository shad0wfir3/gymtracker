"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Dumbbell, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="h-10 w-10 rounded-xl bg-pink-500/10 flex items-center justify-center border border-pink-500/20 group-hover:border-pink-500/40 transition-colors">
              <Dumbbell className="h-5 w-5 text-pink-500" />
            </div>
            <span className="font-bold text-lg text-white">GymTracker</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#waitlist"
              className="px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-pink-500 to-pink-600 shadow-[0_4px_14px_0_rgba(236,72,153,0.4)] transition-all duration-200 hover:shadow-[0_6px_20px_0_rgba(236,72,153,0.5)] hover:-translate-y-0.5"
            >
              Join Waitlist
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-muted hover:text-white hover:bg-surface transition-colors"
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
              className="md:hidden border-t border-border"
            >
              <div className="py-4 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-2 py-2 text-base font-medium text-muted hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="#waitlist"
                  onClick={() => setIsOpen(false)}
                  className="block mx-2 px-5 py-3 rounded-full text-center font-semibold text-white bg-gradient-to-r from-pink-500 to-pink-600"
                >
                  Join Waitlist
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
