"use client";

import { motion } from "framer-motion";
import { TrendingUp, Calendar, BarChart3, Target } from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "FLEX MUSCLE",
    description: "Track your progress with intelligent analytics. See your gains in real-time.",
  },
  {
    icon: Calendar,
    title: "POWERFUL VITAMINS",
    description: "Plan your nutrition alongside your workouts. Complete health tracking.",
  },
  {
    icon: BarChart3,
    title: "ABDOMINAL SESSIONS",
    description: "Custom workout routines designed for your goals. From abs to zen.",
  },
  {
    icon: Target,
    title: "WEIGHT LIFTING",
    description: "Log every set, rep, and weight. Never lose track of your progress.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-section-light-text uppercase">
              BUILD YOUR BEST BODY
            </h2>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              className="group p-8 bg-gray-50 text-center transition-all duration-300 
                       hover:bg-white hover:shadow-xl hover:-translate-y-2"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-accent/10 flex items-center justify-center
                            transition-all duration-300 group-hover:bg-accent group-hover:rotate-6"
              >
                <feature.icon className="h-10 w-10 text-accent group-hover:text-white transition-colors" />
              </div>

              <h3 className="text-lg font-bold text-section-light-text uppercase mb-3">
                {feature.title}
              </h3>
              
              <p className="text-muted text-sm leading-relaxed">
                {feature.description}
              </p>

              <a
                href="#"
                className="inline-flex items-center gap-2 mt-6 text-accent font-semibold text-sm uppercase 
                         tracking-wider transition-all duration-300 hover:gap-3"
              >
                Read more
                <span>→</span>
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Carousel Dots */}
        <div className="flex justify-center gap-2 mt-12">
          <button className="w-3 h-3 rounded-full bg-accent" />
          <button className="w-3 h-3 rounded-full bg-gray-300 hover:bg-accent/50 transition-colors" />
          <button className="w-3 h-3 rounded-full bg-gray-300 hover:bg-accent/50 transition-colors" />
        </div>
      </div>
    </section>
  );
}
