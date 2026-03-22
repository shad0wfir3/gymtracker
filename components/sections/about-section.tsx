"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Play } from "lucide-react";

const stats = [
  { value: "600K+", label: "WORKING HOURS" },
  { value: "790+", label: "SUCCESS PROGRAM" },
  { value: "2560+", label: "HAPPY CLIENTS" },
  { value: "830+", label: "PERFECT BODIES" },
];

export function AboutSection() {
  return (
    <section className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Circular Frame */}
              <div className="relative aspect-square">
                <div className="absolute inset-0 rounded-full border-[16px] border-accent" />
                <div className="absolute -inset-6 rounded-full border-2 border-accent/20" />
                
                <div className="absolute inset-4 rounded-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1000&auto=format&fit=crop"
                    alt="Personal training session"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
              About Us
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase mb-6">
              WELCOME TO THE GYMTRACKER
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              We are dedicated to helping you achieve your fitness goals. Our intelligent workout 
              tracker is designed for serious lifters who want to build their health, track their 
              gains, and crush their personal records. Join thousands of athletes who trust GymTracker.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat) => (
                <div key={stat.label} className="border-l-4 border-accent pl-4">
                  <div className="text-3xl md:text-4xl font-black text-white">{stat.value}</div>
                  <div className="text-sm text-muted uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>

            <Link
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent font-bold text-white uppercase tracking-wider
                       transition-all duration-300 hover:bg-accent-hover hover:-translate-y-1"
            >
              Read more
              <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
                <Play className="h-4 w-4 text-white ml-0.5" fill="white" />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
