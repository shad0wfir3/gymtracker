import Link from "next/link";
import { Dumbbell, Facebook, Twitter, Instagram, MapPin, Mail, Phone, ChevronRight } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const hours = [
  { day: "Monday – Saturday", time: "06:00 – 22:00" },
  { day: "Sunday", time: "08:00 – 20:00" },
];

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 bg-accent flex items-center justify-center">
                <Dumbbell className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-lg text-white tracking-wider uppercase">GymTracker</span>
                <span className="text-[10px] text-muted uppercase tracking-[0.2em]">Be Strong</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              The intelligent workout tracker designed for serious lifters. Build your health, 
              track your gains, and crush your goals.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 bg-surface flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-surface flex items-center justify-center hover:bg-accent transition-colors">
                <Twitter className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-surface flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Opening Hours</h4>
            <ul className="space-y-4">
              {hours.map((item) => (
                <li key={item.day}>
                  <p className="text-white font-semibold text-sm">{item.day}</p>
                  <p className="text-accent font-bold">{item.time}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-accent transition-colors"
                  >
                    <ChevronRight className="h-4 w-4 text-accent" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  121 King Street Melbourne, 3000, Australia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <a href="mailto:info@gymtracker.com" className="text-gray-400 hover:text-accent transition-colors">
                  info@gymtracker.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <a href="tel:+61383766284" className="text-gray-400 hover:text-accent transition-colors">
                  +61 3 8376 6284
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} GymTracker. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-gray-500 text-sm hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-gray-500 text-sm hover:text-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
