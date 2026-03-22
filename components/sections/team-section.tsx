"use client";

import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram } from "lucide-react";

const team = [
  {
    name: "MARVIN JOINER",
    role: "Crossfit Coach",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "PATRICIA WOODRUM",
    role: "Cardio & Conditioning",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "HANNAH STONE",
    role: "Fitness Coach",
    image: "https://images.unsplash.com/photo-1611672585731-fa1060a80910?q=80&w=600&auto=format&fit=crop",
  },
];

export function TeamSection() {
  return (
    <section className="py-20 md:py-28 bg-accent relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
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
              Team Members
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase">
              TEAM OF EXPERT COACHES
            </h2>
          </motion.div>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative"
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Social Links - Appear on Hover */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-3 
                              opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
                >
                  <a href="#" className="w-10 h-10 bg-white flex items-center justify-center hover:bg-accent transition-colors">
                    <Facebook className="h-5 w-5 text-background" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white flex items-center justify-center hover:bg-accent transition-colors">
                    <Twitter className="h-5 w-5 text-background" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white flex items-center justify-center hover:bg-accent transition-colors">
                    <Instagram className="h-5 w-5 text-background" />
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-white uppercase mb-1">
                  {member.name}
                </h3>
                <p className="text-white/80 text-sm">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
