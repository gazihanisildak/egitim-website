"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#FFFBF5]/95 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🎓</span>
            <span className="text-xl font-black text-gray-900">
              KlassenarbeitReady
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#funktionen"
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
            >
              Funktionen
            </a>
            <a
              href="#herunterladen"
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
            >
              Herunterladen
            </a>
            <Button className="bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600">
              App öffnen
            </Button>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-900"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <nav className="flex flex-col gap-4 py-6 border-t border-orange-200">
                <a
                  href="#funktionen"
                  className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Funktionen
                </a>
                <a
                  href="#herunterladen"
                  className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Herunterladen
                </a>
                <Button className="bg-gradient-to-r from-orange-500 to-red-500 text-white w-full hover:from-orange-600 hover:to-red-600">
                  App öffnen
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
