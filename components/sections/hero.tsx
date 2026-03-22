"use client";

import { motion } from "framer-motion";
import { WaitlistForm } from "@/components/ui/waitlist-form";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-glow-pink" />
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-pink-500/20 rounded-full blur-[128px]" />
      <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[128px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 mb-6">
              <span className="text-sm font-mono tracking-wider uppercase text-pink-500">Coming Soon</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Track Your{" "}
              <span className="text-pink-500">Gains</span>.
              <br />
              Crush Your{" "}
              <span className="text-pink-500">Goals</span>.
            </h1>

            <p className="text-lg md:text-xl text-muted max-w-xl mx-auto lg:mx-0 mb-8">
              The intelligent workout tracker designed for serious lifters. Log sets, track progress, and smash your PRs.
            </p>

            <div id="waitlist" className="max-w-md mx-auto lg:mx-0">
              <WaitlistForm />
            </div>

            <p className="mt-4 text-sm text-muted">
              Join 2,000+ lifters on the waitlist. No spam, ever.
            </p>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative perspective-[2000px]">
              <div className="relative bg-surface rounded-3xl border border-border p-6 md:p-8 shadow-[0_4px_20px_-2px_rgba(236,72,153,0.15)] transform rotate-x-[5deg] rotate-y-[-12deg] hover:rotate-x-[2deg] hover:rotate-y-[-8deg] transition-transform duration-500">
                {/* App Mockup */}
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="font-bold text-white">Today&apos;s Workout</div>
                    <div className="text-sm text-muted">Mon, Mar 22</div>
                  </div>

                  {/* Stats Cards */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: "Volume", value: "12,450", unit: "kg" },
                      { label: "Sets", value: "24", unit: "sets" },
                      { label: "PRs", value: "3", unit: "new" },
                    ].map((stat) => (
                      <div key={stat.label} className="bg-background rounded-xl p-3 border border-border">
                        <div className="text-xs text-muted mb-1">{stat.label}</div>
                        <div className="text-lg font-bold text-white">{stat.value}</div>
                        <div className="text-xs text-green-500">+{stat.unit}</div>
                      </div>
                    ))}
                  </div>

                  {/* Exercise List */}
                  <div className="space-y-2">
                    {[
                      { name: "Bench Press", sets: "5x5", weight: "80kg", done: true },
                      { name: "Overhead Press", sets: "3x8", weight: "50kg", done: true },
                      { name: "Incline Dumbbell", sets: "3x10", weight: "28kg", done: false },
                      { name: "Tricep Pushdown", sets: "3x12", weight: "35kg", done: false },
                    ].map((exercise) => (
                      <div
                        key={exercise.name}
                        className={`flex items-center justify-between p-3 rounded-xl border ${
                          exercise.done
                            ? "bg-green-500/10 border-green-500/20"
                            : "bg-background border-border"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`h-5 w-5 rounded-full flex items-center justify-center ${
                              exercise.done ? "bg-green-500" : "border-2 border-border"
                            }`}
                          >
                            {exercise.done && <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                          </div>
                          <span className={exercise.done ? "text-white line-through opacity-60" : "text-white"}>
                            {exercise.name}
                          </span>
                        </div>
                        <div className="text-sm text-muted">
                          {exercise.sets} @ {exercise.weight}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Glow Effect - Solid color blur only */}
                <div className="absolute -inset-px rounded-3xl bg-pink-500/10 blur-xl -z-10" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
