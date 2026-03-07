import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz - KlassenarbeitReady",
};

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-[#FFFBF5] pt-28 pb-16">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl font-black text-gray-900 mb-2">
          Datenschutzerklärung
        </h1>
        <p className="text-gray-500 mb-8">Zuletzt aktualisiert: März 2026</p>

        <div className="prose prose-gray max-w-none space-y-6 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              1. Verantwortlicher
            </h2>
            <p>
              Gazihan Isildak
              <br />
              E-Mail: info@gzhn.online
              <br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              2. Erhobene Daten
            </h2>
            <p>
              Bei der Nutzung von KlassenarbeitReady erheben wir folgende Daten:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>
                <strong>Kontodaten:</strong> Anonyme Benutzer-ID bei der
                Registrierung über Firebase Authentication
              </li>
              <li>
                <strong>Nutzungsdaten:</strong> Erstellte Tests, Ergebnisse und
                Lernfortschritt
              </li>
              <li>
                <strong>Abonnementdaten:</strong> Informationen zum
                Abonnementstatus (verwaltet über RevenueCat)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              3. Zweck der Datenverarbeitung
            </h2>
            <p>Wir verwenden Ihre Daten ausschließlich für:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Bereitstellung der App-Funktionen</li>
              <li>Generierung personalisierter Übungstests</li>
              <li>Speicherung des Lernfortschritts</li>
              <li>Verwaltung von Abonnements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              4. KI-Verarbeitung
            </h2>
            <p>
              KlassenarbeitReady nutzt KI-Technologie (Claude von Anthropic) zur
              Generierung von Übungstests. Dabei werden die eingegebenen Themen
              und Klassenstufen an den KI-Dienst übermittelt. Es werden keine
              personenbezogenen Daten des Kindes an den KI-Dienst gesendet.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              5. Datenspeicherung
            </h2>
            <p>
              Ihre Daten werden auf sicheren Servern gespeichert. Wir verwenden
              PostgreSQL-Datenbanken mit verschlüsselter Verbindung. Die Server
              befinden sich in Europa.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              6. Ihre Rechte
            </h2>
            <p>
              Gemäß DSGVO haben Sie folgende Rechte:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Recht auf Auskunft über Ihre gespeicherten Daten</li>
              <li>Recht auf Berichtigung unrichtiger Daten</li>
              <li>Recht auf Löschung Ihrer Daten</li>
              <li>Recht auf Einschränkung der Verarbeitung</li>
              <li>Recht auf Datenübertragbarkeit</li>
            </ul>
            <p className="mt-4">
              Zur Ausübung Ihrer Rechte kontaktieren Sie uns unter:{" "}
              <a
                href="mailto:info@gzhn.online"
                className="text-orange-600 hover:underline"
              >
                info@gzhn.online
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              7. Kinder und Datenschutz
            </h2>
            <p>
              KlassenarbeitReady ist für Kinder im Grundschulalter konzipiert.
              Wir erheben keine persönlichen Daten von Kindern ohne
              Einwilligung der Eltern. Die App kann anonym genutzt werden.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              8. Kontakt
            </h2>
            <p>
              Bei Fragen zum Datenschutz wenden Sie sich bitte an:
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
