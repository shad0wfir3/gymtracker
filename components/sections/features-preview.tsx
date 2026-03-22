"use client";

import { motion } from "framer-motion";
import { TrendingUp, Calendar, BarChart3, Target } from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "Smart Logging",
    description: "Log your workouts in seconds with intelligent exercise recognition and previous workout recall.",
  },
  {
    icon: Calendar,
    title: "Visual Progress",
    description: "Track your transformation with progress photos and detailed measurement charts over time.",
  },
  {
    icon: BarChart3,
    title: "Deep Analytics",
    description: "Get insights into your training with volume trends, strength curves, and performance metrics.",
  },
  {
    icon: Target,
    title: "Goal Crushing",
    description: "Set PR goals, track your progress, and celebrate every milestone along the way.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function FeaturesPreview() {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-mono tracking-wider uppercase text-pink-500 mb-4 block">Features</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Everything You Need to{" "}
              <span className="text-pink-500">Level Up</span>
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Powerful features designed by lifters, for lifters. No fluff, just gains.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              className="group p-6 md:p-8 rounded-2xl bg-surface border border-border transition-all duration-300 hover:bg-surface-hover hover:border-pink-500/30 hover:-translate-y-1"
            >
              <div className="h-14 w-14 rounded-xl bg-pink-500/10 flex items-center justify-center border border-pink-500/20 mb-6 group-hover:border-pink-500/40 transition-colors">
                <feature.icon className="h-7 w-7 text-pink-500" />
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-muted leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
