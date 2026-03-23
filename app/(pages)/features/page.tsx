"use client";

import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Calendar, 
  BarChart3, 
  Target, 
  Timer, 
  Trophy, 
  Camera,
  Download,
  Smartphone,
  Bell,
  Share2,
  Lock
} from "lucide-react";
import Link from "next/link";

const mainFeatures = [
  {
    icon: TrendingUp,
    title: "Smart Workout Logging",
    description: "Log your workouts in seconds with intelligent exercise recognition. Our system remembers your previous sets, reps, and weights for quick entry.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Track your progress with detailed charts and insights. Visualize your strength gains, volume progression, and workout frequency over time.",
  },
  {
    icon: Target,
    title: "Goal Setting",
    description: "Set specific goals for lifts, body measurements, or workout frequency. Get notified when you're on track or need to push harder.",
  },
  {
    icon: Trophy,
    title: "Personal Records",
    description: "Automatically track every PR you hit. Celebrate your wins with achievement badges and share your progress with the community.",
  },
];

const moreFeatures = [
  {
    icon: Camera,
    title: "Progress Photos",
    description: "Capture your transformation with side-by-side photo comparisons and timeline views.",
  },
  {
    icon: Timer,
    title: "Rest Timer",
    description: "Never lose track between sets with customizable rest timers and audio notifications.",
  },
  {
    icon: Calendar,
    title: "Workout Calendar",
    description: "Plan your week, schedule rest days, and visualize your training split at a glance.",
  },
  {
    icon: Download,
    title: "Data Export",
    description: "Own your data. Export your complete workout history to CSV or PDF anytime.",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Designed for the gym. Quick logging, offline mode, and sync across all devices.",
  },
  {
    icon: Bell,
    title: "Smart Reminders",
    description: "Get notified when it's time to train, deload, or when you've hit a plateau.",
  },
  {
    icon: Share2,
    title: "Social Sharing",
    description: "Share your workouts and PRs on Instagram, Twitter, or with your training partners.",
  },
  {
    icon: Lock,
    title: "Privacy First",
    description: "Your data is encrypted and yours alone. We never sell your information to third parties.",
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
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-accent text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
              Features
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase leading-tight mb-6">
              Everything You Need to{" "}
              <span className="text-accent">Level Up</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Powerful tools designed by lifters, for lifters. Track, analyze, and optimize your training with GymTracker.
            </p>

            <Link
              href="#features"
              className="inline-flex items-center gap-3 px-10 py-4 bg-accent font-bold text-white uppercase tracking-wider transition-all duration-300 hover:bg-accent-hover hover:-translate-y-1"
            >
              Explore Features
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Main Features Grid */}
      <section id="features" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
              Core Features
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase">
              BUILD YOUR BEST BODY
            </h2>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {mainFeatures.map((feature) => (
              <motion.div
                key={feature.title}
                variants={item}
                className="group p-8 bg-surface border border-border hover:border-accent/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 shrink-0 bg-accent flex items-center justify-center group-hover:rotate-6 transition-transform">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white uppercase mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Feature Highlight */}
      <section className="py-20 md:py-28 bg-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-white/80 text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
                Why GymTracker
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase mb-6">
                TRACK EVERY REP. CELEBRATE EVERY WIN.
              </h2>
              <p className="text-white/90 text-lg leading-relaxed mb-8">
                We believe that what gets measured gets improved. GymTracker gives you the insights 
                you need to train smarter, recover better, and achieve your fitness goals faster than 
                ever before.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-white" />
                  <span className="text-white font-semibold">Smart Logging</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-white" />
                  <span className="text-white font-semibold">Deep Analytics</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-white" />
                  <span className="text-white font-semibold">PR Tracking</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 border-[16px] border-white/20" />
                <img
                  src="https://images.unsplash.com/photo-1581009146145-b5ef050c149a?q=80&w=1000&auto=format&fit=crop"
                  alt="Athlete training"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* More Features Grid */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
              And More
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase">
              EVERY FEATURE YOU NEED
            </h2>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {moreFeatures.map((feature) => (
              <motion.div
                key={feature.title}
                variants={item}
                className="p-6 bg-surface border border-border text-center hover:border-accent/30 transition-all duration-300 group"
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors">
                  <feature.icon className="h-7 w-7 text-accent group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-white uppercase mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-background-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of lifters who are already tracking their gains with GymTracker. 
              Your best self is just one download away.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/#contact"
                className="px-10 py-4 bg-accent font-bold text-white uppercase tracking-wider transition-all duration-300 hover:bg-accent-hover hover:-translate-y-1"
              >
                Get Started Free
              </Link>
              <Link
                href="/pricing"
                className="px-10 py-4 border-2 border-accent font-bold text-accent uppercase tracking-wider transition-all duration-300 hover:bg-accent hover:text-white"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
