import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nutzungsbedingungen - KlassenarbeitReady",
};

export default function Nutzungsbedingungen() {
  return (
    <div className="min-h-screen bg-[#FFFBF5] pt-28 pb-16">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl font-black text-gray-900 mb-2">
          Nutzungsbedingungen
        </h1>
        <p className="text-gray-500 mb-8">Zuletzt aktualisiert: März 2026</p>

        <div className="prose prose-gray max-w-none space-y-6 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              1. Geltungsbereich
            </h2>
            <p>
              Diese Nutzungsbedingungen gelten für die Nutzung der mobilen
              Anwendung &quot;KlassenarbeitReady&quot; (nachfolgend
              &quot;App&quot;), bereitgestellt von Gazihan Isildak,
              Deutschland.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              2. Leistungsbeschreibung
            </h2>
            <p>
              KlassenarbeitReady ist eine Lern-App für Grundschulkinder der
              Klassen 1-4. Die App bietet:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>
                KI-generierte Übungstests basierend auf eingegebenen Themen
              </li>
              <li>Interaktive Fragen mit sofortigem Feedback</li>
              <li>Speicherung und Nachverfolgung des Lernfortschritts</li>
              <li>Verschiedene Fächer und Klassenstufen</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              3. Nutzungsvoraussetzungen
            </h2>
            <p>
              Die Nutzung der App setzt ein kompatibles Mobilgerät mit iOS oder
              Android voraus. Für bestimmte Funktionen ist eine
              Internetverbindung erforderlich.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              4. Abonnement und Zahlung
            </h2>
            <p>
              KlassenarbeitReady bietet sowohl kostenlose als auch
              kostenpflichtige Funktionen. Kostenpflichtige Abonnements werden
              über den Apple App Store bzw. Google Play Store abgewickelt. Es
              gelten die jeweiligen Geschäftsbedingungen des App Stores.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              5. KI-generierte Inhalte
            </h2>
            <p>
              Die von der KI generierten Übungstests dienen ausschließlich zu
              Übungszwecken. Wir übernehmen keine Garantie für die inhaltliche
              Richtigkeit der generierten Fragen und Antworten. Die App ersetzt
              nicht den Schulunterricht oder professionelle Nachhilfe.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              6. Geistiges Eigentum
            </h2>
            <p>
              Alle Rechte an der App, einschließlich Design, Code und Inhalte,
              liegen beim Anbieter. Die Nutzung der App gewährt kein Recht
              zur Vervielfältigung oder Weiterverbreitung.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              7. Haftungsbeschränkung
            </h2>
            <p>
              Der Anbieter haftet nicht für Schäden, die durch die Nutzung der
              App entstehen, es sei denn, diese beruhen auf vorsätzlichem oder
              grob fahrlässigem Verhalten des Anbieters.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              8. Änderungen der Nutzungsbedingungen
            </h2>
            <p>
              Der Anbieter behält sich vor, diese Nutzungsbedingungen jederzeit
              zu ändern. Über wesentliche Änderungen werden die Nutzer
              informiert.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              9. Anwendbares Recht
            </h2>
            <p>
              Es gilt das Recht der Bundesrepublik Deutschland.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              10. Kontakt
            </h2>
            <p>
              Bei Fragen zu diesen Nutzungsbedingungen wenden Sie sich bitte
              an:
              <br />
              <a
                href="mailto:info@gzhn.online"
                className="text-orange-600 hover:underline"
              >
                info@gzhn.online
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
