"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat" />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <span className="text-accent text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
              Xtreme Fitness
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase leading-[0.9] mb-6">
              BE
              <br />
              STRONG
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-lg mx-auto lg:mx-0 mb-8">
              Best GYM & Fitness Center. Build Your Health. Track Your Gains.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="#contact"
                className="px-10 py-4 bg-accent font-bold text-white uppercase tracking-wider
                         transition-all duration-300 hover:bg-accent-hover hover:-translate-y-1"
              >
                Join us now
              </Link>
              
              <button className="flex items-center gap-3 text-white group">
                <div className="h-14 w-14 rounded-full bg-accent flex items-center justify-center
                              transition-all duration-300 group-hover:scale-110">
                  <Play className="h-5 w-5 text-white ml-1" fill="white" />
                </div>
                <span className="font-semibold uppercase tracking-wider">Watch Video</span>
              </button>
            </div>
          </motion.div>

          {/* Right Content - Circular Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Decorative Ring */}
              <div className="absolute inset-0 rounded-full border-[12px] border-accent" />
              <div className="absolute -inset-4 rounded-full border-2 border-accent/30" />
              
              {/* Image */}
              <div className="absolute inset-3 rounded-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581009146145-b5ef050c149a?q=80&w=1000&auto=format&fit=crop"
                  alt="Strong athlete lifting weights"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-accent rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
