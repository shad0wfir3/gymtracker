"use client";

import { motion } from "framer-motion";
import { Check, Dumbbell } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "BASIC GYM",
    price: "$9.99",
    period: "Monthly",
    features: [
      "Unlimited club access",
      "Group attendance",
      "Gym visits",
      "Visits to the bath complex",
      "Gym, fight club",
    ],
    popular: false,
  },
  {
    name: "STANDARD GYM",
    price: "$19.99",
    period: "Monthly",
    features: [
      "Unlimited club access",
      "Group attendance",
      "Gym visits",
      "Visits to the bath complex",
      "Gym, fight club",
    ],
    popular: true,
  },
  {
    name: "PREMIUM GYM",
    price: "$29.99",
    period: "Monthly",
    features: [
      "Unlimited club access",
      "Group attendance",
      "Gym visits",
      "Visits to the bath complex",
      "Gym, fight club",
    ],
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-white">
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
              Pricing Tables
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-section-light-text uppercase">
              CHOOSE YOUR PRICING PLAN
            </h2>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative bg-surface p-8 text-center transition-all duration-300 
                        hover:-translate-y-2 ${
                          plan.popular 
                            ? "border-2 border-accent" 
                            : "border-2 border-border hover:border-accent/50"
                        }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-6 py-1 bg-accent text-white text-sm font-bold uppercase tracking-wider">
                    Popular
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-6 bg-accent/10 flex items-center justify-center">
                <Dumbbell className="h-8 w-8 text-accent" />
              </div>

              {/* Price Badge */}
              <div className="inline-block px-4 py-2 bg-accent text-white font-bold mb-6">
                {plan.price} {plan.period}
              </div>

              {/* Plan Name */}
              <h3 className="text-xl font-bold text-white uppercase mb-6">
                {plan.name}
              </h3>

              {/* Features */}
              <ul className="space-y-4 mb-8 text-left">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-accent flex items-center justify-center shrink-0">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-gray-400 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href="#contact"
                className="block w-full py-4 bg-accent font-bold text-white uppercase tracking-wider
                         transition-all duration-300 hover:bg-accent-hover"
              >
                Join now
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
