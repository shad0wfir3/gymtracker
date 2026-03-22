import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { motion } from "framer-motion";
import { Camera, Database, ListChecks, Timer, Trophy, Ruler, Download, TrendingUp } from "lucide-react";

const features = [
  { icon: TrendingUp, title: "Smart Workout Logging", description: "Intelligent exercise recognition makes logging faster than ever. Just start typing and we'll autocomplete exercises, sets, reps, and weights." },
  { icon: Camera, title: "Progress Photos", description: "Visualize your transformation with side-by-side photo comparisons and timeline views." },
  { icon: Database, title: "Exercise Database", description: "500+ exercises with detailed instructions, muscle maps, and video demonstrations." },
  { icon: ListChecks, title: "Custom Routines", description: "Build and save your perfect workout templates. Duplicate, modify, and schedule with ease." },
  { icon: Timer, title: "Rest Timer", description: "Never lose track between sets with customizable rest timers and notifications." },
  { icon: Trophy, title: "Personal Records", description: "Automatically track and celebrate every PR. Get notified when you're about to break a record." },
  { icon: Ruler, title: "Body Measurements", description: "Monitor every metric that matters — weight, body fat, measurements, and more." },
  { icon: Download, title: "Data Export", description: "Own your data. Export your complete workout history anytime, anywhere." },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center">
            <span className="text-sm font-mono tracking-wider uppercase text-pink-500 mb-4 block">Features</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Everything You Need to{" "}
              <span className="text-gradient">Level Up</span>
            </h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Powerful features designed by lifters, for lifters. No fluff, just gains.
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="p-6 md:p-8 rounded-2xl bg-surface border border-border hover:bg-surface-hover hover:border-pink-500/30 transition-all duration-300"
              >
                <div className="h-14 w-14 rounded-xl bg-pink-500/10 flex items-center justify-center border border-pink-500/20 mb-6">
                  <feature.icon className="h-7 w-7 text-pink-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-muted leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
