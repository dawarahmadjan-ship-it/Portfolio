"use client";

import { Link } from "react-router-dom";
import {
  Linkedin,
  Youtube,
  Mail,
  Heart,
  Instagram,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "YouTube",
      href: "https://www.youtube.com/@ahmadsaadtwins2306",
      icon: Youtube,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/a_dawar_7/",
      icon: Instagram,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/ahmad-dawar-97ab57346/",
      icon: Linkedin,
    },
    {
      name: "Email",
      href: "mailto:dawarahmadjan@gmail.com",
      icon: Mail,
    },
  ];

  return (
    <footer className="glass-panel border-t border-white/5 mt-20 backdrop-blur-3xl">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Ahmad Dawar
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Self-taught Video Editor & Motion Designer dedicated to crafting
              high-impact visual narratives with cinematic precision and
              creative flair.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-semibold text-white tracking-wide uppercase text-xs opacity-70">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-4 text-sm font-medium">
              <Link
                to="/"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                About
              </Link>
              <Link
                to="/skills"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                Skills
              </Link>
              <Link
                to="/contact"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <h4 className="font-semibold text-white tracking-wide uppercase text-xs opacity-70">
              Connect With Me
            </h4>
            <div className="flex space-x-5">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                    aria-label={link.name}
                  >
                    <div className="p-3 rounded-full bg-white/5 border border-white/10 group-hover:bg-blue-600/20 group-hover:border-blue-500/50 transition-all duration-300">
                      <Icon size={20} className="text-gray-400 group-hover:text-blue-400 transition-colors" />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-16 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Ahmad Dawar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
