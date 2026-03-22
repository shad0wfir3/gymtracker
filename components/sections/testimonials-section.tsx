"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "GymTracker has completely transformed how I approach my workouts. I've gained 15 pounds of muscle in just 3 months by consistently tracking my progress and following the personalized recommendations.",
    name: "KEVIN ANDREW",
    role: "Professional Bodybuilder",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  },
  {
    quote: "The analytics feature is incredible. Being able to see my strength progression over time has kept me motivated and helped me push through plateaus. Best fitness investment I've made.",
    name: "SARAH MITCHELL",
    role: "CrossFit Athlete",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
  },
  {
    quote: "As a personal trainer, I recommend GymTracker to all my clients. The interface is intuitive and the data insights help me create better workout programs for everyone I work with.",
    name: "MARCUS CHEN",
    role: "Personal Trainer",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 md:py-28 bg-background-alt relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1534258936925-c48947387603?q=80&w=2000&auto=format&fit=crop"
          alt="Gym background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-background/90" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase">
              WHAT OUR CLIENTS SAY ABOUT US
            </h2>
          </motion.div>
        </div>

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-surface p-8 md:p-12 border border-border relative">
            <Quote className="absolute top-6 left-6 h-12 w-12 text-accent/20" />

            <div className="text-center">
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 relative z-10">
                {testimonials[current].quote}
              </p>

              <div className="flex flex-col items-center">
                <img
                  src={testimonials[current].avatar}
                  alt={testimonials[current].name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-accent mb-4"
                />
                <h4 className="text-white font-bold uppercase tracking-wider">
                  {testimonials[current].name}
                </h4>
                <p className="text-accent text-sm">{testimonials[current].role}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 border-2 border-border flex items-center justify-center
                       transition-all duration-300 hover:border-accent hover:text-accent"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 border-2 border-border flex items-center justify-center
                       transition-all duration-300 hover:border-accent hover:text-accent"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
