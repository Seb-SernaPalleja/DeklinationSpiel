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

            // --- NIVEL 3: COMPLEJO ---
            { 
                id: 202, level: 'B2', case: 'Akk', category: 'Wechselpräposition', 
                text: "Er {hängt} das Bild an ___ ___ Wand.", 
                noun: "Wand (f)", 
                verbDesc: {
                    es: "Hängen (transitivo): Colgar algo. Acción -> Akkusativ.",
                    en: "Hängen (transitive): To hang something. Action -> Accusative.",
                    tr: "Hängen (geçişli): Bir şeyi asmak. Hareket -> Akkusativ.",
                    de: "Hängen (Aktion): Wohin? -> Akkusativ."
                },
                explanation: {
                    es: "Hängen (acción) -> Wohin? -> Akkusativ. Die weiße Wand.",
                    en: "Hängen (action) -> Wohin? -> Accusative. Die weiße Wand.",
                    tr: "Hängen (hareket) -> Wohin? -> Akkusativ.",
                    de: "Wohin? -> Akkusativ."
                },
                slots: [
                    { type: 'art', answer: "die", options: ["die", "der", "den", "das"] },
                    { type: 'adj', answer: "weiße", options: ["weiße", "weißen", "weißem", "weißes"] }
                ]
            },
            {
                id: 203, level: 'B2', case: 'Dat', category: 'Wechselpräposition',
                text: "Das Bild {hängt} an ___ ___ Wand.",
                noun: "Wand (f)",
                verbDesc: {
                    es: "Hängen (intransitivo): Estar colgado. Estado -> Dativ.",
                    en: "Hängen (intransitive): To be hanging. State -> Dative.",
                    tr: "Hängen (geçişsiz): Asılı olmak. Durum -> Dativ.",
                    de: "Hängen (Position): Wo? -> Dativ."
                },
                explanation: {
                    es: "Hängen (estado) -> Wo? -> Dativ. Der weißen Wand.",
                    en: "Hängen (state) -> Wo? -> Dative. Der weißen Wand.",
                    tr: "Hängen (durum) -> Wo? -> Dativ.",
                    de: "Wo? -> Dativ."
                },
                slots: [
                    { type: 'art', answer: "der", options: ["die", "der", "den", "das"] },
                    { type: 'adj', answer: "weißen", options: ["weiße", "weißen", "weißem", "weißes"] }
                ]
            }
        ];