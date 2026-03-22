"use client";

import { motion } from "framer-motion";
import { WaitlistForm } from "@/components/ui/waitlist-form";

export function CTASection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-500/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-pink-500/10 rounded-full blur-[120px]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to{" "}
            <span className="text-gradient">Level Up</span>?
          </h2>

          <p className="text-lg md:text-xl text-muted mb-8 max-w-2xl mx-auto">
            Be the first to experience the future of workout tracking. Join the waitlist and get early access.
          </p>

          <div className="max-w-md mx-auto">
            <WaitlistForm />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
