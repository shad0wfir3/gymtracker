"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Loader2, Check } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("success");
    setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="relative min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=2000&auto=format&fit=crop"
          alt="Gym background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Header */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <span className="text-accent text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
              Contact Us
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase mb-6">
              SEND US A MESSAGE
              <br />
              & JOIN OUR TEAM
            </h2>

            <p className="text-gray-400 text-lg">
              Ready to start your fitness journey? Get in touch with us today and take the first 
              step towards a stronger, healthier you.
            </p>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {status === "success" ? (
              <div className="bg-surface p-12 border border-border text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-accent flex items-center justify-center">
                  <Check className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white uppercase mb-2">Message Sent!</h3>
                <p className="text-gray-400">We&apos;ll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-4 bg-surface border border-border text-white placeholder:text-muted
                             focus:outline-none focus:border-accent transition-colors"
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-4 bg-surface border border-border text-white placeholder:text-muted
                             focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-4 bg-surface border border-border text-white placeholder:text-muted
                             focus:outline-none focus:border-accent transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-4 bg-surface border border-border text-white placeholder:text-muted
                             focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <textarea
                  placeholder="Message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-4 bg-surface border border-border text-white placeholder:text-muted
                           focus:outline-none focus:border-accent transition-colors resize-none"
                />

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex items-center gap-3 px-10 py-4 bg-accent font-bold text-white uppercase tracking-wider
                           transition-all duration-300 hover:bg-accent-hover hover:-translate-y-1 disabled:opacity-70"
                >
                  {status === "loading" ? (
                    <><Loader2 className="h-5 w-5 animate-spin" /> Sending...</>
                  ) : (
                    <>
                      Send now
                      <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
                        <Play className="h-4 w-4 text-white ml-0.5" fill="white" />
                      </div>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
