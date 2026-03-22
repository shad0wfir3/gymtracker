"use client";

import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for getting started",
    features: ["Basic workout logging", "3 months history", "Exercise database", "Rest timer"],
    cta: "Get Started Free",
    href: "#waitlist",
    popular: false,
  },
  {
    name: "Pro",
    price: "$9.99",
    period: "/month",
    description: "For serious lifters",
    features: ["Everything in Free", "Unlimited history", "Advanced analytics", "Progress photos", "Custom routines", "Export data"],
    cta: "Join Waitlist",
    href: "#waitlist",
    popular: true,
  },
  {
    name: "Elite",
    price: "$19.99",
    period: "/month",
    description: "For coaches and pros",
    features: ["Everything in Pro", "1-on-1 coaching features", "Priority support", "Early access", "API access"],
    cta: "Join Waitlist",
    href: "#waitlist",
    popular: false,
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center">
            <span className="text-sm font-mono tracking-wider uppercase text-pink-500 mb-4 block">Pricing</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Simple, Transparent{" "}
              <span className="text-pink-500">Pricing</span>
            </h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Choose the plan that fits your training. Upgrade or downgrade anytime.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative p-8 rounded-2xl border ${
                  plan.popular
                    ? "bg-surface border-pink-500/50 md:scale-105"
                    : "bg-surface border-border"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full text-sm font-semibold text-white bg-pink-500">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                  <span className="text-muted">{plan.period}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-muted">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.href}
                  className={`block w-full py-3 px-4 rounded-xl font-semibold text-center transition-all duration-200 ${
                    plan.popular
                      ? "text-white bg-pink-500 hover:bg-pink-600 hover:shadow-[0_6px_20px_0_rgba(236,72,153,0.5)]"
                      : "text-white border border-border hover:bg-surface-hover hover:border-pink-500/30"
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
