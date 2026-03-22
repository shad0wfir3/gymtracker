"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Loader2 } from "lucide-react";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    // TODO: Connect to Firebase
    // Simulate API call for now
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setStatus("success");
    setEmail("");
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-green-500/10 border border-green-500/30"
      >
        <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center">
          <Check className="h-5 w-5 text-white" />
        </div>
        <div className="text-left">
          <p className="font-semibold text-white">You&apos;re on the list! 💪</p>
          <p className="text-sm text-muted">We&apos;ll notify you when we launch.</p>
        </div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        className="flex-1 px-5 py-4 rounded-xl bg-surface border border-border text-white placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500 transition-all duration-200"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-pink-500 to-pink-600 shadow-[0_4px_14px_0_rgba(236,72,153,0.4)] transition-all duration-200 hover:shadow-[0_6px_20px_0_rgba(236,72,153,0.5)] hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            <span>Joining...</span>
          </>
        ) : (
          <>
            <span>Join Waitlist</span>
            <ArrowRight className="h-5 w-5" />
          </>
        )}
      </button>
    </form>
  );
}
