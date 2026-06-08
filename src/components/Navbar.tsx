"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6 pointer-events-none"
    >
      <nav className="glass px-6 py-3 rounded-full flex items-center gap-8 pointer-events-auto">
        <Link href="/" className="text-sm font-bold tracking-tighter hover:opacity-70 transition-opacity bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
          Roopak.
        </Link>
        <div className="flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-xs font-medium text-white/60 hover:text-white transition-colors tracking-widest"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}
