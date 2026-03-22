"use client";

import { motion } from "framer-motion";
import { Play, Dumbbell, Heart, Swords, Monitor } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Dumbbell,
    title: "PERSONAL TRAINING",
    description: "Get personalized workout plans tailored to your goals with our expert trainers.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop",
  },
  {
    icon: Heart,
    title: "YOGA LESSONS",
    description: "Improve flexibility and mindfulness with our guided yoga sessions.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop",
  },
  {
    icon: Swords,
    title: "BOXING MARTIAL ARTS",
    description: "Learn self-defense and build endurance with boxing and martial arts training.",
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=800&auto=format&fit=crop",
  },
  {
    icon: Monitor,
    title: "ONLINE COACHING",
    description: "Train anywhere with our virtual coaching programs and video guides.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop",
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 md:py-28 bg-accent relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
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
            <span className="text-white/80 text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase">
              SOLUTIONS FOR MOVING BETTER
              <br />
              & FEELING HEALTHIER
            </h2>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden"
            >
              <div className="relative h-80 overflow-hidden">
                {/* Background Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:bg-black/70" />

                {/* Content */}
                <div className="relative h-full p-8 flex flex-col justify-end">
                  <div className="mb-4">
                    <div className="w-14 h-14 bg-accent flex items-center justify-center mb-4"
                    >
                      <service.icon className="h-7 w-7 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white uppercase mb-2">
                      {service.title}
                    </h3>
                    
                    <p className="text-white/80 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 text-white font-semibold text-sm uppercase 
                             tracking-wider transition-all duration-300 group-hover:gap-3"
                  >
                    Read more
                    <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
                      <Play className="h-3 w-3 text-white ml-0.5" fill="white" />
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="#contact"
            className="inline-flex items-center gap-3 px-10 py-4 bg-white font-bold text-accent uppercase tracking-wider
                     transition-all duration-300 hover:bg-gray-100 hover:-translate-y-1"
          >
            Join us now
            <div className="h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center">
              <Play className="h-4 w-4 text-accent ml-0.5" fill="#ff4d4d" />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
