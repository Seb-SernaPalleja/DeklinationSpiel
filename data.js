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
            
        ];
