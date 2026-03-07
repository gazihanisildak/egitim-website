"use client";

import { Brain, Zap, Sparkles, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Brain,
    title: "KI-Übungstests",
    description:
      "Automatisch generierte Tests passend zum Schulstoff der Klassen 1-4",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Zap,
    title: "Thema eingeben",
    description:
      "Einfach das Thema eingeben oder die Nachricht des Lehrers einfügen",
    color: "from-red-500 to-red-600",
  },
  {
    icon: Sparkles,
    title: "Sofort üben",
    description:
      "Interaktive Fragen mit sofortigem Feedback und Erklärungen",
    color: "from-orange-600 to-red-500",
  },
  {
    icon: TrendingUp,
    title: "Fortschritt verfolgen",
    description:
      "Ergebnisse speichern und den Lernfortschritt im Blick behalten",
    color: "from-red-600 to-orange-500",
  },
];

export function Features() {
  return (
    <section id="funktionen" className="py-24 bg-[#FFFBF5] relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(251, 146, 60, 0.15) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            So hilft KlassenarbeitReady
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Alles was dein Kind braucht, um erfolgreich zu lernen
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-orange-100">
                <div
                  className={cn(
                    "w-14 h-14 rounded-2xl bg-gradient-to-br flex items-center justify-center mb-6",
                    "group-hover:scale-110 transition-transform duration-300",
                    feature.color
                  )}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                <div className="mt-6 pt-6 border-t border-orange-100">
                  <div className="flex items-center text-orange-600 font-medium text-sm group-hover:translate-x-2 transition-transform duration-300">
                    Mehr erfahren
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
