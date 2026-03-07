"use client";

import { Sparkles, Brain, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen bg-[#FFFBF5] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-orange-400/10 to-red-400/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-gradient-to-br from-red-400/10 to-orange-400/10 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6 pt-28 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-160px)]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-orange-200 shadow-sm">
              <Sparkles className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-medium text-orange-600">
                Für Klassen 1-4
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
              <span className="text-gray-900">Besser vorbereitet.</span>
              <br />
              <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 bg-clip-text text-transparent">
                Bessere Noten.
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
              Die smarte Übungs-App für Grundschulkinder. Mit KI-generierten
              Tests optimal auf die nächste Klassenarbeit vorbereiten.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#herunterladen">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg shadow-orange-500/30 text-lg px-8 py-6"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Jetzt herunterladen
                </Button>
              </a>
              <a href="#funktionen">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 text-lg px-8 py-6"
                >
                  Funktionen entdecken
                </Button>
              </a>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-red-400 border-2 border-white"
                  />
                ))}
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-bold text-gray-900">10.000+</span>{" "}
                zufriedene Schüler
              </div>
            </div>
          </motion.div>

          {/* Right Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 blur-3xl rounded-full scale-110" />

              {/* Phone Frame */}
              <div className="relative w-[280px] h-[560px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                  <div className="h-full bg-gradient-to-br from-orange-50 to-red-50 p-6 flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-sm font-semibold text-gray-900">
                        Mathe Test
                      </div>
                      <div className="text-xs text-gray-500">Klasse 3</div>
                    </div>

                    <div className="flex-1 space-y-4">
                      {[
                        { q: 1, w: "85%" },
                        { q: 2, w: "60%" },
                        { q: 3, w: "40%" },
                      ].map(({ q, w }) => (
                        <div key={q} className="bg-white rounded-2xl p-4 shadow-sm">
                          <div className="text-sm font-medium text-gray-900 mb-2">
                            Frage {q}
                          </div>
                          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
                              style={{ width: w }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 bg-gradient-to-r from-orange-500 to-red-500 text-white text-center py-3 rounded-2xl font-medium text-sm">
                      Test starten
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 bg-white rounded-2xl p-3 shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Brain className="w-6 h-6 text-orange-500" />
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-3 shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Sparkles className="w-6 h-6 text-red-500" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
