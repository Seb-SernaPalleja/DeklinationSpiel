var data = [
            // --- NIVEL 1: SOLO ARTÍCULOS O PREPOSICIONES ---
    {
        id: 1, level: 'B1', case: 'Dat', category: 'Verbo con Dativo',
        text: "Das Auto {gehört} ___ Frau.",
        noun: "Frau (f)",
        verbDesc: {
            es: "Gehören: Pertenecer. Siempre rige Dativo.",
            en: "Gehören: To belong. Always takes Dative.",
            tr: "Gehören: Ait olmak. Her zaman Dativ alır.",
            de: "Gehören: Dativ-Verb."
        },
        explanation: {
            es: "'Gehören' exige Dativo. Femenino Dativo -> 'der'.",
            en: "'Gehören' requires Dative. Feminine Dative -> 'der'.",
            tr: "'Gehören' Dativ gerektirir. Dişil Dativ -> 'der'.",
            de: "'Gehören' verlangt Dativ. Feminin Dativ -> 'der'."
        },
        slots: [ { type: 'art', answer: "der", options: ["die", "der", "den", "dem"] } ]
    },
    {
        id: 2, level: 'B2', case: 'Dat/Akk', category: 'Doble Objeto',
        text: "Er {kauft} ___ Mann ___ Apfel.",
        noun: "Mann (m), Apfel (m)",
        verbDesc: {
            es: "Kaufen: Comprar. (Nominativ kauft Dativ Akkusativ).",
            en: "Kaufen: To buy. (Nominative buys Dative Accusative).",
            tr: "Kaufen: Satın almak. (Kim(Nom) kime(Dat) neyi(Akk) alır).",
            de: "Kaufen: (Nom kauft Dat Akk)."
        },
        explanation: {
            es: "Kaufen lleva dos objetos. ¿A quién? (Dativo). ¿Qué cosa? (Akkusativ).",
            en: "Kaufen takes two objects. To whom? (Dative). What? (Accusative).",
            tr: "Kaufen iki nesne alır. Kime? (Dat). Neyi? (Akk).",
            de: "Kaufen hat zwei Objekte. Wem? (Dat). Was? (Akk)."
        },
        slots: [
            { type: 'art', answer: "dem", options: ["der", "den", "dem", "des"] },
            { type: 'art', answer: "den", options: ["der", "den", "dem", "des"] }
        ]
    },
    {
        id: 3, level: 'B1', case: 'Akk', category: 'Artículo Negativo',
        text: "Ich habe {keinen} ___ Hund.",
        noun: "Hund (m)",
        verbDesc: {
            es: "Haben: Tener. Rige Akkusativ (Objeto Directo).",
            en: "Haben: To have. Takes Accusative (Direct Object).",
            tr: "Haben: Sahip olmak. Akkusativ alır.",
            de: "Haben: Akkusativ-Verb."
        },
        explanation: {
            es: "Objeto directo masculino + negación -> 'keinen'.",
            en: "Masculine direct object + negation -> 'keinen'.",
            tr: "Eril belirtili nesne + olumsuzluk -> 'keinen'.",
            de: "Maskulin direktes Objekt + Negation -> 'keinen'."
        },
        slots: [ { type: 'art', answer: "keinen", options: ["kein", "keine", "keinem", "keinen"] } ]
    },
    {
        id: 4, level: 'B1', case: 'Dat', category: 'Preposición Dativa',
        text: "Ich fahre {mit} ___ Bus.",
        noun: "Bus (m)",
        verbDesc: {
            es: "Mit: Con. Preposición que siempre exige Dativo.",
            en: "Mit: With. Preposition that always takes Dative.",
            tr: "Mit: İle. Daima Dativ alan edat.",
            de: "Mit: Präposition mit Dativ."
        },
        explanation: {
            es: "'Mit' rige Dativo. Masculino Dativo -> 'dem'.",
            en: "'Mit' takes Dative. Masculine Dative -> 'dem'.",
            tr: "'Mit' Dativ gerektirir. Eril Dativ -> 'dem'.",
            de: "'Mit' verlangt Dativ. Maskulin Dativ -> 'dem'."
        },
        slots: [ { type: 'art', answer: "dem", options: ["den", "dem", "des", "der"] } ]
    },
    {
        id: 5, level: 'B2', case: 'Dat', category: 'Verbo Dativo + N-Deklination',
        text: "Ich {antworte} ___ Polizisten.",
        noun: "Polizist (m)",
        verbDesc: {
            es: "Antworten: Responder. Siempre rige Dativo.",
            en: "Antworten: To answer. Always takes Dative.",
            tr: "Antworten: Cevap vermek. Daima Dativ alır.",
            de: "Antworten: Dativ-Verb."
        },
        explanation: {
            es: "'Antworten' pide Dativo. Polizist es N-Deklination (añade -en).",
            en: "'Antworten' requires Dative. Polizist is N-Declension (adds -en).",
            tr: "'Antworten' Dativ ister. Polizist N-Deklination'dır (-en alır).",
            de: "'Antworten' braucht Dativ. Polizist ist N-Deklination."
        },
        slots: [ { type: 'art', answer: "dem", options: ["der", "den", "dem", "des"] } ]
    },
    {
        id: 6, level: 'B1', case: 'Akk', category: 'Preposición Akkusativ',
        text: "Das Geschenk ist {für} ___ Kind.",
        noun: "Kind (n)",
        verbDesc: {
            es: "Für: Para. Preposición que siempre rige Akkusativ.",
            en: "Für: For. Preposition that always takes Accusative.",
            tr: "Für: İçin. Daima Akkusativ alan edat.",
            de: "Für: Präposition mit Akkusativ."
        },
        explanation: {
            es: "'Für' rige Akkusativ. Neutro Akkusativ -> 'das'.",
            en: "'Für' takes Accusative. Neuter Akkusativ -> 'das'.",
            tr: "'Für' Akkusativ ister. Nötr Akkusativ -> 'das'.",
            de: "'Für' verlangt Akkusativ. Neutrum Akkusativ -> 'das'."
        },
        slots: [ { type: 'art', answer: "das", options: ["das", "dem", "des", "den"] } ]
    },
    {
        id: 7, level: 'B1', case: 'Dat', category: 'Verbo con Dativo',
        text: "Ich {danke} ___ Lehrerin.",
        noun: "Lehrerin (f)",
        verbDesc: {
            es: "Danken: Agradecer. Siempre rige Dativo.",
            en: "Danken: To thank. Always takes Dative.",
            tr: "Danken: Teşekkür etmek. Daima Dativ alır.",
            de: "Danken: Dativ-Verb."
        },
        explanation: {
            es: "Danken exige Dativo. Femenino Dativo -> 'der'.",
            en: "Danken requires Dative. Feminine Dative -> 'der'.",
            tr: "Danken Dativ ister. Dişil Dativ -> 'der'.",
            de: "Danken verlangt Dativ. Feminin Dativ -> 'der'."
        },
        slots: [ { type: 'art', answer: "der", options: ["die", "der", "den", "dem"] } ]
    },
    {
        id: 8, level: 'B2', case: 'Akk', category: 'Preposición Akkusativ',
        text: "Wir gehen {ohne} ___ Hund spazieren.",
        noun: "Hund (m)",
        verbDesc: {
            es: "Ohne: Sin. Preposición que siempre rige Akkusativ.",
            en: "Ohne: Without. Preposition that always takes Accusative.",
            tr: "Ohne: -sız/siz. Daima Akkusativ alan edat.",
            de: "Ohne: Präposition mit Akkusativ."
        },
        explanation: {
            es: "'Ohne' exige Akkusativ. Masculino Akkusativ indefinido -> 'einen'.",
            en: "'Ohne' requires Accusative. Masculine Accusative indefinite -> 'einen'.",
            tr: "'Ohne' Akkusativ ister. Eril Akkusativ belirsiz -> 'einen'.",
            de: "'Ohne' verlangt Akkusativ. Maskulin Akkusativ unbestimmt -> 'einen'."
        },
        slots: [ { type: 'art', answer: "einen", options: ["ein", "einer", "einem", "einen"] } ]
    },
    {
        id: 9, level: 'B1', case: 'Dat', category: 'Preposición Dativa',
        text: "Ich bin {seit} ___ Woche krank.",
        noun: "Woche (f)",
        verbDesc: {
            es: "Seit: Desde (hace). Preposición que siempre rige Dativo.",
            en: "Seit: Since/For. Preposition that always takes Dative.",
            tr: "Seit: -den beri. Daima Dativ alan edat.",
            de: "Seit: Präposition mit Dativ."
        },
        explanation: {
            es: "'Seit' exige Dativo. Femenino Dativo indefinido -> 'einer'.",
            en: "'Seit' requires Dative. Feminine Dative indefinite -> 'einer'.",
            tr: "'Seit' Dativ ister. Dişil Dativ belirsiz -> 'einer'.",
            de: "'Seit' verlangt Dativ. Feminin Dativ unbestimmt -> 'einer'."
        },
        slots: [ { type: 'art', answer: "einer", options: ["eine", "einer", "einem", "einen"] } ]
    },
    {
        id: 10, level: 'B2', case: 'Dat', category: 'Wechselpräposition (Wo?)',
        text: "Das Buch liegt {auf} ___ Tisch.",
        noun: "Tisch (m)",
        verbDesc: {
            es: "Auf: Sobre (contacto). Con posición (Wo?) rige Dativo.",
            en: "Auf: On top. With position (Wo?) takes Dative.",
            tr: "Auf: Üzerinde. Konum (Wo?) bildirirken Dativ alır.",
            de: "Auf: Wechselpräposition (Wo = Dativ)."
        },
        explanation: {
            es: "Es una ubicación estática (¿Dónde?). Masculino Dativo -> 'dem'.",
            en: "It is a static location (Where?). Masculine Dative -> 'dem'.",
            tr: "Statik bir konum (Nerede?). Eril Dativ -> 'dem'.",
            de: "Statische Lage (Wo?). Maskulin Dativ -> 'dem'."
        },
        slots: [ { type: 'art', answer: "dem", options: ["der", "den", "dem", "des"] } ]
    },
    {
        id: 11, level: 'B2', case: 'Akk', category: 'Wechselpräposition (Wohin?)',
        text: "Ich lege das Buch {auf} ___ Tisch.",
        noun: "Tisch (m)",
        verbDesc: {
            es: "Auf: Sobre. Con movimiento (Wohin?) rige Akkusativ.",
            en: "Auf: On top. With movement (Wohin?) takes Accusative.",
            tr: "Auf: Üzerine. Hareket (Wohin?) bildirirken Akkusativ alır.",
            de: "Auf: Wechselpräposition (Wohin = Akkusativ)."
        },
        explanation: {
            es: "Hay movimiento (¿Adónde?). Masculino Akkusativ -> 'den'.",
            en: "There is movement (Whereto?). Masculine Accusative -> 'den'.",
            tr: "Hareket var (Nereye?). Eril Akkusativ -> 'den'.",
            de: "Richtung/Bewegung (Wohin?). Maskulin Akkusativ -> 'den'."
        },
        slots: [ { type: 'art', answer: "den", options: ["der", "den", "dem", "des"] } ]
    },
    {
        id: 12, level: 'B1', case: 'Akk', category: 'Verbo con Akkusativ',
        text: "Ich {suche} ___ (f) Apotheke.",
        noun: "Apotheke (f)",
        verbDesc: {
            es: "Suchen: Buscar. Rige Akkusativ.",
            en: "Suchen: To search. Takes Accusative.",
            tr: "Suchen: Aramak. Akkusativ alır.",
            de: "Suchen: Akkusativ-Verb."
        },
        explanation: {
            es: "Objeto directo femenino. Akkusativ indefinido -> 'eine'.",
            en: "Feminine direct object. Accusative indefinite -> 'eine'.",
            tr: "Dişil belirtili nesne. Akkusativ belirsiz -> 'eine'.",
            de: "Feminin direktes Objekt. Akkusativ unbestimmt -> 'eine'."
        },
        slots: [ { type: 'art', answer: "eine", options: ["ein", "eine", "einer", "einen"] } ]
    },
    {
        id: 13, level: 'B2', case: 'Dat', category: 'Verbo con Dativo',
        text: "Das {schmeckt} ___ (pl) Kindern.",
        noun: "Kinder (pl)",
        verbDesc: {
            es: "Schmecken: Gustar (sabor). Siempre rige Dativo.",
            en: "Schmecken: To taste. Always takes Dative.",
            tr: "Schmecken: Tadı ... gelmek. Daima Dativ alır.",
            de: "Schmecken: Dativ-Verb."
        },
        explanation: {
            es: "'Schmecken' exige Dativo. Plural Dativo -> 'den'.",
            en: "'Schmecken' requires Dative. Plural Dative -> 'den'.",
            tr: "'Schmecken' Dativ ister. Çoğul Dativ -> 'den'.",
            de: "'Schmecken' verlangt Dativ. Plural Dativ -> 'den'."
        },
        slots: [ { type: 'art', answer: "den", options: ["die", "der", "den", "dem"] } ]
    },
    {
        id: 14, level: 'B1', case: 'Dat', category: 'Preposición Dativa',
        text: "Ich komme {aus} ___ (f) Schweiz.",
        noun: "Schweiz (f)",
        verbDesc: {
            es: "Aus: De (origen). Preposición que siempre exige Dativo.",
            en: "Aus: From. Preposition that always takes Dative.",
            tr: "Aus: -den/-dan. Daima Dativ alan edat.",
            de: "Aus: Präposition mit Dativ."
        },
        explanation: {
            es: "'Aus' rige Dativo. Suiza es femenino -> 'der'.",
            en: "'Aus' takes Dative. Switzerland is feminine -> 'der'.",
            tr: "'Aus' Dativ ister. İsviçre dişildir -> 'der'.",
            de: "'Aus' verlangt Dativ. Schweiz ist feminin -> 'der'."
        },
        slots: [ { type: 'art', answer: "der", options: ["die", "der", "den", "dem"] } ]
    },
    {
        id: 15, level: 'B2', case: 'Dat', category: 'Verbo con Dativo',
        text: "Ich {vertraue} ___ (m) Arzt.",
        noun: "Arzt (m)",
        verbDesc: {
            es: "Vertrauen: Confiar. Siempre rige Dativo.",
            en: "Vertrauen: To trust. Always takes Dative.",
            tr: "Vertrauen: Güvenmek. Daima Dativ alır.",
            de: "Vertrauen: Dativ-Verb."
        },
        explanation: {
            es: "Vertrauen exige Dativo. Masculino Dativo -> 'dem'.",
            en: "Vertrauen requires Dative. Masculine Dative -> 'dem'.",
            tr: "Vertrauen Dativ ister. Eril Dativ -> 'dem'.",
            de: "Vertrauen verlangt Dativ. Maskulin Dativ -> 'dem'."
        },
        slots: [ { type: 'art', answer: "dem", options: ["der", "den", "dem", "des"] } ]
    },
    {
        id: 16, level: 'B1', case: 'Akk', category: 'Verbo con Akkusativ',
        text: "Hast du ___ (m) Schlüssel?",
        noun: "Schlüssel (m)",
        verbDesc: {
            es: "Haben: Tener. Rige Akkusativ.",
            en: "Haben: To have. Takes Accusative.",
            tr: "Haben: Sahip olmak. Akkusativ alır.",
            de: "Haben: Akkusativ-Verb."
        },
        explanation: {
            es: "Objeto directo masculino determinado -> 'den'.",
            en: "Masculine direct object definite -> 'den'.",
            tr: "Eril belirtili nesne belirli -> 'den'.",
            de: "Maskulin direktes Objekt bestimmt -> 'den'."
        },
        slots: [ { type: 'art', answer: "den", options: ["der", "den", "dem", "des"] } ]
    },
    {
        id: 17, level: 'B2', case: 'Dat/Akk', category: 'Doble Objeto',
        text: "Ich {schenke} ___ (f) Freundin ___ (n) Buch.",
        noun: "Freundin (f), Buch (n)",
        verbDesc: {
            es: "Schenken: Regalar. (Nom schenkt Dat Akk).",
            en: "Schenken: To gift. (Nom gifts Dat Akk).",
            tr: "Schenken: Hediye etmek. (Nom Dat'a Akk hediye eder).",
            de: "Schenken: (Nom schenkt Dat Akk)."
        },
        explanation: {
            es: "¿A quién? (Dativo). ¿Qué? (Akkusativ).",
            en: "To whom? (Dative). What? (Accusative).",
            tr: "Kime? (Dat). Neyi? (Akk).",
            de: "Wem? (Dat). Was? (Akk)."
        },
        slots: [
            { type: 'art', answer: "einer", options: ["eine", "einer", "einem", "einen"] },
            { type: 'art', answer: "ein", options: ["ein", "eine", "einer", "einen"] }
        ]
    },
    {
        id: 18, level: 'B1', case: 'Dat', category: 'Preposición Dativa',
        text: "Wir gehen {nach} ___ (n) Essen spazieren.",
        noun: "Essen (n)",
        verbDesc: {
            es: "Nach: Después de. Preposición que siempre exige Dativo.",
            en: "Nach: After. Preposition that always takes Dative.",
            tr: "Nach: -den sonra. Daima Dativ alan edat.",
            de: "Nach: Präposition mit Dativ."
        },
        explanation: {
            es: "'Nach' exige Dativo. Neutro Dativo -> 'dem'.",
            en: "'Nach' requires Dative. Neuter Dative -> 'dem'.",
            tr: "'Nach' Dativ ister. Nötr Dativ -> 'dem'.",
            de: "'Nach' verlangt Dativ. Neutrum Dativ -> 'dem'."
        },
        slots: [ { type: 'art', answer: "dem", options: ["das", "dem", "des", "den"] } ]
    },
    {
        id: 19, level: 'B1', case: 'Akk', category: 'Preposición Akkusativ',
        text: "Wir gehen {durch} ___ (m) Tunnel.",
        noun: "Tunnel (m)",
        verbDesc: {
            es: "Durch: A través de. Siempre rige Akkusativ.",
            en: "Durch: Through. Always takes Accusative.",
            tr: "Durch: İçinden/Arasından. Daima Akkusativ alır.",
            de: "Durch: Präposition mit Akkusativ."

        },
        explanation: {
            es: "'Durch' exige Akkusativ. Masculino Akkusativ -> 'den'.",
            en: "'Durch' requires Accusative. Masculine Accusative -> 'den'.",
            tr: "'Durch' Akkusativ ister. Eril Akkusativ -> 'den'.",
            de: "'Durch' verlangt Akkusativ. Maskulin Akkusativ -> 'den'."
        },
        slots: [ { type: 'art', answer: "den", options: ["der", "den", "dem", "des"] } ]
    },
    {
        id: 20, level: 'B2', case: 'Dat', category: 'Verbo Dativo + N-Deklination',
        text: "Ich {glaube} ___ (m) Kunden.",
        noun: "Kunde (m)",
        verbDesc: {
            es: "Glauben: Creer. Rige Dativo cuando se refiere a personas.",
            en: "Glauben: To believe. Takes Dative for people.",
            tr: "Glauben: İnanmak. Kişilerde Dativ alır.",
            de: "Glauben: Dativ-Verb (bei Personen)."
        },
        explanation: {
            es: "Glauben + Persona -> Dativo. Kunde es N-Deklination.",
            en: "Glauben + Person -> Dative. Kunde is N-Declension.",
            tr: "Glauben + Kişi -> Dativ. Kunde N-Deklination'dır.",
            de: "Glauben + Person -> Dativ. Kunde ist N-Deklination."
        },
        slots: [ { type: 'art', answer: "dem", options: ["der", "den", "dem", "des"] } ]
    },
    {
        id: 21, level: 'B1', case: 'Akk', category: 'Artículo Negativo',
        text: "Ich brauche {keine} ___ Hilfe.",
        noun: "Hilfe (f)",
        verbDesc: {
            es: "Brauchen: Necesitar. Rige Akkusativ.",
            en: "Brauchen: To need. Takes Accusative.",
            tr: "Brauchen: İhtiyacı olmak. Akkusativ alır.",
            de: "Brauchen: Akkusativ-Verb."
        },
        explanation: {
            es: "Objeto directo femenino + negación -> 'keine'.",
            en: "Feminine direct object + negation -> 'keine'.",
            tr: "Dişil belirtili nesne + olumsuzluk -> 'keine'.",
            de: "Feminin direktes Objekt + Negation -> 'keine'."
        },
        slots: [ { type: 'art', answer: "keine", options: ["kein", "keine", "keiner", "keinen"] } ]
    },
    {
        id: 22, level: 'B2', case: 'Dat', category: 'Verbo con Dativo',
        text: "Das {fällt} ___ (m) Mann {schwer}.",
        noun: "Mann (m)",
        verbDesc: {
            es: "Schwerfallen: Resultar difícil. Rige Dativo (¿A quién?).",
            en: "Schwerfallen: To be difficult for someone. Takes Dative.",
            tr: "Schwerfallen: Zor gelmek. Dativ alır.",
            de: "Schwerfallen: Dativ-Verb."
        },
        explanation: {
            es: "Resultar difícil exige Dativo. Masculino Dativo -> 'dem'.",
            en: "Being difficult requires Dative. Masculine Dative -> 'dem'.",
            tr: "Zor gelmek Dativ ister. Eril Dativ -> 'dem'.",
            de: "Schwerfallen verlangt Dativ. Maskulin Dativ -> 'dem'."
        },
        slots: [ { type: 'art', answer: "dem", options: ["der", "den", "dem", "des"] } ]
    },
    {
        id: 23, level: 'B1', case: 'Dat', category: 'Preposición Dativa',
        text: "Er kommt {von} ___ (f) Arbeit.",
        noun: "Arbeit (f)",
        verbDesc: {
            es: "Von: De (procedencia/posesión). Siempre exige Dativo.",
            en: "Von: From/Of. Always takes Dative.",
            tr: "Von: -den/-dan. Daima Dativ alır.",
            de: "Von: Präposition mit Dativ."
        },
        explanation: {
            es: "'Von' exige Dativo. Trabajo es femenino -> 'der'.",
            en: "'Von' requires Dative. Work is feminine -> 'der'.",
            tr: "'Von' Dativ ister. İş dişildir -> 'der'.",
            de: "'Von' verlangt Dativ. Arbeit ist feminin -> 'der'."
        },
        slots: [ { type: 'art', answer: "der", options: ["die", "der", "den", "dem"] } ]
    },
    {
        id: 24, level: 'B1', case: 'Akk', category: 'Preposición Akkusativ',
        text: "Wir protestieren {gegen} ___ (m) Plan.",
        noun: "Plan (m)",
        verbDesc: {
            es: "Gegen: Contra. Siempre rige Akkusativ.",
            en: "Gegen: Against. Always takes Accusative.",
            tr: "Gegen: Karşı. Daima Akkusativ alır.",
            de: "Gegen: Präposition mit Akkusativ."
        },
        explanation: {
            es: "'Gegen' rige Akkusativ. Masculino Akkusativ -> 'den'.",
            en: "'Gegen' takes Accusative. Masculine Accusative -> 'den'.",
            tr: "'Gegen' Akkusativ ister. Eril Akkusativ -> 'den'.",
            de: "'Gegen' verlangt Akkusativ. Maskulin Akkusativ -> 'den'."
        },
        slots: [ { type: 'art', answer: "den", options: ["der", "den", "dem", "des"] } ]
    },
    {
        id: 25, level: 'B2', case: 'Dat', category: 'Preposición Dativa',
        text: "Das Hotel liegt {gegenüber} ___ (m) Park.",
        noun: "Park (m)",
        verbDesc: {
            es: "Gegenüber: Enfrente de. Siempre exige Dativo.",
            en: "Gegenüber: Opposite. Always takes Dative.",
            tr: "Gegenüber: Karşısında. Daima Dativ alır.",
            de: "Gegenüber: Präposition mit Dativ."
        },
        explanation: {
            es: "'Gegenüber' rige Dativo. Masculino Dativo -> 'dem'.",
            en: "'Gegenüber' takes Dative. Masculine Dative -> 'dem'.",
            tr: "'Gegenüber' Dativ ister. Eril Dativ -> 'dem'.",
            de: "Gegenüber verlangt Dativ. Maskulin Dativ -> 'dem'."
        },
        slots: [ { type: 'art', answer: "dem", options: ["der", "den", "dem", "des"] } ]
    },
    {
        id: 26, level: 'B2', case: 'Gen', category: 'Preposición Genitiva',
        text: "{Wegen} ___ (m) Regens bleiben wir zu Hause.",
        noun: "Regen (m)",
        verbDesc: {
            es: "Wegen: Debido a / Por causa de. Rige Genitivo.",
            en: "Wegen: Because of. Takes Genitive.",
            tr: "Wegen: -den dolayı. Genitiv alır.",
            de: "Wegen: Präposition mit Genitiv."
        },
        explanation: {
            es: "'Wegen' exige Genitivo. Masculino Genitivo -> 'des' + 's' en el sustantivo.",
            en: "'Wegen' requires Genitive. Masculine Genitive -> 'des' + 's' on the noun.",
            tr: "'Wegen' Genitiv gerektirir. Eril Genitiv -> 'des' + isimde 's'.",
            de: "'Wegen' verlangt Genitiv. Maskulin Genitiv -> 'des' + 's'."
        },
        slots: [ { type: 'art', answer: "des", options: ["dem", "den", "des", "der"] } ]
    },
    {
        id: 27, level: 'B2', case: 'Gen', category: 'Preposición Genitiva',
        text: "{Trotz} ___ (f) Kälte trägt er keine Jacke.",
        noun: "Kälte (f)",
        verbDesc: {
            es: "Trotz: A pesar de. Rige Genitivo.",
            en: "Trotz: Despite. Takes Genitive.",
            tr: "Trotz: -e rağmen. Genitiv alır.",
            de: "Trotz: Präposition mit Genitiv."
        },
        explanation: {
            es: "'Trotz' exige Genitivo. Femenino Genitivo -> 'der'.",
            en: "'Trotz' requires Genitive. Feminine Genitive -> 'der'.",
            tr: "'Trotz' Genitiv gerektirir. Dişil Genitiv -> 'der'.",
            de: "'Trotz' verlangt Genitiv. Feminin Genitiv -> 'der'."
        },
        slots: [ { type: 'art', answer: "der", options: ["die", "der", "den", "des"] } ]
    },
    {
        id: 28, level: 'B2', case: 'Dat/Akk', category: 'Doble Objeto',
        text: "Ich {leihe} ___ (m) Freund ___ (n) Fahrrad.",
        noun: "Freund (m), Fahrrad (n)",
        verbDesc: {
            es: "Leihen: Prestar. (Nom leiht Dat Akk).",
            en: "Leihen: To lend. (Nom lends Dat Akk).",
            tr: "Leihen: Ödünç vermek. (Nom Dat'a Akk ödünç verir).",
            de: "Leihen: (Nom leiht Dat Akk)."
        },
        explanation: {
            es: "¿A quién le presto? (Dativo). ¿Qué presto? (Akkusativ).",
            en: "To whom? (Dative). What? (Accusative).",
            tr: "Kime? (Dat). Neyi? (Akk).",
            de: "Wem? (Dat). Was? (Akk)."
        },
        slots: [
            { type: 'art', answer: "meinem", options: ["mein", "meinen", "meinem", "meines"] },
            { type: 'art', answer: "mein", options: ["mein", "meine", "meinem", "meinen"] }
        ]
    },
    {
        id: 29, level: 'B1', case: 'Dat', category: 'Preposición Dativa',
        text: "Ich gehe {zu} ___ (m) Arzt.",
        noun: "Arzt (m)",
        verbDesc: {
            es: "Zu: A / Hacia (personas/lugares). Siempre exige Dativo.",
            en: "Zu: To. Always takes Dative.",
            tr: "Zu: -e/-a (yönelme). Daima Dativ alır.",
            de: "Zu: Präposition mit Dativ."
        },
        explanation: {
            es: "'Zu' siempre rige Dativo. Masculino Dativo -> 'dem' (zum).",
            en: "'Zu' always takes Dative. Masculine Dative -> 'dem' (zum).",
            tr: "'Zu' daima Dativ alır. Eril Dativ -> 'dem'.",
            de: "'Zu' verlangt immer Dativ. Maskulin Dativ -> 'dem'."
        },
        slots: [ { type: 'art', answer: "dem", options: ["den", "dem", "der", "des"] } ]
    },
    {
        id: 30, level: 'B2', case: 'Dat', category: 'Verbo con Dativo',
        text: "Das {fällt} ___ (f) Schülerin leicht.",
        noun: "Schülerin (f)",
        verbDesc: {
            es: "Leichtfallen: Resultar fácil. Rige Dativo.",
            en: "Leichtfallen: To be easy for someone. Takes Dative.",
            tr: "Leichtfallen: Kolay gelmek. Dativ alır.",
            de: "Leichtfallen: Dativ-Verb."
        },
        explanation: {
            es: "A la estudiante 'le' resulta fácil (Dativo). Femenino Dativo -> 'der'.",
            en: "It is easy for her (Dative). Feminine Dative -> 'der'.",
            tr: "Öğrenciye kolay geliyor (Dativ). Dişil Dativ -> 'der'.",
            de: "Es fällt ihr leicht (Dativ). Feminin Dativ -> 'der'."
        },
        slots: [ { type: 'art', answer: "der", options: ["die", "der", "den", "dem"] } ]
    },
    {
        id: 31, level: 'B2', case: 'Dat', category: 'Wechselpräposition (Wo?)',
        text: "Die Katze schläft {zwischen} ___ (m) Stühlen.",
        noun: "Stühle (pl)",
        verbDesc: {
            es: "Zwischen: Entre. Con posición (Wo?) rige Dativo.",
            en: "Zwischen: Between. With position (Wo?) takes Dative.",
            tr: "Zwischen: Arasında. Konum bildirirken Dativ alır.",
            de: "Zwischen: Wechselpräposition (Wo = Dativ)."
        },
        explanation: {
            es: "Situación estática plural. Plural Dativo -> 'den'.",
            en: "Static plural location. Plural Dative -> 'den'.",
            tr: "Statik çoğul konum. Çoğul Dativ -> 'den'.",
            de: "Statische Lage Plural. Plural Dativ -> 'den'."
        },
        slots: [ { type: 'art', answer: "den", options: ["die", "der", "den", "dem"] } ]
    },
    {
        id: 32, level: 'B1', case: 'Akk', category: 'Verbo con Akkusativ',
        text: "Ich {besuche} ___ (m) Opa.",
        noun: "Opa (m)",
        verbDesc: {
            es: "Besuchen: Visitar. Rige Akkusativ.",
            en: "Besuchen: To visit. Takes Accusative.",
            tr: "Besuchen: Ziyaret etmek. Akkusativ alır.",
            de: "Besuchen: Akkusativ-Verb."
        },
        explanation: {
            es: "¿A quién visito? Lo visito (Akkusativ). Masculino Akkusativ -> 'meinen'.",
            en: "Who am I visiting? Him (Accusative). Masculine Accusative -> 'meinen'.",
            tr: "Kimi ziyaret ediyorum? Onu (Akkusativ). Eril Akkusativ -> 'meinen'.",
            de: "Wen besuche ich? Ihn (Akkusativ). Maskulin Akkusativ -> 'meinen'."
        },
        slots: [ { type: 'art', answer: "meinen", options: ["mein", "meine", "meinem", "meinen"] } ]
    },
    {
        id: 33, level: 'B2', case: 'Dat', category: 'Verbo Dativo + N-Deklination',
        text: "Ich {helfe} ___ (m) Nachbarn.",
        noun: "Nachbar (m)",
        verbDesc: {
            es: "Helfen: Ayudar. Rige Dativo.",
            en: "Helfen: To help. Takes Dative.",
            tr: "Helfen: Yardım etmek. Dativ alır.",
            de: "Helfen: Dativ-Verb."
        },
        explanation: {
            es: "Helfen exige Dativo. Nachbar es N-Deklination (añade -n).",
            en: "Helfen requires Dative. Nachbar is N-Declension (adds -n).",
            tr: "Helfen Dativ ister. Nachbar N-Deklination'dır (-n alır).",
            de: "Helfen verlangt Dativ. Nachbar ist N-Deklination."
        },
        slots: [ { type: 'art', answer: "dem", options: ["der", "den", "dem", "des"] } ]
    },
    {
        id: 34, level: 'B1', case: 'Dat', category: 'Preposición Dativa',
        text: "Er arbeitet {bei} ___ (f) Bank.",
        noun: "Bank (f)",
        verbDesc: {
            es: "Bei: En (lugar de trabajo/casa de). Siempre exige Dativo.",
            en: "Bei: At. Always takes Dative.",
            tr: "Bei: -de/-da (iş yeri/birinin yanı). Daima Dativ alır.",
            de: "Bei: Präposition mit Dativ."
        },
        explanation: {
            es: "'Bei' rige Dativo. Femenino Dativo -> 'der'.",
            en: "'Bei' takes Dative. Feminine Dative -> 'der'.",
            tr: "'Bei' Dativ ister. Dişil Dativ -> 'der'.",
            de: "'Bei' verlangt Dativ. Feminin Dativ -> 'der'."
        },
        slots: [ { type: 'art', answer: "der", options: ["die", "der", "den", "dem"] } ]
    },
    {
        id: 35, level: 'B2', case: 'Akk', category: 'Preposición Akkusativ',
        text: "Wir spazieren {um} ___ (m) See.",
        noun: "See (m)",
        verbDesc: {
            es: "Um: Alrededor de. Siempre rige Akkusativ.",
            en: "Um: Around. Always takes Accusative.",
            tr: "Um: Etrafında. Daima Akkusativ alır.",
            de: "Um: Präposition mit Akkusativ."
        },
        explanation: {
            es: "'Um' exige Akkusativ. Masculino Akkusativ -> 'den'.",
            en: "'Um' requires Accusative. Masculine Accusative -> 'den'.",
            tr: "'Um' Akkusativ ister. Eril Akkusativ -> 'den'.",
            de: "'Um' verlangt Akkusativ. Maskulin Akkusativ -> 'den'."
        },
        slots: [ { type: 'art', answer: "den", options: ["der", "den", "dem", "des"] } ]
    },
    {
        id: 36, level: 'B1', case: 'Akk', category: 'Verbo con Akkusativ',
        text: "Ich {trinke} ___ (m) Saft.",
        noun: "Saft (m)",
        verbDesc: {
            es: "Trinken: Beber. Rige Akkusativ.",
            en: "Trinken: To drink. Takes Accusative.",
            tr: "Trinken: İçmek. Akkusativ alır.",
            de: "Trinken: Akkusativ-Verb."
        },
        explanation: {
            es: "Objeto directo masculino. Akkusativ indefinido -> 'einen'.",
            en: "Masculine direct object. Accusative indefinite -> 'einen'.",
            tr: "Eril belirtili nesne. Akkusativ belirsiz -> 'einen'.",
            de: "Maskulin direktes Objekt. Akkusativ unbestimmt -> 'einen'."
        },
        slots: [ { type: 'art', answer: "einen", options: ["ein", "einer", "einem", "einen"] } ]
    },
    {
        id: 37, level: 'B2', case: 'Dat', category: 'Verbo con Dativo',
        text: "Das {passt} ___ (n) Kind nicht.",
        noun: "Kind (n)",
        verbDesc: {
            es: "Passen: Quedar bien (talla/ropa). Rige Dativo.",
            en: "Passen: To fit. Takes Dative.",
            tr: "Passen: Uymak/Yakışmak. Dativ alır.",
            de: "Passen: Dativ-Verb."
        },
        explanation: {
            es: "La ropa 'le' queda (o no) al niño. Neutro Dativo -> 'dem'.",
            en: "It fits the child (Dative). Neuter Dative -> 'dem'.",
            tr: "Çocuğa oluyor (Dativ). Nötr Dativ -> 'dem'.",
            de: "Es passt dem Kind (Dativ). Neutrum Dativ -> 'dem'."
        },
        slots: [ { type: 'art', answer: "dem", options: ["das", "dem", "des", "den"] } ]
    },
    {
        id: 38, level: 'B2', case: 'Gen', category: 'Preposición Genitiva',
        text: "{Während} ___ (m) Kurses darf man nicht essen.",
        noun: "Kurs (m)",
        verbDesc: {
            es: "Während: Durante. Rige Genitivo.",
            en: "Während: During. Takes Genitive.",
            tr: "Während: Boyunca/Esnasında. Genitiv alır.",
            de: "Während: Präposition mit Genitiv."
        },
        explanation: {
            es: "'Während' exige Genitivo. Masculino Genitivo -> 'des'.",
            en: "'Während' requires Genitive. Masculine Genitive -> 'des'.",
            tr: "'Während' Genitiv ister. Eril Genitiv -> 'des'.",
            de: "'Während' verlangt Genitiv. Maskulin Genitiv -> 'des'."
        },
        slots: [ { type: 'art', answer: "des", options: ["dem", "den", "des", "der"] } ]
    },
    {
        id: 39, level: 'B1', case: 'Dat', category: 'Preposición Dativa',
        text: "Das Brot ist {von} ___ (m) Bäcker.",
        noun: "Bäcker (m)",
        verbDesc: {
            es: "Von: De (procedencia). Siempre rige Dativo.",
            en: "Von: From. Always takes Dative.",
            tr: "Von: -den/-dan. Daima Dativ alır.",
            de: "Von: Präposition mit Dativ."
        },
        explanation: {
            es: "'Von' exige Dativo. Masculino Dativo -> 'dem'.",
            en: "'Von' requires Dative. Masculine Dative -> 'dem'.",
            tr: "'Von' Dativ ister. Eril Dativ -> 'dem'.",
            de: "'Von' verlangt Dativ. Maskulin Dativ -> 'dem'."
        },
        slots: [ { type: 'art', answer: "dem", options: ["der", "den", "dem", "des"] } ]
    },
    {
        id: 40, level: 'B2', case: 'Dat/Akk', category: 'Doble Objeto',
        text: "Ich {erkläre} ___ (m) Herrn ___ (m) Weg.",
        noun: "Herr (m), Weg (m)",
        verbDesc: {
            es: "Erklären: Explicar. (Nom erklärt Dat Akk).",
            en: "Erklären: To explain. (Nom explains Dat Akk).",
            tr: "Erklären: Açıklamak. (Nom Dat'a Akk açıklar).",
            de: "Erklären: (Nom erklärt Dat Akk)."
        },
        explanation: {
            es: "Herr es N-Deklination. ¿A quién? (Dativo). ¿Qué? (Akkusativ).",
            en: "Herr is N-Declension. To whom? (Dative). What? (Accusative).",
            tr: "Herr N-Deklination'dır. Kime? (Dat). Neyi? (Akk).",
            de: "Herr ist N-Deklination. Wem? (Dat). Was? (Akk)."
        },
        slots: [
            { type: 'art', answer: "dem", options: ["der", "den", "dem", "des"] },
            { type: 'art', answer: "den", options: ["der", "den", "dem", "des"] }
        ]
    },
    {
        id: 41, level: 'B1', case: 'Akk', category: 'Preposición Akkusativ',
        text: "Wir fahren {durch} ___ (f) Stadt.",
        noun: "Stadt (f)",
        verbDesc: {
            es: "Durch: A través de. Siempre rige Akkusativ.",
            en: "Durch: Through. Always takes Accusative.",
            tr: "Durch: İçinden. Daima Akkusativ alır.",
            de: "Durch: Präposition mit Akkusativ."
        },
        explanation: {
            es: "'Durch' exige Akkusativ. Femenino Akkusativ -> 'die'.",
            en: "'Durch' requires Accusative. Feminine Accusative -> 'die'.",
            tr: "'Durch' Akkusativ ister. Dişil Akkusativ -> 'die'.",
            de: "'Durch' verlangt Akkusativ. Feminin Akkusativ -> 'die'."
        },
        slots: [ { type: 'art', answer: "die", options: ["die", "der", "den", "dem"] } ]
    },
    {
        id: 42, level: 'B2', case: 'Dat', category: 'Verbo con Dativo',
        text: "Ich {folge} ___ (m) Polizisten.",
        noun: "Polizist (m)",
        verbDesc: {
            es: "Folgen: Seguir. Siempre rige Dativo.",
            en: "Folgen: To follow. Always takes Dative.",
            tr: "Folgen: Takip etmek. Daima Dativ alır.",
            de: "Folgen: Dativ-Verb."
        },
        explanation: {
            es: "Folgen exige Dativo. Polizist es N-Deklination.",
            en: "Folgen requires Dative. Polizist is N-Declension.",
            tr: "Folgen Dativ ister. Polizist N-Deklination'dır.",
            de: "Folgen verlangt Dativ. Polizist ist N-Deklination."
        },
        slots: [ { type: 'art', answer: "dem", options: ["der", "den", "dem", "des"] } ]
    },
    {
        id: 43, level: 'B1', case: 'Akk', category: 'Artículo Negativo',
        text: "Ich habe {keinen} ___ (m) Hunger.",
        noun: "Hunger (m)",
        verbDesc: {
            es: "Haben: Tener. Rige Akkusativ.",
            en: "Haben: To have. Takes Accusative.",
            tr: "Haben: Sahip olmak. Akkusativ alır.",
            de: "Haben: Akkusativ-Verb."
        },
        explanation: {
            es: "Tener hambre (Hunger). Masculino Akkusativ negativo -> 'keinen'.",
            en: "To have hunger. Masculine Accusative negative -> 'keinen'.",
            tr: "Aç olmak. Eril Akkusativ olumsuz -> 'keinen'.",
            de: "Hunger haben. Maskulin Akkusativ Negation -> 'keinen'."
        },
        slots: [ { type: 'art', answer: "keinen", options: ["kein", "keine", "keinem", "keinen"] } ]
    },
    {
        id: 44, level: 'B2', case: 'Dat', category: 'Preposición Dativa',
        text: "Das Haus steht {gegenüber} ___ (f) Post.",
        noun: "Post (f)",
        verbDesc: {
            es: "Gegenüber: Enfrente de. Siempre rige Dativo.",
            en: "Gegenüber: Opposite. Always takes Dative.",
            tr: "Gegenüber: Karşısında. Daima Dativ alır.",
            de: "Gegenüber: Präposition mit Dativ."
        },
        explanation: {
            es: "'Gegenüber' exige Dativo. Femenino Dativo -> 'der'.",
            en: "'Gegenüber' requires Dative. Feminine Dative -> 'der'.",
            tr: "'Gegenüber' Dativ ister. Dişil Dativ -> 'der'.",
            de: "Gegenüber verlangt Dativ. Feminin Dativ -> 'der'."
        },
        slots: [ { type: 'art', answer: "der", options: ["die", "der", "den", "dem"] } ]
    },
    {
        id: 45, level: 'B2', case: 'Akk', category: 'Wechselpräposition (Wohin?)',
        text: "Ich hänge das Bild {an} ___ (f) Wand.",
        noun: "Wand (f)",
        verbDesc: {
            es: "An: En/A (contacto vertical). Con movimiento rige Akkusativ.",
            en: "An: On/At. With movement takes Accusative.",
            tr: "An: -e/-a (temaslı). Hareket bildirirken Akkusativ alır.",
            de: "An: Wechselpräposition (Wohin = Akkusativ)."
        },
        explanation: {
            es: "Acción de colgar (¿Adónde?). Femenino Akkusativ -> 'die'.",
            en: "Action of hanging (Whereto?). Feminine Accusative -> 'die'.",
            tr: "Asma eylemi (Nereye?). Dişil Akkusativ -> 'die'.",
            de: "Bewegung (Wohin?). Feminin Akkusativ -> 'die'."
        },
        slots: [ { type: 'art', answer: "die", options: ["die", "der", "den", "dem"] } ]
    },
    {
        id: 46, level: 'B2', case: 'Dat', category: 'Wechselpräposition (Wo?)',
        text: "Das Bild hängt {an} ___ (f) Wand.",
        noun: "Wand (f)",
        verbDesc: {
            es: "An: En/A. Con posición rige Dativo.",
            en: "An: On/At. With position takes Dative.",
            tr: "An: -de/-da. Konum bildirirken Dativ alır.",
            de: "An: Wechselpräposition (Wo = Dativ)."
        },
        explanation: {
            es: "El cuadro ya está ahí (¿Dónde?). Femenino Dativo -> 'der'.",
            en: "The picture is already there (Where?). Feminine Dative -> 'der'.",
            tr: "Resim orada duruyor (Nerede?). Dişil Dativ -> 'der'.",
            de: "Statische Lage (Wo?). Feminin Dativ -> 'der'."
        },
        slots: [ { type: 'art', answer: "der", options: ["die", "der", "den", "dem"] } ]
    },
    {
        id: 47, level: 'B1', case: 'Dat', category: 'Preposición Dativa',
        text: "Ich komme {aus} ___ (n) Büro.",
        noun: "Büro (n)",
        verbDesc: {
            es: "Aus: De (interior). Siempre rige Dativo.",
            en: "Aus: Out of / From. Always takes Dative.",
            tr: "Aus: -den/-dan. Daima Dativ alır.",
            de: "Aus: Präposition mit Dativ."
        },
        explanation: {
            es: "'Aus' exige Dativo. Neutro Dativo -> 'dem'.",
            en: "'Aus' requires Dative. Neuter Dative -> 'dem'.",
            tr: "'Aus' Dativ ister. Nötr Dativ -> 'dem'.",
            de: "'Aus' verlangt Dativ. Neutrum Dativ -> 'dem'."
        },
        slots: [ { type: 'art', answer: "dem", options: ["das", "dem", "des", "den"] } ]
    },
    {
        id: 48, level: 'B2', case: 'Dat/Akk', category: 'Doble Objeto',
        text: "Ich {empfehle} ___ (f) Freundin ___ (m) Wein.",
        noun: "Freundin (f), Wein (m)",
        verbDesc: {
            es: "Empfehlen: Recomendar. (Nom empfiehlt Dat Akk).",
            en: "Empfehlen: To recommend. (Nom recommends Dat Akk).",
            tr: "Empfehlen: Tavsiye etmek. (Nom Dat'a Akk tavsiye eder).",
            de: "Empfehlen: (Nom empfiehlt Dat Akk)."
        },
        explanation: {
            es: "¿A quién? (Dativo). ¿Qué? (Akkusativ).",
            en: "To whom? (Dative). What? (Accusative).",
            tr: "Kime? (Dat). Neyi? (Akk).",
            de: "Wem? (Dat). Was? (Akk)."
        },
        slots: [
            { type: 'art', answer: "einer", options: ["eine", "einer", "einem", "einen"] },
            { type: 'art', answer: "einen", options: ["ein", "eine", "einer", "einen"] }
        ]
    },
    {
        id: 49, level: 'B1', case: 'Akk', category: 'Preposición Akkusativ',
        text: "Ich habe ein Geschenk {für} ___ (pl) Kinder.",
        noun: "Kinder (pl)",
        verbDesc: {
            es: "Für: Para. Siempre rige Akkusativ.",
            en: "Für: For. Always takes Accusative.",
            tr: "Für: İçin. Daima Akkusativ alır.",
            de: "Für: Präposition mit Akkusativ."
        },
        explanation: {
            es: "'Für' exige Akkusativ. Plural Akkusativ -> 'die'.",
            en: "'Für' requires Accusative. Plural Accusative -> 'die'.",
            tr: "'Für' Akkusativ ister. Çoğul Akkusativ -> 'die'.",
            de: "'Für' verlangt Akkusativ. Plural Akkusativ -> 'die'."
        },
        slots: [ { type: 'art', answer: "die", options: ["die", "der", "den", "dem"] } ]
    },
    {
        id: 50, level: 'B2', case: 'Dat', category: 'Verbo con Dativo',
        text: "Das {passiert} ___ (m) Experten oft.",
        noun: "Experte (m)",
        verbDesc: {
            es: "Passieren: Suceder/Pasar a alguien. Rige Dativo.",
            en: "Passieren: To happen to someone. Takes Dative.",
            tr: "Passieren: Başına gelmek. Dativ alır.",
            de: "Passieren: Dativ-Verb."
        },
        explanation: {
            es: "Suceder 'le' a alguien exige Dativo. Experte es N-Deklination.",
            en: "Happening to someone requires Dative. Experte is N-Declension.",
            tr: "Birinin başına gelmek Dativ ister. Experte N-Deklination'dır.",
            de: "Jemandem passieren verlangt Dativ. Experte ist N-Deklination."
        },
        slots: [ { type: 'art', answer: "dem", options: ["der", "den", "dem", "des"] } ]
    },
            {
        id: 51, level: 'B2', case: 'Gen', category: 'Preposición Genitiva',
        text: "{Trotz} ___ ___ Wetters gehen wir spazieren.",
        noun: "Wetter (n)",
        verbDesc: {
            es: "Trotz: A pesar de. Rige Genitivo.",
            en: "Trotz: Despite. Takes Genitive.",
            tr: "Trotz: -e rağmen. Genitiv alır.",
            de: "Trotz: Präposition mit Genitiv."
        },
        explanation: {
            es: "Genitivo neutro. Artículo 'des', adjetivo declinación débil '-en'.",
            en: "Neuter Genitive. Article 'des', weak adjective ending '-en'.",
            tr: "Nötr Genitiv. Tanımlayıcı 'des', zayıf sıfat tamlaması '-en'.",
            de: "Neutrum Genitiv. Artikel 'des', schwache Adjektivendung '-en'."
        },
        slots: [
            { type: 'art', answer: "des", options: ["das", "dem", "des", "den"] },
            { type: 'adj', answer: "schlechten", options: ["schlechtes", "schlechten", "schlechtem", "schlechter"] }
        ]
    },
    {
        id: 52, level: 'C1', case: 'Dat', category: 'Verbo con Dativo (N-Dekl)',
        text: "Ich {begegne} ___ ___ Herrn.",
        noun: "Herr (m)",
        verbDesc: {
            es: "Begegnen: Encontrarse (por casualidad). Rige Dativo.",
            en: "Begegnen: To encounter. Takes Dative.",
            tr: "Begegnen: Rastlamak. Dativ alır.",
            de: "Begegnen: Dativ-Verb."
        },
        explanation: {
            es: "Dativo masculino. Herr es N-Deklination. Adjetivo mixto '-en'.",
            en: "Masculine Dative. Herr is N-Declension. Mixed adjective '-en'.",
            tr: "Eril Dativ. Herr N-Deklination'dır. Karışık sıfat '-en'.",
            de: "Maskulin Dativ. Herr ist N-Deklination. Adjektiv '-en'."
        },
        slots: [
            { type: 'art', answer: "einem", options: ["einen", "einem", "einer", "ein"] },
            { type: 'adj', answer: "alten", options: ["alter", "alten", "altem", "altes"] }
        ]
    },
    {
        id: 53, level: 'B2', case: 'Gen', category: 'Preposición Genitiva',
        text: "{Während} ___ ___ Sitzung bin ich eingeschlafen.",
        noun: "Sitzung (f)",
        verbDesc: {
            es: "Während: Durante. Rige Genitivo.",
            en: "Während: During. Takes Genitive.",
            tr: "Während: Esnasında. Genitiv alır.",
            de: "Während: Präposition mit Genitiv."
        },
        explanation: {
            es: "Genitivo femenino. Artículo 'der', adjetivo débil '-en'.",
            en: "Feminine Genitive. Article 'der', weak adjective ending '-en'.",
            tr: "Dişil Genitiv. Tanımlayıcı 'der', zayıf sıfat '-en'.",
            de: "Feminin Genitiv. Artikel 'der', schwache Adjektivendung '-en'."
        },
        slots: [
            { type: 'art', answer: "der", options: ["die", "der", "den", "des"] },
            { type: 'adj', answer: "langweiligen", options: ["langweilige", "langweiligen", "langweiliger", "langweiliges"] }
        ]
    },
    {
        id: 54, level: 'C1', case: 'Nom', category: 'Declinación Fuerte (Sin Art)',
        text: "___ ___ Brot schmeckt am besten.",
        noun: "Brot (n)",
        verbDesc: {
            es: "Schmecken: Gustar (sabor).",
            en: "Schmecken: To taste good.",
            tr: "Schmecken: Tadı güzel olmak.",
            de: "Schmecken: Gut schmecken."
        },
        explanation: {
            es: "Nominativo neutro sin artículo. El adjetivo 'roba' la terminación del artículo (das -> -es).",
            en: "Neuter Nominative without article. Adjective takes article ending (das -> -es).",
            tr: "Tanımlayıcısız nötr Nominativ. Sıfat tanımlayıcı ekini alır (das -> -es).",
            de: "Neutrum Nominativ ohne Artikel. Starke Adjektivendung '-es'."
        },
        slots: [
            { type: 'adj', answer: "Frisches", options: ["Frische", "Frischen", "Frisches", "Frischem"] }
        ]
    },
    {
        id: 55, level: 'B2', case: 'Dat', category: 'Preposición Dativa',
        text: "Ich trinke meinen Kaffee {mit} ___ ___ Milch.",
        noun: "Milch (f)",
        verbDesc: {
            es: "Mit: Con. Siempre rige Dativo.",
            en: "Mit: With. Always takes Dative.",
            tr: "Mit: İle. Daima Dativ alır.",
            de: "Mit: Präposition mit Dativ."
        },
        explanation: {
            es: "Dativo femenino sin artículo. Declinación fuerte (die/der -> -er).",
            en: "Feminine Dative without article. Strong declension (die/der -> -er).",
            tr: "Tanımlayıcısız dişil Dativ. Güçlü sıfat tamlaması '-er'.",
            de: "Feminin Dativ ohne Artikel. Starke Adjektivendung '-er'."
        },
        slots: [
            { type: 'adj', answer: "warmer", options: ["warme", "warmen", "warmer", "warmes"] }
        ]
    },
    {
        id: 56, level: 'C1', case: 'Gen', category: 'Preposición Genitiva',
        text: "{Infolge} ___ ___ Fehlers wurde das Projekt gestoppt.",
        noun: "Fehler (m)",
        verbDesc: {
            es: "Infolge: Como consecuencia de. Rige Genitivo.",
            en: "Infolge: As a result of. Takes Genitive.",
            tr: "Infolge: -den dolayı. Genitiv alır.",
            de: "Infolge: Präposition mit Genitiv."
        },
        explanation: {
            es: "Genitivo masculino. Artículo 'eines', adjetivo mixto '-en'.",
            en: "Masculine Genitive. Article 'eines', mixed adjective '-en'.",
            tr: "Eril Genitiv. Tanımlayıcı 'eines', karışık sıfat '-en'.",
            de: "Maskulin Genitiv. Artikel 'eines', Adjektivendung '-en'."
        },
        slots: [
            { type: 'art', answer: "eines", options: ["einem", "einen", "eines", "ein"] },
            { type: 'adj', answer: "schweren", options: ["schwere", "schweren", "schwerer", "schweres"] }
        ]
    },
    {
        id: 57, level: 'B2', case: 'Nom', category: 'Adjetivo tras cuantificador',
        text: "{Alle} ___ Studenten haben die Prüfung bestanden.",
        noun: "Studenten (pl)",
        verbDesc: {
            es: "Bestehen: Aprobar/Pasar.",
            en: "Bestehen: To pass an exam.",
            tr: "Bestehen: Başarmak/Geçmek.",
            de: "Bestehen: Prüfung bestehen."
        },
        explanation: {
            es: "Tras 'alle' (plural), el adjetivo siempre sigue la declinación débil (-en).",
            en: "After 'alle' (plural), the adjective always takes the weak ending (-en).",
            tr: "'Alle'den sonra sıfat daima zayıf ek (-en) alır.",
            de: "Nach 'alle' folgt die schwache Adjektivendung (-en)."
        },
        slots: [
            { type: 'adj', answer: "fleißigen", options: ["fleißige", "fleißigen", "fleißiger", "fleißiges"] }
        ]
    },
    {
        id: 58, level: 'B2', case: 'Nom', category: 'Adjetivo tras cuantificador',
        text: "{Viele} ___ Menschen reisen gerne.",
        noun: "Menschen (pl)",
        verbDesc: {
            es: "Reisen: Viajar.",
            en: "Reisen: To travel.",
            tr: "Reisen: Seyahat etmek.",
            de: "Reisen: Verb."
        },
        explanation: {
            es: "Tras 'viele' (plural), el adjetivo sigue la declinación fuerte (-e).",
            en: "After 'viele' (plural), the adjective takes the strong ending (-e).",
            tr: "'Viele'den sonra sıfat güçlü ek (-e) alır.",
            de: "Nach 'viele' folgt die starke Adjektivendung (-e)."
        },
        slots: [
            { type: 'adj', answer: "junge", options: ["junge", "jungen", "junger", "junges"] }
        ]
    },
    {
        id: 59, level: 'C1', case: 'Akk', category: 'Verbo Reflexivo',
        text: "Ich {sehe} mir ___ ___ Film an.",
        noun: "Film (m)",
        verbDesc: {
            es: "Sich ansehen: Mirar/Ver algo. (Sujeto Nom, Cosa Akk).",
            en: "Sich ansehen: To watch something.",
            tr: "Sich ansehen: İzlemek.",
            de: "Sich etwas ansehen (Akk)."
        },
        explanation: {
            es: "Objeto directo masculino. Artículo 'den', adjetivo débil '-en'.",
            en: "Masculine direct object. Article 'den', weak adjective '-en'.",
            tr: "Eril belirtili nesne. Tanımlayıcı 'den', zayıf sıfat '-en'.",
            de: "Maskulin Akkusativ Objekt. Artikel 'den', Adjektiv '-en'."
        },
        slots: [
            { type: 'art', answer: "den", options: ["der", "den", "dem", "des"] },
            { type: 'adj', answer: "neuen", options: ["neue", "neuen", "neuem", "neues"] }
        ]
    },
    {
        id: 60, level: 'B2', case: 'Dat', category: 'Preposición Dativa',
        text: "Ich wohne {seit} ___ ___ Monat in Berlin.",
        noun: "Monat (m)",
        verbDesc: {
            es: "Seit: Desde hace. Rige Dativo.",
            en: "Seit: Since. Takes Dative.",
            tr: "Seit: -den beri. Dativ alır.",
            de: "Seit: Präposition mit Dativ."
        },
        explanation: {
            es: "Dativo masculino. Artículo 'einem', adjetivo mixto '-en'.",
            en: "Masculine Dative. Article 'einem', mixed adjective '-en'.",
            tr: "Eril Dativ. Tanımlayıcı 'einem', karışık sıfat '-en'.",
            de: "Maskulin Dativ. Artikel 'einem', Adjektiv '-en'."
        },
        slots: [
            { type: 'art', answer: "einem", options: ["ein", "einen", "einem", "einer"] },
            { type: 'adj', answer: "ganzen", options: ["ganzer", "ganzen", "ganzem", "ganzes"] }
        ]
    },
    {
        id: 61, level: 'C1', case: 'Gen', category: 'Preposición Genitiva',
        text: "{Unweit} ___ ___ Parks befindet sich das Museum.",
        noun: "Park (m)",
        verbDesc: {
            es: "Unweit: No lejos de. Rige Genitivo.",
            en: "Unweit: Not far from. Takes Genitive.",
            tr: "Unweit: Yakınında. Genitiv alır.",
            de: "Unweit: Präposition mit Genitiv."
        },
        explanation: {
            es: "Genitivo masculino. Artículo 'des', adjetivo débil '-en'.",
            en: "Masculine Genitive. Article 'des', weak adjective '-en'.",
            tr: "Eril Genitiv. Tanımlayıcı 'des', zayıf sıfat '-en'.",
            de: "Maskulin Genitiv. Artikel 'des', Adjektiv '-en'."
        },
        slots: [
            { type: 'art', answer: "des", options: ["der", "den", "dem", "des"] },
            { type: 'adj', answer: "großen", options: ["große", "großen", "großer", "großes"] }
        ]
    },
    {
        id: 62, level: 'C1', case: 'Akk', category: 'Declinación Fuerte (Sin Art)',
        text: "Er trinkt am liebsten ___ ___ Wein.",
        noun: "Wein (m)",
        verbDesc: {
            es: "Trinken: Beber.",
            en: "Trinken: To drink.",
            tr: "Trinken: İçmek.",
            de: "Trinken: Verb."
        },
        explanation: {
            es: "Objeto directo masculino sin artículo. Declinación fuerte (der/den -> -en).",
            en: "Masculine direct object without article. Strong declension (der/den -> -en).",
            tr: "Tanımlayıcısız eril belirtili nesne. Güçlü sıfat tamlaması '-en'.",
            de: "Maskulin Akkusativ ohne Artikel. Starke Adjektivendung '-en'."
        },
        slots: [
            { type: 'adj', answer: "trockenen", options: ["trockener", "trockenen", "trockenem", "trockenes"] }
        ]
    },
    {
        id: 63, level: 'B2', case: 'Nom', category: 'Adjetivo Mixto',
        text: "Er ist ___ ___ Experte.",
        noun: "Experte (m)",
        verbDesc: {
            es: "Sein: Ser. Copulativo (Nominativo).",
            en: "Sein: To be. Copula (Nominative).",
            tr: "Sein: Olmak. Nominativ alır.",
            de: "Sein: Kopulaverb."
        },
        explanation: {
            es: "Nominativo masculino. Artículo 'ein', adjetivo mixto '-er'. Experte es N-Deklination.",
            en: "Masculine Nominative. Article 'ein', mixed adjective '-er'. Experte is N-Declension.",
            tr: "Eril Nominativ. Tanımlayıcı 'ein', karışık sıfat '-er'. Experte N-Deklination'dır.",
            de: "Maskulin Nominativ. Artikel 'ein', gemischte Adjektivendung '-er'."
        },
        slots: [
            { type: 'art', answer: "ein", options: ["ein", "einer", "einem", "einen"] },
            { type: 'adj', answer: "bekannter", options: ["bekannte", "bekannten", "bekannter", "bekanntes"] }
        ]
    },
    {
        id: 64, level: 'B2', case: 'Dat', category: 'Preposición Dativa',
        text: "Wir sprechen {mit} ___ ___ Kindern.",
        noun: "Kinder (pl)",
        verbDesc: {
            es: "Mit: Con. Siempre rige Dativo.",
            en: "Mit: With. Always takes Dative.",
            tr: "Mit: İle. Daima Dativ alır.",
            de: "Mit: Präposition mit Dativ."
        },
        explanation: {
            es: "Dativo plural. Artículo 'den', adjetivo débil '-en'.",
            en: "Plural Dative. Article 'den', weak adjective '-en'.",
            tr: "Çoğul Dativ. Tanımlayıcı 'den', zayıf sıfat '-en'.",
            de: "Plural Dativ. Artikel 'den', Adjektiv '-en'."
        },
        slots: [
            { type: 'art', answer: "den", options: ["die", "der", "den", "dem"] },
            { type: 'adj', answer: "kleinen", options: ["kleine", "kleinen", "kleiner", "kleines"] }
        ]
    },
    {
        id: 65, level: 'C1', case: 'Akk', category: 'Preposición Akkusativ',
        text: "Ich tue das {für} ___ ___ Erfolg.",
        noun: "Erfolg (m)",
        verbDesc: {
            es: "Für: Para. Siempre rige Akkusativ.",
            en: "Für: For. Always takes Accusative.",
            tr: "Für: İçin. Daima Akkusativ alır.",
            de: "Für: Präposition mit Akkusativ."
        },
        explanation: {
            es: "Akkusativ masculino. Artículo 'den', adjetivo débil '-en'.",
            en: "Masculine Accusative. Article 'den', weak adjective '-en'.",
            tr: "Eril Akkusativ. Tanımlayıcı 'den', zayıf sıfat '-en'.",
            de: "Maskulin Akkusativ. Artikel 'den', Adjektiv '-en'."
        },
        slots: [
            { type: 'art', answer: "den", options: ["der", "den", "dem", "des"] },
            { type: 'adj', answer: "großen", options: ["große", "großen", "großer", "großes"] }
        ]
    },
    {
        id: 66, level: 'C1', case: 'Dat', category: 'Declinación Fuerte (Sin Art)',
        text: "Das Zimmer ist {mit} ___ ___ Möbeln eingerichtet.",
        noun: "Möbel (pl)",
        verbDesc: {
            es: "Mit: Con. Rige Dativo.",
            en: "Mit: With. Takes Dative.",
            tr: "Mit: İle. Dativ alır.",
            de: "Mit: Präposition mit Dativ."
        },
        explanation: {
            es: "Dativo plural sin artículo. Adjetivo fuerte (-en).",
            en: "Plural Dative without article. Strong adjective ending (-en).",
            tr: "Tanımlayıcısız çoğul Dativ. Güçlü sıfat tamlaması '-en'.",
            de: "Plural Dativ ohne Artikel. Starke Adjektivendung '-en'."
        },
        slots: [
            { type: 'adj', answer: "modernen", options: ["moderne", "modernen", "moderner", "modernes"] }
        ]
    },
    {
        id: 67, level: 'B2', case: 'Dat', category: 'Verbo con Dativo',
        text: "Ich {vertraue} ___ ___ Nachricht nicht.",
        noun: "Nachricht (f)",
        verbDesc: {
            es: "Vertrauen: Confiar. Rige Dativo.",
            en: "Vertrauen: To trust. Takes Dative.",
            tr: "Vertrauen: Güvenmek. Dativ alır.",
            de: "Vertrauen: Dativ-Verb."
        },
        explanation: {
            es: "Dativo femenino. Artículo 'der', adjetivo débil '-en'.",
            en: "Feminine Dative. Article 'der', weak adjective '-en'.",
            tr: "Dişil Dativ. Tanımlayıcı 'der', zayıf sıfat '-en'.",
            de: "Feminin Dativ. Artikel 'der', Adjektiv '-en'."
        },
        slots: [
            { type: 'art', answer: "der", options: ["die", "der", "den", "dem"] },
            { type: 'adj', answer: "offiziellen", options: ["offizielle", "offiziellen", "offizieller", "offizielles"] }
        ]
    },
    {
        id: 68, level: 'C1', case: 'Gen', category: 'Preposición Genitiva',
        text: "{Abseits} ___ ___ Weges fanden wir einen Schatz.",
        noun: "Weg (m)",
        verbDesc: {
            es: "Abseits: Apartado de. Rige Genitivo.",
            en: "Abseits: Away from. Takes Genitive.",
            tr: "Abseits: Uzağında. Genitiv alır.",
            de: "Abseits: Präposition mit Genitiv."
        },
        explanation: {
            es: "Genitivo masculino. Artículo 'des', adjetivo débil '-en'.",
            en: "Masculine Genitive. Article 'des', weak adjective '-en'.",
            tr: "Eril Genitiv. Tanımlayıcı 'des', zayıf sıfat '-en'.",
            de: "Maskulin Genitiv. Artikel 'des', Adjektiv '-en'."
        },
        slots: [
            { type: 'art', answer: "des", options: ["der", "den", "dem", "des"] },
            { type: 'adj', answer: "befahrenen", options: ["befahrene", "befahrenen", "befahrener", "befahrenes"] }
        ]
    },
    {
        id: 69, level: 'B2', case: 'Dat/Akk', category: 'Doble Objeto',
        text: "Ich {schenke} ___ ___ Nichte ___ ___ Puppe.",
        noun: "Nichte (f), Puppe (f)",
        verbDesc: {
            es: "Schenken: Regalar. (Nom schenkt Dat Akk).",
            en: "Schenken: To gift.",
            tr: "Schenken: Hediye etmek.",
            de: "Schenken: Verb."
        },
        explanation: {
            es: "¿A quién? (Femenino Dativo -> 'der'). ¿Qué? (Femenino Akkusativ -> 'eine').",
            en: "To whom? (Fem Dative -> 'der'). What? (Fem Accusative -> 'eine').",
            tr: "Kime? (Dişil Dativ -> 'der'). Neyi? (Dişil Akkusativ -> 'eine').",
            de: "Wem? (Fem Dativ -> 'der'). Was? (Fem Akkusativ -> 'eine')."
        },
        slots: [
            { type: 'art', answer: "der", options: ["die", "der", "den", "dem"] },
            { type: 'art', answer: "eine", options: ["ein", "eine", "einer", "einen"] }
        ]
    },
    {
        id: 70, level: 'C1', case: 'Akk', category: 'Adjetivo Mixto',
        text: "Ich habe {keinen} ___ Zweifel.",
        noun: "Zweifel (m)",
        verbDesc: {
            es: "Haben: Tener. Rige Akkusativ.",
            en: "Haben: To have.",
            tr: "Haben: Sahip olmak.",
            de: "Haben: Akkusativ-Verb."
        },
        explanation: {
            es: "Akkusativ masculino negativo. Artículo 'keinen', adjetivo mixto '-en'.",
            en: "Masculine Accusative negative. Article 'keinen', mixed adjective '-en'.",
            tr: "Eril Akkusativ olumsuz. Tanımlayıcı 'keinen', karışık sıfat '-en'.",
            de: "Maskulin Akkusativ Negation. Artikel 'keinen', Adjektiv '-en'."
        },
        slots: [
            { type: 'adj', answer: "jeglichen", options: ["jegliche", "jeglichen", "jeglicher", "jegliches"] }
        ]
    },
    {
        id: 71, level: 'B2', case: 'Nom', category: 'Adjetivo Mixto',
        text: "Das ist ___ ___ Ergebnis.",
        noun: "Ergebnis (n)",
        verbDesc: {
            es: "Sein: Ser.",
            en: "Sein: To be.",
            tr: "Sein: Olmak.",
            de: "Sein: Kopula."
        },
        explanation: {
            es: "Nominativo neutro. Artículo 'ein', adjetivo mixto '-es'.",
            en: "Neuter Nominative. Article 'ein', mixed adjective '-es'.",
            tr: "Nötr Nominativ. Tanımlayıcı 'ein', karışık sıfat '-es'.",
            de: "Neutrum Nominativ. Artikel 'ein', Adjektiv '-es'."
        },
        slots: [
            { type: 'art', answer: "ein", options: ["ein", "einer", "einem", "einen"] },
            { type: 'adj', answer: "hervorragendes", options: ["hervorragende", "hervorragenden", "hervorragendes", "hervorragendem"] }
        ]
    },
    {
        id: 72, level: 'C1', case: 'Akk', category: 'Adjetivo tras cuantificador',
        text: "Ich kenne {beide} ___ Männer.",
        noun: "Männer (pl)",
        verbDesc: {
            es: "Kennen: Conocer. Rige Akkusativ.",
            en: "Kennen: To know.",
            tr: "Kennen: Tanımak.",
            de: "Kennen: Akkusativ-Verb."
        },
        explanation: {
            es: "Tras 'beide' (plural), el adjetivo sigue la declinación débil (-en).",
            en: "After 'beide' (plural), the adjective takes the weak ending (-en).",
            tr: "'Beide'den sonra sıfat zayıf ek (-en) alır.",
            de: "Nach 'beide' folgt die schwache Adjektivendung (-en)."
        },
        slots: [
            { type: 'adj', answer: "jungen", options: ["junge", "jungen", "junger", "junges"] }
        ]
    },
    {
        id: 73, level: 'B2', case: 'Nom', category: 'Adjetivo tras cuantificador',
        text: "{Solch} ___ Wetter macht mich glücklich.",
        noun: "Wetter (n)",
        verbDesc: {
            es: "Machen: Hacer.",
            en: "Machen: To make.",
            tr: "Machen: Yapmak.",
            de: "Machen: Verb."
        },
        explanation: {
            es: "Tras 'solch' (sin declinar), el adjetivo sigue la declinación fuerte (-es).",
            en: "After 'solch' (undeclined), the adjective takes the strong ending (-es).",
            tr: "'Solch'tan sonra sıfat güçlü ek (-es) alır.",
            de: "Nach 'solch' folgt die starke Adjektivendung (-es)."
        },
        slots: [
            { type: 'adj', answer: "schönes", options: ["schöne", "schönen", "schönes", "schöner"] }
        ]
    },
    {
        id: 74, level: 'C1', case: 'Dat', category: 'Preposición Dativa',
        text: "Ich bin {mit} ___ ___ Ergebnis zufrieden.",
        noun: "Ergebnis (n)",
        verbDesc: {
            es: "Zufrieden sein mit: Estar satisfecho con. Rige Dativo.",
            en: "Zufrieden sein mit: To be satisfied with. Takes Dative.",
            tr: "Zufrieden sein mit: -den memnun olmak. Dativ alır.",
            de: "Zufrieden sein mit + Dativ."
        },
        explanation: {
            es: "Dativo neutro. Artículo 'dem', adjetivo débil '-en'.",
            en: "Neuter Dative. Article 'dem', weak adjective '-en'.",
            tr: "Nötr Dativ. Tanımlayıcı 'dem', zayıf sıfat '-en'.",
            de: "Neutrum Dativ. Artikel 'dem', Adjektiv '-en'."
        },
        slots: [
            { type: 'art', answer: "dem", options: ["das", "dem", "des", "den"] },
            { type: 'adj', answer: "aktuellen", options: ["aktuelle", "aktuellen", "aktueller", "aktuelles"] }
        ]
    },
    {
        id: 75, level: 'B2', case: 'Nom', category: 'Adjetivo Mixto',
        text: "___ ___ Frau hat angerufen.",
        noun: "Frau (f)",
        verbDesc: {
            es: "Anrufen: Llamar (por teléfono).",
            en: "Anrufen: To call.",
            tr: "Anrufen: Aramak.",
            de: "Anrufen: Verb."
        },
        explanation: {
            es: "Nominativo femenino. Artículo 'eine', adjetivo mixto '-e'.",
            en: "Feminine Nominative. Article 'eine', mixed adjective '-e'.",
            tr: "Dişil Nominativ. Tanımlayıcı 'eine', karışık sıfat '-e'.",
            de: "Feminin Nominativ. Artikel 'eine', Adjektiv '-e'."
        },
        slots: [
            { type: 'art', answer: "Eine", options: ["Ein", "Eine", "Einer", "Einen"] },
            { type: 'adj', answer: "fremde", options: ["fremde", "fremden", "fremder", "fremdes"] }
        ]
    } ,
{
        id: 76, level: 'B2', case: 'Akk', category: 'Verbo con Preposición Fija',
        text: "Ich {warte} auf ___ ___ Bus.",
        noun: "Bus (m)",
        verbDesc: {
            es: "Warten auf: Esperar a. Rige siempre Akkusativ.",
            en: "Warten auf: To wait for. Always takes Accusative.",
            tr: "Warten auf: Bir şeyi/birini beklemek. Daima Akkusativ alır.",
            de: "Warten auf + Akkusativ."
        },
        explanation: {
            es: "Preposición fija 'auf' + Akkusativ. Masculino 'den', adjetivo débil '-en'.",
            en: "Fixed preposition 'auf' + Accusative. Masculine 'den', weak adjective '-en'.",
            tr: "Sabit edat 'auf' + Akkusativ. Eril 'den', zayıf sıfat '-en'.",
            de: "Präposition 'auf' verlangt Akkusativ. Maskulin 'den', Adjektiv '-en'."
        },
        slots: [
            { type: 'art', answer: "den", options: ["der", "den", "dem", "des"] },
            { type: 'adj', answer: "nächsten", options: ["nächste", "nächsten", "nächster", "nächstes"] }
        ]
    },
    {
        id: 77, level: 'B2', case: 'Dat', category: 'Verbo con Preposición Fija',
        text: "Er {träumt} von ___ ___ Haus.",
        noun: "Haus (n)",
        verbDesc: {
            es: "Träumen von: Soñar con. Rige siempre Dativo.",
            en: "Träumen von: To dream of. Always takes Dative.",
            tr: "Träumen von: Hayalini kurmak/Rüyasında görmek. Daima Dativ alır.",
            de: "Träumen von + Dativ."
        },
        explanation: {
            es: "Preposición fija 'von' + Dativo. Neutro 'einem', adjetivo mixto '-en'.",
            en: "Fixed preposition 'von' + Dative. Neuter 'einem', mixed adjective '-en'.",
            tr: "Sabit edat 'von' + Dativ. Nötr 'einem', karışık sıfat '-en'.",
            de: "Präposition 'von' verlangt Dativ. Neutrum 'einem', Adjektiv '-en'."
        },
        slots: [
            { type: 'art', answer: "einem", options: ["ein", "einen", "einem", "einer"] },
            { type: 'adj', answer: "großen", options: ["großes", "großen", "großem", "großer"] }
        ]
    },
    {
        id: 78, level: 'C1', case: 'Gen', category: 'Preposición Genitiva',
        text: "{Außerhalb} ___ ___ Stadt ist es ruhig.",
        noun: "Stadt (f)",
        verbDesc: {
            es: "Außerhalb: Fuera de. Rige Genitivo.",
            en: "Außerhalb: Outside of. Takes Genitive.",
            tr: "Außerhalb: Dışında. Genitiv alır.",
            de: "Außerhalb: Präposition mit Genitiv."
        },
        explanation: {
            es: "Genitivo femenino. Artículo 'der', adjetivo débil '-en'.",
            en: "Feminine Genitive. Article 'der', weak adjective '-en'.",
            tr: "Dişil Genitiv. Tanımlayıcı 'der', zayıf sıfat '-en'.",
            de: "Feminin Genitiv. Artikel 'der', Adjektiv '-en'."
        },
        slots: [
            { type: 'art', answer: "der", options: ["die", "der", "den", "des"] },
            { type: 'adj', answer: "kleinen", options: ["kleine", "kleinen", "kleiner", "kleines"] }
        ]
    },
    {
        id: 79, level: 'C1', case: 'Nom', category: 'Adjetivación Sustantivada',
        text: "Es gibt {nichts} ___ ___ zu berichten.",
        noun: "Neues (n)",
        verbDesc: {
            es: "Nichts: Nada. Lo que le sigue se declina como neutro sustantivado.",
            en: "Nichts: Nothing. Following adjective is a neuter noun.",
            tr: "Nichts: Hiçbir şey. Sonrasındaki sıfat nötr isim gibi çekimlenir.",
            de: "Nichts + substantiviertes Adjektiv."
        },
        explanation: {
            es: "Después de 'nichts', el adjetivo se sustantiva y lleva terminación '-es' (fuerte).",
            en: "After 'nichts', the adjective becomes a noun with '-es' (strong ending).",
            tr: "'Nichts'ten sonra sıfat '-es' (güçlü) eki alarak isimleşir.",
            de: "Nach 'nichts' folgt die starke Endung '-es'."
        },
        slots: [
            { type: 'adj', answer: "Interessantes", options: ["Interessante", "Interessanten", "Interessantes", "Interessant"] }
        ]
    },
    {
        id: 80, level: 'C1', case: 'Nom', category: 'Participio I como Adjetivo',
        text: "___ ___ Kinder spielen im Garten.",
        noun: "Kinder (pl)",
        verbDesc: {
            es: "Lachen (lachend): Reír. El Participio I funciona como adjetivo (acción en curso).",
            en: "Lachen (lachend): To laugh. Participle I as adjective (ongoing action).",
            tr: "Lachen (lachend): Gülmek. I. Ortaç sıfat olarak kullanılır.",
            de: "Partizip I als Adjektiv."
        },
        explanation: {
            es: "Nominativo plural sin artículo. Declinación fuerte '-e'.",
            en: "Plural Nominative without article. Strong ending '-e'.",
            tr: "Tanımlayıcısız çoğul Nominativ. Güçlü ek '-e'.",
            de: "Plural Nominativ ohne Artikel. Starke Endung '-e'."
        },
        slots: [
            { type: 'adj', answer: "Lachende", options: ["Lachende", "Lachenden", "Lachender", "Lachendes"] }
        ]
    },
    {
        id: 81, level: 'B2', case: 'Akk', category: 'Preposición Akkusativ',
        text: "Er geht {durch} ___ ___ Park.",
        noun: "Park (m)",
        verbDesc: {
            es: "Durch: A través de. Siempre Akkusativ.",
            en: "Durch: Through. Always Accusative.",
            tr: "Durch: İçinden. Daima Akkusativ.",
            de: "Durch + Akkusativ."
        },
        explanation: {
            es: "Akkusativ masculino. Artículo 'den', adjetivo débil '-en'.",
            en: "Masculine Accusative. Article 'den', weak adjective '-en'.",
            tr: "Eril Akkusativ. Tanımlayıcı 'den', zayıf sıfat '-en'.",
            de: "Maskulin Akkusativ. Artikel 'den', Adjektiv '-en'."
        },
        slots: [
            { type: 'art', answer: "den", options: ["der", "den", "dem", "des"] },
            { type: 'adj', answer: "dunklen", options: ["dunkle", "dunklen", "dunkler", "dunkles"] }
        ]
    },
    {
        id: 82, level: 'C1', case: 'Gen', category: 'Preposición Genitiva',
        text: "{Anstatt} ___ ___ Mantels nahm er nur einen Pullover.",
        noun: "Mantel (m)",
        verbDesc: {
            es: "Anstatt: En lugar de. Rige Genitivo.",
            en: "Anstatt: Instead of. Takes Genitive.",
            tr: "Anstatt: Yerine. Genitiv alır.",
            de: "Anstatt: Präposition mit Genitiv."
        },
        explanation: {
            es: "Genitivo masculino. Artículo 'eines', adjetivo mixto '-en'.",
            en: "Masculine Genitive. Article 'eines', mixed adjective '-en'.",
            tr: "Eril Genitiv. Tanımlayıcı 'eines', karışık sıfat '-en'.",
            de: "Maskulin Genitiv. Artikel 'eines', Adjektiv '-en'."
        },
        slots: [
            { type: 'art', answer: "eines", options: ["einem", "einen", "eines", "ein"] },
            { type: 'adj', answer: "warmen", options: ["warme", "warmen", "warmer", "warmes"] }
        ]
    },
    {
        id: 83, level: 'B2', case: 'Dat', category: 'Sustantivo + Preposición',
        text: "Ich habe {Interesse} an ___ ___ Projekt.",
        noun: "Projekt (n)",
        verbDesc: {
            es: "Interesse an: Interés en. Rige Dativo.",
            en: "Interesse an: Interest in. Takes Dative.",
            tr: "Interesse an: -e ilgi. Dativ alır.",
            de: "Interesse an + Dativ."
        },
        explanation: {
            es: "Dativo neutro. Artículo 'diesem', adjetivo débil '-en'.",
            en: "Neuter Dative. Article 'diesem', weak adjective '-en'.",
            tr: "Nötr Dativ. Tanımlayıcı 'diesem', zayıf sıfat '-en'.",
            de: "Neutrum Dativ. Artikel 'diesem', Adjektiv '-en'."
        },
        slots: [
            { type: 'art', answer: "diesem", options: ["dieses", "diesem", "diesen", "dieser"] },
            { type: 'adj', answer: "neuen", options: ["neue", "neuen", "neuem", "neues"] }
        ]
    },
    {
        id: 84, level: 'B2', case: 'Akk', category: 'Verbo con Preposición Fija',
        text: "Ich {erinnere} mich an ___ ___ Urlaub.",
        noun: "Urlaub (m)",
        verbDesc: {
            es: "Sich erinnern an: Recordar. Rige Akkusativ.",
            en: "Sich erinnern an: To remember. Takes Accusative.",
            tr: "Sich erinnern an: Hatırlamak. Akkusativ alır.",
            de: "Sich erinnern an + Akkusativ."
        },
        explanation: {
            es: "Akkusativ masculino. Artículo 'unseren', adjetivo débil '-en'.",
            en: "Masculine Accusative. Article 'unseren', weak adjective '-en'.",
            tr: "Eril Akkusativ. Tanımlayıcı 'unseren', zayıf sıfat '-en'.",
            de: "Maskulin Akkusativ. Artikel 'unseren', Adjektiv '-en'."
        },
        slots: [
            { type: 'art', answer: "unseren", options: ["unser", "unserem", "unseres", "unseren"] },
            { type: 'adj', answer: "schönen", options: ["schöne", "schönen", "schöner", "schönes"] }
        ]
    },
    {
        id: 85, level: 'C1', case: 'Gen', category: 'Preposición Genitiva',
        text: "{Innerhalb} ___ ___ Woche muss die Arbeit fertig sein.",
        noun: "Woche (f)",
        verbDesc: {
            es: "Innerhalb: Dentro de (tiempo/espacio). Rige Genitivo.",
            en: "Innerhalb: Within. Takes Genitive.",
            tr: "Innerhalb: İçerisinde. Genitiv alır.",
            de: "Innerhalb: Präposition mit Genitiv."
        },
        explanation: {
            es: "Genitivo femenino. Artículo 'einer', adjetivo mixto '-en'.",
            en: "Feminine Genitive. Article 'einer', mixed adjective '-en'.",
            tr: "Dişil Genitiv. Tanımlayıcı 'einer', karışık sıfat '-en'.",
            de: "Feminin Genitiv. Artikel 'einer', Adjektiv '-en'."
        },
        slots: [
            { type: 'art', answer: "einer", options: ["eine", "einer", "einem", "einen"] },
            { type: 'adj', answer: "einzigen", options: ["einzige", "einzigen", "einziger", "einziges"] }
        ]
    },
    {
        id: 86, level: 'C1', case: 'Dat', category: 'Verbo con Dativo (N-Dekl)',
        text: "Der Arzt {hilft} ___ ___ Patienten.",
        noun: "Patient (m)",
        verbDesc: {
            es: "Helfen: Ayudar. Rige Dativo.",
            en: "Helfen: To help. Takes Dative.",
            tr: "Helfen: Yardım etmek. Dativ alır.",
            de: "Helfen + Dativ."
        },
        explanation: {
            es: "Dativo masculino. Patient es N-Deklination. Adjetivo débil '-en'.",
            en: "Masculine Dative. Patient is N-Declension. Weak adjective '-en'.",
            tr: "Eril Dativ. Patient N-Deklination'dır. Zayıf sıfat '-en'.",
            de: "Maskulin Dativ. Patient ist N-Deklination. Adjektiv '-en'."
        },
        slots: [
            { type: 'art', answer: "dem", options: ["der", "den", "dem", "des"] },
            { type: 'adj', answer: "kranken", options: ["kranke", "kranken", "kranker", "krankes"] }
        ]
    },
    {
        id: 87, level: 'B2', case: 'Akk', category: 'Adjetivo + Preposición',
        text: "Ich bin {dankbar} für ___ ___ Hilfe.",
        noun: "Hilfe (f)",
        verbDesc: {
            es: "Dankbar sein für: Estar agradecido por. Rige Akkusativ.",
            en: "Dankbar sein für: To be grateful for. Takes Accusative.",
            tr: "Dankbar sein für: -den dolayı müteşekkir olmak. Akkusativ alır.",
            de: "Dankbar sein für + Akkusativ."
        },
        explanation: {
            es: "Akkusativ femenino. Artículo 'deine', adjetivo mixto '-e'.",
            en: "Feminine Accusative. Article 'deine', mixed adjective '-e'.",
            tr: "Dişil Akkusativ. Tanımlayıcı 'deine', karışık sıfat '-e'.",
            de: "Feminin Akkusativ. Artikel 'deine', Adjektiv '-e'."
        },
        slots: [
            { type: 'art', answer: "deine", options: ["dein", "deine", "deiner", "deinen"] },
            { type: 'adj', answer: "große", options: ["große", "großen", "großer", "großes"] }
        ]
    },
    {
        id: 88, level: 'C1', case: 'Akk', category: 'Verbo con Preposición Fija',
        text: "Ich muss mich an ___ ___ Klima {gewöhnen}.",
        noun: "Klima (n)",
        verbDesc: {
            es: "Sich gewöhnen an: Acostumbrarse a. Rige Akkusativ.",
            en: "Sich gewöhnen an: To get used to. Takes Accusative.",
            tr: "Sich gewöhnen an: -e alışmak. Akkusativ alır.",
            de: "Sich gewöhnen an + Akkusativ."
        },
        explanation: {
            es: "Akkusativ neutro. Artículo 'das', adjetivo débil '-en'.",
            en: "Neuter Accusative. Article 'das', weak adjective '-en'.",
            tr: "Nötr Akkusativ. Tanımlayıcı 'das', zayıf sıfat '-en'.",
            de: "Neutrum Akkusativ. Artikel 'das', Adjektiv '-en'."
        },
        slots: [
            { type: 'art', answer: "das", options: ["das", "dem", "des", "den"] },
            { type: 'adj', answer: "neue", options: ["neue", "neuen", "neuem", "neues"] }
        ]
    },
    {
        id: 89, level: 'B2', case: 'Dat', category: 'Adjetivo + Preposición',
        text: "Er hat {Angst} vor ___ ___ Hund.",
        noun: "Hund (m)",
        verbDesc: {
            es: "Angst haben vor: Tener miedo de. Rige Dativo.",
            en: "Angst haben vor: To be afraid of. Takes Dative.",
            tr: "Angst haben vor: -den korkmak. Dativ alır.",
            de: "Angst haben vor + Dativ."
        },
        explanation: {
            es: "Dativo masculino. Artículo 'dem', adjetivo débil '-en'.",
            en: "Masculine Dative. Article 'dem', weak adjective '-en'.",
            tr: "Eril Dativ. Tanımlayıcı 'dem', zayıf sıfat '-en'.",
            de: "Maskulin Dativ. Artikel 'dem', Adjektiv '-en'."
        },
        slots: [
            { type: 'art', answer: "dem", options: ["der", "den", "dem", "des"] },
            { type: 'adj', answer: "fremden", options: ["fremde", "fremden", "fremder", "fremdes"] }
        ]
    },
    {
        id: 90, level: 'C1', case: 'Akk', category: 'Adjetivo + Preposición',
        text: "Sie ist {stolz} auf ___ ___ Sohn.",
        noun: "Sohn (m)",
        verbDesc: {
            es: "Stolz sein auf: Estar orgulloso de. Rige Akkusativ.",
            en: "Stolz sein auf: To be proud of. Takes Accusative.",
            tr: "Stolz sein auf: -le gurur duymak. Akkusativ alır.",
            de: "Stolz sein auf + Akkusativ."
        },
        explanation: {
            es: "Akkusativ masculino. Artículo 'ihren', adjetivo débil '-en'.",
            en: "Masculine Accusative. Article 'ihren', weak adjective '-en'.",
            tr: "Eril Akkusativ. Tanımlayıcı 'ihren', zayıf sıfat '-en'.",
            de: "Maskulin Akkusativ. Artikel 'ihren', Adjektiv '-en'."
        },
        slots: [
            { type: 'art', answer: "ihren", options: ["ihr", "ihren", "ihrem", "ihres"] },
            { type: 'adj', answer: "begabten", options: ["begabte", "begabten", "begabter", "begabtes"] }
        ]
    },
    {
        id: 91, level: 'C1', case: 'Akk', category: 'Participio II como Adjetivo',
        text: "Er liest ___ ___ Buch.",
        noun: "Buch (n)",
        verbDesc: {
            es: "Schreiben (geschrieben): Escribir. El Participio II funciona como adjetivo (acción terminada).",
            en: "Schreiben (geschrieben): To write. Participle II as adjective (completed action).",
            tr: "Schreiben (geschrieben): Yazmak. II. Ortaç sıfat olarak kullanılır.",
            de: "Partizip II als Adjektiv."
        },
        explanation: {
            es: "Akkusativ neutro. Artículo 'ein', adjetivo mixto '-es'.",
            en: "Neuter Accusative. Article 'ein', mixed adjective '-es'.",
            tr: "Nötr Akkusativ. Tanımlayıcı 'ein', karışık sıfat '-es'.",
            de: "Neutrum Akkusativ. Artikel 'ein', Adjektiv '-es'."
        },
        slots: [
            { type: 'art', answer: "ein", options: ["ein", "einen", "einem", "einer"] },
            { type: 'adj', answer: "geschriebenes", options: ["geschriebene", "geschriebenen", "geschriebenes", "geschriebenem"] }
        ]
    },
    {
        id: 92, level: 'B2', case: 'Dat', category: 'Adjetivo + Preposición',
        text: "Ich bin {überzeugt} von ___ ___ Lösung.",
        noun: "Lösung (f)",
        verbDesc: {
            es: "Überzeugt sein von: Estar convencido de. Rige Dativo.",
            en: "Überzeugt sein von: To be convinced of. Takes Dative.",
            tr: "Überzeugt sein von: -den emin/ikna olmuş olmak. Dativ alır.",
            de: "Überzeugt sein von + Dativ."
        },
        explanation: {
            es: "Dativo femenino. Artículo 'einer', adjetivo mixto '-en'.",
            en: "Feminine Dative. Article 'einer', mixed adjective '-en'.",
            tr: "Dişil Dativ. Tanımlayıcı 'einer', karışık sıfat '-en'.",
            de: "Feminin Dativ. Artikel 'einer', Adjektiv '-en'."
        },
        slots: [
            { type: 'art', answer: "einer", options: ["eine", "einer", "einem", "einen"] },
            { type: 'adj', answer: "optimalen", options: ["optimale", "optimalen", "optimaler", "optimales"] }
        ]
    },
    {
        id: 93, level: 'C1', case: 'Dat', category: 'Adjetivo + Preposición',
        text: "Er ist {abhängig} von ___ ___ Medikament.",
        noun: "Medikament (n)",
        verbDesc: {
            es: "Abhängig sein von: Ser dependiente de. Rige Dativo.",
            en: "Abhängig sein von: To be dependent on. Takes Dative.",
            tr: "Abhängig sein von: -e bağımlı olmak. Dativ alır.",
            de: "Abhängig sein von + Dativ."
        },
        explanation: {
            es: "Dativo neutro. Artículo 'diesem', adjetivo débil '-en'.",
            en: "Neuter Dative. Article 'diesem', weak adjective '-en'.",
            tr: "Nötr Dativ. Tanımlayıcı 'diesem', zayıf sıfat '-en'.",
            de: "Neutrum Dativ. Artikel 'diesem', Adjektiv '-en'."
        },
        slots: [
            { type: 'art', answer: "diesem", options: ["dieses", "diesem", "diesen", "dieser"] },
            { type: 'adj', answer: "teuren", options: ["teure", "teuren", "teurer", "teures"] }
        ]
    },
    {
        id: 94, level: 'B2', case: 'Akk', category: 'Adjetivo + Preposición',
        text: "Sie ist {verliebt} in ___ ___ Kollegen.",
        noun: "Kollege (m)",
        verbDesc: {
            es: "Verliebt sein in: Estar enamorado de. Rige Akkusativ.",
            en: "Verliebt sein in: To be in love with. Takes Accusative.",
            tr: "Verliebt sein in: -e aşık olmak. Akkusativ alır.",
            de: "Verliebt sein in + Akkusativ."
        },
        explanation: {
            es: "Akkusativ masculino. Kollege es N-Deklination. Adjetivo mixto '-en'.",
            en: "Masculine Accusative. Kollege is N-Declension. Mixed adjective '-en'.",
            tr: "Eril Akkusativ. Kollege N-Deklination'dır. Karışık sıfat '-en'.",
            de: "Maskulin Akkusativ. Kollege ist N-Deklination. Adjektiv '-en'."
        },
        slots: [
            { type: 'art', answer: "einen", options: ["ein", "einen", "einem", "einer"] },
            { type: 'adj', answer: "netten", options: ["nette", "netten", "netter", "nettes"] }
        ]
    },
    {
        id: 95, level: 'C1', case: 'Dat', category: 'Verbo con Preposición Fija',
        text: "Die Gruppe {besteht} aus ___ ___ Mitgliedern.",
        noun: "Mitglieder (pl)",
        verbDesc: {
            es: "Bestehen aus: Consistir en / Estar compuesto de. Rige Dativo.",
            en: "Bestehen aus: To consist of. Takes Dative.",
            tr: "Bestehen aus: -den oluşmak. Dativ alır.",
            de: "Bestehen aus + Dativ."
        },
        explanation: {
            es: "Dativo plural. Artículo 'zehn' (sin declinar), adjetivo fuerte '-en'.",
            en: "Plural Dative. Number 'zehn' (undeclined), strong adjective '-en'.",
            tr: "Çoğul Dativ. 'Zehn' sayısı (çekimsiz), güçlü sıfat '-en'.",
            de: "Plural Dativ. Zahlwort 'zehn', starke Endung '-en'."
        },
        slots: [
            { type: 'adj', answer: "aktiven", options: ["aktive", "aktiven", "aktiver", "aktives"] }
        ]
    },
    {
        id: 96, level: 'B2', case: 'Dat', category: 'Verbo con Preposición Fija',
        text: "Man kann das {vergleichen} mit ___ ___ Situation.",
        noun: "Situation (f)",
        verbDesc: {
            es: "Vergleichen mit: Comparar con. Rige Dativo.",
            en: "Vergleichen mit: To compare with. Takes Dative.",
            tr: "Vergleichen mit: -le karşılaştırmak. Dativ alır.",
            de: "Vergleichen mit + Dativ."
        },
        explanation: {
            es: "Dativo femenino. Artículo 'einer', adjetivo mixto '-en'.",
            en: "Feminine Dative. Article 'einer', mixed adjective '-en'.",
            tr: "Dişil Dativ. Tanımlayıcı 'einer', karışık sıfat '-en'.",
            de: "Feminin Dativ. Artikel 'einer', Adjektiv '-en'."
        },
        slots: [
            { type: 'art', answer: "einer", options: ["eine", "einer", "einem", "einen"] },
            { type: 'adj', answer: "ähnlichen", options: ["ähnliche", "ähnlichen", "ähnlicher", "ähnliches"] }
        ]
    },
    {
        id: 97, level: 'C1', case: 'Akk', category: 'Verbo con Preposición Fija',
        text: "Die Firma {reagiert} auf ___ ___ Trend.",
        noun: "Trend (m)",
        verbDesc: {
            es: "Reagieren auf: Reaccionar a. Rige Akkusativ.",
            en: "Reagieren auf: To react to. Takes Accusative.",
            tr: "Reagieren auf: -e tepki vermek. Akkusativ alır.",
            de: "Reagieren auf + Akkusativ."
        },
        explanation: {
            es: "Akkusativ masculino. Artículo 'den', adjetivo débil '-en'.",
            en: "Masculine Accusative. Article 'den', weak adjective '-en'.",
            tr: "Eril Akkusativ. Tanımlayıcı 'den', zayıf sıfat '-en'.",
            de: "Maskulin Akkusativ. Artikel 'den', Adjektiv '-en'."
        },
        slots: [
            { type: 'art', answer: "den", options: ["der", "den", "dem", "des"] },
            { type: 'adj', answer: "neuesten", options: ["neueste", "neuesten", "neuester", "neuestes"] }
        ]
    },
    {
        id: 98, level: 'B2', case: 'Akk', category: 'Verbo con Preposición Fija',
        text: "Wir {hoffen} auf ___ ___ Antwort.",
        noun: "Antwort (f)",
        verbDesc: {
            es: "Hoffen auf: Tener esperanza en. Rige Akkusativ.",
            en: "Hoffen auf: To hope for. Takes Accusative.",
            tr: "Hoffen auf: -i ummak. Akkusativ alır.",
            de: "Hoffen auf + Akkusativ."
        },
        explanation: {
            es: "Akkusativ femenino. Artículo 'eine', adjetivo mixto '-e'.",
            en: "Feminine Accusative. Article 'eine', mixed adjective '-e'.",
            tr: "Dişil Akkusativ. Tanımlayıcı 'eine', karışık sıfat '-e'.",
            de: "Feminin Akkusativ. Artikel 'eine', Adjektiv '-e'."
        },
        slots: [
            { type: 'art', answer: "eine", options: ["ein", "eine", "einer", "einen"] },
            { type: 'adj', answer: "schnelle", options: ["schnelle", "schnellen", "schneller", "schnelles"] }
        ]
    },
    {
        id: 99, level: 'C1', case: 'Gen', category: 'Preposición Genitiva',
        text: "{Aufgrund} ___ ___ Vorfalls wurde er entlassen.",
        noun: "Vorfall (m)",
        verbDesc: {
            es: "Aufgrund: Debido a / A causa de. Rige Genitivo.",
            en: "Aufgrund: Due to. Takes Genitive.",
            tr: "Aufgrund: -den dolayı. Genitiv alır.",
            de: "Aufgrund: Präposition mit Genitiv."
        },
        explanation: {
            es: "Genitivo masculino. Artículo 'eines', adjetivo mixto '-en'.",
            en: "Masculine Genitive. Article 'eines', mixed adjective '-en'.",
            tr: "Eril Genitiv. Tanımlayıcı 'eines', karışık sıfat '-en'.",
            de: "Maskulin Genitiv. Artikel 'eines', Adjektiv '-en'."
        },
        slots: [
            { type: 'art', answer: "eines", options: ["einem", "einen", "eines", "ein"] },
            { type: 'adj', answer: "bedauerlichen", options: ["bedauerliche", "bedauerlichen", "bedauerlicher", "bedauerliches"] }
        ]
    },
    {
        id: 100, level: 'C1', case: 'Gen', category: 'Preposición Genitiva',
        text: "{Inmitten} ___ ___ Menschenmenge fühlte er sich allein.",
        noun: "Menschenmenge (f)",
        verbDesc: {
            es: "Inmitten: En medio de. Rige Genitivo.",
            en: "Inmitten: In the midst of. Takes Genitive.",
            tr: "Inmitten: Ortasında. Genitiv alır.",
            de: "Inmitten: Präposition mit Genitiv."
        },
        explanation: {
            es: "Genitivo femenino. Artículo 'der', adjetivo débil '-en'.",
            en: "Feminine Genitive. Article 'der', weak adjective '-en'.",
            tr: "Dişil Genitiv. Tanımlayıcı 'der', zayıf sıfat '-en'.",
            de: "Feminin Genitiv. Artikel 'der', Adjektiv '-en'."
        },
        slots: [
            { type: 'art', answer: "der", options: ["die", "der", "den", "des"] },
            { type: 'adj', answer: "großen", options: ["große", "großen", "großer", "großes"] }
        ]
    },
    {
        id: 101, level: 'B2', case: 'Akk', category: 'Reflexivpronomen',
        text: "Ich {konzentriere} ___ auf die Prüfung.",
        noun: "Prüfung (f)",
        verbDesc: {
            es: "Sich konzentrieren auf: Concentrarse en. Siempre rige Akkusativ.",
            en: "Sich konzentrieren auf: To concentrate on. Always takes Accusative.",
            tr: "Sich konzentrieren auf: -e konsantre olmak. Daima Akkusativ alır.",
            de: "Sich konzentrieren auf + Akkusativ."
        },
        explanation: {
            es: "Verbo reflexivo simple. No hay otro objeto, por lo tanto el pronombre es Akkusativ (mich).",
            en: "Simple reflexive verb. No other object, so the pronoun is Accusative (mich).",
            tr: "Basit dönüşlü fiil. Başka nesne yok, bu yüzden zamir Akkusativ'dir (mich).",
            de: "Einfaches reflexives Verb ohne weiteres Objekt (mich)."
        },
        slots: [ { type: 'art', answer: "mich", options: ["mich", "mir", "sich", "dich"] } ]
    },
    {
        id: 102, level: 'B2', case: 'Dat', category: 'Reflexivpronomen',
        text: "Ich {putze} ___ die Zähne.",
        noun: "Zähne (pl)",
        verbDesc: {
            es: "Sich die Zähne putzen: Lavarse los dientes. El pronombre es Dativ.",
            en: "Sich die Zähne putzen: To brush one's teeth. Pronoun is Dative.",
            tr: "Sich die Zähne putzen: Dişlerini fırçalamak. Zamir Dativ'dir.",
            de: "Sich (Dat) die Zähne (Akk) putzen."
        },
        explanation: {
            es: "Como 'die Zähne' es el objeto directo (Akk), el pronombre reflexivo debe ir en Dativ (mir).",
            en: "Since 'die Zähne' is the direct object (Akk), the reflexive pronoun must be Dative (mir).",
            tr: "'Die Zähne' belirtili nesne (Akk) olduğu için dönüşlü zamir Dativ (mir) olmalıdır.",
            de: "Da 'die Zähne' das Akkusativobjekt ist, steht das Reflexivpronomen im Dativ (mir)."
        },
        slots: [ { type: 'art', answer: "mir", options: ["mich", "mir", "sich", "uns"] } ]
    },
    {
        id: 103, level: 'C1', case: 'Dat', category: 'Reflexivpronomen',
        text: "Ich {stelle} ___ ___ neu___ Projekt vor.",
        noun: "Projekt (n)",
        verbDesc: {
            es: "Sich etwas vorstellen: Imaginarse algo. Rige Dativ reflexivo.",
            en: "Sich etwas vorstellen: To imagine something. Takes Dative reflexive.",
            tr: "Sich etwas vorstellen: Bir şeyi hayal etmek. Dativ dönüşlü zamir alır.",
            de: "Sich (Dat) etwas (Akk) vorstellen."
        },
        explanation: {
            es: "Imaginarse algo pide pronombre en Dativ (mir). 'Projekt' es Akkusativ neutro.",
            en: "Imagining something requires Dative pronoun (mir). 'Projekt' is neuter Accusative.",
            tr: "Hayal etmek Dativ zamir (mir) ister. 'Projekt' nötr Akkusativ'dir.",
            de: "Sich etwas vorstellen verlangt Dativ (mir). 'Projekt' ist Neutrum Akkusativ."
        },
        slots: [
            { type: 'art', answer: "mir", options: ["mich", "mir", "sich", "dir"] },
            { type: 'art', answer: "das", options: ["das", "dem", "des", "den"] },
            { type: 'adj', answer: "neue", options: ["neue", "neuen", "neuem", "neues"] }
        ]
    },
    {
        id: 104, level: 'B2', case: 'Akk', category: 'Reflexivpronomen',
        text: "Interessierst du ___ für ___ alt___ Kunst?",
        noun: "Kunst (f)",
        verbDesc: {
            es: "Sich interessieren für: Interesarse por. Rige Akkusativ.",
            en: "Sich interessieren für: To be interested in. Takes Accusative.",
            tr: "Sich interessieren für: -e ilgi duymak. Akkusativ alır.",
            de: "Sich interessieren für + Akkusativ."
        },
        explanation: {
            es: "Sujeto 'du' -> pronombre 'dich'. 'Für' exige Akkusativ femenino.",
            en: "Subject 'du' -> pronoun 'dich'. 'Für' requires feminine Accusative.",
            tr: "Özne 'du' -> zamir 'dich'. 'Für' dişil Akkusativ gerektirir.",
            de: "Subjekt 'du' -> 'dich'. 'Für' verlangt Akkusativ feminin."
        },
        slots: [
            { type: 'art', answer: "dich", options: ["dich", "dir", "sich", "euch"] },
            { type: 'art', answer: "die", options: ["die", "der", "den", "das"] },
            { type: 'adj', answer: "alte", options: ["alte", "alten", "alter", "altes"] }
        ]
    },
    {
        id: 105, level: 'C1', case: 'Dat', category: 'Reflexivpronomen',
        text: "Wir {leisten} ___ ___ teur___ Urlaub.",
        noun: "Urlaub (m)",
        verbDesc: {
            es: "Sich etwas leisten: Permitirse algo (económicamente). Rige Dativ.",
            en: "Sich etwas leisten: To afford something. Takes Dative.",
            tr: "Sich etwas leisten: Bir şeye gücü yetmek. Dativ alır.",
            de: "Sich (Dat) etwas (Akk) leisten."
        },
        explanation: {
            es: "'Sich leisten' siempre usa pronombre Dativ. El objeto (Urlaub) es Akkusativ.",
            en: "'Sich leisten' always uses Dative pronoun. The object (Urlaub) is Accusative.",
            tr: "'Sich leisten' daima Dativ zamir kullanır. Nesne (Urlaub) Akkusativ'dir.",
            de: "Reflexivpronomen im Dativ (uns). Urlaub ist Akkusativ Maskulin."
        },
        slots: [
            { type: 'art', answer: "uns", options: ["uns", "euch", "sich", "wir"] },
            { type: 'art', answer: "den", options: ["der", "den", "dem", "des"] },
            { type: 'adj', answer: "teuren", options: ["teure", "teuren", "teurem", "teurer"] }
        ]
    },
    {
        id: 106, level: 'B2', case: 'Akk', category: 'Reflexivpronomen',
        text: "Ich {freue} ___ auf ___ nächst___ Wochenende.",
        noun: "Wochenende (n)",
        verbDesc: {
            es: "Sich freuen auf: Alegrarse por algo futuro. Rige Akkusativ.",
            en: "Sich freuen auf: To look forward to. Takes Accusative.",
            tr: "Sich freuen auf: Gelecek bir şey için sevinmek. Akkusativ alır.",
            de: "Sich freuen auf + Akkusativ."
        },
        explanation: {
            es: "Reflexivo Akkusativ (mich). 'Auf' + Akkusativ neutro.",
            en: "Accusative reflexive (mich). 'Auf' + neuter Accusative.",
            tr: "Akkusativ dönüşlü (mich). 'Auf' + nötr Akkusativ.",
            de: "Mich (Akk). Auf das (Akk) Wochenende."
        },
        slots: [
            { type: 'art', answer: "mich", options: ["mich", "mir", "sich", "dich"] },
            { type: 'art', answer: "das", options: ["das", "dem", "des", "den"] },
            { type: 'adj', answer: "nächste", options: ["nächste", "nächsten", "nächstes", "nächster"] }
        ]
    },
    {
        id: 107, level: 'C1', case: 'Dat', category: 'Reflexivpronomen',
        text: "Du solltest ___ ___ neu___ Wörter {merken}.",
        noun: "Wörter (pl)",
        verbDesc: {
            es: "Sich etwas merken: Retener/Memorizar algo. Rige Dativ.",
            en: "Sich etwas merken: To memorize/keep in mind. Takes Dative.",
            tr: "Sich etwas merken: Bir şeyi akılda tutmak. Dativ alır.",
            de: "Sich (Dat) etwas (Akk) merken."
        },
        explanation: {
            es: "Pronombre Dativ (dir). Las palabras son el objeto directo (Akkusativ plural).",
            en: "Dative pronoun (dir). The words are the direct object (plural Accusative).",
            tr: "Dativ zamir (dir). Kelimeler belirtili nesnedir (çoğul Akkusativ).",
            de: "Dir (Dat). Die neuen (Akk Plural) Wörter."
        },
        slots: [
            { type: 'art', answer: "dir", options: ["dich", "dir", "sich", "mir"] },
            { type: 'art', answer: "die", options: ["die", "der", "den", "das"] },
            { type: 'adj', answer: "neuen", options: ["neue", "neuen", "neuer", "neues"] }
        ]
    },
    {
        id: 108, level: 'B2', case: 'Akk', category: 'Reflexivpronomen',
        text: "Wir {verlassen} ___ auf ___ gut___ Service.",
        noun: "Service (m)",
        verbDesc: {
            es: "Sich verlassen auf: Fiarse/Confiar en. Rige Akkusativ.",
            en: "Sich verlassen auf: To rely on. Takes Accusative.",
            tr: "Sich verlassen auf: -e güvenmek. Akkusativ alır.",
            de: "Sich verlassen auf + Akkusativ."
        },
        explanation: {
            es: "Pronombre Akkusativ (uns). 'Auf' + Akkusativ masculino.",
            en: "Accusative pronoun (uns). 'Auf' + masculine Accusative.",
            tr: "Akkusativ zamir (uns). 'Auf' + eril Akkusativ.",
            de: "Uns (Akk). Auf den (Akk) Service."
        },
        slots: [
            { type: 'art', answer: "uns", options: ["wir", "uns", "sich", "euch"] },
            { type: 'art', answer: "den", options: ["der", "den", "dem", "des"] },
            { type: 'adj', answer: "guten", options: ["gute", "guten", "gutem", "gutes"] }
        ]
    },
    {
        id: 109, level: 'C1', case: 'Dat', category: 'Reflexivpronomen',
        text: "Er {sieht} ___ ___ spannend___ Film an.",
        noun: "Film (m)",
        verbDesc: {
            es: "Sich etwas ansehen: Ver algo (atentamente). Rige Dativ.",
            en: "Sich etwas ansehen: To watch something. Takes Dative.",
            tr: "Sich etwas ansehen: Bir şeyi izlemek. Dativ alır.",
            de: "Sich (Dat) etwas (Akk) ansehen."
        },
        explanation: {
            es: "Pronombre Dativ (sich). El film es objeto directo masculino (Akkusativ).",
            en: "Dative pronoun (sich). The film is masculine direct object (Accusative).",
            tr: "Dativ zamir (sich). Film eril belirtili nesnedir (Akkusativ).",
            de: "Sich (Dat). Den spannenden (Akk) Film."
        },
        slots: [
            { type: 'art', answer: "sich", options: ["sich", "ihn", "ihm", "dir"] },
            { type: 'art', answer: "den", options: ["der", "den", "dem", "des"] },
            { type: 'adj', answer: "spannenden", options: ["spannende", "spannenden", "spannender", "spannendes"] }
        ]
    },
    {
        id: 110, level: 'B2', case: 'Akk', category: 'Reflexivpronomen',
        text: "Ich {entscheide} ___ für ___ blau___ Hemd.",
        noun: "Hemd (n)",
        verbDesc: {
            es: "Sich entscheiden für: Decidirse por. Rige Akkusativ.",
            en: "Sich entscheiden für: To decide on. Takes Accusative.",
            tr: "Sich entscheiden für: -e karar vermek. Akkusativ alır.",
            de: "Sich entscheiden für + Akkusativ."
        },
        explanation: {
            es: "Reflexivo Akkusativ (mich). 'Für' + Akkusativ neutro.",
            en: "Accusative reflexive (mich). 'Für' + neuter Accusative.",
            tr: "Akkusativ dönüşlü (mich). 'Für' + nötr Akkusativ.",
            de: "Mich (Akk). Für das (Akk) Hemd."
        },
        slots: [
            { type: 'art', answer: "mich", options: ["mich", "mir", "sich", "dich"] },
            { type: 'art', answer: "das", options: ["das", "dem", "des", "den"] },
            { type: 'adj', answer: "blaue", options: ["blaue", "blauen", "blaues", "blauer"] }
        ]
    },
    {
        id: 111, level: 'C1', case: 'Dat', category: 'Reflexivpronomen',
        text: "Ich {wasche} ___ ___ dreckig___ Hände.",
        noun: "Hände (pl)",
        verbDesc: {
            es: "Sich die Hände waschen: Lavarse las manos. Dativ reflexivo.",
            en: "Sich die Hände waschen: To wash one's hands. Dative reflexive.",
            tr: "Sich die Hände waschen: Ellerini yıkamak. Dativ dönüşlü.",
            de: "Sich (Dat) die Hände (Akk) waschen."
        },
        explanation: {
            es: "Pronombre Dativ (mir) porque 'las manos' son el Akkusativ.",
            en: "Dative pronoun (mir) because 'the hands' are the Accusative.",
            tr: "Dativ zamir (mir) çünkü 'eller' Akkusativ'dir.",
            de: "Mir (Dat). Die dreckigen (Akk Plural) Hände."
        },
        slots: [
            { type: 'art', answer: "mir", options: ["mich", "mir", "sich", "uns"] },
            { type: 'art', answer: "die", options: ["die", "der", "den", "das"] },
            { type: 'adj', answer: "dreckigen", options: ["dreckige", "dreckigen", "dreckiger", "dreckiges"] }
        ]
    },
    {
        id: 112, level: 'B2', case: 'Akk', category: 'Reflexivpronomen',
        text: "Du {ärgerst} ___ über ___ schlecht___ Service.",
        noun: "Service (m)",
        verbDesc: {
            es: "Sich ärgern über: Enfadarse por. Rige Akkusativ.",
            en: "Sich ärgern über: To be annoyed about. Takes Accusative.",
            tr: "Sich ärgern über: -e kızmak. Akkusativ alır.",
            de: "Sich ärgern über + Akkusativ."
        },
        explanation: {
            es: "Reflexivo Akkusativ (dich). 'Über' + Akkusativ masculino.",
            en: "Accusative reflexive (dich). 'Über' + masculine Accusative.",
            tr: "Akkusativ dönüşlü (dich). 'Über' + eril Akkusativ.",
            de: "Dich (Akk). Über den (Akk) Service."
        },
        slots: [
            { type: 'art', answer: "dich", options: ["dich", "dir", "sich", "euch"] },
            { type: 'art', answer: "den", options: ["der", "den", "dem", "des"] },
            { type: 'adj', answer: "schlechten", options: ["schlechte", "schlechten", "schlechtem", "schlechtes"] }
        ]
    },
    {
        id: 113, level: 'C1', case: 'Dat', category: 'Reflexivpronomen',
        text: "Können Sie ___ ___ (m) neu___ Kollegen {vorstellen}?",
        noun: "Kollege (m)",
        verbDesc: {
            es: "Sich jemanden vorstellen: Que alguien te sea presentado. Rige Dativ.",
            en: "Sich jemanden vorstellen: To have someone introduced to you.",
            tr: "Sich jemanden vorstellen: Birinin sana tanıtılması.",
            de: "Sich (Dat) jemanden (Akk) vorstellen."
        },
        explanation: {
            es: "Pronombre Dativ (mir/uns). Kollege es N-Deklination en Akkusativ.",
            en: "Dative pronoun (mir/uns). Kollege is Accusative N-Declension.",
            tr: "Dativ zamir (mir/uns). Kollege Akkusativ N-Deklination'dır.",
            de: "Mir (Dat). Den neuen (Akk) Kollegen."
        },
        slots: [
            { type: 'art', answer: "mir", options: ["mich", "mir", "sich", "euch"] },
            { type: 'art', answer: "den", options: ["der", "den", "dem", "des"] },
            { type: 'adj', answer: "neuen", options: ["neue", "neuen", "neuem", "neuer"] }
        ]
    },
    {
        id: 114, level: 'B2', case: 'Akk', category: 'Reflexivpronomen',
        text: "Sie {bereiten} ___ auf ___ wichtig___ Prüfung vor.",
        noun: "Prüfung (f)",
        verbDesc: {
            es: "Sich vorbereiten auf: Prepararse para. Rige Akkusativ.",
            en: "Sich vorbereiten auf: To prepare for. Takes Accusative.",
            tr: "Sich vorbereiten auf: -e hazırlanmak. Akkusativ alır.",
            de: "Sich vorbereiten auf + Akkusativ."
        },
        explanation: {
            es: "Reflexivo Akkusativ (sich). 'Auf' + Akkusativ femenino.",
            en: "Accusative reflexive (sich). 'Auf' + feminine Accusative.",
            tr: "Akkusativ dönüşlü (sich). 'Auf' + dişil Akkusativ.",
            de: "Sich (Akk). Auf die (Akk) Prüfung."
        },
        slots: [
            { type: 'art', answer: "sich", options: ["sie", "sich", "ihnen", "uns"] },
            { type: 'art', answer: "die", options: ["die", "der", "den", "das"] },
            { type: 'adj', answer: "wichtige", options: ["wichtige", "wichtigen", "wichtiger", "wichtiges"] }
        ]
    },
    {
        id: 115, level: 'C1', case: 'Dat', category: 'Reflexivpronomen',
        text: "Ich {kämme} ___ ___ lang___ Haare.",
        noun: "Haare (pl)",
        verbDesc: {
            es: "Sich die Haare kämmen: Peinarse el cabello. Dativ reflexivo.",
            en: "Sich die Haare kämmen: To comb one's hair. Dative reflexive.",
            tr: "Sich die Haare kämmen: Saçlarını taramak. Dativ dönüşlü.",
            de: "Sich (Dat) die Haare (Akk) kämmen."
        },
        explanation: {
            es: "Pronombre Dativ (mir). 'Haare' es objeto directo plural.",
            en: "Dative pronoun (mir). 'Haare' is plural direct object.",
            tr: "Dativ zamir (mir). 'Haare' çoğul belirtili nesnedir.",
            de: "Mir (Dat). Die langen (Akk Plural) Haare."
        },
        slots: [
            { type: 'art', answer: "mir", options: ["mich", "mir", "sich", "uns"] },
            { type: 'art', answer: "die", options: ["die", "der", "den", "das"] },
            { type: 'adj', answer: "langen", options: ["lange", "langen", "langer", "langes"] }
        ]
    },
    {
        id: 116, level: 'B2', case: 'Akk', category: 'Reflexivpronomen',
        text: "Er {beschwert} ___ über ___ laut___ Nachbarn.",
        noun: "Nachbarn (pl)",
        verbDesc: {
            es: "Sich beschweren über: Quejarse de. Rige Akkusativ.",
            en: "Sich beschweren über: To complain about. Takes Accusative.",
            tr: "Sich beschweren über: -den şikayet etmek. Akkusativ alır.",
            de: "Sich beschweren über + Akkusativ."
        },
        explanation: {
            es: "Reflexivo Akkusativ (sich). 'Über' + Akkusativ plural.",
            en: "Accusative reflexive (sich). 'Über' + plural Accusative.",
            tr: "Akkusativ dönüşlü (sich). 'Über' + çoğul Akkusativ.",
            de: "Sich (Akk). Über die (Akk) Nachbarn."
        },
        slots: [
            { type: 'art', answer: "sich", options: ["sich", "ihn", "ihm", "euch"] },
            { type: 'art', answer: "die", options: ["die", "der", "den", "das"] },
            { type: 'adj', answer: "lauten", options: ["laute", "lauten", "lauter", "lautes"] }
        ]
    },
    {
        id: 117, level: 'C1', case: 'Dat', category: 'Reflexivpronomen',
        text: "Ich {wünsche} ___ ___ schöner___ Tag.",
        noun: "Tag (m)",
        verbDesc: {
            es: "Sich etwas wünschen: Desearse algo. Rige Dativ.",
            en: "Sich etwas wünschen: To wish for something. Takes Dative.",
            tr: "Sich etwas wünschen: Bir şeyi dilemek/istemek. Dativ alır.",
            de: "Sich (Dat) etwas (Akk) wünschen."
        },
        explanation: {
            es: "Pronombre Dativ (mir). 'Tag' es Akkusativ masculino con adjetivo mixto.",
            en: "Dative pronoun (mir). 'Tag' is masculine Accusative with mixed adjective.",
            tr: "Dativ zamir (mir). 'Tag' karma sıfatlı eril Akkusativ'dir.",
            de: "Mir (Dat). Einen schöneren (Akk) Tag."
        },
        slots: [
            { type: 'art', answer: "mir", options: ["mich", "mir", "sich", "uns"] },
            { type: 'art', answer: "einen", options: ["ein", "einen", "einem", "einer"] },
            { type: 'adj', answer: "schöneren", options: ["schönere", "schöneren", "schönerer", "schöneres"] }
        ]
    },
    {
        id: 118, level: 'B2', case: 'Akk', category: 'Reflexivpronomen',
        text: "Wir {gewöhnen} ___ an ___ neu___ System.",
        noun: "System (n)",
        verbDesc: {
            es: "Sich gewöhnen an: Acostumbrarse a. Rige Akkusativ.",
            en: "Sich gewöhnen an: To get used to. Takes Accusative.",
            tr: "Sich gewöhnen an: -e alışmak. Akkusativ alır.",
            de: "Sich gewöhnen an + Akkusativ."
        },
        explanation: {
            es: "Reflexivo Akkusativ (uns). 'An' + Akkusativ neutro.",
            en: "Accusative reflexive (uns). 'An' + neuter Accusative.",
            tr: "Akkusativ dönüşlü (uns). 'An' + nötr Akkusativ.",
            de: "Uns (Akk). An das (Akk) System."
        },
        slots: [
            { type: 'art', answer: "uns", options: ["wir", "uns", "sich", "euch"] },
            { type: 'art', answer: "das", options: ["das", "dem", "des", "den"] },
            { type: 'adj', answer: "neue", options: ["neue", "neuen", "neues", "neuer"] }
        ]
    },
    {
        id: 119, level: 'C1', case: 'Dat', category: 'Reflexivpronomen',
        text: "Du {solltest} ___ ___ (f) alt___ Kleidung {entledigen}.",
        noun: "Kleidung (f)",
        verbDesc: {
            es: "Sich einer Sache entledigen: Deshacerse de algo. Rige Genitivo.",
            en: "Sich einer Sache entledigen: To get rid of something. Takes Genitive.",
            tr: "Sich bir şeyden kurtulmak. Genitiv alır.",
            de: "Sich (Akk) einer Sache (Gen) entledigen."
        },
        explanation: {
            es: "Ojo: Entledigen es reflexivo Akkusativ (dich) + complemento Genitivo femenino (der).",
            en: "Note: Entledigen is Accusative reflexive (dich) + feminine Genitive (der).",
            tr: "Dikkat: Entledigen Akkusativ dönüşlü (dich) + dişil Genitiv (der) alır.",
            de: "Dich (Akk). Der alten (Gen) Kleidung."
        },
        slots: [
            { type: 'art', answer: "dich", options: ["dich", "dir", "sich", "mir"] },
            { type: 'art', answer: "der", options: ["die", "der", "den", "das"] },
            { type: 'adj', answer: "alten", options: ["alte", "alten", "alter", "altes"] }
        ]
    },
    {
        id: 120, level: 'B2', case: 'Akk', category: 'Reflexivpronomen',
        text: "Ich {entschuldige} ___ für ___ spät___ Anruf.",
        noun: "Anruf (m)",
        verbDesc: {
            es: "Sich entschuldigen für: Disculparse por. Rige Akkusativ.",
            en: "Sich entschuldigen für: To apologize for. Takes Accusative.",
            tr: "Sich entschuldigen für: -den dolayı özür dilemek. Akkusativ alır.",
            de: "Sich entschuldigen für + Akkusativ."
        },
        explanation: {
            es: "Reflexivo Akkusativ (mich). 'Für' + Akkusativ masculino.",
            en: "Accusative reflexive (mich). 'Für' + masculine Accusative.",
            tr: "Akkusativ dönüşlü (mich). 'Für' + eril Akkusativ.",
            de: "Mich (Akk). Für den (Akk) Anruf."
        },
        slots: [
            { type: 'art', answer: "mich", options: ["mich", "mir", "sich", "dich"] },
            { type: 'art', answer: "den", options: ["der", "den", "dem", "des"] },
            { type: 'adj', answer: "späten", options: ["späte", "späten", "spätem", "spätes"] }
        ]
    },
    {
        id: 121, level: 'C1', case: 'Dat', category: 'Reflexivpronomen',
        text: "Ich {kaufe} ___ ___ (n) teur___ Auto.",
        noun: "Auto (n)",
        verbDesc: {
            es: "Sich etwas kaufen: Comprarse algo. Rige Dativ.",
            en: "Sich etwas kaufen: To buy something for oneself. Takes Dative.",
            tr: "Sich etwas kaufen: Kendine bir şey almak. Dativ alır.",
            de: "Sich (Dat) etwas (Akk) kaufen."
        },
        explanation: {
            es: "Pronombre Dativ (mir). El auto es el objeto directo neutro (Akkusativ).",
            en: "Dative pronoun (mir). The car is the neuter direct object (Accusative).",
            tr: "Dativ zamir (mir). Araba nötr belirtili nesnedir (Akkusativ).",
            de: "Mir (Dat). Das teure (Akk) Auto."
        },
        slots: [
            { type: 'art', answer: "mir", options: ["mich", "mir", "sich", "uns"] },
            { type: 'art', answer: "das", options: ["das", "dem", "des", "den"] },
            { type: 'adj', answer: "teure", options: ["teure", "teuren", "teures", "teurer"] }
        ]
    },
    {
        id: 122, level: 'B2', case: 'Akk', category: 'Reflexivpronomen',
        text: "Wir {treffen} ___ mit ___ neu___ Nachbarn.",
        noun: "Nachbarn (pl)",
        verbDesc: {
            es: "Sich treffen mit: Reunirse con. Rige Dativo tras 'mit'.",
            en: "Sich treffen mit: To meet with. Takes Dative after 'mit'.",
            tr: "Sich treffen mit: -le buluşmak. 'Mit'ten sonra Dativ alır.",
            de: "Sich (Akk) treffen mit + Dativ."
        },
        explanation: {
            es: "Pronombre Akkusativ (uns). 'Mit' siempre pide Dativo plural.",
            en: "Accusative pronoun (uns). 'Mit' always takes plural Dative.",
            tr: "Akkusativ zamir (uns). 'Mit' daima çoğul Dativ ister.",
            de: "Uns (Akk). Mit den (Dat Plural) Nachbarn."
        },
        slots: [
            { type: 'art', answer: "uns", options: ["wir", "uns", "sich", "euch"] },
            { type: 'art', answer: "den", options: ["die", "der", "den", "das"] },
            { type: 'adj', answer: "neuen", options: ["neue", "neuen", "neuer", "neues"] }
        ]
    },
    {
        id: 123, level: 'C1', case: 'Dat', category: 'Reflexivpronomen',
        text: "Ich {höre} ___ ___ neu___ Podcast an.",
        noun: "Podcast (m)",
        verbDesc: {
            es: "Sich etwas anhören: Escuchar algo (atentamente). Rige Dativ.",
            en: "Sich etwas anhören: To listen to something. Takes Dative.",
            tr: "Sich etwas anhören: Bir şeyi dinlemek. Dativ alır.",
            de: "Sich (Dat) etwas (Akk) anhören."
        },
        explanation: {
            es: "Pronombre Dativ (mir). El podcast es Akkusativ masculino.",
            en: "Dative pronoun (mir). The podcast is masculine Accusative.",
            tr: "Dativ zamir (mir). Podcast eril Akkusativ'dir.",
            de: "Mir (Dat). Den neuen (Akk) Podcast."
        },
        slots: [
            { type: 'art', answer: "mir", options: ["mich", "mir", "sich", "uns"] },
            { type: 'art', answer: "den", options: ["der", "den", "dem", "des"] },
            { type: 'adj', answer: "neuen", options: ["neue", "neuen", "neuem", "neuer"] }
        ]
    },
    {
        id: 124, level: 'B2', case: 'Akk', category: 'Reflexivpronomen',
        text: "Er {interessiert} ___ für ___ (m) alt___ Wagen.",
        noun: "Wagen (m)",
        verbDesc: {
            es: "Sich interessieren für: Interesarse por. Rige Akkusativ.",
            en: "Sich interessieren für: To be interested in. Takes Accusative.",
            tr: "Sich interessieren für: -e ilgi duymak. Akkusativ alır.",
            de: "Sich interessieren für + Akkusativ."
        },
        explanation: {
            es: "Pronombre Akkusativ (sich). 'Für' + Akkusativ masculino.",
            en: "Accusative pronoun (sich). 'Für' + masculine Accusative.",
            tr: "Akkusativ zamir (sich). 'Für' + eril Akkusativ.",
            de: "Sich (Akk). Für den (Akk) Wagen."
        },
        slots: [
            { type: 'art', answer: "sich", options: ["sich", "ihn", "ihm", "dir"] },
            { type: 'art', answer: "den", options: ["der", "den", "dem", "des"] },
            { type: 'adj', answer: "alten", options: ["alte", "alten", "altem", "altes"] }
        ]
    },
    {
        id: 125, level: 'C1', case: 'Dat', category: 'Reflexivpronomen',
        text: "Ich {sehe} ___ ___ (pl) neu___ Fotos an.",
        noun: "Fotos (pl)",
        verbDesc: {
            es: "Sich etwas ansehen: Mirar algo. Rige Dativ.",
            en: "Sich etwas ansehen: To look at something. Takes Dative.",
            tr: "Sich etwas ansehen: Bir şeye bakmak. Dativ alır.",
            de: "Sich (Dat) etwas (Akk) ansehen."
        },
        explanation: {
            es: "Pronombre Dativ (mir). 'Fotos' es Akkusativ plural.",
            en: "Dative pronoun (mir). 'Fotos' is plural Accusative.",
            tr: "Dativ zamir (mir). 'Fotos' çoğul Akkusativ'dir.",
            de: "Mir (Dat). Die neuen (Akk Plural) Fotos."
        },
        slots: [
            { type: 'art', answer: "mir", options: ["mich", "mir", "sich", "uns"] },
            { type: 'art', answer: "die", options: ["die", "der", "den", "das"] },
            { type: 'adj', answer: "neuen", options: ["neue", "neuen", "neuer", "neues"] }
        ]
    },
{
        id: 126, level: 'B2', case: 'Dat', category: 'Superlativ + Präp',
        text: "In ___ ___ ___ (f) Stadt der Welt ist es laut.",
        noun: "Stadt (f)",
        verbDesc: {
            es: "Sein: Ser/Estar. En este caso indica ubicación.",
            en: "Sein: To be. In this case indicating location.",
            tr: "Sein: Olmak. Bu durumda konumu belirtir.",
            de: "Sein: Kopulaverb."
        },
        explanation: {
            es: "Ubicación (Wo?) -> Dativo. Femenino 'der'. Superlativo 'groß' -> 'größt' + terminación débil '-en'.",
            en: "Location (Where?) -> Dative. Feminine 'der'. Superlative 'groß' -> 'größt' + weak ending '-en'.",
            tr: "Konum (Nerede?) -> Dativ. Dişil 'der'. En üstünlük 'groß' -> 'größt' + zayıf ek '-en'.",
            de: "Lage (Wo?) -> Dativ. Feminin 'der'. Superlativ 'größt' + schwache Endung '-en'."
        },
        slots: [
            { type: 'art', answer: "der", options: ["die", "der", "den", "dem"] },
            { type: 'adj', answer: "größten", options: ["größte", "größten", "größter", "größtes"] }
        ]
    },
    {
        id: 127, level: 'B2', case: 'Akk', category: 'Komparativ + Verbe',
        text: "Ich suche ___ ___ ___ (n) Angebot.",
        noun: "Angebot (n)",
        verbDesc: {
            es: "Suchen: Buscar. Rige Akkusativ.",
            en: "Suchen: To search. Takes Accusative.",
            tr: "Suchen: Aramak. Akkusativ alır.",
            de: "Suchen: Akkusativ-Verb."
        },
        explanation: {
            es: "Objeto directo neutro. Artículo 'ein'. Comparativo 'gut' -> 'besser' + terminación mixta '-es'.",
            en: "Neuter direct object. Article 'ein'. Comparative 'gut' -> 'besser' + mixed ending '-es'.",
            tr: "Nötr belirtili nesne. Tanımlayıcı 'ein'. Üstünlük 'gut' -> 'besser' + karma ek '-es'.",
            de: "Neutrum Akkusativ Objekt. Artikel 'ein'. Komparativ 'besser' + gemischte Endung '-es'."
        },
        slots: [
            { type: 'art', answer: "ein", options: ["ein", "einer", "einem", "einen"] },
            { type: 'adj', answer: "besseres", options: ["bessere", "besseren", "besseres", "besserer"] }
        ]
    },
    {
        id: 128, level: 'C1', case: 'Dat', category: 'Komparativ + Präp',
        text: "Ich arbeite {mit} ___ ___ ___ (m) Bruder zusammen.",
        noun: "Bruder (m)",
        verbDesc: {
            es: "Zusammenarbeiten mit: Colaborar con. Rige Dativo.",
            en: "Zusammenarbeiten mit: To work together with. Takes Dative.",
            tr: "Zusammenarbeiten mit: -ile birlikte çalışmak. Dativ alır.",
            de: "Zusammenarbeiten mit + Dativ."
        },
        explanation: {
            es: "Preposición 'mit' -> Dativo. Posesivo 'meinem'. Comparativo 'alt' -> 'älter' + terminación débil '-en'.",
            en: "Preposition 'mit' -> Dative. Possessive 'meinem'. Comparative 'alt' -> 'älter' + weak ending '-en'.",
            tr: "Edat 'mit' -> Dativ. İyelik 'meinem'. Üstünlük 'alt' -> 'älter' + zayıf ek '-en'.",
            de: "Präposition 'mit' -> Dativ. Possessiv 'meinem'. Komparativ 'älter' + schwache Endung '-en'."
        },
        slots: [
            { type: 'art', answer: "meinem", options: ["mein", "meinen", "meinem", "meines"] },
            { type: 'adj', answer: "älteren", options: ["ältere", "älteren", "älterem", "älteres"] }
        ]
    },
    {
        id: 129, level: 'C1', case: 'Gen', category: 'Komparativ + Präp (Gen)',
        text: "{Trotz} ___ ___ ___ (n) Wetters sind wir gewandert.",
        noun: "Wetter (n)",
        verbDesc: {
            es: "Wandern: Caminar/Hacer senderismo.",
            en: "Wandern: To hike.",
            tr: "Wandern: Doğa yürüyüşü yapmak.",
            de: "Wandern: Verb."
        },
        explanation: {
            es: "Preposición 'trotz' -> Genitivo. Neutro 'des'. Comparativo 'kalt' -> 'kälter' + terminación débil '-en'.",
            en: "Preposition 'trotz' -> Genitive. Neuter 'des'. Comparative 'kalt' -> 'kälter' + weak ending '-en'.",
            tr: "Edat 'trotz' -> Genitiv. Nötr 'des'. Üstünlük 'kalt' -> 'kälter' + zayıf ek '-en'.",
            de: "Präposition 'trotz' -> Genitiv. Neutrum 'des'. Komparativ 'kälter' + schwache Endung '-en'."
        },
        slots: [
            { type: 'art', answer: "des", options: ["das", "dem", "des", "den"] },
            { type: 'adj', answer: "kälteren", options: ["kältere", "kälteren", "kälterem", "kälteres"] }
        ]
    },
    {
        id: 130, level: 'B2', case: 'Akk', category: 'Komparativ + Verbe',
        text: "Er kauft {kein} ___ ___ (n) Auto.",
        noun: "Auto (n)",
        verbDesc: {
            es: "Kaufen: Comprar. Rige Akkusativ.",
            en: "Kaufen: To buy. Takes Accusative.",
            tr: "Kaufen: Satın almak. Akkusativ alır.",
            de: "Kaufen: Akkusativ-Verb."
        },
        explanation: {
            es: "Objeto directo neutro negativo. Comparativo 'schnell' -> 'schneller' + terminación mixta '-es'.",
            en: "Neuter negative direct object. Comparative 'schnell' -> 'schneller' + mixed ending '-es'.",
            tr: "Nötr olumsuz belirtili nesne. Üstünlük 'schnell' -> 'schneller' + karma ek '-es'.",
            de: "Neutrum Akkusativ Negation. Komparativ 'schneller' + gemischte Endung '-es'."
        },
        slots: [
            { type: 'art', answer: "kein", options: ["kein", "keine", "keinem", "keinen"] },
            { type: 'adj', answer: "schnelleres", options: ["schnellere", "schnelleren", "schnelleres", "schnellerer"] }
        ]
    },
    {
        id: 131, level: 'B2', case: 'Nom', category: 'Superlativ + Artikel',
        text: "Das ist ___ ___ ___ (n) Problem.",
        noun: "Problem (n)",
        verbDesc: {
            es: "Sein: Ser. Nominativo.",
            en: "Sein: To be. Nominative.",
            tr: "Sein: Olmak. Nominativ.",
            de: "Sein: Kopula."
        },
        explanation: {
            es: "Sujeto neutro. Superlativo 'klein' -> 'kleinst' + terminación débil '-e'.",
            en: "Neuter subject. Superlative 'klein' -> 'kleinst' + weak ending '-e'.",
            tr: "Nötr özne. En üstünlük 'klein' -> 'kleinst' + zayıf ek '-e'.",
            de: "Neutrum Nominativ. Superlativ 'kleinst' + schwache Endung '-e'."
        },
        slots: [
            { type: 'art', answer: "das", options: ["das", "dem", "des", "den"] },
            { type: 'adj', answer: "kleinste", options: ["kleinste", "kleinsten", "kleiner", "kleines"] }
        ]
    },
    {
        id: 132, level: 'C1', case: 'Akk', category: 'Superlativ + Präp',
        text: "Wir spielen {gegen} ___ ___ ___ (m) Gegner.",
        noun: "Gegner (m)",
        verbDesc: {
            es: "Spielen gegen: Jugar contra. Rige siempre Akkusativ.",
            en: "Spielen gegen: To play against. Always takes Accusative.",
            tr: "Spielen gegen: -e karşı oynamak. Daima Akkusativ alır.",
            de: "Spielen gegen + Akkusativ."
        },
        explanation: {
            es: "Preposición 'gegen' -> Akkusativ masculino. Superlativo 'stark' -> 'stärkst' + terminación débil '-en'.",
            en: "Preposition 'gegen' -> masculine Accusative. Superlative 'stark' -> 'stärkst' + weak ending '-en'.",
            tr: "Edat 'gegen' -> eril Akkusativ. En üstünlük 'stark' -> 'stärkst' + zayıf ek '-en'.",
            de: "Präposition 'gegen' -> Maskulin Akkusativ. Superlativ 'stärkst' + schwache Endung '-en'."
        },
        slots: [
            { type: 'art', answer: "den", options: ["der", "den", "dem", "des"] },
            { type: 'adj', answer: "stärksten", options: ["stärkste", "stärksten", "stärker", "stärkeres"] }
        ]
    },
    {
        id: 133, level: 'C1', case: 'Dat', category: 'Komparativ + Präp',
        text: "Das Buch ist {von} ___ ___ ___ (m) Autor.",
        noun: "Autor (m)",
        verbDesc: {
            es: "Von: De (procedencia). Rige Dativo.",
            en: "Von: By/From. Takes Dative.",
            tr: "Von: Tarafından/den. Dativ alır.",
            de: "Von + Dativ."
        },
        explanation: {
            es: "Preposición 'von' -> Dativo masculino. Comparativo 'bekannt' -> 'bekannter' + terminación mixta '-en'.",
            en: "Preposition 'von' -> masculine Dative. Comparative 'bekannt' -> 'bekannter' + mixed ending '-en'.",
            tr: "Edat 'von' -> eril Dativ. Üstünlük 'bekannt' -> 'bekannter' + karma ek '-en'.",
            de: "Präposition 'von' -> Maskulin Dativ. Komparativ 'bekannter' + gemischte Endung '-en'."
        },
        slots: [
            { type: 'art', answer: "einem", options: ["ein", "einen", "einem", "einer"] },
            { type: 'adj', answer: "bekannteren", options: ["bekannter", "bekanntere", "bekannteren", "bekannteres"] }
        ]
    },
    {
        id: 134, level: 'C1', case: 'Gen', category: 'Superlativ + Präp (Gen)',
        text: "{Während} ___ ___ ___ (f) Reise habe ich viel gelernt.",
        noun: "Reise (f)",
        verbDesc: {
            es: "Während: Durante. Rige Genitivo.",
            en: "Während: During. Takes Genitive.",
            tr: "Während: Esnasında. Genitiv alır.",
            de: "Während + Genitiv."
        },
        explanation: {
            es: "Preposición 'während' -> Genitivo femenino. Superlativo 'lang' -> 'längst' + terminación débil '-en'.",
            en: "Preposition 'während' -> feminine Genitive. Superlative 'lang' -> 'längst' + weak ending '-en'.",
            tr: "Edat 'während' -> dişil Genitiv. En üstünlük 'lang' -> 'längst' + zayıf ek '-en'.",
            de: "Präposition 'während' -> Feminin Genitiv. Superlativ 'längst' + schwache Endung '-en'."
        },
        slots: [
            { type: 'art', answer: "der", options: ["die", "der", "den", "des"] },
            { type: 'adj', answer: "längsten", options: ["längste", "längsten", "länger", "längeres"] }
        ]
    },
    {
        id: 135, level: 'B2', case: 'Akk', category: 'Komparativ + Negation',
        text: "Ich habe {keinen} ___ ___ (m) Vorschlag.",
        noun: "Vorschlag (m)",
        verbDesc: {
            es: "Haben: Tener. Akkusativ.",
            en: "Haben: To have. Accusative.",
            tr: "Haben: Sahip olmak. Akkusativ.",
            de: "Haben: Akkusativ-Verb."
        },
        explanation: {
            es: "Objeto directo masculino negativo. Comparativo 'gut' -> 'besser' + terminación mixta '-en'.",
            en: "Masculine negative direct object. Comparative 'gut' -> 'besser' + mixed ending '-en'.",
            tr: "Eril olumsuz belirtili nesne. Üstünlük 'gut' -> 'besser' + karma ek '-en'.",
            de: "Maskulin Akkusativ Negation. Komparativ 'besser' + gemischte Endung '-en'."
        },
        slots: [
            { type: 'art', answer: "keinen", options: ["kein", "keine", "keinem", "keinen"] },
            { type: 'adj', answer: "besseren", options: ["bessere", "besseren", "besseres", "besserer"] }
        ]
    },
    {
        id: 136, level: 'C1', case: 'Akk', category: 'Komparativ + Präp',
        text: "Wir hoffen auf ___ ___ ___ (f) Lösung.",
        noun: "Lösung (f)",
        verbDesc: {
            es: "Hoffen auf: Tener esperanza en. Rige Akkusativ.",
            en: "Hoffen auf: To hope for. Takes Accusative.",
            tr: "Hoffen auf: -i ummak. Akkusativ alır.",
            de: "Hoffen auf + Akkusativ."
        },
        explanation: {
            es: "Preposición 'auf' -> Akkusativ femenino. Comparativo 'schnell' -> 'schneller' + terminación mixta '-e'.",
            en: "Preposition 'auf' -> feminine Accusative. Comparative 'schnell' -> 'schneller' + mixed ending '-e'.",
            tr: "Edat 'auf' -> dişil Akkusativ. Üstünlük 'schnell' -> 'schneller' + karma ek '-e'.",
            de: "Präposition 'auf' -> Feminin Akkusativ. Komparativ 'schneller' + gemischte Endung '-e'."
        },
        slots: [
            { type: 'art', answer: "eine", options: ["ein", "eine", "einer", "einen"] },
            { type: 'adj', answer: "schnellere", options: ["schnellere", "schnelleren", "schnellerer", "schnelleres"] }
        ]
    },
    {
        id: 137, level: 'B2', case: 'Dat', category: 'Superlativ + Präp',
        text: "Er spricht mit ___ ___ ___ (pl) Kindern.",
        noun: "Kinder (pl)",
        verbDesc: {
            es: "Sprechen mit: Hablar con. Dativo.",
            en: "Sprechen mit: To speak with. Dative.",
            tr: "Sprechen mit: -ile konuşmak. Dativ.",
            de: "Sprechen mit + Dativ."
        },
        explanation: {
            es: "Preposición 'mit' -> Dativo plural. Superlativo 'klein' -> 'kleinst' + terminación débil '-en'.",
            en: "Preposition 'mit' -> plural Dative. Superlative 'klein' -> 'kleinst' + weak ending '-en'.",
            tr: "Edat 'mit' -> çoğul Dativ. En üstünlük 'klein' -> 'kleinst' + zayıf ek '-en'.",
            de: "Präposition 'mit' -> Plural Dativ. Superlativ 'kleinst' + schwache Endung '-en'."
        },
        slots: [
            { type: 'art', answer: "den", options: ["die", "der", "den", "dem"] },
            { type: 'adj', answer: "kleinsten", options: ["kleinste", "kleinsten", "kleiner", "kleineren"] }
        ]
    },
    {
        id: 138, level: 'C1', case: 'Akk', category: 'Komparativ + Stark',
        text: "___ ___ Wein habe ich noch nie getrunken.",
        noun: "Wein (m)",
        verbDesc: {
            es: "Trinken: Beber.",
            en: "Trinken: To drink.",
            tr: "Trinken: İçmek.",
            de: "Trinken: Verb."
        },
        explanation: {
            es: "Akkusativ masculino sin artículo (Starke Deklination). Comparativo 'gut' -> 'besser' + terminación fuerte '-en'.",
            en: "Masculine Accusative without article (Strong declension). Comparative 'gut' -> 'besser' + strong ending '-en'.",
            tr: "Tanımlayıcısız eril Akkusativ (Güçlü çekim). Üstünlük 'gut' -> 'besser' + güçlü ek '-en'.",
            de: "Maskulin Akkusativ ohne Artikel (Starke Deklination). Komparativ 'besser' + starke Endung '-en'."
        },
        slots: [
            { type: 'adj', answer: "Besseren", options: ["Bessere", "Besseren", "Besserem", "Besseres"] }
        ]
    },
    {
        id: 139, level: 'B2', case: 'Nom', category: 'Superlativ + Mixt',
        text: "Das war ___ ___ ___ (m) Tag meines Lebens.",
        noun: "Tag (m)",
        verbDesc: {
            es: "Sein: Ser. Nominativo.",
            en: "Sein: To be. Nominative.",
            tr: "Sein: Olmak. Nominativ.",
            de: "Sein: Kopulaverb."
        },
        explanation: {
            es: "Sujeto masculino. Artículo 'ein'. Superlativo 'schön' -> 'schönst' + terminación mixta '-er'.",
            en: "Masculine subject. Article 'ein'. Superlative 'schön' -> 'schönst' + mixed ending '-er'.",
            tr: "Eril özne. Tanımlayıcı 'ein'. En üstünlük 'schön' -> 'schönst' + karma ek '-er'.",
            de: "Maskulin Nominativ. Artikel 'ein'. Superlativ 'schönst' + gemischte Endung '-er'."
        },
        slots: [
            { type: 'art', answer: "ein", options: ["ein", "einer", "einem", "einen"] },
            { type: 'adj', answer: "schönster", options: ["schönste", "schönster", "schönsten", "schönes"] }
        ]
    },
    {
        id: 140, level: 'C1', case: 'Akk', category: 'Komparativ + N-Dekl',
        text: "Ich kenne ___ ___ ___ (m) Experten.",
        noun: "Experte (m)",
        verbDesc: {
            es: "Kennen: Conocer. Akkusativ.",
            en: "Kennen: To know. Accusative.",
            tr: "Kennen: Tanımak. Akkusativ.",
            de: "Kennen: Akkusativ-Verb."
        },
        explanation: {
            es: "Akkusativ masculino. Experte es N-Deklination. Comparativo 'erfahren' -> 'erfahrener' + terminación débil '-en'.",
            en: "Masculine Accusative. Experte is N-declension. Comparative 'erfahren' -> 'erfahrener' + weak ending '-en'.",
            tr: "Eril Akkusativ. Experte N-çekimidir. Üstünlük 'erfahren' -> 'erfahrener' + zayıf ek '-en'.",
            de: "Maskulin Akkusativ. Experte ist N-Deklination. Komparativ 'erfahrener' + schwache Endung '-en'."
        },
        slots: [
            { type: 'art', answer: "den", options: ["der", "den", "dem", "des"] },
            { type: 'adj', answer: "erfahreneren", options: ["erfahrenere", "erfahreneren", "erfahrenerer", "erfahrenstes"] }
        ]
    },
    {
        id: 141, level: 'B2', case: 'Dat', category: 'Komparativ + Präp',
        text: "Seit ___ ___ ___ (f) Woche geht es ihm besser.",
        noun: "Woche (f)",
        verbDesc: {
            es: "Seit: Desde hace. Dativo.",
            en: "Seit: Since. Dative.",
            tr: "Seit: -den beri. Dativ.",
            de: "Seit + Dativ."
        },
        explanation: {
            es: "Preposición 'seit' -> Dativo femenino. Comparativo 'gut' -> 'besser' (declinado: 'besserer') + terminación débil '-en'.",
            en: "Preposition 'seit' -> feminine Dative. Comparative 'gut' -> 'besser' (declined: 'besserer') + weak ending '-en'.",
            tr: "Edat 'seit' -> dişil Dativ. Üstünlük 'gut' -> 'besser' + zayıf ek '-en'.",
            de: "Präposition 'seit' -> Feminin Dativ. Komparativ 'besserer' + schwache Endung '-en'."
        },
        slots: [
            { type: 'art', answer: "der", options: ["die", "der", "den", "dem"] },
            { type: 'adj', answer: "besseren", options: ["bessere", "besseren", "besserer", "besserem"] }
        ]
    },
    {
        id: 142, level: 'C1', case: 'Gen', category: 'Superlativ + Genitiv',
        text: "Die Qualität ___ ___ ___ (n) Produktes ist wichtig.",
        noun: "Produkt (n)",
        verbDesc: {
            es: "Sein: Ser.",
            en: "Sein: To be.",
            tr: "Sein: Olmak.",
            de: "Sein: Kopula."
        },
        explanation: {
            es: "Genitivo neutro. Superlativo 'neu' -> 'neuest' + terminación débil '-en'.",
            en: "Neuter Genitive. Superlative 'neu' -> 'neuest' + weak ending '-en'.",
            tr: "Nötr Genitiv. En üstünlük 'neu' -> 'neuest' + zayıf ek '-en'.",
            de: "Neutrum Genitiv. Superlativ 'neuest' + schwache Endung '-en'."
        },
        slots: [
            { type: 'art', answer: "des", options: ["das", "dem", "des", "den"] },
            { type: 'adj', answer: "neuesten", options: ["neueste", "neuesten", "neuester", "neues"] }
        ]
    },
    {
        id: 143, level: 'C1', case: 'Akk', category: 'Komparativ + Präp',
        text: "Er ist {stolz} auf ___ ___ ___ (m) Erfolg.",
        noun: "Erfolg (m)",
        verbDesc: {
            es: "Stolz sein auf: Estar orgulloso de. Akkusativ.",
            en: "Stolz sein auf: To be proud of. Accusative.",
            tr: "Stolz sein auf: -ile gurur duymak. Akkusativ.",
            de: "Stolz sein auf + Akkusativ."
        },
        explanation: {
            es: "Preposición 'auf' -> Akkusativ masculino. Comparativo 'groß' -> 'größer' + terminación mixta '-en'.",
            en: "Preposition 'auf' -> masculine Accusative. Comparative 'groß' -> 'größer' + mixed ending '-en'.",
            tr: "Edat 'auf' -> eril Akkusativ. Üstünlük 'groß' -> 'größer' + karma ek '-en'.",
            de: "Präposition 'auf' -> Maskulin Akkusativ. Komparativ 'größer' + gemischte Endung '-en'."
        },
        slots: [
            { type: 'art', answer: "einen", options: ["ein", "einen", "einem", "einer"] },
            { type: 'adj', answer: "größeren", options: ["größere", "größeren", "größerer", "größeres"] }
        ]
    },
    {
        id: 144, level: 'B2', case: 'Dat', category: 'Superlativ + Präp',
        text: "Wir wohnen {in} ___ ___ ___ (n) Haus der Straße.",
        noun: "Haus (n)",
        verbDesc: {
            es: "Wohnen in: Vivir en. Dativo (ubicación).",
            en: "Wohnen in: To live in. Dative (location).",
            tr: "Wohnen in: -de yaşamak. Dativ (konum).",
            de: "Wohnen in + Dativ."
        },
        explanation: {
            es: "Preposición 'in' -> Dativo neutro. Superlativo 'alt' -> 'ältest' + terminación débil '-en'.",
            en: "Preposition 'in' -> neuter Dative. Superlative 'alt' -> 'ältest' + weak ending '-en'.",
            tr: "Edat 'in' -> nötr Dativ. En üstünlük 'alt' -> 'ältest' + zayıf ek '-en'.",
            de: "Präposition 'in' -> Neutrum Dativ. Superlativ 'ältest' + schwache Endung '-en'."
        },
        slots: [
            { type: 'art', answer: "dem", options: ["das", "dem", "des", "den"] },
            { type: 'adj', answer: "ältesten", options: ["älteste", "ältesten", "älterer", "ältestes"] }
        ]
    },
    {
        id: 145, level: 'C1', case: 'Akk', category: 'Superlativ + Stark',
        text: "___ ___ Kuchen habe ich noch nie gegessen.",
        noun: "Kuchen (m)",
        verbDesc: {
            es: "Essen: Comer.",
            en: "Essen: To eat.",
            tr: "Essen: Yemek yemek.",
            de: "Essen: Verb."
        },
        explanation: {
            es: "Akkusativ masculino sin artículo. Superlativo 'lecker' -> 'leckerst' + terminación fuerte '-en'.",
            en: "Masculine Accusative without article. Superlative 'lecker' -> 'leckerst' + strong ending '-en'.",
            tr: "Tanımlayıcısız eril Akkusativ. En üstünlük 'lecker' -> 'leckerst' + güçlü ek '-en'.",
            de: "Maskulin Akkusativ ohne Artikel. Superlativ 'leckerst' + starke Endung '-en'."
        },
        slots: [
            { type: 'adj', answer: "Leckersten", options: ["Leckerste", "Leckersten", "Leckerster", "Leckerstes"] }
        ]
    },
    {
        id: 146, level: 'B2', case: 'Nom', category: 'Komparativ + Mixt',
        text: "Sie ist ___ ___ ___ (f) Sportlerin.",
        noun: "Sportlerin (f)",
        verbDesc: {
            es: "Sein: Ser. Nominativo.",
            en: "Sein: To be.",
            tr: "Sein: Olmak.",
            de: "Sein: Kopula."
        },
        explanation: {
            es: "Sujeto femenino. Artículo 'eine'. Comparativo 'schnell' -> 'schneller' + terminación mixta '-e'.",
            en: "Feminine subject. Article 'eine'. Comparative 'schnell' -> 'schneller' + mixed ending '-e'.",
            tr: "Dişil özne. Tanımlayıcı 'eine'. Üstünlük 'schnell' -> 'schneller' + karma ek '-e'.",
            de: "Feminin Nominativ. Artikel 'eine'. Komparativ 'schneller' + gemischte Endung '-e'."
        },
        slots: [
            { type: 'art', answer: "eine", options: ["ein", "eine", "einer", "einen"] },
            { type: 'adj', answer: "schnellere", options: ["schnellere", "schnelleren", "schnellerer", "schnelleres"] }
        ]
    },
    {
        id: 147, level: 'C1', case: 'Dat', category: 'Komparativ + Präp',
        text: "Ich bin {mit} ___ ___ ___ (n) Ergebnis zufrieden.",
        noun: "Ergebnis (n)",
        verbDesc: {
            es: "Zufrieden sein mit: Estar satisfecho con. Dativo.",
            en: "Zufrieden sein mit: To be satisfied with. Dative.",
            tr: "Zufrieden sein mit: -den memnun olmak. Dativ.",
            de: "Zufrieden sein mit + Dativ."
        },
        explanation: {
            es: "Preposición 'mit' -> Dativo neutro. Comparativo 'gut' -> 'besser' (declinado: 'besseren') + terminación débil '-en'.",
            en: "Preposition 'mit' -> neuter Dative. Comparative 'gut' -> 'besser' (declined: 'besseren') + weak ending '-en'.",
            tr: "Edat 'mit' -> nötr Dativ. Üstünlük 'gut' -> 'besser' + zayıf ek '-en'.",
            de: "Präposition 'mit' -> Neutrum Dativ. Komparativ 'besseren' + schwache Endung '-en'."
        },
        slots: [
            { type: 'art', answer: "dem", options: ["das", "dem", "des", "den"] },
            { type: 'adj', answer: "besseren", options: ["bessere", "besseren", "besserer", "besserem"] }
        ]
    },
    {
        id: 148, level: 'B2', case: 'Akk', category: 'Superlativ + Artikel',
        text: "Er liest ___ ___ ___ (n) Buch des Jahres.",
        noun: "Buch (n)",
        verbDesc: {
            es: "Lesen: Leer. Akkusativ.",
            en: "Lesen: To read. Accusative.",
            tr: "Lesen: Okumak. Akkusativ.",
            de: "Lesen: Akkusativ-Verb."
        },
        explanation: {
            es: "Objeto directo neutro. Superlativo 'spannend' -> 'spannendst' + terminación débil '-e'.",
            en: "Neuter direct object. Superlative 'spannend' -> 'spannendst' + weak ending '-e'.",
            tr: "Nötr belirtili nesne. En üstünlük 'spannend' -> 'spannendst' + zayıf ek '-e'.",
            de: "Neutrum Akkusativ. Superlativ 'spannendst' + schwache Endung '-e'."
        },
        slots: [
            { type: 'art', answer: "das", options: ["das", "dem", "des", "den"] },
            { type: 'adj', answer: "spannendste", options: ["spannendste", "spannendsten", "spannender", "spannendes"] }
        ]
    },
    {
        id: 149, level: 'C1', case: 'Gen', category: 'Komparativ + Genitiv',
        text: "Die Hilfe ___ ___ ___ (m) Freundes war rettend.",
        noun: "Freund (m)",
        verbDesc: {
            es: "Sein: Ser.",
            en: "Sein: To be.",
            tr: "Sein: Olmak.",
            de: "Sein: Kopula."
        },
        explanation: {
            es: "Genitivo masculino. Comparativo 'gut' -> 'besser' + terminación débil '-en'.",
            en: "Masculine Genitive. Comparative 'gut' -> 'besser' + weak ending '-en'.",
            tr: "Eril Genitiv. Üstünlük 'gut' -> 'besser' + zayıf ek '-en'.",
            de: "Maskulin Genitiv. Komparativ 'besser' + schwache Endung '-en'."
        },
        slots: [
            { type: 'art', answer: "des", options: ["das", "dem", "des", "der"] },
            { type: 'adj', answer: "besseren", options: ["bessere", "besseren", "besserer", "besseres"] }
        ]
    },
    {
        id: 150, level: 'C1', case: 'Dat', category: 'Superlativ + Stark',
        text: "Mit ___ ___ ___ (f) Mühe hat er es geschafft.",
        noun: "Mühe (f)",
        verbDesc: {
            es: "Schaffen: Lograr/Conseguir.",
            en: "Schaffen: To manage/achieve.",
            tr: "Schaffen: Başarmak.",
            de: "Schaffen: Verb."
        },
        explanation: {
            es: "Dativo femenino sin artículo. Superlativo 'groß' -> 'größt' + terminación fuerte '-er'.",
            en: "Feminine Dative without article. Superlative 'groß' -> 'größt' + strong ending '-er'.",
            tr: "Tanımlayıcısız dişil Dativ. En üstünlük 'groß' -> 'größt' + güçlü ek '-er'.",
            de: "Feminin Dativ ohne Artikel. Superlativ 'größt' + starke Endung '-er'."
        },
        slots: [
            { type: 'adj', answer: "Größter", options: ["Größte", "Größter", "Größten", "Größtes"] }
        ]
    },



            

            // --- NIVEL 2: ARTÍCULO + ADJETIVO ---
            { 
                id: 101, level: 'B1', case: 'Akk', category: 'Preposición Fija', 
                text: "Wir {gehen} ohne ___ ___ Hund spazieren.", 
                noun: "Hund (m)", 
                verbDesc: {
                    es: "Gehen: Ir/Caminar. Verbo de movimiento.",
                    en: "Gehen: To go/walk. Verb of motion.",
                    tr: "Gehen: Gitmek/Yürümek.",
                    de: "Gehen: Bewegungsverb."
                },
                explanation: {
                    es: "'Ohne' siempre rige Akkusativ. Masculino 'den', adjetivo '-en'.",
                    en: "'Ohne' always takes Accusative. Masculine 'den', adjective '-en'.",
                    tr: "'Ohne' her zaman Akkusativ alır. Eril 'den', sıfat '-en'.",
                    de: "'Ohne' verlangt immer Akkusativ."
                },
                slots: [
                    { type: 'art', answer: "den", options: ["der", "den", "dem", "des"] },
                    { type: 'adj', answer: "alten", options: ["alte", "alten", "altem", "altes"] }
                ]
            },
            { 
                id: 102, level: 'C1', case: 'Gen', category: 'Genitivo Posesivo', 
                text: "Das ist das Auto {meines} ___ Bruders.", 
                noun: "Bruder (m)", 
                verbDesc: {
                    es: "Sein: Ser/Estar. Verbo copulativo.",
                    en: "Sein: To be. Copula verb.",
                    tr: "Sein: Olmak.",
                    de: "Sein: Kopulaverb."
                },
                explanation: {
                    es: "Genitivo Masculino. Posesivo 'mein' -> 'meines', adjetivo mixto -> '-en'.",
                    en: "Masculine Genitive. Possessive 'meines', mixed adjective -> '-en'.",
                    tr: "Eril Genitiv. İyelik 'meines', karışık sıfat -> '-en'.",
                    de: "Maskulin Genitiv. Possessiv 'meines', Adjektiv '-en'."
                },
                slots: [
                    { type: 'adj', answer: "jüngeren", options: ["jüngere", "jüngeren", "jüngerem", "jüngeres"] }
                ]
            },

            {
        id: 151, level: 'B2', case: 'Akk', category: 'Wechselpräposition (Wohin?)',
        text: "Ich {stelle} die Leiter {an} ___ ___ Wand.",
        noun: "Wand (f)",
        verbDesc: {
            es: "Stellen: Poner (vertical). Indica movimiento/acción hacia un lugar.",
            en: "Stellen: To place (upright). Indicates motion/action towards a location.",
            tr: "Stellen: Dik koymak. Bir yere doğru hareketi/eylemi belirtir.",
            de: "Stellen: Bewegungsverb (Wohin?)."
        },
        explanation: {
            es: "Movimiento (Wohin?) -> Akkusativ. Femenino 'die', adjetivo débil '-e'.",
            en: "Motion (Whereto?) -> Accusative. Feminine 'die', weak adjective '-e'.",
            tr: "Hareket (Nereye?) -> Akkusativ. Dişil 'die', zayıf sıfat '-e'.",
            de: "Bewegung (Wohin?) -> Akkusativ. Feminin 'die', Adjektiv '-e'."
        },
        slots: [
            { type: 'art', answer: "die", options: ["die", "der", "den", "das"] },
            { type: 'adj', answer: "weiße", options: ["weiße", "weißen", "weißer", "weißes"] }
        ]
    },
    {
        id: 152, level: 'B2', case: 'Dat', category: 'Wechselpräposition (Wo?)',
        text: "Die Leiter {steht} {an} ___ ___ Wand.",
        noun: "Wand (f)",
        verbDesc: {
            es: "Stehen: Estar de pie. Indica posición estática.",
            en: "Stehen: To stand. Indicates a static position.",
            tr: "Stehen: Ayakta durmak. Statik konumu belirtir.",
            de: "Stehen: Statisches Verb (Wo?)."
        },
        explanation: {
            es: "Ubicación (Wo?) -> Dativo. Femenino 'der', adjetivo débil '-en'.",
            en: "Location (Where?) -> Dative. Feminine 'der', weak adjective '-en'.",
            tr: "Konum (Nerede?) -> Dativ. Dişil 'der', zayıf sıfat '-en'.",
            de: "Lage (Wo?) -> Dativ. Feminin 'der', Adjektiv '-en'."
        },
        slots: [
            { type: 'art', answer: "der", options: ["die", "der", "den", "dem"] },
            { type: 'adj', answer: "weißen", options: ["weiße", "weißen", "weißer", "weißes"] }
        ]
    },
    {
        id: 153, level: 'C1', case: 'Akk', category: 'Wechselpräposition (Wohin?)',
        text: "Er {setzt} sich {neben} ___ ___ Journalisten.",
        noun: "Journalist (m)",
        verbDesc: {
            es: "Sich setzen: Sentarse. Indica movimiento hacia una posición.",
            en: "Sich setzen: To sit down. Indicates motion towards a position.",
            tr: "Sich setzen: Oturmak (eylem). Bir konuma doğru hareketi belirtir.",
            de: "Sich setzen: Bewegungsverb (Wohin?)."
        },
        explanation: {
            es: "Movimiento -> Akkusativ. Journalist es N-Deklination. Adjetivo débil '-en'.",
            en: "Motion -> Accusative. Journalist is N-Declension. Weak adjective '-en'.",
            tr: "Hareket -> Akkusativ. Journalist N-çekimidir. Zayıf sıfat '-en'.",
            de: "Bewegung -> Akkusativ. Journalist ist N-Deklination. Adjektiv '-en'."
        },
        slots: [
            { type: 'art', answer: "den", options: ["der", "den", "dem", "des"] },
            { type: 'adj', answer: "bekannten", options: ["bekannte", "bekannten", "bekannter", "bekanntes"] }
        ]
    },
    {
        id: 154, level: 'C1', case: 'Dat', category: 'Wechselpräposition (Wo?)',
        text: "Er {sitzt} {neben} ___ ___ Journalisten.",
        noun: "Journalist (m)",
        verbDesc: {
            es: "Sitzen: Estar sentado. Indica posición estática.",
            en: "Sitzen: To be sitting. Indicates a static position.",
            tr: "Sitzen: Oturuyor olmak. Statik konumu belirtir.",
            de: "Sitzen: Statisches Verb (Wo?)."
        },
        explanation: {
            es: "Ubicación -> Dativo. Journalist es N-Deklination. Adjetivo débil '-en'.",
            en: "Location -> Dative. Journalist is N-Declension. Weak adjective '-en'.",
            tr: "Konum -> Dativ. Journalist N-çekimidir. Zayıf sıfat '-en'.",
            de: "Lage -> Dativ. Journalist ist N-Deklination. Adjektiv '-en'."
        },
        slots: [
            { type: 'art', answer: "dem", options: ["der", "den", "dem", "des"] },
            { type: 'adj', answer: "bekannten", options: ["bekannte", "bekannten", "bekannter", "bekanntes"] }
        ]
    },
    {
        id: 155, level: 'B2', case: 'Akk', category: 'Wechselpräposition (Wohin?)',
        text: "Wir {hängen} das Bild {über} ___ ___ Sofa.",
        noun: "Sofa (n)",
        verbDesc: {
            es: "Hängen (transitivo): Colgar algo. Indica acción/movimiento.",
            en: "Hängen (transitive): To hang something. Indicates action/motion.",
            tr: "Hängen (geçişli): Bir şeyi asmak. Eylem/hareket belirtir.",
            de: "Hängen: Akkusativ (Wohin?)."
        },
        explanation: {
            es: "Movimiento -> Akkusativ neutro. Artículo 'das', adjetivo débil '-e'.",
            en: "Motion -> Neuter Accusative. Article 'das', weak adjective '-e'.",
            tr: "Hareket -> Nötr Akkusativ. Tanımlayıcı 'das', zayıf sıfat '-e'.",
            de: "Bewegung -> Neutrum Akkusativ. Artikel 'das', Adjektiv '-e'."
        },
        slots: [
            { type: 'art', answer: "das", options: ["das", "dem", "des", "den"] },
            { type: 'adj', answer: "neue", options: ["neue", "neuen", "neuem", "neuer"] }
        ]
    },
    {
        id: 156, level: 'B2', case: 'Dat', category: 'Wechselpräposition (Wo?)',
        text: "Das Bild {hängt} {über} ___ ___ Sofa.",
        noun: "Sofa (n)",
        verbDesc: {
            es: "Hängen (intransitivo): Estar colgado. Indica estado/posición.",
            en: "Hängen (intransitive): To be hanging. Indicates state/position.",
            tr: "Hängen (geçişsiz): Asılı durmak. Durum/konum belirtir.",
            de: "Hängen: Dativ (Wo?)."
        },
        explanation: {
            es: "Ubicación -> Dativo neutro. Artículo 'dem', adjetivo débil '-en'.",
            en: "Location -> Neuter Dative. Article 'dem', weak adjective '-en'.",
            tr: "Konum -> Nötr Dativ. Tanımlayıcı 'dem', zayıf sıfat '-en'.",
            de: "Lage -> Neutrum Dativ. Artikel 'dem', Adjektiv '-en'."
        },
        slots: [
            { type: 'art', answer: "dem", options: ["das", "dem", "des", "den"] },
            { type: 'adj', answer: "neuen", options: ["neue", "neuen", "neuem", "neuer"] }
        ]
    },
    {
        id: 157, level: 'C1', case: 'Akk', category: 'Wechselpräposition (Wohin?)',
        text: "Die Kinder {laufen} {zwischen} ___ ___ Bäume.",
        noun: "Bäume (pl)",
        verbDesc: {
            es: "Laufen (con meta): Correr hacia un lugar específico.",
            en: "Laufen (with target): To run towards a specific spot.",
            tr: "Laufen (hedefle): Belirli bir yere doğru koşmak.",
            de: "Laufen: Richtung (Wohin?)."
        },
        explanation: {
            es: "Movimiento hacia el espacio entre los árboles -> Akkusativ plural 'die'.",
            en: "Motion into the space between the trees -> Plural Accusative 'die'.",
            tr: "Ağaçların arasındaki boşluğa doğru hareket -> Çoğul Akkusativ 'die'.",
            de: "Richtung zwischen die Bäume -> Plural Akkusativ 'die'."
        },
        slots: [
            { type: 'art', answer: "die", options: ["die", "der", "den", "das"] },
            { type: 'adj', answer: "hohen", options: ["hohe", "hohen", "hoher", "hohes"] }
        ]
    },
    {
        id: 158, level: 'C1', case: 'Dat', category: 'Wechselpräposition (Wo?)',
        text: "Die Kinder {spielen} {zwischen} ___ ___ Bäumen.",
        noun: "Bäumen (pl)",
        verbDesc: {
            es: "Spielen: Jugar. La acción ocurre dentro de un lugar determinado.",
            en: "Spielen: To play. The action happens within a specific location.",
            tr: "Spielen: Oynamak. Eylem belirli bir konumun içinde gerçekleşir.",
            de: "Spielen: Ort (Wo?)."
        },
        explanation: {
            es: "Ubicación -> Dativo plural 'den'. El sustantivo Bäume añade '-n'.",
            en: "Location -> Plural Dative 'den'. The noun Bäume adds '-n'.",
            tr: "Konum -> Çoğul Dativ 'den'. Bäume ismi '-n' alır.",
            de: "Lage -> Plural Dativ 'den'. Substantiv Bäume mit N-Endung."
        },
        slots: [
            { type: 'art', answer: "den", options: ["die", "der", "den", "das"] },
            { type: 'adj', answer: "hohen", options: ["hohe", "hohen", "hoher", "hohes"] }
        ]
    },
    {
        id: 159, level: 'B2', case: 'Akk', category: 'Wechselpräposition (Wohin?)',
        text: "Ich {lege} den Teppich {unter} ___ ___ Tisch.",
        noun: "Tisch (m)",
        verbDesc: {
            es: "Legen: Poner/Colocar (horizontal). Indica movimiento.",
            en: "Legen: To lay/place (horizontally). Indicates motion.",
            tr: "Legen: Yatay koymak. Hareket belirtir.",
            de: "Legen: Akkusativ (Wohin?)."
        },
        explanation: {
            es: "Movimiento -> Akkusativ masculino. Artículo 'den', adjetivo débil '-en'.",
            en: "Motion -> Masculine Accusative. Article 'den', weak adjective '-en'.",
            tr: "Hareket -> Eril Akkusativ. Tanımlayıcı 'den', zayıf sıfat '-en'.",
            de: "Bewegung -> Maskulin Akkusativ. Artikel 'den', Adjektiv '-en'."
        },
        slots: [
            { type: 'art', answer: "den", options: ["der", "den", "dem", "des"] },
            { type: 'adj', answer: "großen", options: ["große", "großen", "großer", "großes"] }
        ]
    },
    {
        id: 160, level: 'B2', case: 'Dat', category: 'Wechselpräposition (Wo?)',
        text: "Der Teppich {liegt} {unter} ___ ___ Tisch.",
        noun: "Tisch (m)",
        verbDesc: {
            es: "Liegen: Estar tumbado/colocado. Indica posición.",
            en: "Liegen: To lie. Indicates position.",
            tr: "Liegen: Yatıyor/duruyor olmak. Konum belirtir.",
            de: "Liegen: Dativ (Wo?)."
        },
        explanation: {
            es: "Ubicación -> Dativo masculino. Artículo 'dem', adjetivo débil '-en'.",
            en: "Location -> Masculine Dative. Article 'dem', weak adjective '-en'.",
            tr: "Konum -> Eril Dativ. Tanımlayıcı 'dem', zayıf sıfat '-en'.",
            de: "Lage -> Maskulin Dativ. Artikel 'dem', Adjektiv '-en'."
        },
        slots: [
            { type: 'art', answer: "dem", options: ["der", "den", "dem", "des"] },
            { type: 'adj', answer: "großen", options: ["große", "großen", "großer", "großes"] }
        ]
    },
    {
        id: 161, level: 'C1', case: 'Akk', category: 'Wechselpräposition (Wohin?)',
        text: "Wir {fahren} {hinter} ___ ___ LKW.",
        noun: "LKW (m)",
        verbDesc: {
            es: "Fahren: Conducir/Ir. Indica cambio de posición.",
            en: "Fahren: To drive/go. Indicates change of position.",
            tr: "Fahren: Araçla gitmek. Konum değişikliğini belirtir.",
            de: "Fahren: Bewegung (Wohin?)."
        },
        explanation: {
            es: "Movimiento (poniéndose detrás) -> Akkusativ masculino 'den'.",
            en: "Motion (getting behind) -> Masculine Accusative 'den'.",
            tr: "Hareket (arkasına geçme) -> Eril Akkusativ 'den'.",
            de: "Bewegung (dahinter fahren) -> Maskulin Akkusativ 'den'."
        },
        slots: [
            { type: 'art', answer: "den", options: ["der", "den", "dem", "des"] },
            { type: 'adj', answer: "langsamen", options: ["langsame", "langsamen", "langsamer", "langsames"] }
        ]
    },
    {
        id: 162, level: 'C1', case: 'Dat', category: 'Wechselpräposition (Wo?)',
        text: "Wir {stehen} im Stau {hinter} ___ ___ LKW.",
        noun: "LKW (m)",
        verbDesc: {
            es: "Stehen: Estar parado/detenido. Indica ubicación fija.",
            en: "Stehen: To stand/be stopped. Indicates fixed location.",
            tr: "Stehen: Durmak. Sabit konumu belirtir.",
            de: "Stehen: Statisch (Wo?)."
        },
        explanation: {
            es: "Ubicación (atrapado detrás) -> Dativo masculino 'dem'.",
            en: "Location (stuck behind) -> Masculine Dative 'dem'.",
            tr: "Konum (arkasında kalmış) -> Eril Dativ 'dem'.",
            de: "Lage (dahinter stehen) -> Maskulin Dativ 'dem'."
        },
        slots: [
            { type: 'art', answer: "dem", options: ["der", "den", "dem", "des"] },
            { type: 'adj', answer: "langsamen", options: ["langsame", "langsamen", "langsamer", "langsames"] }
        ]
    },
    {
        id: 163, level: 'B2', case: 'Akk', category: 'Wechselpräposition (Wohin?)',
        text: "Er {wirft} den Brief {in} ___ ___ Briefkasten.",
        noun: "Briefkasten (m)",
        verbDesc: {
            es: "Werfen: Tirar/Lanzar. Indica movimiento hacia un interior.",
            en: "Werfen: To throw. Indicates motion into an interior.",
            tr: "Werfen: Atmak. Bir içeriğe doğru hareketi belirtir.",
            de: "Werfen: Richtung (Wohin?)."
        },
        explanation: {
            es: "Movimiento hacia adentro -> Akkusativ masculino 'den'.",
            en: "Motion inwards -> Masculine Accusative 'den'.",
            tr: "İçeriye doğru hareket -> Eril Akkusativ 'den'.",
            de: "Bewegung hinein -> Maskulin Akkusativ 'den'."
        },
        slots: [
            { type: 'art', answer: "den", options: ["der", "den", "dem", "des"] },
            { type: 'adj', answer: "gelben", options: ["gelbe", "gelben", "gelber", "gelbes"] }
        ]
    },
    {
        id: 164, level: 'B2', case: 'Dat', category: 'Wechselpräposition (Wo?)',
        text: "Der Brief {liegt} {in} ___ ___ Briefkasten.",
        noun: "Briefkasten (m)",
        verbDesc: {
            es: "Liegen: Estar (en reposo). Indica ubicación dentro de algo.",
            en: "Liegen: To be (at rest). Indicates location within something.",
            tr: "Liegen: Bulunmak. Bir şeyin içindeki konumu belirtir.",
            de: "Liegen: Ort (Wo?)."
        },
        explanation: {
            es: "Ubicación interior -> Dativo masculino 'dem'.",
            en: "Interior location -> Masculine Dative 'dem'.",
            tr: "İç konum -> Eril Dativ 'dem'.",
            de: "Lage darin -> Maskulin Dativ 'dem'."
        },
        slots: [
            { type: 'art', answer: "dem", options: ["der", "den", "dem", "des"] },
            { type: 'adj', answer: "gelben", options: ["gelbe", "gelben", "gelber", "gelbes"] }
        ]
    },
    {
        id: 165, level: 'C1', case: 'Akk', category: 'Wechselpräposition (Wohin?)',
        text: "Ich {lehne} den Stock {an} ___ ___ Zaun.",
        noun: "Zaun (m)",
        verbDesc: {
            es: "Lehnen: Apoyar algo contra una superficie. Indica acción.",
            en: "Lehnen: To lean something against a surface. Indicates action.",
            tr: "Lehnen: Bir şeyi bir yüzeye yaslamak. Eylem belirtir.",
            de: "Lehnen: Akkusativ (Wohin?)."
        },
        explanation: {
            es: "Movimiento de apoyo -> Akkusativ masculino 'den'.",
            en: "Leaning motion -> Masculine Accusative 'den'.",
            tr: "Yaslama hareketi -> Eril Akkusativ 'den'.",
            de: "Bewegung (dran lehnen) -> Maskulin Akkusativ 'den'."
        },
        slots: [
            { type: 'art', answer: "den", options: ["der", "den", "dem", "des"] },
            { type: 'adj', answer: "hölzernen", options: ["hölzerne", "hölzernen", "hölzerner", "hölzernes"] }
        ]
    },
    {
        id: 166, level: 'C1', case: 'Dat', category: 'Wechselpräposition (Wo?)',
        text: "Der Stock {lehnt} {an} ___ ___ Zaun.",
        noun: "Zaun (m)",
        verbDesc: {
            es: "Lehnen (intransitivo): Estar apoyado. Indica posición.",
            en: "Lehnen (intransitive): To be leaning. Indicates position.",
            tr: "Lehnen (geçişsiz): Yaslanmış durmak. Konum belirtir.",
            de: "Lehnen: Dativ (Wo?)."
        },
        explanation: {
            es: "Posición apoyada -> Dativo masculino 'dem'.",
            en: "Leaning position -> Masculine Dative 'dem'.",
            tr: "Yaslanmış konum -> Eril Dativ 'dem'.",
            de: "Lage (dran lehnen) -> Maskulin Dativ 'dem'."
        },
        slots: [
            { type: 'art', answer: "dem", options: ["der", "den", "dem", "des"] },
            { type: 'adj', answer: "hölzernen", options: ["hölzerne", "hölzernen", "hölzerner", "hölzernes"] }
        ]
    },
    {
        id: 167, level: 'B2', case: 'Akk', category: 'Wechselpräposition (Wohin?)',
        text: "Wir {setzen} uns {vor} ___ ___ Fernseher.",
        noun: "Fernseher (m)",
        verbDesc: {
            es: "Sich setzen: Sentarse. Indica cambio de lugar.",
            en: "Sich setzen: To sit down. Indicates change of place.",
            tr: "Sich setzen: Oturmak. Yer değişikliğini belirtir.",
            de: "Sich setzen: Akkusativ (Wohin?)."
        },
        explanation: {
            es: "Movimiento hacia el frente -> Akkusativ masculino 'den'.",
            en: "Motion to the front -> Masculine Accusative 'den'.",
            tr: "Öne doğru hareket -> Eril Akkusativ 'den'.",
            de: "Bewegung (davor setzen) -> Maskulin Akkusativ 'den'."
        },
        slots: [
            { type: 'art', answer: "den", options: ["der", "den", "dem", "des"] },
            { type: 'adj', answer: "großen", options: ["große", "großen", "großer", "großes"] }
        ]
    },
    {
        id: 168, level: 'B2', case: 'Dat', category: 'Wechselpräposition (Wo?)',
        text: "Wir {sitzen} {vor} ___ ___ Fernseher.",
        noun: "Fernseher (m)",
        verbDesc: {
            es: "Sitzen: Estar sentado. Indica ubicación.",
            en: "Sitzen: To be sitting. Indicates location.",
            tr: "Sitzen: Oturuyor olmak. Konumu belirtir.",
            de: "Sitzen: Dativ (Wo?)."
        },
        explanation: {
            es: "Ubicación al frente -> Dativo masculino 'dem'.",
            en: "Location at the front -> Masculine Dative 'dem'.",
            tr: "Öndeki konum -> Eril Dativ 'dem'.",
            de: "Lage (davor sitzen) -> Maskulin Dativ 'dem'."
        },
        slots: [
            { type: 'art', answer: "dem", options: ["der", "den", "dem", "des"] },
            { type: 'adj', answer: "großen", options: ["große", "großen", "großer", "großes"] }
        ]
    },
    {
        id: 169, level: 'C1', case: 'Akk', category: 'Wechselpräposition (Wohin?)',
        text: "Das Flugzeug {fliegt} {über} ___ ___ Alpen.",
        noun: "Alpen (pl)",
        verbDesc: {
            es: "Fliegen (meta): Cruzar por encima de algo.",
            en: "Fliegen (target): To cross over something.",
            tr: "Fliegen (hedef): Bir şeyin üzerinden geçmek.",
            de: "Fliegen: Richtung (Wohin?)."
        },
        explanation: {
            es: "Movimiento cruzando los Alpes -> Akkusativ plural 'die'.",
            en: "Motion crossing the Alps -> Plural Accusative 'die'.",
            tr: "Alpler'i geçen hareket -> Çoğul Akkusativ 'die'.",
            de: "Bewegung über die Alpen -> Plural Akkusativ 'die'."
        },
        slots: [
            { type: 'art', answer: "die", options: ["die", "der", "den", "das"] },
            { type: 'adj', answer: "hohen", options: ["hohe", "hohen", "hoher", "hohes"] }
        ]
    },
    {
        id: 170, level: 'C1', case: 'Dat', category: 'Wechselpräposition (Wo?)',
        text: "Die Wolken {schweben} {über} ___ ___ Alpen.",
        noun: "Alpen (pl)",
        verbDesc: {
            es: "Schweben: Flotar/Planear. Indica posición en el aire.",
            en: "Schweben: To hover/float. Indicates position in the air.",
            tr: "Schweben: Süzülmek. Havada asılı kalma konumunu belirtir.",
            de: "Schweben: Ort (Wo?)."
        },
        explanation: {
            es: "Ubicación estática encima de -> Dativo plural 'den'.",
            en: "Static location above -> Plural Dative 'den'.",
            tr: "Üzerindeki statik konum -> Çoğul Dativ 'den'.",
            de: "Lage über den Alpen -> Plural Dativ 'den'."
        },
        slots: [
            { type: 'art', answer: "den", options: ["die", "der", "den", "das"] },
            { type: 'adj', answer: "hohen", options: ["hohe", "hohen", "hoher", "hohes"] }
        ]
    },
    {
        id: 171, level: 'B2', case: 'Akk', category: 'Wechselpräposition (Wohin?)',
        text: "Ich {schreibe} die Notiz {an} ___ ___ Tafel.",
        noun: "Tafel (f)",
        verbDesc: {
            es: "Schreiben an: Escribir en (superficie vertical). Indica poner información ahí.",
            en: "Schreiben an: To write on (vertical surface). Indicates putting info there.",
            tr: "Schreiben an: (Dikey yüzeye) yazmak. Bilgiyi oraya koymayı belirtir.",
            de: "Schreiben: Akkusativ (Wohin?)."
        },
        explanation: {
            es: "Acción de dirigir la escritura hacia -> Akkusativ femenino 'die'.",
            en: "Action of directing writing towards -> Feminine Accusative 'die'.",
            tr: "Yazıyı yöneltme eylemi -> Dişil Akkusativ 'die'.",
            de: "Bewegung (dran schreiben) -> Feminin Akkusativ 'die'."
        },
        slots: [
            { type: 'art', answer: "die", options: ["die", "der", "den", "das"] },
            { type: 'adj', answer: "grüne", options: ["grüne", "grünen", "grüner", "grünes"] }
        ]
    },
    {
        id: 172, level: 'B2', case: 'Dat', category: 'Wechselpräposition (Wo?)',
        text: "Die Notiz {steht} {an} ___ ___ Tafel.",
        noun: "Tafel (f)",
        verbDesc: {
            es: "Stehen: Estar escrito/puesto. Indica ubicación de la información.",
            en: "Stehen: To be written/placed. Indicates location of the info.",
            tr: "Stehen: Yazılı/asılı durmak. Bilginin konumunu belirtir.",
            de: "Stehen: Dativ (Wo?)."
        },
        explanation: {
            es: "Ubicación de lo escrito -> Dativo femenino 'der'.",
            en: "Location of the writing -> Feminine Dative 'der'.",
            tr: "Yazının konumu -> Dişil Dativ 'der'.",
            de: "Lage (dran stehen) -> Feminin Dativ 'der'."
        },
        slots: [
            { type: 'art', answer: "der", options: ["die", "der", "den", "das"] },
            { type: 'adj', answer: "grünen", options: ["grüne", "grünen", "grüner", "grünes"] }
        ]
    },
    {
        id: 173, level: 'C1', case: 'Akk', category: 'Wechselpräposition (Wohin?)',
        text: "Wir {verstecken} uns {hinter} ___ ___ Vorhang.",
        noun: "Vorhang (m)",
        verbDesc: {
            es: "Sich verstecken: Esconderse. Indica ir hacia un escondite.",
            en: "Sich verstecken: To hide. Indicates going into a hiding place.",
            tr: "Sich verstecken: Saklanmak. Bir saklanma yerine gitmeyi belirtir.",
            de: "Sich verstecken: Akkusativ (Wohin?)."
        },
        explanation: {
            es: "Movimiento para quedar oculto -> Akkusativ masculino 'den'.",
            en: "Motion to become hidden -> Masculine Accusative 'den'.",
            tr: "Gizlenmek için yapılan hareket -> Eril Akkusativ 'den'.",
            de: "Bewegung (dahinter verstecken) -> Maskulin Akkusativ 'den'."
        },
        slots: [
            { type: 'art', answer: "den", options: ["der", "den", "dem", "des"] },
            { type: 'adj', answer: "schweren", options: ["schwere", "schweren", "schwerer", "schweres"] }
        ]
    },
    {
        id: 174, level: 'C1', case: 'Dat', category: 'Wechselpräposition (Wo?)',
        text: "Wir {sind} {hinter} ___ ___ Vorhang versteckt.",
        noun: "Vorhang (m)",
        verbDesc: {
            es: "Versteckt sein: Estar escondido. Indica estado/posición.",
            en: "Versteckt sein: To be hidden. Indicates state/position.",
            tr: "Versteckt sein: Saklanmış olmak. Durum/konum belirtir.",
            de: "Versteckt sein: Dativ (Wo?)."
        },
        explanation: {
            es: "Ubicación oculta -> Dativo masculino 'dem'.",
            en: "Hidden location -> Masculine Dative 'dem'.",
            tr: "Gizli konum -> Eril Dativ 'dem'.",
            de: "Lage (dahinter sein) -> Maskulin Dativ 'dem'."
        },
        slots: [
            { type: 'art', answer: "dem", options: ["der", "den", "dem", "des"] },
            { type: 'adj', answer: "schweren", options: ["schwere", "schweren", "schwerer", "schweres"] }
        ]
    },
    {
        id: 175, level: 'B2', case: 'Akk', category: 'Wechselpräposition (Wohin?)',
        text: "Ich {werfe} den Schlüssel {vor} ___ ___ Tür.",
        noun: "Tür (f)",
        verbDesc: {
            es: "Werfen: Lanzar. Indica trayectoria hacia un lugar.",
            en: "Werfen: To throw. Indicates trajectory towards a spot.",
            tr: "Werfen: Atmak. Bir yere doğru yörüngeyi belirtir.",
            de: "Werfen: Akkusativ (Wohin?)."
        },
        explanation: {
            es: "Movimiento hacia el frente de la puerta -> Akkusativ femenino 'die'.",
            en: "Motion to the front of the door -> Feminine Accusative 'die'.",
            tr: "Kapının önüne doğru hareket -> Dişil Akkusativ 'die'.",
            de: "Bewegung (davor werfen) -> Feminin Akkusativ 'die'."
        },
        slots: [
            { type: 'art', answer: "die", options: ["die", "der", "den", "das"] },
            { type: 'adj', answer: "geschlossene", options: ["geschlossene", "geschlossenen", "geschlossener", "geschlossenes"] }
        ]
    },
            {
        id: 176, level: 'C1', case: 'Gen', category: 'Preposición Genitiva Culta',
        text: "{Anlässlich} ___ ___ Jubiläums gab es ein Fest.",
        noun: "Jubiläum (n)",
        verbDesc: {
            es: "Anlässlich: Con motivo de. Rige siempre Genitivo.",
            en: "Anlässlich: On the occasion of. Always takes Genitive.",
            tr: "Anlässlich: Vesilesiyle. Daima Genitiv alır.",
            de: "Anlässlich + Genitiv."
        },
        explanation: {
            es: "Genitivo neutro. Artículo 'des', adjetivo débil '-en'.",
            en: "Neuter Genitive. Article 'des', weak adjective '-en'.",
            tr: "Nötr Genitiv. Tanımlayıcı 'des', zayıf sıfat '-en'.",
            de: "Neutrum Genitiv. Artikel 'des', Adjektiv '-en'."
        },
        slots: [
            { type: 'art', answer: "des", options: ["das", "dem", "des", "den"] },
            { type: 'adj', answer: "fünfzigsten", options: ["fünfzigste", "fünfzigsten", "fünfzigster", "fünfzigstes"] }
        ]
    },
    {
        id: 177, level: 'C1', case: 'Gen', category: 'Preposición Genitiva Culta',
        text: "{Infolge} ___ ___ Streiks fielen die Züge aus.",
        noun: "Streik (m)",
        verbDesc: {
            es: "Infolge: Como consecuencia de. Rige Genitivo.",
            en: "Infolge: As a result of. Takes Genitive.",
            tr: "Infolge: Sonucunda. Genitiv alır.",
            de: "Infolge + Genitiv."
        },
        explanation: {
            es: "Genitivo masculino. Artículo 'des', adjetivo débil '-en'.",
            en: "Masculine Genitive. Article 'des', weak adjective '-en'.",
            tr: "Eril Genitiv. Tanımlayıcı 'des', zayıf sıfat '-en'.",
            de: "Maskulin Genitiv. Artikel 'des', Adjektiv '-en'."
        },
        slots: [
            { type: 'art', answer: "des", options: ["der", "den", "dem", "des"] },
            { type: 'adj', answer: "langen", options: ["lange", "langen", "langer", "langes"] }
        ]
    },
    {
        id: 178, level: 'B2', case: 'Nom', category: 'Possessivpronomen (Ersatz)',
        text: "Ist das dein Kuli? Nein, das ist ___.",
        noun: "Kuli (m)",
        verbDesc: {
            es: "Sein: Ser. El posesivo aquí sustituye al sustantivo (Pronombre).",
            en: "Sein: To be. The possessive replaces the noun here.",
            tr: "Sein: Olmak. İyelik zamiri ismin yerine geçer.",
            de: "Possessivpronomen als Ersatz."
        },
        explanation: {
            es: "Sustituye a un masculino en Nominativo. Debe llevar terminación fuerte '-er' (meiner).",
            en: "Replaces a masculine in Nominative. Must have strong ending '-er' (meiner).",
            tr: "Nominativ eril bir ismin yerini alır. Güçlü ek '-er' (meiner) almalıdır.",
            de: "Ersatz für Maskulin Nominativ -> 'meiner'."
        },
        slots: [ { type: 'art', answer: "meiner", options: ["mein", "meine", "meiner", "meines"] } ]
    },
    {
        id: 179, level: 'B2', case: 'Akk', category: 'Possessivpronomen (Ersatz)',
        text: "Ich habe meinen Kuli vergessen. Darf ich ___ benutzen?",
        noun: "Kuli (m)",
        verbDesc: {
            es: "Benutzen: Usar. Rige Akkusativ.",
            en: "Benutzen: To use. Takes Accusative.",
            tr: "Benutzen: Kullanmak. Akkusativ alır.",
            de: "Benutzen + Akkusativ."
        },
        explanation: {
            es: "Sustituye a un masculino en Akkusativ. Terminación fuerte '-en' (deinen).",
            en: "Replaces a masculine in Accusative. Strong ending '-en' (deinen).",
            tr: "Akkusativ eril bir ismin yerini alır. Güçlü ek '-en' (deinen) almalıdır.",
            de: "Ersatz für Maskulin Akkusativ -> 'deinen'."
        },
        slots: [ { type: 'art', answer: "deinen", options: ["dein", "deine", "deinem", "deinen"] } ]
    },
    {
        id: 180, level: 'C1', case: 'Gen', category: 'Preposición Genitiva',
        text: "{Unweit} ___ ___ Grenze liegt ein kleines Dorf.",
        noun: "Grenze (f)",
        verbDesc: {
            es: "Unweit: No lejos de. Rige Genitivo.",
            en: "Unweit: Not far from. Takes Genitive.",
            tr: "Unweit: Yakınında. Genitiv alır.",
            de: "Unweit + Genitiv."
        },
        explanation: {
            es: "Genitivo femenino. Artículo 'der', adjetivo débil '-en'.",
            en: "Feminine Genitive. Article 'der', weak adjective '-en'.",
            tr: "Dişil Genitiv. Tanımlayıcı 'der', zayıf sıfat '-en'.",
            de: "Feminin Genitiv. Artikel 'der', Adjektiv '-en'."
        },
        slots: [
            { type: 'art', answer: "der", options: ["die", "der", "den", "des"] },
            { type: 'adj', answer: "deutschen", options: ["deutsche", "deutschen", "deutscher", "deutsches"] }
        ]
    },
    {
        id: 181, level: 'C1', case: 'Gen', category: 'Preposición Genitiva Culta',
        text: "{Abseits} ___ ___ Weges fanden wir Ruhe.",
        noun: "Weg (m)",
        verbDesc: {
            es: "Abseits: Apartado de / Fuera de. Rige Genitivo.",
            en: "Abseits: Away from. Takes Genitive.",
            tr: "Abseits: Uzağında. Genitiv alır.",
            de: "Abseits + Genitiv."
        },
        explanation: {
            es: "Genitivo masculino. Artículo 'des', adjetivo débil '-en'.",
            en: "Masculine Genitive. Article 'des', weak adjective '-en'.",
            tr: "Eril Genitiv. Tanımlayıcı 'des', zayıf sıfat '-en'.",
            de: "Maskulin Genitiv. Artikel 'des', Adjektiv '-en'."
        },
        slots: [
            { type: 'art', answer: "des", options: ["der", "den", "dem", "des"] },
            { type: 'adj', answer: "vorgegebenen", options: ["vorgegebene", "vorgegebenen", "vorgegebener", "vorgegebenes"] }
        ]
    },
    {
        id: 182, level: 'B2', case: 'Dat', category: 'Verbo con Dativo (N-Dekl)',
        text: "Ich vertraue ___ ___ Experten.",
        noun: "Experte (m)",
        verbDesc: {
            es: "Vertrauen: Confiar. Rige Dativo.",
            en: "Vertrauen: To trust. Takes Dative.",
            tr: "Vertrauen: Güvenmek. Dativ alır.",
            de: "Vertrauen + Dativ."
        },
        explanation: {
            es: "Dativo masculino. Experte es N-Deklination. Posesivo 'meinem', adjetivo débil '-en'.",
            en: "Masculine Dative. Experte is N-declension. Possessive 'meinem', weak adjective '-en'.",
            tr: "Eril Dativ. Experte N-çekimidir. İyelik 'meinem', zayıf sıfat '-en'.",
            de: "Maskulin Dativ. Experte ist N-Deklination. Adjektiv '-en'."
        },
        slots: [
            { type: 'art', answer: "meinem", options: ["mein", "meinen", "meinem", "meines"] },
            { type: 'adj', answer: "neuen", options: ["neue", "neuen", "neuem", "neues"] }
        ]
    },
    {
        id: 183, level: 'C1', case: 'Gen', category: 'Preposición Genitiva Culta',
        text: "{Ungeachtet} ___ ___ Warnung ging er ins Wasser.",
        noun: "Warnung (f)",
        verbDesc: {
            es: "Ungeachtet: A pesar de / Pese a. Rige Genitivo.",
            en: "Ungeachtet: Regardless of. Takes Genitive.",
            tr: "Ungeachtet: Rağmen. Genitiv alır.",
            de: "Ungeachtet + Genitiv."
        },
        explanation: {
            es: "Genitivo femenino. Artículo 'der', adjetivo débil '-en'.",
            en: "Feminine Genitive. Article 'der', weak adjective '-en'.",
            tr: "Dişil Genitiv. Tanımlayıcı 'der', zayıf sıfat '-en'.",
            de: "Feminin Genitiv. Artikel 'der', Adjektiv '-en'."
        },
        slots: [
            { type: 'art', answer: "der", options: ["die", "der", "den", "des"] },
            { type: 'adj', answer: "offiziellen", options: ["offizielle", "offiziellen", "offizieller", "offizielles"] }
        ]
    },
    {
        id: 184, level: 'C1', case: 'Nom', category: 'Adjetivo tras cuantificador',
        text: "Es gibt {etwas} ___ zu feiern.",
        noun: "Gutes (n)",
        verbDesc: {
            es: "Etwas: Algo. El adjetivo siguiente se sustantiva en neutro.",
            en: "Etwas: Something. The following adjective is a neuter noun.",
            tr: "Etwas: Bir şey. Sonrasındaki sıfat nötr isimleşir.",
            de: "Etwas + substantiviertes Adjektiv."
        },
        explanation: {
            es: "Tras 'etwas' el adjetivo lleva terminación fuerte neutra '-es'.",
            en: "After 'etwas' the adjective takes the strong neuter ending '-es'.",
            tr: "'Etwas'tan sonra sıfat güçlü nötr ek '-es' alır.",
            de: "Starke Neutrum-Endung '-es'."
        },
        slots: [ { type: 'adj', answer: "Wichtiges", options: ["Wichtige", "Wichtigen", "Wichtiges", "Wichtiger"] } ]
    },
    {
        id: 185, level: 'B2', case: 'Akk', category: 'Preposición Akkusativ',
        text: "{Gegen} ___ ___ Willen handelte er.",
        noun: "Wille (m)",
        verbDesc: {
            es: "Gegen: Contra. Rige Akkusativ.",
            en: "Gegen: Against. Takes Accusative.",
            tr: "Gegen: Karşı. Akkusativ alır.",
            de: "Gegen + Akkusativ."
        },
        explanation: {
            es: "Akkusativ masculino. Wille es N-Deklination (Willen). Posesivo 'meinen'.",
            en: "Masculine Accusative. Wille is N-declension. Possessive 'meinen'.",
            tr: "Eril Akkusativ. Wille N-çekimidir. İyelik 'meinen'.",
            de: "Maskulin Akkusativ. Wille ist N-Deklination (Willen). Posesiv 'meinen'."
        },
        slots: [ { type: 'art', answer: "meinen", options: ["mein", "meinen", "meinem", "meines"] } ]
    },
    {
        id: 186, level: 'C1', case: 'Gen', category: 'Preposición Genitiva Culta',
        text: "{Mithilfe} ___ ___ Zeugen wurde der Dieb gefasst.",
        noun: "Zeuge (m)",
        verbDesc: {
            es: "Mithilfe: Con ayuda de. Rige Genitivo.",
            en: "Mithilfe: With the help of. Takes Genitive.",
            tr: "Mithilfe: Yardımıyla. Genitiv alır.",
            de: "Mithilfe + Genitiv."
        },
        explanation: {
            es: "Genitivo masculino. Zeuge es N-Deklination. Artículo 'eines', adjetivo mixto '-en'.",
            en: "Masculine Genitive. Zeuge is N-declension. Article 'eines', mixed adjective '-en'.",
            tr: "Eril Genitiv. Zeuge N-çekimidir. Tanımlayıcı 'eines', karma sıfat '-en'.",
            de: "Maskulin Genitiv. Zeuge ist N-Deklination. Adjektiv '-en'."
        },
        slots: [
            { type: 'art', answer: "eines", options: ["einem", "einen", "eines", "ein"] },
            { type: 'adj', answer: "mutigen", options: ["mutige", "mutigen", "mutiger", "mutiges"] }
        ]
    },
    {
        id: 187, level: 'B2', case: 'Nom', category: 'Possessivpronomen (Ersatz)',
        text: "Ist das dein Buch? Nein, das ist ___.",
        noun: "Buch (n)",
        verbDesc: {
            es: "Sein: Ser. Pronombre posesivo neutro sustituto.",
            en: "Sein: To be. Neuter possessive pronoun replacement.",
            tr: "Sein: Olmak. Nötr iyelik zamiri.",
            de: "Possessivpronomen Neutrum."
        },
        explanation: {
            es: "Sustituye a un neutro en Nominativo. Terminación fuerte '-es' (meines/meins).",
            en: "Replaces a neuter in Nominative. Strong ending '-es' (meines/meins).",
            tr: "Nominativ nötr bir ismin yerini alır. Güçlü ek '-es' alır.",
            de: "Ersatz für Neutrum Nominativ -> 'meines' oder 'meins'."
        },
        slots: [ { type: 'art', answer: "meines", options: ["mein", "meine", "meiner", "meines"] } ]
    },
    {
        id: 188, level: 'C1', case: 'Gen', category: 'Preposición Genitiva Culta',
        text: "{Angesichts} ___ ___ Krise muss gespart werden.",
        noun: "Krise (f)",
        verbDesc: {
            es: "Angesichts: En vista de / Ante. Rige Genitivo.",
            en: "Angesichts: In light of. Takes Genitive.",
            tr: "Angesichts: Karşısında / Bakıldığında. Genitiv alır.",
            de: "Angesichts + Genitiv."
        },
        explanation: {
            es: "Genitivo femenino. Artículo 'der', adjetivo débil '-en'.",
            en: "Feminine Genitive. Article 'der', weak adjective '-en'.",
            tr: "Dişil Genitiv. Tanımlayıcı 'der', zayıf sıfat '-en'.",
            de: "Feminin Genitiv. Artikel 'der', Adjektiv '-en'."
        },
        slots: [
            { type: 'art', answer: "der", options: ["die", "der", "den", "des"] },
            { type: 'adj', answer: "wirtschaftlichen", options: ["wirtschaftliche", "wirtschaftlichen", "wirtschaftlicher", "wirtschaftliches"] }
        ]
    },
    {
        id: 189, level: 'C1', case: 'Gen', category: 'Preposición Genitiva Culta',
        text: "{Bezüglich} ___ ___ Schreibens habe ich eine Frage.",
        noun: "Schreiben (n)",
        verbDesc: {
            es: "Bezüglich: En relación con / Respecto a. Rige Genitivo.",
            en: "Bezüglich: Regarding. Takes Genitive.",
            tr: "Bezüglich: İlgili olarak. Genitiv alır.",
            de: "Bezüglich + Genitiv."
        },
        explanation: {
            es: "Genitivo neutro. Posesivo 'Ihres', adjetivo débil '-en'.",
            en: "Neuter Genitive. Possessive 'Ihres', weak adjective '-en'.",
            tr: "Nötr Genitiv. İyelik 'Ihres', zayıf sıfat '-en'.",
            de: "Neutrum Genitiv. Possessiv 'Ihres', Adjektiv '-en'."
        },
        slots: [
            { type: 'art', answer: "Ihres", options: ["Ihr", "Ihren", "Ihrem", "Ihres"] },
            { type: 'adj', answer: "letzten", options: ["letzte", "letzten", "letzter", "letztes"] }
        ]
    },
    {
        id: 190, level: 'B2', case: 'Dat', category: 'Verbo con Dativo',
        text: "Ich {gratuliere} ___ ___ Bruder.",
        noun: "Bruder (m)",
        verbDesc: {
            es: "Gratulieren: Felicitar. Rige Dativo.",
            en: "Gratulieren: To congratulate. Takes Dative.",
            tr: "Gratulieren: Tebrik etmek. Dativ alır.",
            de: "Gratulieren + Dativ."
        },
        explanation: {
            es: "Dativo masculino. Posesivo 'deinem', adjetivo débil '-en'.",
            en: "Masculine Dative. Possessive 'deinem', weak adjective '-en'.",
            tr: "Eril Dativ. İyelik 'deinem', zayıf sıfat '-en'.",
            de: "Maskulin Dativ. Possessiv 'deinem', Adjektiv '-en'."
        },
        slots: [
            { type: 'art', answer: "deinem", options: ["dein", "deinen", "deinem", "deines"] },
            { type: 'adj', answer: "jüngeren", options: ["jüngere", "jüngeren", "jüngerem", "jüngeres"] }
        ]
    },
    {
        id: 191, level: 'C1', case: 'Gen', category: 'Preposición Genitiva Culta',
        text: "{Längs} ___ ___ Flusses führt ein Radweg.",
        noun: "Fluss (m)",
        verbDesc: {
            es: "Längs: A lo largo de. Rige Genitivo.",
            en: "Längs: Along. Takes Genitive.",
            tr: "Längs: Boyunca. Genitiv alır.",
            de: "Längs + Genitiv."
        },
        explanation: {
            es: "Genitivo masculino. Artículo 'des', adjetivo débil '-en'.",
            en: "Masculine Genitive. Article 'des', weak adjective '-en'.",
            tr: "Eril Genitiv. Tanımlayıcı 'des', zayıf sıfat '-en'.",
            de: "Maskulin Genitiv. Artikel 'des', Adjektiv '-en'."
        },
        slots: [
            { type: 'art', answer: "des", options: ["der", "den", "dem", "des"] },
            { type: 'adj', answer: "breiten", options: ["breite", "breiten", "breiter", "breites"] }
        ]
    },
    {
        id: 192, level: 'B2', case: 'Akk', category: 'Preposición Akkusativ',
        text: "Er arbeitet {ohne} ___ ___ Unterstützung.",
        noun: "Unterstützung (f)",
        verbDesc: {
            es: "Ohne: Sin. Rige Akkusativ.",
            en: "Ohne: Without. Takes Accusative.",
            tr: "Ohne: -sız / -siz. Akkusativ alır.",
            de: "Ohne + Akkusativ."
        },
        explanation: {
            es: "Akkusativ femenino. Posesivo 'unsere', adjetivo débil '-e'.",
            en: "Feminine Accusative. Possessive 'unsere', weak adjective '-e'.",
            tr: "Dişil Akkusativ. İyelik 'unsere', zayıf sıfat '-e'.",
            de: "Feminin Akkusativ. Possessiv 'unsere', Adjektiv '-e'."
        },
        slots: [
            { type: 'art', answer: "unsere", options: ["unser", "unsere", "unserem", "unseres"] },
            { type: 'adj', answer: "finanzielle", options: ["finanzielle", "finanziellen", "finanzieller", "finanzielles"] }
        ]
    },
    {
        id: 193, level: 'C1', case: 'Gen', category: 'Preposición Genitiva Culta',
        text: "{Jenseits} ___ ___ Berge ist das Klima anders.",
        noun: "Berge (pl)",
        verbDesc: {
            es: "Jenseits: Al otro lado de / Más allá de. Rige Genitivo.",
            en: "Jenseits: Beyond. Takes Genitive.",
            tr: "Jenseits: Ötesinde. Genitiv alır.",
            de: "Jenseits + Genitiv."
        },
        explanation: {
            es: "Genitivo plural. Artículo 'der', adjetivo débil '-en'.",
            en: "Plural Genitive. Article 'der', weak adjective '-en'.",
            tr: "Çoğul Genitiv. Tanımlayıcı 'der', zayıf sıfat '-en'.",
            de: "Plural Genitiv. Artikel 'der', Adjektiv '-en'."
        },
        slots: [
            { type: 'art', answer: "der", options: ["die", "der", "den", "des"] },
            { type: 'adj', answer: "hohen", options: ["hohe", "hohen", "hoher", "hohes"] }
        ]
    },
    {
        id: 194, level: 'B2', case: 'Dat', category: 'Preposición Dativa',
        text: "Ich bin {mit} ___ ___ Ergebnis zufrieden.",
        noun: "Ergebnis (n)",
        verbDesc: {
            es: "Mit: Con. Rige Dativo.",
            en: "Mit: With. Takes Dative.",
            tr: "Mit: İle. Dativ alır.",
            de: "Mit + Dativ."
        },
        explanation: {
            es: "Dativo neutro. Posesivo 'deinem', adjetivo débil '-en'.",
            en: "Neuter Dative. Possessive 'deinem', weak adjective '-en'.",
            tr: "Nötr Dativ. İyelik 'deinem', zayıf sıfat '-en'.",
            de: "Neutrum Dativ. Possessiv 'deinem', Adjektiv '-en'."
        },
        slots: [
            { type: 'art', answer: "deinem", options: ["dein", "deinen", "deinem", "deines"] },
            { type: 'adj', answer: "letzten", options: ["letzte", "letzten", "letzter", "letztes"] }
        ]
    },
    {
        id: 195, level: 'C1', case: 'Gen', category: 'Preposición Genitiva Culta',
        text: "{Zwecks} ___ ___ Identifikation benötigen wir Ihren Ausweis.",
        noun: "Identifikation (f)",
        verbDesc: {
            es: "Zwecks: A efectos de / Con el fin de. Rige Genitivo.",
            en: "Zwecks: For the purpose of. Takes Genitive.",
            tr: "Zwecks: Amacıyla. Genitiv alır.",
            de: "Zwecks + Genitiv."
        },
        explanation: {
            es: "Genitivo femenino sin artículo. Declinación fuerte del adjetivo '-er'.",
            en: "Feminine Genitive without article. Strong adjective ending '-er'.",
            tr: "Tanımlayıcısız dişil Genitiv. Güçlü sıfat tamlaması '-er'.",
            de: "Feminin Genitiv ohne Artikel. Starke Adjektivendung '-er'."
        },
        slots: [ { type: 'adj', answer: "eindeutiger", options: ["eindeutige", "eindeutigen", "eindeutiger", "eindeutiges"] } ]
    },
    {
        id: 196, level: 'B2', case: 'Akk', category: 'Verbo con Akkusativ',
        text: "Ich {besuche} ___ ___ Onkel.",
        noun: "Onkel (m)",
        verbDesc: {
            es: "Besuchen: Visitar. Rige Akkusativ.",
            en: "Besuchen: To visit. Takes Accusative.",
            tr: "Besuchen: Ziyaret etmek. Akkusativ alır.",
            de: "Besuchen + Akkusativ."
        },
        explanation: {
            es: "Akkusativ masculino. Posesivo 'meinen', adjetivo débil '-en'.",
            en: "Masculine Accusative. Possessive 'meinen', weak adjective '-en'.",
            tr: "Eril Akkusativ. İyelik 'meinen', zayıf sıfat '-en'.",
            de: "Maskulin Akkusativ. Possessiv 'meinen', Adjektiv '-en'."
        },
        slots: [
            { type: 'art', answer: "meinen", options: ["mein", "meinen", "meinem", "meines"] },
            { type: 'adj', answer: "kranken", options: ["kranke", "kranken", "kranker", "krankes"] }
        ]
    },
    {
        id: 197, level: 'C1', case: 'Gen', category: 'Preposición Genitiva Culta',
        text: "{Inmitten} ___ ___ Tumults bewahrte sie die Ruhe.",
        noun: "Tumult (m)",
        verbDesc: {
            es: "Inmitten: En medio de. Rige Genitivo.",
            en: "Inmitten: In the midst of. Takes Genitive.",
            tr: "Inmitten: Ortasında. Genitiv alır.",
            de: "Inmitten + Genitiv."
        },
        explanation: {
            es: "Genitivo masculino. Artículo 'des', adjetivo débil '-en'.",
            en: "Masculine Genitive. Article 'des', weak adjective '-en'.",
            tr: "Eril Genitiv. Tanımlayıcı 'des', zayıf sıfat '-en'.",
            de: "Maskulin Genitiv. Artikel 'des', Adjektiv '-en'."
        },
        slots: [
            { type: 'art', answer: "des", options: ["der", "den", "dem", "des"] },
            { type: 'adj', answer: "großen", options: ["große", "großen", "großer", "großes"] }
        ]
    },
    {
        id: 198, level: 'B2', case: 'Dat', category: 'Verbo con Dativo',
        text: "Ich {antworte} ___ ___ Chef.",
        noun: "Chef (m)",
        verbDesc: {
            es: "Antworten: Responder. Rige Dativo.",
            en: "Antworten: To answer. Takes Dative.",
            tr: "Antworten: Cevap vermek. Dativ alır.",
            de: "Antworten + Dativ."
        },
        explanation: {
            es: "Dativo masculino. Posesivo 'meinem', adjetivo débil '-en'.",
            en: "Masculine Dative. Possessive 'meinem', weak adjective '-en'.",
            tr: "Eril Dativ. İyelik 'meinem', zayıf sıfat '-en'.",
            de: "Maskulin Dativ. Possessiv 'meinem', Adjektiv '-en'."
        },
        slots: [
            { type: 'art', answer: "meinem", options: ["mein", "meinen", "meinem", "meines"] },
            { type: 'adj', answer: "neuen", options: ["neue", "neuen", "neuem", "neues"] }
        ]
    },
    {
        id: 199, level: 'C1', case: 'Gen', category: 'Preposición Genitiva Culta',
        text: "{Ungeachtet} ___ ___ Verluste kämpften sie weiter.",
        noun: "Verluste (pl)",
        verbDesc: {
            es: "Ungeachtet: Pese a / Independientemente de. Rige Genitivo.",
            en: "Ungeachtet: Regardless of. Takes Genitive.",
            tr: "Ungeachtet: Rağmen. Genitiv alır.",
            de: "Ungeachtet + Genitiv."
        },
        explanation: {
            es: "Genitivo plural. Artículo 'der', adjetivo débil '-en'.",
            en: "Plural Genitive. Article 'der', weak adjective '-en'.",
            tr: "Çoğul Genitiv. Tanımlayıcı 'der', zayıf sıfat '-en'.",
            de: "Plural Genitiv. Artikel 'der', Adjektiv '-en'."
        },
        slots: [
            { type: 'art', answer: "der", options: ["die", "der", "den", "des"] },
            { type: 'adj', answer: "schweren", options: ["schwere", "schweren", "schwerer", "schweres"] }
        ]
    },
    {
        id: 200, level: 'C1', case: 'Dat', category: 'Preposición Dativa (Cierre)',
        text: "Wir haben uns {von} ___ ___ Kollegen verabschiedet.",
        noun: "Kollege (m)",
        verbDesc: {
            es: "Sich verabschieden von: Despedirse de. Rige Dativo.",
            en: "Sich verabschieden von: To say goodbye to. Takes Dative.",
            tr: "Sich verabschieden von: -e veda etmek. Dativ alır.",
            de: "Sich verabschieden von + Dativ."
        },
        explanation: {
            es: "Dativo masculino. Kollege es N-Deklination. Posesivo 'unserem', adjetivo débil '-en'.",
            en: "Masculine Dative. Kollege is N-declension. Possessive 'unserem', weak adjective '-en'.",
            tr: "Eril Dativ. Kollege N-çekimidir. İyelik 'unserem', zayıf sıfat '-en'.",
            de: "Maskulin Dativ. Kollege ist N-Deklination. Adjektiv '-en'."
        },
        slots: [
            { type: 'art', answer: "unserem", options: ["unser", "unseren", "unserem", "unseres"] },
            { type: 'adj', answer: "geschätzten", options: ["geschätzte", "geschätzten", "geschätzter", "geschätztes"] }
        ]
    },

            {
        id: 201, level: 'B2', case: 'Akk', category: 'La "A" Personal',
        text: "Ich {besuche} ___ (m) alt___ Lehrer.",
        noun: "Lehrer (m)",
        verbDesc: {
            es: "Besuchen: Visitar a alguien. (Lo visito -> Akkusativ).",
            en: "Besuchen: To visit someone. (Accusative).",
            de: "Besuchen + Akkusativ."
        },
        explanation: {
            es: "En español decimos 'a mi profesor', pero es Akkusativ. Masculino 'meinen', adjetivo '-en'.",
            en: "In Spanish we use 'a', but it's Accusative. Masculine 'meinen', adjective '-en'.",
            de: "Direktes Objekt (Akk). Maskulin 'meinen', Adjektiv '-en'."
        },
        slots: [
            { type: 'art', answer: "meinen", options: ["mein", "meinen", "meinem", "meines"] },
            { type: 'adj', answer: "alten", options: ["alte", "alten", "altem", "altes"] }
        ]
    },
    {
        id: 202, level: 'B2', case: 'Dat', category: 'La "A" Personal',
        text: "Ich {helfe} ___ (m) alt___ Lehrer.",
        noun: "Lehrer (m)",
        verbDesc: {
            es: "Helfen: Ayudar a alguien. (Le ayudo -> Dativo).",
            en: "Helfen: To help someone. (Dative).",
            de: "Helfen + Dativ."
        },
        explanation: {
            es: "Helfen es dativo puro. Masculino 'dem', adjetivo '-en'.",
            en: "Helfen is pure Dative. Masculine 'dem', adjective '-en'.",
            de: "Dativ-Verb. Maskulin 'dem', Adjektiv '-en'."
        },
        slots: [
            { type: 'art', answer: "dem", options: ["der", "den", "dem", "das"] },
            { type: 'adj', answer: "alten", options: ["alte", "alten", "altem", "altes"] }
        ]
    },
    {
        id: 203, level: 'C1', case: 'Akk', category: 'N-Deklination',
        text: "Kennst du ___ (m) neu___ {Präsidenten}?",
        noun: "Präsident (m)",
        verbDesc: {
            es: "Kennen: Conocer a alguien. Rige Akkusativ.",
            en: "Kennen: To know someone. Takes Accusative.",
            de: "Kennen + Akkusativ."
        },
        explanation: {
            es: "Akkusativ masculino. Präsident es N-Deklination (lleva -en). Adjetivo débil '-en'.",
            en: "Masculine Accusative. Präsident is N-declension. Weak adjective '-en'.",
            de: "Maskulin Akkusativ. N-Deklination + schwache Adjektivendung."
        },
        slots: [
            { type: 'art', answer: "den", options: ["der", "den", "dem", "des"] },
            { type: 'adj', answer: "neuen", options: ["neue", "neuen", "neuem", "neuer"] }
        ]
    },
    {
        id: 204, level: 'B2', case: 'Akk', category: 'El "Das" Problem',
        text: "Ich brauche ___ (n) neu___ Messer.",
        noun: "Messer (n)",
        verbDesc: {
            es: "Brauchen: Necesitar. Rige Akkusativ.",
            en: "Brauchen: To need. Accusative.",
            de: "Brauchen + Akkusativ."
        },
        explanation: {
            es: "Cuchillo en alemán es neutro. Akkusativ neutro 'ein', adjetivo mixto '-es'.",
            en: "Knife is neuter in German. Neuter Accusative 'ein', mixed adjective '-es'.",
            de: "Neutrum Akkusativ. Artikel 'ein', gemischte Endung '-es'."
        },
        slots: [
            { type: 'art', answer: "ein", options: ["ein", "eine", "einer", "einen"] },
            { type: 'adj', answer: "neues", options: ["neue", "neuen", "neuem", "neues"] }
        ]
    },
    {
        id: 205, level: 'C1', case: 'Dat', category: 'N-Deklination',
        text: "Ich habe {mit} ___ (m) jung___ {Kunden} gesprochen.",
        noun: "Kunde (m)",
        verbDesc: {
            es: "Sprechen mit: Hablar con. Rige Dativo.",
            en: "Sprechen mit: To speak with. Dative.",
            de: "Mit + Dativ."
        },
        explanation: {
            es: "Dativo masculino. Kunde es N-Deklination (añade -n). Posesivo 'einem', adjetivo débil '-en'.",
            en: "Masculine Dative. Kunde is N-declension. Article 'einem', weak adjective '-en'.",
            de: "Maskulin Dativ. N-Deklination + schwache Endung."
        },
        slots: [
            { type: 'art', answer: "einem", options: ["ein", "einen", "einem", "einer"] },
            { type: 'adj', answer: "jungen", options: ["junge", "jungen", "junger", "junges"] }
        ]
    },
    {
        id: 206, level: 'B2', case: 'Akk', category: 'La "A" Personal',
        text: "Er {fragt} ___ (m) nett___ Polizisten.",
        noun: "Polizist (m)",
        verbDesc: {
            es: "Fragen: Preguntar a alguien. (Lo pregunta -> Akkusativ).",
            en: "Fragen: To ask someone. (Accusative).",
            de: "Fragen + Akkusativ."
        },
        explanation: {
            es: "En español decimos 'le pregunta', pero en alemán es Akkusativ. Polizist es N-Deklination.",
            en: "Accusative object. Polizist is N-declension.",
            de: "Akkusativobjekt. Maskulin 'den', Polizist (N-Dekl)."
        },
        slots: [
            { type: 'art', answer: "den", options: ["der", "den", "dem", "des"] },
            { type: 'adj', answer: "netten", options: ["nette", "netten", "netter", "nettes"] }
        ]
    },
    {
        id: 207, level: 'C1', case: 'Dat', category: 'Verbos Dativo Puro',
        text: "Das {schadet} ___ (m) gesund___ Körper.",
        noun: "Körper (m)",
        verbDesc: {
            es: "Schaden: Dañar a algo/alguien. Rige Dativo.",
            en: "Schaden: To harm. Takes Dative.",
            de: "Schaden + Dativ."
        },
        explanation: {
            es: "Dañar 'le' a algo. Dativo masculino 'dem', adjetivo débil '-en'.",
            en: "Harmful to something (Dative). Masculine 'dem', weak adjective '-en'.",
            de: "Dativ-Verb. Maskulin 'dem', Adjektiv '-en'."
        },
        slots: [
            { type: 'art', answer: "dem", options: ["der", "den", "dem", "das"] },
            { type: 'adj', answer: "gesunden", options: ["gesunde", "gesunden", "gesunder", "gesundes"] }
        ]
    },
    {
        id: 208, level: 'B2', case: 'Akk', category: 'El "Das" Problem',
        text: "Ich {sehe} ___ (n) klein___ Kind.",
        noun: "Kind (n)",
        verbDesc: {
            es: "Sehen: Ver. Akkusativ.",
            en: "Sehen: To see. Accusative.",
            de: "Sehen + Akkusativ."
        },
        explanation: {
            es: "Akkusativ neutro. Posesivo 'mein', adjetivo mixto '-es'.",
            en: "Neuter Accusative. Possessive 'mein', mixed adjective '-es'.",
            de: "Neutrum Akkusativ. 'mein' + Endung '-es'."
        },
        slots: [
            { type: 'art', answer: "mein", options: ["mein", "meine", "meinen", "meinem"] },
            { type: 'adj', answer: "kleine", options: ["kleine", "kleinen", "kleines", "kleiner"] }
        ]
    },
    {
        id: 209, level: 'C1', case: 'Gen', category: 'Preposiciones Genitivas',
        text: "{Wegen} ___ (m) schlecht___ {Wissens} kam er nicht weiter.",
        noun: "Wissen (n)",
        verbDesc: {
            es: "Wegen: Debido a. Rige Genitivo.",
            en: "Wegen: Because of. Genitive.",
            de: "Wegen + Genitiv."
        },
        explanation: {
            es: "Wissen es neutro. Genitivo 'seines', adjetivo mixto '-en'.",
            en: "Knowledge (Wissen) is neuter. Genitive 'seines', adjective '-en'.",
            de: "Neutrum Genitiv. 'seines' + '-en'."
        },
        slots: [
            { type: 'art', answer: "seines", options: ["sein", "seinen", "seinem", "seines"] },
            { type: 'adj', answer: "schlechten", options: ["schlechte", "schlechten", "schlechtes", "schlechter"] }
        ]
    },
    {
        id: 210, level: 'B2', case: 'Dat', category: 'La "A" Personal',
        text: "Ich {vertraue} ___ (m) gut___ Freund.",
        noun: "Freund (m)",
        verbDesc: {
            es: "Vertrauen: Confiar en alguien. (Le confío -> Dativo).",
            en: "Vertrauen: To trust. Dative.",
            de: "Vertrauen + Dativ."
        },
        explanation: {
            es: "Dativo masculino. Posesivo 'meinem', adjetivo débil '-en'.",
            en: "Masculine Dative. Possessive 'meinem', weak adjective '-en'.",
            de: "Maskulin Dativ. 'meinem' + '-en'."
        },
        slots: [
            { type: 'art', answer: "meinem", options: ["mein", "meinen", "meinem", "meines"] },
            { type: 'adj', answer: "guten", options: ["gute", "guten", "gutem", "gutes"] }
        ]
    },
    {
        id: 211, level: 'C1', case: 'Akk', category: 'N-Deklination',
        text: "Ich habe ___ (m) groß___ {Diamanten} verloren.",
        noun: "Diamant (m)",
        verbDesc: {
            es: "Verlieren: Perder algo. Akkusativ.",
            en: "Verlieren: To lose. Accusative.",
            de: "Verlieren + Akkusativ."
        },
        explanation: {
            es: "Diamant es N-Deklination. Akkusativ masculino 'einen', adjetivo mixto '-en'.",
            en: "Diamant is N-declension. Masculine 'einen', adjective '-en'.",
            de: "Maskulin Akkusativ. N-Deklination."
        },
        slots: [
            { type: 'art', answer: "einen", options: ["ein", "einer", "einem", "einen"] },
            { type: 'adj', answer: "großen", options: ["große", "großen", "großer", "großes"] }
        ]
    },
    {
        id: 212, level: 'B2', case: 'Dat', category: 'Doble Objeto',
        text: "Ich {empfehle} ___ (f) Freundin ___ (n) gut___ Restaurant.",
        noun: "Freundin (f), Restaurant (n)",
        verbDesc: {
            es: "Empfehlen: Recomendar. (Nom empfiehlt Dat Akk).",
            en: "Empfehlen: To recommend.",
            de: "Empfehlen: Dat + Akk."
        },
        explanation: {
            es: "¿A quién? (Dativo femenino -> meiner). ¿Qué? (Akkusativ neutro -> ein ... -es).",
            en: "Who? (Dative). What? (Accusative).",
            de: "Wem? (Dat). Was? (Akk)."
        },
        slots: [
            { type: 'art', answer: "meiner", options: ["meine", "meiner", "meinen", "meinem"] },
            { type: 'art', answer: "ein", options: ["ein", "eine", "einer", "einen"] },
            { type: 'adj', answer: "gutes", options: ["gute", "guten", "gutes", "guter"] }
        ]
    },
    {
        id: 213, level: 'C1', case: 'Gen', category: 'Genitivo Posesivo',
        text: "Das ist die Tasche ___ (f) neu___ Kollegin.",
        noun: "Kollegin (f)",
        verbDesc: {
            es: "Sein: Ser. Indica posesión (de la...).",
            en: "Sein: To be. Shows possession.",
            de: "Genitivattribut."
        },
        explanation: {
            es: "Genitivo femenino. Artículo 'der', adjetivo débil '-en'.",
            en: "Feminine Genitive. Article 'der', weak adjective '-en'.",
            de: "Feminin Genitiv. 'der' + '-en'."
        },
        slots: [
            { type: 'art', answer: "der", options: ["die", "der", "den", "des"] },
            { type: 'adj', answer: "neuen", options: ["neue", "neuen", "neuer", "neues"] }
        ]
    },
    {
        id: 214, level: 'B2', case: 'Dat', category: 'Preposiciones Fijas',
        text: "Ich bin {mit} ___ (m) alt___ Wagen zufrieden.",
        noun: "Wagen (m)",
        verbDesc: {
            es: "Zufrieden sein mit: Estar satisfecho con. Rige Dativo.",
            en: "Zufrieden sein mit: To be satisfied with. Dative.",
            de: "Zufrieden mit + Dativ."
        },
        explanation: {
            es: "Dativo masculino. Artículo 'dem', adjetivo débil '-en'.",
            en: "Masculine Dative. Article 'dem', weak adjective '-en'.",
            de: "Maskulin Dativ. 'dem' + '-en'."
        },
        slots: [
            { type: 'art', answer: "dem", options: ["der", "den", "dem", "des"] },
            { type: 'adj', answer: "alten", options: ["alte", "alten", "altem", "altes"] }
        ]
    },
    {
        id: 215, level: 'C1', case: 'Akk', category: 'Reflexivos',
        text: "Ich {gewöhne} mich an ___ (n) kalt___ Wetter.",
        noun: "Wetter (n)",
        verbDesc: {
            es: "Sich gewöhnen an: Acostumbrarse a. Rige Akkusativ.",
            en: "Sich gewöhnen an: To get used to. Accusative.",
            de: "Gewöhnen an + Akkusativ."
        },
        explanation: {
            es: "Akkusativ neutro. Artículo 'das', adjetivo débil '-en'.",
            en: "Neuter Accusative. Article 'das', weak adjective '-en'.",
            de: "Neutrum Akkusativ. 'das' + '-en'."
        },
        slots: [
            { type: 'art', answer: "das", options: ["das", "dem", "des", "den"] },
            { type: 'adj', answer: "kalte", options: ["kalte", "kalten", "kaltem", "kaltes"] }
        ]
    },
    {
        id: 216, level: 'B2', case: 'Akk', category: 'La "A" Personal',
        text: "Ich {suche} ___ (m) nett___ {Nachbarn}.",
        noun: "Nachbar (m)",
        verbDesc: {
            es: "Suchen: Buscar. Rige Akkusativ.",
            en: "Suchen: To search. Accusative.",
            de: "Suchen + Akkusativ."
        },
        explanation: {
            es: "Nachbar es N-Deklination. Akkusativ masculino 'meinen', adjetivo débil '-en'.",
            en: "Nachbar is N-declension. Masculine 'meinen', weak adjective '-en'.",
            de: "Maskulin Akkusativ. 'meinen' + '-en'."
        },
        slots: [
            { type: 'art', answer: "meinen", options: ["mein", "meinen", "meinem", "meines"] },
            { type: 'adj', answer: "netten", options: ["nette", "netten", "netter", "nettes"] }
        ]
    },
    {
        id: 217, level: 'C1', case: 'Gen', category: 'Preposiciones Genitivas',
        text: "{Infolge} ___ ___ Unfalls war die Straße gesperrt.",
        noun: "Unfall (m)",
        verbDesc: {
            es: "Infolge: Como consecuencia de. Genitivo.",
            en: "Infolge: As a result of. Genitive.",
            de: "Infolge + Genitiv."
        },
        explanation: {
            es: "Genitivo masculino. Artículo 'eines', adjetivo mixto '-en'.",
            en: "Masculine Genitive. Article 'eines', mixed adjective '-en'.",
            de: "Maskulin Genitiv. 'eines' + '-en'."
        },
        slots: [
            { type: 'art', answer: "eines", options: ["ein", "einer", "einem", "eines"] },
            { type: 'adj', answer: "schweren", options: ["schwere", "schweren", "schwerer", "schweres"] }
        ]
    },
    {
        id: 218, level: 'B2', case: 'Dat', category: 'Preposiciones Fijas',
        text: "Ich {träume} von ___ ___ Haus am Meer.",
        noun: "Haus (n)",
        verbDesc: {
            es: "Träumen von: Soñar con. Rige Dativo.",
            en: "Träumen von: To dream of. Dative.",
            de: "Träumen von + Dativ."
        },
        explanation: {
            es: "Dativo neutro. Artículo 'einem', adjetivo mixto '-en'.",
            en: "Neuter Dative. Article 'einem', mixed adjective '-en'.",
            de: "Neutrum Dativ. 'einem' + '-en'."
        },
        slots: [
            { type: 'art', answer: "einem", options: ["ein", "einen", "einem", "einer"] },
            { type: 'adj', answer: "großen", options: ["große", "großen", "großes", "großem"] }
        ]
    },
    {
        id: 219, level: 'C1', case: 'Akk', category: 'N-Deklination',
        text: "Haben Sie ___ (m) {Patienten} schon gesehen?",
        noun: "Patient (m)",
        verbDesc: {
            es: "Sehen: Ver. Rige Akkusativ.",
            en: "Sehen: To see. Accusative.",
            de: "Sehen + Akkusativ."
        },
        explanation: {
            es: "Patient es N-Deklination. Akkusativ masculino 'den'.",
            en: "Patient is N-declension. Masculine 'den'.",
            de: "Maskulin Akkusativ. 'den' + Patient-en."
        },
        slots: [ { type: 'art', answer: "den", options: ["der", "den", "dem", "des"] } ]
    },
    {
        id: 220, level: 'B2', case: 'Akk', category: 'El "Das" Problem',
        text: "Ich kaufe ___ ___ Kleid.",
        noun: "Kleid (n)",
        verbDesc: {
            es: "Kaufen: Comprar. Akkusativ.",
            en: "Kaufen: To buy. Accusative.",
            de: "Kaufen + Akkusativ."
        },
        explanation: {
            es: "Vestido es neutro. Akkusativ neutro 'ein', adjetivo mixto '-es'.",
            en: "Dress is neuter. Neuter Accusative 'ein', adjective '-es'.",
            de: "Neutrum Akkusativ. 'ein' + '-es'."
        },
        slots: [
            { type: 'art', answer: "ein", options: ["ein", "eine", "einer", "einen"] },
            { type: 'adj', answer: "schönes", options: ["schöne", "schönen", "schönes", "schöner"] }
        ]
    },
    {
        id: 221, level: 'C1', case: 'Gen', category: 'Genitivo',
        text: "Die Hilfe ___ ___ Menschen ist bewundernswert.",
        noun: "Menschen (pl)",
        verbDesc: {
            es: "Sein: Ser.",
            en: "Sein: To be.",
            de: "Sein."
        },
        explanation: {
            es: "Genitivo plural. Artículo 'der', adjetivo débil '-en'.",
            en: "Plural Genitive. Article 'der', weak adjective '-en'.",
            de: "Plural Genitiv. 'der' + '-en'."
        },
        slots: [
            { type: 'art', answer: "der", options: ["die", "der", "den", "des"] },
            { type: 'adj', answer: "vielen", options: ["viele", "vielen", "vieler", "vieles"] }
        ]
    },
    {
        id: 222, level: 'B2', case: 'Dat', category: 'La "A" Personal',
        text: "Das {gehört} ___ (m) klein___ Kind.",
        noun: "Kind (n)",
        verbDesc: {
            es: "Gehören: Pertenecer a alguien. Dativo.",
            en: "Gehören: To belong. Dative.",
            de: "Gehören + Dativ."
        },
        explanation: {
            es: "Dativo neutro. Artículo 'dem', adjetivo débil '-en'.",
            en: "Neuter Dative. Article 'dem', weak adjective '-en'.",
            de: "Neutrum Dativ. 'dem' + '-en'."
        },
        slots: [
            { type: 'art', answer: "dem", options: ["das", "dem", "des", "den"] },
            { type: 'adj', answer: "kleinen", options: ["kleine", "kleinen", "kleiner", "kleines"] }
        ]
    },
    {
        id: 223, level: 'C1', case: 'Akk', category: 'N-Deklination',
        text: "Ich {rufe} ___ (m) {Experten} an.",
        noun: "Experte (m)",
        verbDesc: {
            es: "Anrufen: Llamar por teléfono. Rige Akkusativ.",
            en: "Anrufen: To call. Accusative.",
            de: "Anrufen + Akkusativ."
        },
        explanation: {
            es: "Experte es N-Deklination. Akkusativ masculino 'den'.",
            en: "Experte is N-declension. Masculine 'den'.",
            de: "Maskulin Akkusativ. 'den' + Experte-n."
        },
        slots: [ { type: 'art', answer: "den", options: ["der", "den", "dem", "des"] } ]
    },
    {
        id: 224, level: 'B2', case: 'Dat', category: 'Preposiciones Fijas',
        text: "Ich {telefone mit} ___ ___ Freundin.",
        noun: "Freundin (f)",
        verbDesc: {
            es: "Telefonieren mit: Hablar por teléfono con. Dativo.",
            en: "Telefonieren mit: To phone someone. Dative.",
            de: "Telefonieren mit + Dativ."
        },
        explanation: {
            es: "Dativo femenino. Posesivo 'meiner', adjetivo débil '-en'.",
            en: "Feminine Dative. Possessive 'meiner', weak adjective '-en'.",
            de: "Feminin Dativ. 'meiner' + '-en'."
        },
        slots: [
            { type: 'art', answer: "meiner", options: ["meine", "meiner", "meinen", "meinem"] },
            { type: 'adj', answer: "besten", options: ["beste", "besten", "bester", "bestes"] }
        ]
    },
    {
        id: 225, level: 'C1', case: 'Gen', category: 'Preposiciones Genitivas',
        text: "{Anstatt} ___ ___ Autos nehme ich das Fahrrad.",
        noun: "Auto (n)",
        verbDesc: {
            es: "Anstatt: En lugar de. Rige Genitivo.",
            en: "Anstatt: Instead of. Genitive.",
            de: "Anstatt + Genitiv."
        },
        explanation: {
            es: "Genitivo neutro. Artículo 'des', adjetivo débil '-en'.",
            en: "Neuter Genitive. Article 'des', weak adjective '-en'.",
            de: "Neutrum Genitiv. 'des' + '-en'."
        },
        slots: [
            { type: 'art', answer: "des", options: ["das", "dem", "des", "den"] },
            { type: 'adj', answer: "teuren", options: ["teure", "teuren", "teurer", "teures"] }
        ]
    },
{
        id: 226, level: 'C1', case: 'Dat/Akk/Gen', category: 'Triple Declinación',
        text: "Ich {gebe} ___ ___ neu___ Nachbarn ___ Brief ___ ___ Vaters.",
        noun: "Nachbar (m), Brief (m), Vater (m)",
        verbDesc: {
            es: "Geben: Dar. (Nom gibt Dat Akk). Además incluye un Genitivo.",
            en: "Geben: To give. (Nom gives Dat Acc). Plus a Genitive.",
            tr: "Geben: Vermek. (Nom Dat'a Akk verir). Ayrıca bir Genitiv içerir.",
            de: "Geben: (Nom gibt Dat Akk) + Genitivattribut."
        },
        explanation: {
            es: "1. ¿A quién? (Dativo Nachbar + N-Dekl). 2. ¿Qué? (Akkusativ Brief). 3. ¿De quién? (Genitivo Vaters).",
            en: "1. To whom? (Dative + N-decl). 2. What? (Accusative). 3. Whose? (Genitive).",
            tr: "1. Kime? (Dativ + N-çekimi). 2. Neyi? (Akkusativ). 3. Kimin? (Genitiv).",
            de: "1. Wem? (Dat). 2. Was? (Akk). 3. Wessen? (Gen)."
        },
        slots: [
            { type: 'art', answer: "dem", options: ["der", "den", "dem", "des"] },
            { type: 'adj', answer: "neuen", options: ["neue", "neuen", "neuem", "neuer"] },
            { type: 'art', answer: "den", options: ["der", "den", "dem", "das"] },
            { type: 'art', answer: "meines", options: ["mein", "meinem", "meines", "meinen"] }
        ]
    },
    {
        id: 227, level: 'C1', case: 'Gen/Nom/Akk', category: 'Preposición Genitiva inicial',
        text: "{Trotz} ___ ___ Regens kauft ___ ___ Student ___ ___ Buch.",
        noun: "Regen (m), Student (m), Buch (n)",
        verbDesc: {
            es: "Kaufen: Comprar. El sujeto es Nominativo, el objeto Akkusativ.",
            en: "Kaufen: To buy. Subject is Nominative, object is Accusative.",
            tr: "Kaufen: Satın almak. Özne Nominativ, nesne Akkusativ.",
            de: "Kaufen: Nom kauft Akk."
        },
        explanation: {
            es: "1. Trotz (Genitivo). 2. Sujeto (Nominativo Student + N-Dekl). 3. Objeto (Akkusativ neutro).",
            en: "1. Trotz (Genitive). 2. Subject (Nominative). 3. Object (Neuter Accusative).",
            tr: "1. Trotz (Genitiv). 2. Özne (Nominativ). 3. Nesne (Nötr Akkusativ).",
            de: "1. Genitiv (Trotz). 2. Nominativ (Subjekt). 3. Akkusativ (Objekt)."
        },
        slots: [
            { type: 'art', answer: "des", options: ["dem", "des", "den", "das"] },
            { type: 'adj', answer: "starken", options: ["starker", "starken", "starkem", "starkes"] },
            { type: 'art', answer: "der", options: ["der", "den", "dem", "des"] },
            { type: 'adj', answer: "junge", options: ["junge", "jungen", "junger", "junges"] },
            { type: 'art', answer: "ein", options: ["ein", "einen", "einem", "eines"] },
            { type: 'adj', answer: "teures", options: ["teure", "teuren", "teures", "teurer"] }
        ]
    },
    {
        id: 228, level: 'C1', case: 'Dat/Akk', category: 'Reflexivo Dativ + Adjetivos',
        text: "Ich {wasche} ___ ___ schmutzig___ Hände mit ___ ___ Seife.",
        noun: "Hände (pl), Seife (f)",
        verbDesc: {
            es: "Sich (Dat) die Hände waschen: Lavarse las manos. 'Mit' rige Dativo.",
            en: "Sich (Dat) die Hände waschen: To wash one's hands. 'Mit' takes Dative.",
            tr: "Ellerini yıkamak. 'Mit' Dativ alır.",
            de: "Sich (Dat) die Hände (Akk) waschen + mit (Dat)."
        },
        explanation: {
            es: "1. Pronombre (mir). 2. Objeto (Akkusativ plural). 3. Preposición 'mit' (Dativo femenino).",
            en: "1. Pronoun (mir). 2. Object (Plural Accusative). 3. Prep 'mit' (Feminine Dative).",
            tr: "1. Zamir (mir). 2. Nesne (Çoğul Akkusativ). 3. Edat 'mit' (Dişil Dativ).",
            de: "1. mir (Refl). 2. die schmutzigen (Akk). 3. einer besonderen (Dat)."
        },
        slots: [
            { type: 'art', answer: "mir", options: ["mich", "mir", "sich", "uns"] },
            { type: 'art', answer: "die", options: ["die", "der", "den", "das"] },
            { type: 'adj', answer: "schmutzigen", options: ["schmutzige", "schmutzigen", "schmutziger", "schmutziges"] },
            { type: 'art', answer: "einer", options: ["eine", "einer", "einem", "einen"] },
            { type: 'adj', answer: "besonderen", options: ["besondere", "besonderen", "besonderer", "besonderes"] }
        ]
    },
    {
        id: 229, level: 'C1', case: 'Dat/Gen', category: 'Preposición + Posesión Genitiva',
        text: "Ich {sitze} in ___ ___ Zimmer ___ ___ Freundes.",
        noun: "Zimmer (n), Freund (m)",
        verbDesc: {
            es: "Sitzen in: Estar sentado en. (Wo? -> Dativo).",
            en: "Sitzen in: To be sitting in. (Where? -> Dative).",
            tr: "Sitzen in: -de oturmak. (Nerede? -> Dativ).",
            de: "Sitzen in + Dativ."
        },
        explanation: {
            es: "1. Ubicación (Dativo neutro). 2. Posesión (Genitivo masculino).",
            en: "1. Location (Neuter Dative). 2. Possession (Masculine Genitive).",
            tr: "1. Konum (Nötr Dativ). 2. İyelik (Eril Genitiv).",
            de: "1. Dativ (Ort). 2. Genitiv (Besitz)."
        },
        slots: [
            { type: 'art', answer: "dem", options: ["das", "dem", "des", "den"] },
            { type: 'adj', answer: "kleinen", options: ["kleine", "kleinen", "kleiner", "kleines"] },
            { type: 'art', answer: "meines", options: ["mein", "meinem", "meines", "meinen"] },
            { type: 'adj', answer: "besten", options: ["beste", "besten", "bester", "bestes"] }
        ]
    },
    {
        id: 230, level: 'C1', case: 'Akk/Dat', category: 'Verbo con Doble Objeto + N-Dekl',
        text: "Ich {erkläre} ___ ___ {Experten} ___ ___ Problem.",
        noun: "Experte (m), Problem (n)",
        verbDesc: {
            es: "Erklären: Explicar. (Nom erklärt Dat Akk).",
            en: "Erklären: To explain.",
            tr: "Erklären: Açıklamak.",
            de: "Erklären: Dat + Akk."
        },
        explanation: {
            es: "1. ¿A quién? (Dativo masculino + N-Dekl). 2. ¿Qué? (Akkusativ neutro).",
            en: "1. To whom? (Masculine Dative + N-decl). 2. What? (Neuter Accusative).",
            tr: "1. Kime? (Eril Dativ + N-çekimi). 2. Neyi? (Nötr Akkusativ).",
            de: "1. dem neuen Experten (Dat). 2. das schwierige Problem (Akk)."
        },
        slots: [
            { type: 'art', answer: "dem", options: ["der", "den", "dem", "des"] },
            { type: 'adj', answer: "neuen", options: ["neue", "neuen", "neuem", "neuer"] },
            { type: 'art', answer: "das", options: ["das", "dem", "des", "den"] },
            { type: 'adj', answer: "schwierige", options: ["schwierige", "schwierigen", "schwieriger", "schwieriges"] }
        ]
    },
    {
        id: 231, level: 'C1', case: 'Gen/Akk', category: 'Preposición Genitiva + Objeto Akkusativ',
        text: "{Wegen} ___ ___ {Fehlers} verlor er ___ ___ Job.",
        noun: "Fehler (m), Job (m)",
        verbDesc: {
            es: "Verlieren: Perder. Rige Akkusativ.",
            en: "Verlieren: To lose. Takes Accusative.",
            tr: "Verlieren: Kaybetmek. Akkusativ alır.",
            de: "Verlieren + Akkusativ."
        },
        explanation: {
            es: "1. Wegen rige Genitivo. 2. Objeto directo masculino (Akkusativ).",
            en: "1. Wegen requires Genitive. 2. Masculine direct object (Accusative).",
            tr: "1. Wegen Genitiv ister. 2. Eril belirtili nesne (Akkusativ).",
            de: "1. Genitiv (Wegen). 2. Akkusativ (Objekt)."
        },
        slots: [
            { type: 'art', answer: "eines", options: ["ein", "einen", "einem", "eines"] },
            { type: 'adj', answer: "kleinen", options: ["kleine", "kleinen", "kleiner", "kleines"] },
            { type: 'art', answer: "seinen", options: ["sein", "seine", "seinem", "seinen"] },
            { type: 'adj', answer: "gutem", options: ["gute", "guten", "gutem", "gutes"] }
        ]
    },
    {
        id: 232, level: 'C1', case: 'Dat/Gen', category: 'Preposición Dativa + Posesivo Genitivo',
        text: "Ich {fahre} {mit} ___ ___ Auto ___ ___ Chefs.",
        noun: "Auto (n), Chef (m)",
        verbDesc: {
            es: "Fahren mit: Ir con/en. Rige Dativo.",
            en: "Fahren mit: To go with/by. Takes Dative.",
            tr: "Fahren mit: -ile gitmek. Dativ alır.",
            de: "Fahren mit + Dativ."
        },
        explanation: {
            es: "1. Con el coche (Dativo neutro). 2. Del jefe (Genitivo masculino).",
            en: "1. With the car (Neuter Dative). 2. Of the boss (Masculine Genitive).",
            tr: "1. Araba ile (Nötr Dativ). 2. Patronun (Eril Genitiv).",
            de: "1. dem neuen Auto (Dat). 2. meines Chefs (Gen)."
        },
        slots: [
            { type: 'art', answer: "dem", options: ["das", "dem", "des", "den"] },
            { type: 'adj', answer: "neuen", options: ["neue", "neuen", "neuem", "neuer"] },
            { type: 'art', answer: "meines", options: ["mein", "meinem", "meines", "meinen"] }
        ]
    },
    {
        id: 233, level: 'C1', case: 'Nom/Dat/Akk', category: 'Sujeto + Receptor + Objeto',
        text: "___ ___ {Kunde} {schenkt} ___ ___ Frau ___ ___ Uhr.",
        noun: "Kunde (m), Frau (f), Uhr (f)",
        verbDesc: {
            es: "Schenken: Regalar. (Nom schenkt Dat Akk).",
            en: "Schenken: To gift. (Nom gifts Dat Acc).",
            tr: "Schenken: Hediye etmek. (Nom Dat'a Akk hediye eder).",
            de: "Schenken: Nom + Dat + Akk."
        },
        explanation: {
            es: "1. Sujeto (Nom + N-Dekl). 2. Receptora (Dativo femenino). 3. Regalo (Akkusativ femenino).",
            en: "1. Subject (Nom + N-decl). 2. Recipient (Fem Dative). 3. Gift (Fem Accusative).",
            tr: "1. Özne (Nom + N-çekimi). 2. Alıcı (Dişil Dativ). 3. Hediye (Dişil Akkusativ).",
            de: "1. Der nette Kunde (Nom). 2. der jungen Frau (Dat). 3. eine teure Uhr (Akk)."
        },
        slots: [
            { type: 'art', answer: "Der", options: ["Der", "Den", "Dem", "Des"] },
            { type: 'adj', answer: "nette", options: ["nette", "netten", "netter", "nettes"] },
            { type: 'art', answer: "der", options: ["die", "der", "den", "das"] },
            { type: 'adj', answer: "jungen", options: ["junge", "jungen", "junger", "junges"] },
            { type: 'art', answer: "eine", options: ["ein", "eine", "einer", "einen"] },
            { type: 'adj', answer: "teure", options: ["teure", "teuren", "teurer", "teures"] }
        ]
    },
    {
        id: 234, level: 'C1', case: 'Gen/Dat', category: 'Preposición Genitiva + Dativo Local',
        text: "{Während} ___ ___ {Krieges} lebten sie in ___ ___ Keller.",
        noun: "Krieg (m), Keller (m)",
        verbDesc: {
            es: "Leben in: Vivir en. (Wo? -> Dativo).",
            en: "Leben in: To live in. (Dative).",
            tr: "Leben in: -de yaşamak. (Dativ).",
            de: "Leben in + Dativ."
        },
        explanation: {
            es: "1. Während (Genitivo masculino). 2. Ubicación (Dativo masculino).",
            en: "1. Während (Masculine Genitive). 2. Location (Masculine Dative).",
            tr: "1. Während (Eril Genitiv). 2. Konum (Eril Dativ).",
            de: "1. des schrecklichen Krieges (Gen). 2. einem dunklen Keller (Dat)."
        },
        slots: [
            { type: 'art', answer: "des", options: ["das", "dem", "des", "den"] },
            { type: 'adj', answer: "schrecklichen", options: ["schreckliche", "schrecklichen", "schrecklicher", "schreckliches"] },
            { type: 'art', answer: "einem", options: ["ein", "einen", "einem", "einer"] },
            { type: 'adj', answer: "dunklen", options: ["dunkle", "dunklen", "dunkler", "dunkles"] }
        ]
    },
    {
        id: 235, level: 'C1', case: 'Dat/Akk/Gen', category: 'Reflexivo Dativ + Triple',
        text: "Ich {leihe} ___ ___ ___ (m) Freund ___ ___ Buch ___ ___ Schwester.",
        noun: "Freund (m), Buch (n), Schwester (f)",
        verbDesc: {
            es: "Leihen: Prestar. (Nom leiht Dat Akk). Incluye Genitivo.",
            en: "Leihen: To lend. (Nom lends Dat Acc). Includes Genitive.",
            tr: "Leihen: Ödünç vermek. Genitiv içerir.",
            de: "Leihen: Nom + Dat + Akk + Genitivattribut."
        },
        explanation: {
            es: "1. Receptor (Dativo). 2. Objeto (Akkusativ). 3. Poseedor (Genitivo femenino).",
            en: "1. Recipient (Dative). 2. Object (Accusative). 3. Possessor (Feminine Genitive).",
            tr: "1. Alıcı (Dativ). 2. Nesne (Akkusativ). 3. İyelik (Dişil Genitiv).",
            de: "1. meinem besten Freund (Dat). 2. ein altes Buch (Akk). 3. deiner Schwester (Gen)."
        },
        slots: [
            { type: 'art', answer: "meinem", options: ["mein", "meinen", "meinem", "meines"] },
            { type: 'adj', answer: "besten", options: ["beste", "besten", "bester", "bestes"] },
            { type: 'art', answer: "ein", options: ["ein", "eine", "einer", "einen"] },
            { type: 'adj', answer: "altes", options: ["alte", "alten", "altes", "alter"] },
            { type: 'art', answer: "deiner", options: ["deine", "deiner", "deinen", "deines"] }
        ]
    },
   {
        id: 236, level: 'C1', case: 'Nom/Dat', category: 'Participio II + N-Deklination',
        text: "___ ___ {gelöste} Aufgabe {gehört} ___ ___ {Studenten}.",
        noun: "Aufgabe (f), Student (m)",
        verbDesc: {
            es: "Gehören: Pertenecer. Rige Dativo.",
            en: "Gehören: To belong. Takes Dative.",
            de: "Gehören + Dativ."
        },
        explanation: {
            es: "1. Sujeto (Nominativo femenino). 2. Receptor (Dativo masculino + N-Deklination).",
            en: "1. Subject (Fem Nominative). 2. Recipient (Masc Dative + N-decl).",
            de: "1. Nom (Fem). 2. Dat (Mask + N-Dekl)."
        },
        slots: [
            { type: 'art', answer: "Die", options: ["Die", "Der", "Das", "Den"] },
            { type: 'adj', answer: "neu", options: ["neu", "neue", "neuen", "neuer"] },
            { type: 'art', answer: "dem", options: ["der", "den", "dem", "des"] },
            { type: 'adj', answer: "fleißigen", options: ["fleißige", "fleißigen", "fleißiger", "fleißiges"] }
        ]
    },
    {
        id: 237, level: 'C1', case: 'Akk/Dat/Gen', category: 'Participio I + Anidada',
        text: "Ich {sehe} ___ ___ {lachenden} Kinder in ___ ___ Park ___ ___ Stadt.",
        noun: "Kinder (pl), Park (m), Stadt (f)",
        verbDesc: {
            es: "Sehen: Ver (Akk). In: Ubicación (Dat).",
            en: "Sehen: To see (Acc). In: Location (Dat).",
            de: "Sehen (Akk) + in (Dat) + Genitivattribut."
        },
        explanation: {
            es: "1. Niños riendo (Akk Plural). 2. Ubicación (Dat Masculino). 3. Posesión (Gen Femenino).",
            en: "1. Laughing children (Acc Pl). 2. Location (Dat Masc). 3. Possession (Gen Fem).",
            de: "1. Akk Plural. 2. Dat Maskulin. 3. Gen Feminin."
        },
        slots: [
            { type: 'art', answer: "die", options: ["die", "der", "den", "das"] },
            { type: 'art', answer: "dem", options: ["das", "dem", "des", "den"] },
            { type: 'adj', answer: "großen", options: ["große", "großen", "großer", "großes"] },
            { type: 'art', answer: "der", options: ["die", "der", "den", "das"] }
        ]
    },
    {
        id: 238, level: 'C1', case: 'Gen/Akk', category: 'Participio II + Genitivo',
        text: "{Trotz} ___ ___ {verlorenen} Schlüssels {fand} er ___ ___ Lösung.",
        noun: "Schlüssel (m), Lösung (f)",
        verbDesc: {
            es: "Finden: Encontrar (Akk). Trotz: A pesar de (Gen).",
            en: "Finden: To find (Acc). Trotz: Despite (Gen).",
            de: "Trotz (Gen) + finden (Akk)."
        },
        explanation: {
            es: "1. Llave perdida (Gen Masculino). 2. Una solución (Akk Femenino).",
            en: "1. Lost key (Gen Masc). 2. A solution (Acc Fem).",
            de: "1. Gen Maskulin. 2. Akk Feminin."
        },
        slots: [
            { type: 'art', answer: "des", options: ["das", "dem", "des", "den"] },
            { type: 'adj', answer: "verlorenen", options: ["verlorene", "verlorenen", "verlorener", "verlorenes"] },
            { type: 'art', answer: "eine", options: ["ein", "eine", "einer", "einen"] },
            { type: 'adj', answer: "passende", options: ["passende", "passenden", "passender", "passendes"] }
        ]
    },
    {
        id: 239, level: 'C1', case: 'Dat/Akk/Gen', category: 'Reflexivo Dativ + Part. II',
        text: "Ich {sehe} ___ ___ {empfohlene} Video ___ ___ Professors an.",
        noun: "Video (n), Professor (m)",
        verbDesc: {
            es: "Sich (Dat) etwas (Akk) ansehen: Ver algo.",
            en: "Sich (Dat) something (Acc) watch.",
            de: "Sich (Dat) etwas (Akk) ansehen."
        },
        explanation: {
            es: "1. Pronombre (mir). 2. Video recomendado (Akk Neutro). 3. Del profesor (Gen Masculino).",
            en: "1. Pronoun (mir). 2. Recommended video (Acc Neut). 3. Of the professor (Gen Masc).",
            de: "1. mir (Refl). 2. das empfohlene Video (Akk). 3. des Professors (Gen)."
        },
        slots: [
            { type: 'art', answer: "mir", options: ["mich", "mir", "sich", "uns"] },
            { type: 'art', answer: "das", options: ["das", "dem", "des", "den"] },
            { type: 'adj', answer: "empfohlene", options: ["empfohlene", "empfohlenen", "empfohlener", "empfohlenes"] },
            { type: 'art', answer: "des", options: ["das", "dem", "des", "den"] }
        ]
    },
    {
        id: 240, level: 'C1', case: 'Akk', category: 'N-Deklination + Participio II',
        text: "Ich {befrage} ___ ___ {verhafteten} {Polizisten}.",
        noun: "Polizist (m)",
        verbDesc: {
            es: "Befragen: Interrogar. Rige Akkusativ.",
            en: "Befragen: To question. Takes Accusative.",
            de: "Befragen + Akkusativ."
        },
        explanation: {
            es: "Objeto directo masculino. Polizist (N-Dekl en Akk). Participio II como adjetivo.",
            en: "Masc Acc object. Polizist (N-decl). Participle II as adjective.",
            de: "Maskulin Akkusativ + N-Deklination."
        },
        slots: [
            { type: 'art', answer: "den", options: ["der", "den", "dem", "des"] },
            { type: 'adj', answer: "verhafteten", options: ["verhaftete", "verhafteten", "verhafteter", "verhaftetes"] }
        ]
    },
    {
        id: 241, level: 'C1', case: 'Dat', category: 'Preposición + Participio I',
        text: "Ich {spreche} {mit} ___ ___ {weinenden} Frau.",
        noun: "Frau (f)",
        verbDesc: {
            es: "Sprechen mit: Hablar con. Rige Dativo.",
            en: "Sprechen mit: To speak with. Takes Dative.",
            de: "Mit + Dativ."
        },
        explanation: {
            es: "Con la mujer que está llorando ahora (Participio I). Dativo femenino.",
            en: "With the woman crying now (Participle I). Fem Dative.",
            de: "Feminin Dativ + Partizip I."
        },
        slots: [
            { type: 'art', answer: "der", options: ["die", "der", "den", "das"] },
            { type: 'adj', answer: "weinenden", options: ["weinende", "weinenden", "weinender", "weinendes"] }
        ]
    },
    {
        id: 242, level: 'C1', case: 'Gen/Dat', category: 'Genitivo + N-Deklination',
        text: "{Anlässlich} ___ ___ {Besuchs} ___ ___ {Präsidenten}...",
        noun: "Besuch (m), Präsident (m)",
        verbDesc: {
            es: "Anlässlich: Con motivo de (Gen). Posesión (Gen).",
            en: "Anlässlich: On occasion of (Gen). Possession (Gen).",
            de: "Anlässlich (Gen) + Genitivattribut."
        },
        explanation: {
            es: "1. Motivo (Gen Masculino). 2. Del presidente (Gen Masculino + N-Dekl).",
            en: "1. Occasion (Gen Masc). 2. Of the president (Gen Masc + N-decl).",
            de: "1. des Besuchs (Gen). 2. des Präsidenten (Gen)."
        },
        slots: [
            { type: 'art', answer: "des", options: ["das", "dem", "des", "den"] },
            { type: 'adj', answer: "kurzen", options: ["kurze", "kurzen", "kurzer", "kurzes"] },
            { type: 'art', answer: "des", options: ["der", "den", "dem", "des"] }
        ]
    },
    {
        id: 243, level: 'C1', case: 'Nom/Dat/Akk', category: 'Doble Objeto + Participio II',
        text: "___ ___ Mann {schickt} ___ ___ Frau ___ ___ {geschriebenen} Brief.",
        noun: "Mann (m), Frau (f), Brief (m)",
        verbDesc: {
            es: "Schicken: Enviar. (Nom schickt Dat Akk).",
            en: "Schicken: To send.",
            de: "Schicken: Nom + Dat + Akk."
        },
        explanation: {
            es: "1. Sujeto. 2. Receptora (Dat). 3. Carta escrita (Akk).",
            en: "1. Subject. 2. Recipient (Dat). 3. Written letter (Acc).",
            de: "1. Der alte Mann (Nom). 2. der Frau (Dat). 3. den geschriebenen Brief (Akk)."
        },
        slots: [
            { type: 'art', answer: "Der", options: ["Der", "Den", "Dem", "Des"] },
            { type: 'art', answer: "der", options: ["die", "der", "den", "das"] },
            { type: 'art', answer: "den", options: ["der", "den", "dem", "das"] },
            { type: 'adj', answer: "geschriebenen", options: ["geschriebene", "geschriebenen", "geschriebener", "geschriebenes"] }
        ]
    },
    {
        id: 244, level: 'C1', case: 'Dat/Akk', category: 'Reflexivo Dativ + Participio II',
        text: "Ich {habe} ___ ___ ___ {gekochte} Essen {bestellt}.",
        noun: "Essen (n)",
        verbDesc: {
            es: "Sich (Dat) etwas (Akk) bestellen: Pedirse algo.",
            en: "Sich (Dat) something (Acc) order.",
            de: "Sich (Dat) etwas (Akk) bestellen."
        },
        explanation: {
            es: "Pronombre (mir). Comida cocinada (Akk Neutro).",
            en: "Pronoun (mir). Cooked food (Acc Neut).",
            de: "Mir (Dat). Das gekochte Essen (Akk)."
        },
        slots: [
            { type: 'art', answer: "mir", options: ["mich", "mir", "sich", "euch"] },
            { type: 'art', answer: "das", options: ["das", "dem", "des", "den"] },
            { type: 'adj', answer: "gekochte", options: ["gekochte", "gekochten", "gekochter", "gekochtes"] }
        ]
    },
    {
        id: 245, level: 'C1', case: 'Gen', category: 'Preposición Genitiva + Participio II',
        text: "{Ungeachtet} ___ ___ {getroffenen} Entscheidung...",
        noun: "Entscheidung (f)",
        verbDesc: {
            es: "Ungeachtet: Pese a. Rige Genitivo.",
            en: "Ungeachtet: Regardless of. Takes Genitive.",
            de: "Ungeachtet + Genitiv."
        },
        explanation: {
            es: "Pese a la decisión tomada (Participio II). Genitivo femenino.",
            en: "Regardless of the decision made. Fem Genitive.",
            de: "Feminin Genitiv + Partizip II."
        },
        slots: [
            { type: 'art', answer: "der", options: ["die", "der", "den", "das"] },
            { type: 'adj', answer: "getroffenen", options: ["getroffene", "getroffenen", "getroffener", "getroffenes"] }
        ]
    },
    {
        id: 246, level: 'C1', case: 'Akk/Gen', category: 'Objeto + Posesión',
        text: "Ich {verstehe} ___ ___ {Sinn} ___ ___ {gesagten} Worte.",
        noun: "Sinn (m), Worte (pl)",
        verbDesc: {
            es: "Verstehen: Entender (Akk). Genitivo posesivo.",
            en: "Verstehen: To understand.",
            de: "Verstehen (Akk) + Genitiv."
        },
        explanation: {
            es: "1. El sentido (Akk Masculino). 2. De las palabras dichas (Gen Plural).",
            en: "1. The sense (Acc Masc). 2. Of the words said (Gen Pl).",
            de: "1. den Sinn (Akk). 2. der gesagten Worte (Gen)."
        },
        slots: [
            { type: 'art', answer: "den", options: ["der", "den", "dem", "des"] },
            { type: 'art', answer: "der", options: ["die", "der", "den", "das"] },
            { type: 'adj', answer: "gesagten", options: ["gesagte", "gesagten", "gesagter", "gesagtes"] }
        ]
    },
    {
        id: 247, level: 'C1', case: 'Dat', category: 'Verbo Dativo + Participio I',
        text: "Ich {folge} ___ ___ {fliehenden} Dieb.",
        noun: "Dieb (m)",
        verbDesc: {
            es: "Folgen: Seguir. Rige Dativo.",
            en: "Folgen: To follow. Takes Dative.",
            de: "Folgen + Dativ."
        },
        explanation: {
            es: "Sigo al ladrón que huye ahora (Participio I). Dativo masculino.",
            en: "I follow the thief fleeing now. Masc Dative.",
            de: "Maskulin Dativ + Partizip I."
        },
        slots: [
            { type: 'art', answer: "dem", options: ["der", "den", "dem", "das"] },
            { type: 'adj', answer: "fliehenden", options: ["fliehende", "fliehenden", "fliehender", "fliehendes"] }
        ]
    },
    {
        id: 248, level: 'C1', case: 'Gen', category: 'N-Deklination + Genitivo',
        text: "Die Meinung ___ ___ {Experten} ist gefragt.",
        noun: "Experte (m)",
        verbDesc: {
            es: "Sein: Ser. Genitivo posesivo.",
            en: "Sein: To be. Possessive Genitive.",
            de: "Genitivattribut."
        },
        explanation: {
            es: "La opinión del experto. Genitivo masculino + N-Deklination.",
            en: "The expert's opinion. Masc Genitive + N-decl.",
            de: "Maskulin Genitiv + N-Deklination."
        },
        slots: [
            { type: 'art', answer: "des", options: ["das", "dem", "des", "den"] },
            { type: 'adj', answer: "bekannten", options: ["bekannte", "bekannten", "bekannter", "bekanntes"] }
        ]
    },
    {
        id: 249, level: 'C1', case: 'Nom/Dat/Akk', category: 'Triple + Participio II',
        text: "___ ___ Vater {zeigt} ___ ___ Kind ___ ___ {reparierte} Spielzeug.",
        noun: "Vater (m), Kind (n), Spielzeug (n)",
        verbDesc: {
            es: "Zeigen: Mostrar. (Nom zeigt Dat Akk).",
            en: "Zeigen: To show.",
            de: "Zeigen: Nom + Dat + Akk."
        },
        explanation: {
            es: "1. Sujeto. 2. Receptor (Dat Neutro). 3. Juguete reparado (Akk Neutro).",
            en: "1. Subject. 2. Recipient (Dat). 3. Repaired toy (Acc).",
            de: "1. Der Vater (Nom). 2. dem Kind (Dat). 3. das reparierte Spielzeug (Akk)."
        },
        slots: [
            { type: 'art', answer: "Der", options: ["Der", "Den", "Dem", "Des"] },
            { type: 'art', answer: "dem", options: ["das", "dem", "des", "den"] },
            { type: 'art', answer: "das", options: ["das", "dem", "des", "den"] },
            { type: 'adj', answer: "reparierte", options: ["reparierte", "reparierten", "reparierter", "repariertes"] }
        ]
    },
    {
        id: 250, level: 'C1', case: 'Gen/Dat/Akk', category: 'Grand Finale: Anidada Total',
        text: "{Wegen} ___ ___ {Lärms} {reicht} ___ ___ {Nachbar} ___ ___ {geschriebene} Beschwerde ein.",
        noun: "Lärm (m), Nachbar (m), Beschwerde (f)",
        verbDesc: {
            es: "Einreichen: Entregar/Presentar oficialmente (Akk). Wegen (Gen).",
            en: "Einreichen: To submit (Acc). Wegen (Gen).",
            de: "Wegen (Gen) + Nom + Akk."
        },
        explanation: {
            es: "1. Debido al ruido (Gen). 2. El vecino (Nom + N-Dekl). 3. Queja escrita (Akk).",
            en: "1. Due to noise (Gen). 2. The neighbor (Nom + N-decl). 3. Written complaint (Acc).",
            de: "1. Gen (Wegen). 2. Nom (Subjekt). 3. Akk (Objekt)."
        },
        slots: [
            { type: 'art', answer: "des", options: ["das", "dem", "des", "den"] },
            { type: 'adj', answer: "unerträglichen", options: ["unerträgliche", "unerträglichen", "unerträglicher", "unerträgliches"] },
            { type: 'art', answer: "der", options: ["der", "den", "dem", "des"] },
            { type: 'art', answer: "die", options: ["die", "der", "den", "das"] },
            { type: 'adj', answer: "geschriebene", options: ["geschriebene", "geschriebenen", "geschriebener", "geschriebenes"] }
        ]
    }         
            


            
            
        ];
