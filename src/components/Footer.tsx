import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#1C1917] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎓</span>
              <span className="text-xl font-black">KlassenarbeitReady</span>
            </div>
            <p className="text-gray-400 text-sm">
              Die smarte Übungs-App für Grundschulkinder
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Produkt</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="#funktionen"
                  className="hover:text-orange-400 transition-colors"
                >
                  Funktionen
                </a>
              </li>
              <li>
                <a
                  href="#herunterladen"
                  className="hover:text-orange-400 transition-colors"
                >
                  Herunterladen
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Rechtliches</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link
                  href="/datenschutz"
                  className="hover:text-orange-400 transition-colors"
                >
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link
                  href="/nutzungsbedingungen"
                  className="hover:text-orange-400 transition-colors"
                >
                  Nutzungsbedingungen
                </Link>
              </li>
              <li>
                <Link
                  href="/impressum"
                  className="hover:text-orange-400 transition-colors"
                >
                  Impressum
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Kontakt</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="mailto:info@gzhn.online"
                  className="hover:text-orange-400 transition-colors"
                >
                  info@gzhn.online
                </a>
              </li>
              <li className="text-gray-500">Entwickelt in Deutschland 🇩🇪</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © 2026 KlassenarbeitReady. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
