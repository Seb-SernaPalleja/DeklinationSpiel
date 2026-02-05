var data = [
    {
        "id": 1,
        "level": "B1",
        "case": "Dat",
        "category": "Verbo con Dativo",
        "text": "Das Auto {gehört} d___ Frau.",
        "noun": "Frau (f)",
        "verbDesc": {
            "es": "Gehören: Pertenecer. (Dativo).",
            "en": "Gehören: To belong. (Dative).",
            "tr": "Gehören: Pertenecer. (Dativo).",
            "de": "Gehören: Dativ-Verb."
        },
        "explanation": {
            "es": "El verbo 'gehören' (pertenecer) rige siempre dativo. Al ser 'Frau' femenino, el artículo determinado en Dativo es 'der'.",
            "en": "'Gehören' requires Dative. Feminine Dative -> 'der'.",
            "tr": "'Gehören' Dativ gerektirir. Dişil Dativ -> 'der'.",
            "de": "'Gehören' verlangt Dativ. Feminin Dativ -> 'der'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "er",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            }
        ]
    },
    {
        "id": 2,
        "level": "B2",
        "case": "Dat/Akk",
        "category": "Doble Objeto",
        "text": "Er {kauft} d___ Mann d___ Apfel.",
        "noun": "Mann (m), Apfel (m)",
        "verbDesc": {
            "es": "Kaufen: Comprar. (Dativo + Akkusativ).",
            "en": "Kaufen: To buy. (Dative + Accusative).",
            "tr": "Kaufen: Comprar. (Dativo + Akkusativ).",
            "de": "Kaufen: Dat + Akk."
        },
        "explanation": {
            "es": "El verbo 'kaufen' puede llevar dos objetos: la persona beneficiaria en Dativo (¿a quién?) y el objeto comprado en Acusativo (¿qué cosa?).",
            "en": "Kaufen takes two objects. To whom? (Dative). What? (Accusative).",
            "tr": "Kaufen iki nesne alır. Kime? (Dat). Neyi? (Akk).",
            "de": "Kaufen hat zwei Objekte. Wem? (Dat). Was? (Akk)."
        },
        "slots": [
            {
                "type": "art",
                "answer": "em",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "art",
                "answer": "en",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            }
        ]
    },
    {
        "id": 3,
        "level": "B1",
        "case": "Akk",
        "category": "Artículo Negativo",
        "text": "Ich {habe} kein___ Hund.",
        "noun": "Hund (m)",
        "verbDesc": {
            "es": "Haben: Tener. (Akkusativ).",
            "en": "Haben: To have. (Accusative).",
            "tr": "Haben: Tener. (Akkusativ).",
            "de": "Haben: Akkusativ-Verb."
        },
        "explanation": {
            "es": "Objeto directo masculino en Acusativo. La negación con 'kein' toma la terminación -en (como 'einen').",
            "en": "Masculine direct object + negation -> 'keinen'.",
            "tr": "Eril belirtili nesne + olumsuzluk -> 'keinen'.",
            "de": "Maskulin direktes Objekt + Negation -> 'keinen'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "en",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            }
        ]
    },
    {
        "id": 4,
        "level": "B1",
        "case": "Dat",
        "category": "Preposición Dativa",
        "text": "Ich {fahre} mit d___ Bus.",
        "noun": "Bus (m)",
        "verbDesc": {
            "es": "Fahren: Conducir/Ir. (Akk o Dat con prep).",
            "en": "Fahren: To drive/go. (Acc or Dat with prep).",
            "tr": "Fahren: Conducir/Ir. (Akk o Dat con prep).",
            "de": "Fahren: Bewegungsverb."
        },
        "explanation": {
            "es": "'Mit' rige Dativo. Masculino Dativo -> 'dem'.",
            "en": "'Mit' takes Dative. Masculine Dative -> 'dem'.",
            "tr": "'Mit' Dativ gerektirir. Eril Dativ -> 'dem'.",
            "de": "'Mit' verlangt Dativ. Maskulin Dativ -> 'dem'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "em",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            }
        ]
    },
    {
        "id": 5,
        "level": "B2",
        "case": "Dat",
        "category": "Verbo Dativo + N-Deklination",
        "text": "Ich {antworte} d___ Polizisten.",
        "noun": "Polizist (m)",
        "verbDesc": {
            "es": "Antworten: Responder. (Dativo).",
            "en": "Antworten: To answer. (Dative).",
            "tr": "Antworten: Responder. (Dativo).",
            "de": "Antworten: Dativ-Verb."
        },
        "explanation": {
            "es": "'Antworten' pide Dativo. Polizist es N-Deklination (añade -en).",
            "en": "'Antworten' requires Dative. Polizist is N-Declension (adds -en).",
            "tr": "'Antworten' Dativ ister. Polizist N-Deklination'dır (-en alır).",
            "de": "'Antworten' braucht Dativ. Polizist ist N-Deklination."
        },
        "slots": [
            {
                "type": "art",
                "answer": "em",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            }
        ]
    },
    {
        "id": 6,
        "level": "B1",
        "case": "Akk",
        "category": "Preposición Akkusativ",
        "text": "Das Geschenk {ist} für d___ Kind.",
        "noun": "Kind (n)",
        "verbDesc": {
            "es": "Sein: Ser/Estar. (Nominativ).",
            "en": "Sein: To be. (Nominative).",
            "tr": "Sein: Ser/Estar. (Nominativ).",
            "de": "Sein: Nominativ-Verb."
        },
        "explanation": {
            "es": "'Für' rige Akkusativ. Neutro Akkusativ -> 'das'.",
            "en": "'Für' takes Accusative. Neuter Akkusativ -> 'das'.",
            "tr": "'Für' Akkusativ ister. Nötr Akkusativ -> 'das'.",
            "de": "'Für' verlangt Akkusativ. Neutrum Akkusativ -> 'das'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "as",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            }
        ]
    },
    {
        "id": 7,
        "level": "B1",
        "case": "Dat",
        "category": "Verbo con Dativo",
        "text": "Ich {danke} d___ Lehrerin.",
        "noun": "Lehrerin (f)",
        "verbDesc": {
            "es": "Danken: Agradecer. (Dativo).",
            "en": "Danken: To thank. (Dative).",
            "tr": "Danken: Agradecer. (Dativo).",
            "de": "Danken: Dativ-Verb."
        },
        "explanation": {
            "es": "Danken exige Dativo. Femenino Dativo -> 'der'.",
            "en": "Danken requires Dative. Feminine Dative -> 'der'.",
            "tr": "Danken Dativ ister. Dişil Dativ -> 'der'.",
            "de": "Danken verlangt Dativ. Feminin Dativ -> 'der'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "er",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            }
        ]
    },
    {
        "id": 8,
        "level": "B2",
        "case": "Akk",
        "category": "Preposición Akkusativ",
        "text": "Wir {gehen} ohne ein___ Hund spazieren.",
        "noun": "Hund (m)",
        "verbDesc": {
            "es": "Gehen: Ir/Caminar.",
            "en": "Gehen: To go/walk.",
            "tr": "Gehen: Ir/Caminar.",
            "de": "Gehen: Bewegungsverb."
        },
        "explanation": {
            "es": "'Ohne' exige Akkusativ. Masculino Akkusativ indefinido -> 'einen'.",
            "en": "'Ohne' requires Accusative. Masculine Accusative indefinite -> 'einen'.",
            "tr": "'Ohne' Akkusativ ister. Eril Akkusativ belirsiz -> 'einen'.",
            "de": "'Ohne' verlangt Akkusativ. Maskulin Akkusativ unbestimmt -> 'einen'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "en",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            }
        ]
    },
    {
        "id": 9,
        "level": "B1",
        "case": "Dat",
        "category": "Preposición Dativa",
        "text": "Ich {bin} seit ein___ Woche krank.",
        "noun": "Woche (f)",
        "verbDesc": {
            "es": "Sein: Ser/Estar. (Nominativ).",
            "en": "Sein: To be. (Nominative).",
            "tr": "Sein: Ser/Estar. (Nominativ).",
            "de": "Sein: Nominativ-Verb."
        },
        "explanation": {
            "es": "'Seit' exige Dativo. Femenino Dativo indefinido -> 'einer'.",
            "en": "'Seit' requires Dative. Feminine Dative indefinite -> 'einer'.",
            "tr": "'Seit' Dativ ister. Dişil Dativ belirsiz -> 'einer'.",
            "de": "'Seit' verlangt Dativ. Feminin Dativ unbestimmt -> 'einer'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "er",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            }
        ]
    },
    {
        "id": 10,
        "level": "B2",
        "case": "Dat",
        "category": "Wechselpräposition (Wo?)",
        "text": "Das Buch {liegt} auf d___ Tisch.",
        "noun": "Tisch (m)",
        "verbDesc": {
            "es": "Liegen: Estar tumbado/situado. (Posición -> Dativo).",
            "en": "Liegen: To lie/be located. (Position -> Dative).",
            "tr": "Liegen: Estar tumbado/situado. (Posición -> Dativo).",
            "de": "Liegen: Position (Dativ)."
        },
        "explanation": {
            "es": "Es una ubicación estática (¿Dónde?). Masculino Dativo -> 'dem'.",
            "en": "It is a static location (Where?). Masculine Dative -> 'dem'.",
            "tr": "Statik bir konum (Nerede?). Eril Dativ -> 'dem'.",
            "de": "Statische Lage (Wo?). Maskulin Dativ -> 'dem'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "em",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            }
        ]
    },
    {
        "id": 11,
        "level": "B2",
        "case": "Akk",
        "category": "Wechselpräposition (Wohin?)",
        "text": "Ich {lege} das Buch auf d___ Tisch.",
        "noun": "Tisch (m)",
        "verbDesc": {
            "es": "Legen: Colocar (tumbado). (Movimiento -> Akkusativ).",
            "en": "Legen: To lay/put. (Movement -> Accusative).",
            "tr": "Legen: Colocar (tumbado). (Movimiento -> Akkusativ).",
            "de": "Legen: Aktion (Akkusativ)."
        },
        "explanation": {
            "es": "Hay movimiento (¿Adónde?). Masculino Akkusativ -> 'den'.",
            "en": "There is movement (Whereto?). Masculine Accusative -> 'den'.",
            "tr": "Hareket var (Nereye?). Eril Akkusativ -> 'den'.",
            "de": "Richtung/Bewegung (Wohin?). Maskulin Akkusativ -> 'den'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "en",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            }
        ]
    },
    {
        "id": 12,
        "level": "B1",
        "case": "Akk",
        "category": "Verbo con Akkusativ",
        "text": "Ich {suche} ein___ (f) Apotheke.",
        "noun": "Apotheke (f)",
        "verbDesc": {
            "es": "Suchen: Buscar. (Akkusativ).",
            "en": "Suchen: To search. (Accusative).",
            "tr": "Suchen: Buscar. (Akkusativ).",
            "de": "Suchen: Akkusativ-Verb."
        },
        "explanation": {
            "es": "Objeto directo femenino. Akkusativ indefinido -> 'eine'.",
            "en": "Feminine direct object. Accusative indefinite -> 'eine'.",
            "tr": "Dişil belirtili nesne. Akkusativ belirsiz -> 'eine'.",
            "de": "Feminin direktes Objekt. Akkusativ unbestimmt -> 'eine'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "e",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            }
        ]
    },
    {
        "id": 13,
        "level": "B2",
        "case": "Dat",
        "category": "Verbo con Dativo",
        "text": "Das {schmeckt} d___ (pl) Kindern.",
        "noun": "Kinder (pl)",
        "verbDesc": {
            "es": "Schmecken: Gustar (sabor). (Dativo).",
            "en": "Schmecken: To taste. (Dative).",
            "tr": "Schmecken: Gustar (sabor). (Dativo).",
            "de": "Schmecken: Dativ-Verb."
        },
        "explanation": {
            "es": "'Schmecken' exige Dativo. Plural Dativo -> 'den'.",
            "en": "'Schmecken' requires Dative. Plural Dative -> 'den'.",
            "tr": "'Schmecken' Dativ ister. Çoğul Dativ -> 'den'.",
            "de": "'Schmecken' verlangt Dativ. Plural Dativ -> 'den'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "en",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            }
        ]
    },
    {
        "id": 14,
        "level": "B1",
        "case": "Dat",
        "category": "Preposición Dativa",
        "text": "Ich {komme} aus d___ (f) Schweiz.",
        "noun": "Schweiz (f)",
        "verbDesc": {
            "es": "Kommen: Venir.",
            "en": "Kommen: To come.",
            "tr": "Kommen: Venir.",
            "de": "Kommen: Bewegungsverb."
        },
        "explanation": {
            "es": "'Aus' rige Dativo. Suiza es femenino -> 'der'.",
            "en": "'Aus' takes Dative. Switzerland is feminine -> 'der'.",
            "tr": "'Aus' Dativ ister. İsviçre dişildir -> 'der'.",
            "de": "'Aus' verlangt Dativ. Schweiz ist feminin -> 'der'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "er",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            }
        ]
    },
    {
        "id": 15,
        "level": "B2",
        "case": "Dat",
        "category": "Verbo con Dativo",
        "text": "Ich {vertraue} d___ (m) Arzt.",
        "noun": "Arzt (m)",
        "verbDesc": {
            "es": "Vertrauen: Confiar. (Dativo).",
            "en": "Vertrauen: To trust. (Dative).",
            "tr": "Vertrauen: Confiar. (Dativo).",
            "de": "Vertrauen: Dativ-Verb."
        },
        "explanation": {
            "es": "Vertrauen exige Dativo. Masculino Dativo -> 'dem'.",
            "en": "Vertrauen requires Dative. Masculine Dative -> 'dem'.",
            "tr": "Vertrauen Dativ ister. Eril Dativ -> 'dem'.",
            "de": "Vertrauen verlangt Dativ. Maskulin Dativ -> 'dem'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "em",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            }
        ]
    },
    {
        "id": 16,
        "level": "B1",
        "case": "Akk",
        "category": "Verbo con Akkusativ",
        "text": "{Hast} du d___ (m) Schlüssel?",
        "noun": "Schlüssel (m)",
        "verbDesc": {
            "es": "Haben: Tener. (Akkusativ).",
            "en": "Haben: To have. (Accusative).",
            "tr": "Haben: Tener. (Akkusativ).",
            "de": "Haben: Akkusativ-Verb."
        },
        "explanation": {
            "es": "Objeto directo masculino determinado -> 'den'.",
            "en": "Masculine direct object definite -> 'den'.",
            "tr": "Eril belirtili nesne belirli -> 'den'.",
            "de": "Maskulin direktes Objekt bestimmt -> 'den'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "en",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            }
        ]
    },
    {
        "id": 17,
        "level": "B2",
        "case": "Dat/Akk",
        "category": "Doble Objeto",
        "text": "Ich {schenke} ein___ (f) Freundin ein___ (n) Buch.",
        "noun": "Freundin (f), Buch (n)",
        "verbDesc": {
            "es": "Schenken: Regalar. (Dativo + Akkusativ).",
            "en": "Schenken: To gift. (Dative + Accusative).",
            "tr": "Schenken: Regalar. (Dativo + Akkusativ).",
            "de": "Schenken: Dat + Akk."
        },
        "explanation": {
            "es": "¿A quién? (Dativo). ¿Qué? (Akkusativ).",
            "en": "To whom? (Dative). What? (Accusative).",
            "tr": "Kime? (Dat). Neyi? (Akk).",
            "de": "Wem? (Dat). Was? (Akk)."
        },
        "slots": [
            {
                "type": "art",
                "answer": "er",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            },
            {
                "type": "art",
                "answer": "-",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            }
        ]
    },
    {
        "id": 18,
        "level": "B1",
        "case": "Dat",
        "category": "Preposición Dativa",
        "text": "Wir {gehen} nach d___ (n) Essen spazieren.",
        "noun": "Essen (n)",
        "verbDesc": {
            "es": "Gehen: Ir/Caminar.",
            "en": "Gehen: To go/walk.",
            "tr": "Gehen: Ir/Caminar.",
            "de": "Gehen: Bewegungsverb."
        },
        "explanation": {
            "es": "'Nach' exige Dativo. Neutro Dativo -> 'dem'.",
            "en": "'Nach' requires Dative. Neuter Dative -> 'dem'.",
            "tr": "'Nach' Dativ ister. Nötr Dativ -> 'dem'.",
            "de": "'Nach' verlangt Dativ. Neutrum Dativ -> 'dem'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "em",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            }
        ]
    },
    {
        "id": 19,
        "level": "B1",
        "case": "Akk",
        "category": "Preposición Akkusativ",
        "text": "Wir {gehen} durch d___ (m) Tunnel.",
        "noun": "Tunnel (m)",
        "verbDesc": {
            "es": "Gehen: Ir/Caminar.",
            "en": "Gehen: To go/walk.",
            "tr": "Gehen: Ir/Caminar.",
            "de": "Gehen: Bewegungsverb."
        },
        "explanation": {
            "es": "'Durch' exige Akkusativ. Masculino Akkusativ -> 'den'.",
            "en": "'Durch' requires Accusative. Masculine Accusative -> 'den'.",
            "tr": "'Durch' Akkusativ ister. Eril Akkusativ -> 'den'.",
            "de": "'Durch' verlangt Akkusativ. Maskulin Akkusativ -> 'den'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "en",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            }
        ]
    },
    {
        "id": 20,
        "level": "B2",
        "case": "Dat",
        "category": "Verbo Dativo + N-Deklination",
        "text": "Ich {glaube} d___ (m) Kunden.",
        "noun": "Kunde (m)",
        "verbDesc": {
            "es": "Glauben: Creer. (Dativo personas, Akk cosas).",
            "en": "Glauben: To believe. (Dative people, Acc things).",
            "tr": "Glauben: Creer. (Dativo personas, Akk cosas).",
            "de": "Glauben: Dativ (Person)."
        },
        "explanation": {
            "es": "Glauben + Persona -> Dativo. Kunde es N-Deklination.",
            "en": "Glauben + Person -> Dative. Kunde is N-Declension.",
            "tr": "Glauben + Kişi -> Dativ. Kunde N-Deklination'dır.",
            "de": "Glauben + Person -> Dativ. Kunde ist N-Deklination."
        },
        "slots": [
            {
                "type": "art",
                "answer": "em",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            }
        ]
    },
    {
        "id": 21,
        "level": "B1",
        "case": "Akk",
        "category": "Artículo Negativo",
        "text": "Ich {brauche} kein___ Hilfe.",
        "noun": "Hilfe (f)",
        "verbDesc": {
            "es": "Brauchen: Necesitar. (Akkusativ).",
            "en": "Brauchen: To need. (Accusative).",
            "tr": "Brauchen: Necesitar. (Akkusativ).",
            "de": "Brauchen: Akkusativ-Verb."
        },
        "explanation": {
            "es": "Objeto directo femenino + negación -> 'keine'.",
            "en": "Feminine direct object + negation -> 'keine'.",
            "tr": "Dişil belirtili nesne + olumsuzluk -> 'keine'.",
            "de": "Feminin direktes Objekt + Negation -> 'keine'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "e",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            }
        ]
    },
    {
        "id": 22,
        "level": "B2",
        "case": "Dat",
        "category": "Verbo con Dativo",
        "text": "Das {fällt} d___ (m) Mann schwer.",
        "noun": "Mann (m)",
        "verbDesc": {
            "es": "Schwerfallen: Resultar difícil. (Dativo).",
            "en": "Schwerfallen: To be hard for sb. (Dative).",
            "tr": "Schwerfallen: To be hard for sb. (Dative).",
            "de": "Schwerfallen: Dativ."
        },
        "explanation": {
            "es": "Resultar difícil exige Dativo. Masculino Dativo -> 'dem'.",
            "en": "Being difficult requires Dative. Masculine Dative -> 'dem'.",
            "tr": "Zor gelmek Dativ ister. Eril Dativ -> 'dem'.",
            "de": "Schwerfallen verlangt Dativ. Maskulin Dativ -> 'dem'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "em",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            }
        ]
    },
    {
        "id": 23,
        "level": "B1",
        "case": "Dat",
        "category": "Preposición Dativa",
        "text": "Er {kommt} von d___ (f) Arbeit.",
        "noun": "Arbeit (f)",
        "verbDesc": {
            "es": "Kommen: Venir/Llegar.",
            "en": "Kommen: To come/arrive.",
            "tr": "Kommen: To come/arrive.",
            "de": "Kommen."
        },
        "explanation": {
            "es": "'Von' exige Dativo. Trabajo es femenino -> 'der'.",
            "en": "'Von' requires Dative. Work is feminine -> 'der'.",
            "tr": "'Von' Dativ ister. İş dişildir -> 'der'.",
            "de": "'Von' verlangt Dativ. Arbeit ist feminin -> 'der'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "er",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            }
        ]
    },
    {
        "id": 24,
        "level": "B1",
        "case": "Akk",
        "category": "Preposición Akkusativ",
        "text": "Wir {protestieren} gegen d___ (m) Plan.",
        "noun": "Plan (m)",
        "verbDesc": {
            "es": "Protestieren: Protestar. (Gegen + Akk).",
            "en": "Protestieren: To protest. (Gegen + Acc).",
            "tr": "Protestieren: Protestar. (Gegen + Akk).",
            "de": "Protestieren: Gegen + Akk."
        },
        "explanation": {
            "es": "'Gegen' rige Akkusativ. Masculino Akkusativ -> 'den'.",
            "en": "'Gegen' takes Accusative. Masculine Accusative -> 'den'.",
            "tr": "'Gegen' Akkusativ ister. Eril Akkusativ -> 'den'.",
            "de": "'Gegen' verlangt Akkusativ. Maskulin Akkusativ -> 'den'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "en",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            }
        ]
    },
    {
        "id": 25,
        "level": "B2",
        "case": "Dat",
        "category": "Preposición Dativa",
        "text": "Das Hotel {liegt} gegenüber d___ (m) Park.",
        "noun": "Park (m)",
        "verbDesc": {
            "es": "Liegen: Estar tumbado/situado. (Posición -> Dativo).",
            "en": "Liegen: To lie/be located. (Position -> Dative).",
            "tr": "Liegen: Estar tumbado/situado. (Posición -> Dativo).",
            "de": "Liegen: Position (Dativ)."
        },
        "explanation": {
            "es": "'Gegenüber' rige Dativo. Masculino Dativo -> 'dem'.",
            "en": "'Gegenüber' takes Dative. Masculine Dative -> 'dem'.",
            "tr": "'Gegenüber' Dativ ister. Eril Dativ -> 'dem'.",
            "de": "Gegenüber verlangt Dativ. Maskulin Dativ -> 'dem'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "em",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            }
        ]
    },
    {
        "id": 26,
        "level": "B2",
        "case": "Gen",
        "category": "Preposición Genitiva",
        "text": "Wegen d___ (m) Regens {bleiben} wir zu Hause.",
        "noun": "Regen (m)",
        "verbDesc": {
            "es": "Bleiben: Quedarse/Permanecer. (Nominativ).",
            "en": "Bleiben: To stay/remain. (Nominative).",
            "tr": "Bleiben: Quedarse/Permanecer. (Nominativ).",
            "de": "Bleiben: Nominativ-Verb."
        },
        "explanation": {
            "es": "'Wegen' exige Genitivo. Masculino Genitivo -> 'des' + 's' en el sustantivo.",
            "en": "'Wegen' requires Genitive. Masculine Genitive -> 'des' + 's' on the noun.",
            "tr": "'Wegen' Genitiv gerektirir. Eril Genitiv -> 'des' + isimde 's'.",
            "de": "'Wegen' verlangt Genitiv. Maskulin Genitiv -> 'des' + 's'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "es",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            }
        ]
    },
    {
        "id": 27,
        "level": "B2",
        "case": "Gen",
        "category": "Preposición Genitiva",
        "text": "Trotz d___ (f) Kälte {trägt} er keine Jacke.",
        "noun": "Kälte (f)",
        "verbDesc": {
            "es": "Tragen: Llevar puesto. (Akkusativ).",
            "en": "Tragen: To wear. (Accusative).",
            "tr": "Tragen: To wear. (Accusative).",
            "de": "Tragen: Akkusativ."
        },
        "explanation": {
            "es": "'Trotz' exige Genitivo. Femenino Genitivo -> 'der'.",
            "en": "'Trotz' requires Genitive. Feminine Genitive -> 'der'.",
            "tr": "'Trotz' Genitiv gerektirir. Dişil Genitiv -> 'der'.",
            "de": "'Trotz' verlangt Genitiv. Feminin Genitiv -> 'der'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "er",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            }
        ]
    },
    {
        "id": 28,
        "level": "B2",
        "case": "Dat/Akk",
        "category": "Doble Objeto",
        "text": "Ich {leihe} mein___ (m) Freund mein___ (n) Fahrrad.",
        "noun": "Freund (m), Fahrrad (n)",
        "verbDesc": {
            "es": "Leihen: Prestar. (Dativo + Akkusativ).",
            "en": "Leihen: To lend. (Dat + Acc).",
            "tr": "Leihen: Prestar. (Dativo + Akkusativ).",
            "de": "Leihen: Dat + Akk."
        },
        "explanation": {
            "es": "¿A quién le presto? (Dativo). ¿Qué presto? (Akkusativ).",
            "en": "To whom? (Dative). What? (Accusative).",
            "tr": "Kime? (Dat). Neyi? (Akk).",
            "de": "Wem? (Dat). Was? (Akk)."
        },
        "slots": [
            {
                "type": "art",
                "answer": "em",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            },
            {
                "type": "art",
                "answer": "-",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            }
        ]
    },
    {
        "id": 29,
        "level": "B1",
        "case": "Dat",
        "category": "Preposición Dativa",
        "text": "Ich {gehe} zu d___ (m) Arzt.",
        "noun": "Arzt (m)",
        "verbDesc": {
            "es": "Zu: A / Hacia (personas/lugares). Siempre exige Dativo.",
            "en": "Zu: To. Always takes Dative.",
            "tr": "Zu: -e/-a (yönelme). Daima Dativ alır.",
            "de": "Zu: Präposition mit Dativ."
        },
        "explanation": {
            "es": "'Zu' siempre rige Dativo. Masculino Dativo -> 'dem' (zum).",
            "en": "'Zu' always takes Dative. Masculine Dative -> 'dem' (zum).",
            "tr": "'Zu' daima Dativ alır. Eril Dativ -> 'dem'.",
            "de": "'Zu' verlangt immer Dativ. Maskulin Dativ -> 'dem'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "em",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            }
        ]
    },
    {
        "id": 30,
        "level": "B2",
        "case": "Dat",
        "category": "Verbo con Dativo",
        "text": "Das {fällt} d___ (f) Schülerin leicht.",
        "noun": "Schülerin (f)",
        "verbDesc": {
            "es": "Schwerfallen: Resultar difícil. (Dativo).",
            "en": "Schwerfallen: To be hard for sb. (Dative).",
            "tr": "Schwerfallen: To be hard for sb. (Dative).",
            "de": "Schwerfallen: Dativ."
        },
        "explanation": {
            "es": "A la estudiante 'le' resulta fácil (Dativo). Femenino Dativo -> 'der'.",
            "en": "It is easy for her (Dative). Feminine Dative -> 'der'.",
            "tr": "Öğrenciye kolay geliyor (Dativ). Dişil Dativ -> 'der'.",
            "de": "Es fällt ihr leicht (Dativ). Feminin Dativ -> 'der'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "er",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            }
        ]
    },
    {
        "id": 31,
        "level": "B2",
        "case": "Dat",
        "category": "Wechselpräposition (Wo?)",
        "text": "Die Katze {schläft} zwischen d___ (m) Stühlen.",
        "noun": "Stühle (pl)",
        "verbDesc": {
            "es": "Schlafen: Dormir.",
            "en": "Schlafen: To sleep.",
            "tr": "Schlafen: To sleep.",
            "de": "Schlafen: Intransitiv."
        },
        "explanation": {
            "es": "Situación estática plural. Plural Dativo -> 'den'.",
            "en": "Static plural location. Plural Dative -> 'den'.",
            "tr": "Statik çoğul konum. Çoğul Dativ -> 'den'.",
            "de": "Statische Lage Plural. Plural Dativ -> 'den'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "en",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            }
        ]
    },
    {
        "id": 32,
        "level": "B1",
        "case": "Akk",
        "category": "Verbo con Akkusativ",
        "text": "Ich {besuche} mein___ (m) Opa.",
        "noun": "Opa (m)",
        "verbDesc": {
            "es": "Besuchen: Visitar. Rige Akkusativ.",
            "en": "Besuchen: To visit. Takes Accusative.",
            "tr": "Besuchen: Ziyaret etmek. Akkusativ alır.",
            "de": "Besuchen: Akkusativ-Verb."
        },
        "explanation": {
            "es": "¿A quién visito? Lo visito (Akkusativ). Masculino Akkusativ -> 'meinen'.",
            "en": "Who am I visiting? Him (Accusative). Masculine Accusative -> 'meinen'.",
            "tr": "Kimi ziyaret ediyorum? Onu (Akkusativ). Eril Akkusativ -> 'meinen'.",
            "de": "Wen besuche ich? Ihn (Akkusativ). Maskulin Akkusativ -> 'meinen'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "en",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            }
        ]
    },
    {
        "id": 33,
        "level": "B2",
        "case": "Dat",
        "category": "Verbo Dativo + N-Deklination",
        "text": "Ich {helfe} d___ (m) Nachbarn.",
        "noun": "Nachbar (m)",
        "verbDesc": {
            "es": "Helfen: Ayudar. Rige Dativo.",
            "en": "Helfen: To help. Takes Dative.",
            "tr": "Helfen: Yardım etmek. Dativ alır.",
            "de": "Helfen: Dativ-Verb."
        },
        "explanation": {
            "es": "Helfen exige Dativo. Nachbar es N-Deklination (añade -n).",
            "en": "Helfen requires Dative. Nachbar is N-Declension (adds -n).",
            "tr": "Helfen Dativ ister. Nachbar N-Deklination'dır (-n alır).",
            "de": "Helfen verlangt Dativ. Nachbar ist N-Deklination."
        },
        "slots": [
            {
                "type": "art",
                "answer": "em",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            }
        ]
    },
    {
        "id": 34,
        "level": "B1",
        "case": "Dat",
        "category": "Preposición Dativa",
        "text": "Er {arbeitet} bei d___ (f) Bank.",
        "noun": "Bank (f)",
        "verbDesc": {
            "es": "Bei: En (lugar de trabajo/casa de). Siempre exige Dativo.",
            "en": "Bei: At. Always takes Dative.",
            "tr": "Bei: -de/-da (iş yeri/birinin yanı). Daima Dativ alır.",
            "de": "Bei: Präposition mit Dativ."
        },
        "explanation": {
            "es": "'Bei' rige Dativo. Femenino Dativo -> 'der'.",
            "en": "'Bei' takes Dative. Feminine Dative -> 'der'.",
            "tr": "'Bei' Dativ ister. Dişil Dativ -> 'der'.",
            "de": "'Bei' verlangt Dativ. Feminin Dativ -> 'der'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "er",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            }
        ]
    },
    {
        "id": 35,
        "level": "B2",
        "case": "Akk",
        "category": "Preposición Akkusativ",
        "text": "Wir {spazieren} um d___ (m) See.",
        "noun": "See (m)",
        "verbDesc": {
            "es": "Um: Alrededor de. Siempre rige Akkusativ.",
            "en": "Um: Around. Always takes Accusative.",
            "tr": "Um: Etrafında. Daima Akkusativ alır.",
            "de": "Um: Präposition mit Akkusativ."
        },
        "explanation": {
            "es": "'Um' exige Akkusativ. Masculino Akkusativ -> 'den'.",
            "en": "'Um' requires Accusative. Masculine Accusative -> 'den'.",
            "tr": "'Um' Akkusativ ister. Eril Akkusativ -> 'den'.",
            "de": "'Um' verlangt Akkusativ. Maskulin Akkusativ -> 'den'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "en",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            }
        ]
    },
    {
        "id": 36,
        "level": "B1",
        "case": "Akk",
        "category": "Verbo con Akkusativ",
        "text": "Ich {trinke} ein___ (m) Saft.",
        "noun": "Saft (m)",
        "verbDesc": {
            "es": "Trinken: Beber. (Akkusativ).",
            "en": "Trinken: To drink. (Accusative).",
            "tr": "Trinken: Beber. (Akkusativ).",
            "de": "Trinken: Akkusativ-Verb."
        },
        "explanation": {
            "es": "Objeto directo masculino. Akkusativ indefinido -> 'einen'.",
            "en": "Masculine direct object. Accusative indefinite -> 'einen'.",
            "tr": "Eril belirtili nesne. Akkusativ belirsiz -> 'einen'.",
            "de": "Maskulin direktes Objekt. Akkusativ unbestimmt -> 'einen'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "en",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            }
        ]
    },
    {
        "id": 37,
        "level": "B2",
        "case": "Dat",
        "category": "Verbo con Dativo",
        "text": "Das {passt} d___ (n) Kind nicht.",
        "noun": "Kind (n)",
        "verbDesc": {
            "es": "Passen: Quedar bien (talla/ropa). Rige Dativo.",
            "en": "Passen: To fit. Takes Dative.",
            "tr": "Passen: Uymak/Yakışmak. Dativ alır.",
            "de": "Passen: Dativ-Verb."
        },
        "explanation": {
            "es": "La ropa 'le' queda (o no) al niño. Neutro Dativo -> 'dem'.",
            "en": "It fits the child (Dative). Neuter Dative -> 'dem'.",
            "tr": "Çocuğa oluyor (Dativ). Nötr Dativ -> 'dem'.",
            "de": "Es passt dem Kind (Dativ). Neutrum Dativ -> 'dem'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "em",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            }
        ]
    },
    {
        "id": 38,
        "level": "B2",
        "case": "Gen",
        "category": "Preposición Genitiva",
        "text": "Während d___ (m) Kurses {darf} man nicht essen.",
        "noun": "Kurs (m)",
        "verbDesc": {
            "es": "Dürfen: Poder/Tener permiso.",
            "en": "Dürfen: To be allowed.",
            "tr": "Dürfen: To be allowed.",
            "de": "Dürfen: Modalverb."
        },
        "explanation": {
            "es": "'Während' exige Genitivo. Masculino Genitivo -> 'des'.",
            "en": "'Während' requires Genitive. Masculine Genitive -> 'des'.",
            "tr": "'Während' Genitiv ister. Eril Genitiv -> 'des'.",
            "de": "'Während' verlangt Genitiv. Maskulin Genitiv -> 'des'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "es",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            }
        ]
    },
    {
        "id": 39,
        "level": "B1",
        "case": "Dat",
        "category": "Preposición Dativa",
        "text": "Das Brot {ist} von d___ (m) Bäcker.",
        "noun": "Bäcker (m)",
        "verbDesc": {
            "es": "Sein: Ser/Estar. (Nominativ).",
            "en": "Sein: To be. (Nominative).",
            "tr": "Sein: Ser/Estar. (Nominativ).",
            "de": "Sein: Nominativ-Verb."
        },
        "explanation": {
            "es": "'Von' exige Dativo. Masculino Dativo -> 'dem'.",
            "en": "'Von' requires Dative. Masculine Dative -> 'dem'.",
            "tr": "'Von' Dativ ister. Eril Dativ -> 'dem'.",
            "de": "'Von' verlangt Dativ. Maskulin Dativ -> 'dem'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "em",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            }
        ]
    },
    {
        "id": 40,
        "level": "B2",
        "case": "Dat/Akk",
        "category": "Doble Objeto",
        "text": "Ich {erkläre} d___ (m) Herrn d___ (m) Weg.",
        "noun": "Herr (m), Weg (m)",
        "verbDesc": {
            "es": "Erklären: Explicar. (Dativo + Akkusativ).",
            "en": "Erklären: To explain. (Dat + Acc).",
            "tr": "Erklären: Explicar. (Dativo + Akkusativ).",
            "de": "Erklären: Dat + Akk."
        },
        "explanation": {
            "es": "Herr es N-Deklination. ¿A quién? (Dativo). ¿Qué? (Akkusativ).",
            "en": "Herr is N-Declension. To whom? (Dative). What? (Accusative).",
            "tr": "Herr N-Deklination'dır. Kime? (Dat). Neyi? (Akk).",
            "de": "Herr ist N-Deklination. Wem? (Dat). Was? (Akk)."
        },
        "slots": [
            {
                "type": "art",
                "answer": "em",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "art",
                "answer": "en",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            }
        ]
    },
    {
        "id": 41,
        "level": "B1",
        "case": "Akk",
        "category": "Preposición Akkusativ",
        "text": "Wir {fahren} durch d___ (f) Stadt.",
        "noun": "Stadt (f)",
        "verbDesc": {
            "es": "Fahren: Conducir/Ir.",
            "en": "Fahren: To drive/go.",
            "tr": "Fahren: Conducir/Ir.",
            "de": "Fahren: Bewegungsverb."
        },
        "explanation": {
            "es": "'Durch' exige Akkusativ. Femenino Akkusativ -> 'die'.",
            "en": "'Durch' requires Accusative. Feminine Accusative -> 'die'.",
            "tr": "'Durch' Akkusativ ister. Dişil Akkusativ -> 'die'.",
            "de": "'Durch' verlangt Akkusativ. Feminin Akkusativ -> 'die'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "ie",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            }
        ]
    },
    {
        "id": 42,
        "level": "B2",
        "case": "Dat",
        "category": "Verbo con Dativo",
        "text": "Ich {folge} d___ (m) Polizisten.",
        "noun": "Polizist (m)",
        "verbDesc": {
            "es": "Folgen: Seguir. (Dativo).",
            "en": "Folgen: To follow. (Dative).",
            "tr": "Folgen: Seguir. (Dativo).",
            "de": "Folgen: Dativ-Verb."
        },
        "explanation": {
            "es": "Folgen exige Dativo. Polizist es N-Deklination.",
            "en": "Folgen requires Dative. Polizist is N-Declension.",
            "tr": "Folgen Dativ ister. Polizist N-Deklination'dır.",
            "de": "Folgen verlangt Dativ. Polizist ist N-Deklination."
        },
        "slots": [
            {
                "type": "art",
                "answer": "em",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            }
        ]
    },
    {
        "id": 43,
        "level": "B1",
        "case": "Akk",
        "category": "Artículo Negativo",
        "text": "Ich {habe} kein___ (m) Hunger.",
        "noun": "Hunger (m)",
        "verbDesc": {
            "es": "Haben: Tener. (Akkusativ).",
            "en": "Haben: To have. (Accusative).",
            "tr": "Haben: Tener. (Akkusativ).",
            "de": "Haben: Akkusativ-Verb."
        },
        "explanation": {
            "es": "Tener hambre (Hunger). Masculino Akkusativ negativo -> 'keinen'.",
            "en": "To have hunger. Masculine Accusative negative -> 'keinen'.",
            "tr": "Aç olmak. Eril Akkusativ olumsuz -> 'keinen'.",
            "de": "Hunger haben. Maskulin Akkusativ Negation -> 'keinen'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "en",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            }
        ]
    },
    {
        "id": 44,
        "level": "B2",
        "case": "Dat",
        "category": "Preposición Dativa",
        "text": "Das Haus {steht} gegenüber d___ (f) Post.",
        "noun": "Post (f)",
        "verbDesc": {
            "es": "Stehen: Estar de pie/situado. (Wo? -> Dativo).",
            "en": "Stehen: To stand. (Wo? -> Dat).",
            "tr": "Stehen: To stand. (Wo? -> Dat).",
            "de": "Stehen: Position (Dativ)."
        },
        "explanation": {
            "es": "'Gegenüber' exige Dativo. Femenino Dativo -> 'der'.",
            "en": "'Gegenüber' requires Dative. Feminine Dative -> 'der'.",
            "tr": "'Gegenüber' Dativ ister. Dişil Dativ -> 'der'.",
            "de": "Gegenüber verlangt Dativ. Feminin Dativ -> 'der'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "er",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            }
        ]
    },
    {
        "id": 45,
        "level": "B2",
        "case": "Akk",
        "category": "Wechselpräposition (Wohin?)",
        "text": "Ich {hänge} das Bild an d___ (f) Wand.",
        "noun": "Wand (f)",
        "verbDesc": {
            "es": "An: En/A (contacto vertical). Con movimiento rige Akkusativ.",
            "en": "An: On/At. With movement takes Accusative.",
            "tr": "An: -e/-a (temaslı). Hareket bildirirken Akkusativ alır.",
            "de": "An: Wechselpräposition (Wohin = Akkusativ)."
        },
        "explanation": {
            "es": "Acción de colgar (¿Adónde?). Femenino Akkusativ -> 'die'.",
            "en": "Action of hanging (Whereto?). Feminine Accusative -> 'die'.",
            "tr": "Asma eylemi (Nereye?). Dişil Akkusativ -> 'die'.",
            "de": "Bewegung (Wohin?). Feminin Akkusativ -> 'die'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "ie",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            }
        ]
    },
    {
        "id": 46,
        "level": "B2",
        "case": "Dat",
        "category": "Wechselpräposition (Wo?)",
        "text": "Das Bild {hängt} an d___ (f) Wand.",
        "noun": "Wand (f)",
        "verbDesc": {
            "es": "Hängen: Colgar/Estar colgado. (Wo? -> Dativo).",
            "en": "Hängen: To hang. (Wo? -> Dat).",
            "tr": "Hängen: To hang. (Wo? -> Dat).",
            "de": "Hängen: Position (Dativ)."
        },
        "explanation": {
            "es": "El cuadro ya está ahí (¿Dónde?). Femenino Dativo -> 'der'.",
            "en": "The picture is already there (Where?). Feminine Dative -> 'der'.",
            "tr": "Resim orada duruyor (Nerede?). Dişil Dativ -> 'der'.",
            "de": "Statische Lage (Wo?). Feminin Dativ -> 'der'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "er",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            }
        ]
    },
    {
        "id": 47,
        "level": "B1",
        "case": "Dat",
        "category": "Preposición Dativa",
        "text": "Ich {komme} aus d___ (n) Büro.",
        "noun": "Büro (n)",
        "verbDesc": {
            "es": "Kommen: Venir.",
            "en": "Kommen: To come.",
            "tr": "Kommen: Venir.",
            "de": "Kommen: Bewegungsverb."
        },
        "explanation": {
            "es": "'Aus' exige Dativo. Neutro Dativo -> 'dem'.",
            "en": "'Aus' requires Dative. Neuter Dative -> 'dem'.",
            "tr": "'Aus' Dativ ister. Nötr Dativ -> 'dem'.",
            "de": "'Aus' verlangt Dativ. Neutrum Dativ -> 'dem'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "em",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            }
        ]
    },
    {
        "id": 48,
        "level": "B2",
        "case": "Dat/Akk",
        "category": "Doble Objeto",
        "text": "Ich {empfehle} ein___ (f) Freundin ein___ (m) Wein.",
        "noun": "Freundin (f), Wein (m)",
        "verbDesc": {
            "es": "Empfehlen: Recomendar. (Dativo + Akkusativ).",
            "en": "Empfehlen: To recommend. (Dat + Acc).",
            "tr": "Empfehlen: Recomendar. (Dativo + Akkusativ).",
            "de": "Empfehlen: Dat + Akk."
        },
        "explanation": {
            "es": "¿A quién? (Dativo). ¿Qué? (Akkusativ).",
            "en": "To whom? (Dative). What? (Accusative).",
            "tr": "Kime? (Dat). Neyi? (Akk).",
            "de": "Wem? (Dat). Was? (Akk)."
        },
        "slots": [
            {
                "type": "art",
                "answer": "er",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            },
            {
                "type": "art",
                "answer": "en",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            }
        ]
    },
    {
        "id": 49,
        "level": "B1",
        "case": "Akk",
        "category": "Preposición Akkusativ",
        "text": "Ich {habe} ein Geschenk für d___ (pl) Kinder.",
        "noun": "Kinder (pl)",
        "verbDesc": {
            "es": "Haben: Tener. (Akkusativ).",
            "en": "Haben: To have. (Accusative).",
            "tr": "Haben: Tener. (Akkusativ).",
            "de": "Haben: Akkusativ-Verb."
        },
        "explanation": {
            "es": "'Für' exige Akkusativ. Plural Akkusativ -> 'die'.",
            "en": "'Für' requires Accusative. Plural Accusative -> 'die'.",
            "tr": "'Für' Akkusativ ister. Çoğul Akkusativ -> 'die'.",
            "de": "'Für' verlangt Akkusativ. Plural Akkusativ -> 'die'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "ie",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            }
        ]
    },
    {
        "id": 50,
        "level": "B2",
        "case": "Dat",
        "category": "Verbo con Dativo",
        "text": "Das {passiert} d___ (m) Experten oft.",
        "noun": "Experte (m)",
        "verbDesc": {
            "es": "Passieren: Suceder/Pasar a alguien. Rige Dativo.",
            "en": "Passieren: To happen to someone. Takes Dative.",
            "tr": "Passieren: Başına gelmek. Dativ alır.",
            "de": "Passieren: Dativ-Verb."
        },
        "explanation": {
            "es": "Suceder 'le' a alguien exige Dativo. Experte es N-Deklination.",
            "en": "Happening to someone requires Dative. Experte is N-Declension.",
            "tr": "Birinin başına gelmek Dativ ister. Experte N-Deklination'dır.",
            "de": "Jemandem passieren verlangt Dativ. Experte ist N-Deklination."
        },
        "slots": [
            {
                "type": "art",
                "answer": "em",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            }
        ]
    },
    {
        "id": 51,
        "level": "B2",
        "case": "Gen",
        "category": "Preposición Genitiva",
        "text": "Trotz d___ schlecht___ Wetters {gehen} wir spazieren.",
        "noun": "Wetter (n)",
        "verbDesc": {
            "es": "Gehen: Ir/Caminar.",
            "en": "Gehen: To go/walk.",
            "tr": "Gehen: Ir/Caminar.",
            "de": "Gehen: Bewegungsverb."
        },
        "explanation": {
            "es": "Genitivo neutro. Artículo 'des', adjetivo declinación débil '-en'.",
            "en": "Neuter Genitive. Article 'des', weak adjective ending '-en'.",
            "tr": "Nötr Genitiv. Tanımlayıcı 'des', zayıf sıfat tamlaması '-en'.",
            "de": "Neutrum Genitiv. Artikel 'des', schwache Adjektivendung '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "es",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 52,
        "level": "C1",
        "case": "Dat",
        "category": "Verbo con Dativo (N-Dekl)",
        "text": "Ich {begegne} ein___ alt___ Herrn.",
        "noun": "Herr (m)",
        "verbDesc": {
            "es": "Begegnen: Encontrarse con. (Dativo).",
            "en": "Begegnen: To encounter. (Dative).",
            "tr": "Begegnen: Encontrarse con. (Dativo).",
            "de": "Begegnen: Dativ-Verb."
        },
        "explanation": {
            "es": "Dativo masculino. Herr es N-Deklination. Adjetivo mixto '-en'.",
            "en": "Masculine Dative. Herr is N-Declension. Mixed adjective '-en'.",
            "tr": "Eril Dativ. Herr N-Deklination'dır. Karışık sıfat '-en'.",
            "de": "Maskulin Dativ. Herr ist N-Deklination. Adjektiv '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "em",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 53,
        "level": "B2",
        "case": "Gen",
        "category": "Preposición Genitiva",
        "text": "Während d___ langweilig___ Sitzung {bin} ich eingeschlafen.",
        "noun": "Sitzung (f)",
        "verbDesc": {
            "es": "Sein: Ser/Estar. (Nominativ).",
            "en": "Sein: To be. (Nominative).",
            "tr": "Sein: Ser/Estar. (Nominativ).",
            "de": "Sein: Nominativ-Verb."
        },
        "explanation": {
            "es": "Genitivo femenino. Artículo 'der', adjetivo débil '-en'.",
            "en": "Feminine Genitive. Article 'der', weak adjective ending '-en'.",
            "tr": "Dişil Genitiv. Tanımlayıcı 'der', zayıf sıfat '-en'.",
            "de": "Feminin Genitiv. Artikel 'der', schwache Adjektivendung '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "er",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 54,
        "level": "C1",
        "case": "Nom",
        "category": "Declinación Fuerte (Sin Art)",
        "text": "Frisch___ Brot {schmeckt} am besten.",
        "noun": "Brot (n)",
        "verbDesc": {
            "es": "Schmecken: Gustar (sabor). (Dativo).",
            "en": "Schmecken: To taste. (Dative).",
            "tr": "Schmecken: Gustar (sabor). (Dativo).",
            "de": "Schmecken: Dativ-Verb."
        },
        "explanation": {
            "es": "Nominativo neutro sin artículo. El adjetivo 'roba' la terminación del artículo (das -> -es).",
            "en": "Neuter Nominative without article. Adjective takes article ending (das -> -es).",
            "tr": "Tanımlayıcısız nötr Nominativ. Sıfat tanımlayıcı ekini alır (das -> -es).",
            "de": "Neutrum Nominativ ohne Artikel. Starke Adjektivendung '-es'."
        },
        "slots": [
            {
                "type": "adj",
                "answer": "es",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 55,
        "level": "B2",
        "case": "Dat",
        "category": "Preposición Dativa",
        "text": "Ich {trinke} meinen Kaffee mit warm___ Milch.",
        "noun": "Milch (f)",
        "verbDesc": {
            "es": "Trinken: Beber. (Akkusativ).",
            "en": "Trinken: To drink. (Accusative).",
            "tr": "Trinken: Beber. (Akkusativ).",
            "de": "Trinken: Akkusativ-Verb."
        },
        "explanation": {
            "es": "Dativo femenino sin artículo. Declinación fuerte (die/der -> -er).",
            "en": "Feminine Dative without article. Strong declension (die/der -> -er).",
            "tr": "Tanımlayıcısız dişil Dativ. Güçlü sıfat tamlaması '-er'.",
            "de": "Feminin Dativ ohne Artikel. Starke Adjektivendung '-er'."
        },
        "slots": [
            {
                "type": "adj",
                "answer": "er",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 56,
        "level": "C1",
        "case": "Gen",
        "category": "Preposición Genitiva",
        "text": "Infolge ein___ schwer___ Fehlers {wurde} das Projekt gestoppt.",
        "noun": "Fehler (m)",
        "verbDesc": {
            "es": "Werden: Convertirse/Llegar a ser (o Auxiliar Pasiva).",
            "en": "Werden: To become (or Passive Aux).",
            "tr": "Werden: Convertirse/Llegar a ser (o Auxiliar Pasiva).",
            "de": "Werden: Nominativ / Passiv."
        },
        "explanation": {
            "es": "Genitivo masculino. Artículo 'eines', adjetivo mixto '-en'.",
            "en": "Masculine Genitive. Article 'eines', mixed adjective '-en'.",
            "tr": "Eril Genitiv. Tanımlayıcı 'eines', karışık sıfat '-en'.",
            "de": "Maskulin Genitiv. Artikel 'eines', Adjektivendung '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "es",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 57,
        "level": "B2",
        "case": "Nom",
        "category": "Adjetivo tras cuantificador",
        "text": "Alle fleißig___ Studenten {haben} die Prüfung bestanden.",
        "noun": "Studenten (pl)",
        "verbDesc": {
            "es": "Haben: Tener. (Akkusativ).",
            "en": "Haben: To have. (Accusative).",
            "tr": "Haben: Tener. (Akkusativ).",
            "de": "Haben: Akkusativ-Verb."
        },
        "explanation": {
            "es": "Tras 'alle' (plural), el adjetivo siempre sigue la declinación débil (-en).",
            "en": "After 'alle' (plural), the adjective always takes the weak ending (-en).",
            "tr": "'Alle'den sonra sıfat daima zayıf ek (-en) alır.",
            "de": "Nach 'alle' folgt die schwache Adjektivendung (-en)."
        },
        "slots": [
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 58,
        "level": "B2",
        "case": "Nom",
        "category": "Adjetivo tras cuantificador",
        "text": "Viele jung___ Menschen {reisen} gerne.",
        "noun": "Menschen (pl)",
        "verbDesc": {
            "es": "Reisen: Viajar.",
            "en": "Reisen: To travel.",
            "tr": "Reisen: To travel.",
            "de": "Reisen: Bewegungsverb."
        },
        "explanation": {
            "es": "Tras 'viele' (plural), el adjetivo sigue la declinación fuerte (-e).",
            "en": "After 'viele' (plural), the adjective takes the strong ending (-e).",
            "tr": "'Viele'den sonra sıfat güçlü ek (-e) alır.",
            "de": "Nach 'viele' folgt die starke Adjektivendung (-e)."
        },
        "slots": [
            {
                "type": "adj",
                "answer": "e",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 59,
        "level": "C1",
        "case": "Akk",
        "category": "Verbo Reflexivo",
        "text": "Ich {sehe} mir d___ neu___ Film an.",
        "noun": "Film (m)",
        "verbDesc": {
            "es": "Sehen: Ver. (Akkusativ).",
            "en": "Sehen: To see. (Accusative).",
            "tr": "Sehen: Ver. (Akkusativ).",
            "de": "Sehen: Akkusativ-Verb."
        },
        "explanation": {
            "es": "Objeto directo masculino. Artículo 'den', adjetivo débil '-en'.",
            "en": "Masculine direct object. Article 'den', weak adjective '-en'.",
            "tr": "Eril belirtili nesne. Tanımlayıcı 'den', zayıf sıfat '-en'.",
            "de": "Maskulin Akkusativ Objekt. Artikel 'den', Adjektiv '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "en",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 60,
        "level": "B2",
        "case": "Dat",
        "category": "Preposición Dativa",
        "text": "Ich {wohne} seit ein___ ganz___ Monat in Berlin.",
        "noun": "Monat (m)",
        "verbDesc": {
            "es": "Wohnen: Vivir/Habitar.",
            "en": "Wohnen: To live/dwell.",
            "tr": "Wohnen: Vivir/Habitar.",
            "de": "Wohnen."
        },
        "explanation": {
            "es": "Dativo masculino. Artículo 'einem', adjetivo mixto '-en'.",
            "en": "Masculine Dative. Article 'einem', mixed adjective '-en'.",
            "tr": "Eril Dativ. Tanımlayıcı 'einem', karışık sıfat '-en'.",
            "de": "Maskulin Dativ. Artikel 'einem', Adjektiv '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "em",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 61,
        "level": "C1",
        "case": "Gen",
        "category": "Preposición Genitiva",
        "text": "Unweit d___ groß___ Parks {befindet} sich das Museum.",
        "noun": "Park (m)",
        "verbDesc": {
            "es": "Sich befinden: Encontrarse. (Reflexivo).",
            "en": "Sich befinden: To be located.",
            "tr": "Sich befinden: To be located.",
            "de": "Sich befinden."
        },
        "explanation": {
            "es": "Genitivo masculino. Artículo 'des', adjetivo débil '-en'.",
            "en": "Masculine Genitive. Article 'des', weak adjective '-en'.",
            "tr": "Eril Genitiv. Tanımlayıcı 'des', zayıf sıfat '-en'.",
            "de": "Maskulin Genitiv. Artikel 'des', Adjektiv '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "es",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 62,
        "level": "C1",
        "case": "Akk",
        "category": "Declinación Fuerte (Sin Art)",
        "text": "Er {trinkt} am liebsten trocken___ Wein.",
        "noun": "Wein (m)",
        "verbDesc": {
            "es": "Trinken: Beber. (Akkusativ).",
            "en": "Trinken: To drink. (Accusative).",
            "tr": "Trinken: Beber. (Akkusativ).",
            "de": "Trinken: Akkusativ-Verb."
        },
        "explanation": {
            "es": "Objeto directo masculino sin artículo. Declinación fuerte (der/den -> -en).",
            "en": "Masculine direct object without article. Strong declension (der/den -> -en).",
            "tr": "Tanımlayıcısız eril belirtili nesne. Güçlü sıfat tamlaması '-en'.",
            "de": "Maskulin Akkusativ ohne Artikel. Starke Adjektivendung '-en'."
        },
        "slots": [
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 63,
        "level": "B2",
        "case": "Nom",
        "category": "Adjetivo Mixto",
        "text": "Er {ist} ein___ bekannt___ Experte.",
        "noun": "Experte (m)",
        "verbDesc": {
            "es": "Sein: Ser/Estar. (Nominativ).",
            "en": "Sein: To be. (Nominative).",
            "tr": "Sein: Ser/Estar. (Nominativ).",
            "de": "Sein: Nominativ-Verb."
        },
        "explanation": {
            "es": "Nominativo masculino. Artículo 'ein', adjetivo mixto '-er'. Experte es N-Deklination.",
            "en": "Masculine Nominative. Article 'ein', mixed adjective '-er'. Experte is N-Declension.",
            "tr": "Eril Nominativ. Tanımlayıcı 'ein', karışık sıfat '-er'. Experte N-Deklination'dır.",
            "de": "Maskulin Nominativ. Artikel 'ein', gemischte Adjektivendung '-er'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "-",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "er",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 64,
        "level": "B2",
        "case": "Dat",
        "category": "Preposición Dativa",
        "text": "Wir {sprechen} mit d___ klein___ Kindern.",
        "noun": "Kinder (pl)",
        "verbDesc": {
            "es": "Sprechen: Hablar. (Mit + Dativo).",
            "en": "Sprechen: To speak.",
            "tr": "Sprechen: To speak.",
            "de": "Sprechen."
        },
        "explanation": {
            "es": "Dativo plural. Artículo 'den', adjetivo débil '-en'.",
            "en": "Plural Dative. Article 'den', weak adjective '-en'.",
            "tr": "Çoğul Dativ. Tanımlayıcı 'den', zayıf sıfat '-en'.",
            "de": "Plural Dativ. Artikel 'den', Adjektiv '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "en",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 65,
        "level": "C1",
        "case": "Akk",
        "category": "Preposición Akkusativ",
        "text": "Ich {tue} das für d___ groß___ Erfolg.",
        "noun": "Erfolg (m)",
        "verbDesc": {
            "es": "Tun: Hacer. (Alles für dich tun -> Akkusativ).",
            "en": "Tun: To do.",
            "tr": "Tun: To do.",
            "de": "Tun."
        },
        "explanation": {
            "es": "Akkusativ masculino. Artículo 'den', adjetivo débil '-en'.",
            "en": "Masculine Accusative. Article 'den', weak adjective '-en'.",
            "tr": "Eril Akkusativ. Tanımlayıcı 'den', zayıf sıfat '-en'.",
            "de": "Maskulin Akkusativ. Artikel 'den', Adjektiv '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "en",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 66,
        "level": "C1",
        "case": "Dat",
        "category": "Declinación Fuerte (Sin Art)",
        "text": "Das Zimmer {ist} mit modern___ Möbeln eingerichtet.",
        "noun": "Möbel (pl)",
        "verbDesc": {
            "es": "Sein: Ser/Estar. (Nominativ).",
            "en": "Sein: To be. (Nominative).",
            "tr": "Sein: Ser/Estar. (Nominativ).",
            "de": "Sein: Nominativ-Verb."
        },
        "explanation": {
            "es": "Dativo plural sin artículo. Adjetivo fuerte (-en).",
            "en": "Plural Dative without article. Strong adjective ending (-en).",
            "tr": "Tanımlayıcısız çoğul Dativ. Güçlü sıfat tamlaması '-en'.",
            "de": "Plural Dativ ohne Artikel. Starke Adjektivendung '-en'."
        },
        "slots": [
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 67,
        "level": "B2",
        "case": "Dat",
        "category": "Verbo con Dativo",
        "text": "Ich {vertraue} d___ offiziell___ Nachricht nicht.",
        "noun": "Nachricht (f)",
        "verbDesc": {
            "es": "Vertrauen: Confiar. (Dativo).",
            "en": "Vertrauen: To trust. (Dative).",
            "tr": "Vertrauen: Confiar. (Dativo).",
            "de": "Vertrauen: Dativ-Verb."
        },
        "explanation": {
            "es": "Dativo femenino. Artículo 'der', adjetivo débil '-en'.",
            "en": "Feminine Dative. Article 'der', weak adjective '-en'.",
            "tr": "Dişil Dativ. Tanımlayıcı 'der', zayıf sıfat '-en'.",
            "de": "Feminin Dativ. Artikel 'der', Adjektiv '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "er",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 68,
        "level": "C1",
        "case": "Gen",
        "category": "Preposición Genitiva",
        "text": "Abseits d___ befahren___ Weges {fanden} wir einen Schatz.",
        "noun": "Weg (m)",
        "verbDesc": {
            "es": "Finden: Encontrar. (Akkusativ).",
            "en": "Finden: To find. (Accusative).",
            "tr": "Finden: To find. (Accusative).",
            "de": "Finden: Akkusativ."
        },
        "explanation": {
            "es": "Genitivo masculino. Artículo 'des', adjetivo débil '-en'.",
            "en": "Masculine Genitive. Article 'des', weak adjective '-en'.",
            "tr": "Eril Genitiv. Tanımlayıcı 'des', zayıf sıfat '-en'.",
            "de": "Maskulin Genitiv. Artikel 'des', Adjektiv '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "es",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 69,
        "level": "B2",
        "case": "Dat/Akk",
        "category": "Doble Objeto",
        "text": "Ich {schenke} d___ Nichte ein___ Puppe.",
        "noun": "Nichte (f), Puppe (f)",
        "verbDesc": {
            "es": "Schenken: Regalar. (Dativo + Akkusativ).",
            "en": "Schenken: To gift. (Dative + Accusative).",
            "tr": "Schenken: Regalar. (Dativo + Akkusativ).",
            "de": "Schenken: Dat + Akk."
        },
        "explanation": {
            "es": "¿A quién? (Femenino Dativo -> 'der'). ¿Qué? (Femenino Akkusativ -> 'eine').",
            "en": "To whom? (Fem Dative -> 'der'). What? (Fem Accusative -> 'eine').",
            "tr": "Kime? (Dişil Dativ -> 'der'). Neyi? (Dişil Akkusativ -> 'eine').",
            "de": "Wem? (Fem Dativ -> 'der'). Was? (Fem Akkusativ -> 'eine')."
        },
        "slots": [
            {
                "type": "art",
                "answer": "er",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "art",
                "answer": "e",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            }
        ]
    },
    {
        "id": 70,
        "level": "C1",
        "case": "Akk",
        "category": "Adjetivo Mixto",
        "text": "Ich {habe} keinen jeglich___ Zweifel.",
        "noun": "Zweifel (m)",
        "verbDesc": {
            "es": "Haben: Tener. (Akkusativ).",
            "en": "Haben: To have. (Accusative).",
            "tr": "Haben: Tener. (Akkusativ).",
            "de": "Haben: Akkusativ-Verb."
        },
        "explanation": {
            "es": "Akkusativ masculino negativo. Artículo 'keinen', adjetivo mixto '-en'.",
            "en": "Masculine Accusative negative. Article 'keinen', mixed adjective '-en'.",
            "tr": "Eril Akkusativ olumsuz. Tanımlayıcı 'keinen', karışık sıfat '-en'.",
            "de": "Maskulin Akkusativ Negation. Artikel 'keinen', Adjektiv '-en'."
        },
        "slots": [
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 71,
        "level": "B2",
        "case": "Nom",
        "category": "Adjetivo Mixto",
        "text": "Das {ist} ein___ hervorragend___ Ergebnis.",
        "noun": "Ergebnis (n)",
        "verbDesc": {
            "es": "Sein: Ser/Estar. (Nominativ).",
            "en": "Sein: To be. (Nominative).",
            "tr": "Sein: Ser/Estar. (Nominativ).",
            "de": "Sein: Nominativ-Verb."
        },
        "explanation": {
            "es": "Nominativo neutro. Artículo 'ein', adjetivo mixto '-es'.",
            "en": "Neuter Nominative. Article 'ein', mixed adjective '-es'.",
            "tr": "Nötr Nominativ. Tanımlayıcı 'ein', karışık sıfat '-es'.",
            "de": "Neutrum Nominativ. Artikel 'ein', Adjektiv '-es'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "-",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "es",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 72,
        "level": "C1",
        "case": "Akk",
        "category": "Adjetivo tras cuantificador",
        "text": "Ich {kenne} beide jung___ Männer.",
        "noun": "Männer (pl)",
        "verbDesc": {
            "es": "Kennen: Conocer. Rige Akkusativ.",
            "en": "Kennen: To know.",
            "tr": "Kennen: Tanımak.",
            "de": "Kennen: Akkusativ-Verb."
        },
        "explanation": {
            "es": "Tras 'beide' (plural), el adjetivo sigue la declinación débil (-en).",
            "en": "After 'beide' (plural), the adjective takes the weak ending (-en).",
            "tr": "'Beide'den sonra sıfat zayıf ek (-en) alır.",
            "de": "Nach 'beide' folgt die schwache Adjektivendung (-en)."
        },
        "slots": [
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 73,
        "level": "B2",
        "case": "Nom",
        "category": "Adjetivo tras cuantificador",
        "text": "Solch schön___ Wetter {macht} mich glücklich.",
        "noun": "Wetter (n)",
        "verbDesc": {
            "es": "Machen: Hacer. (Akkusativ).",
            "en": "Machen: To make/do. (Accusative).",
            "tr": "Machen: To make/do. (Accusative).",
            "de": "Machen: Akkusativ-Verb."
        },
        "explanation": {
            "es": "Tras 'solch' (sin declinar), el adjetivo sigue la declinación fuerte (-es).",
            "en": "After 'solch' (undeclined), the adjective takes the strong ending (-es).",
            "tr": "'Solch'tan sonra sıfat güçlü ek (-es) alır.",
            "de": "Nach 'solch' folgt die starke Adjektivendung (-es)."
        },
        "slots": [
            {
                "type": "adj",
                "answer": "es",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 74,
        "level": "C1",
        "case": "Dat",
        "category": "Preposición Dativa",
        "text": "Ich {bin} mit d___ aktuell___ Ergebnis zufrieden.",
        "noun": "Ergebnis (n)",
        "verbDesc": {
            "es": "Sein: Ser/Estar. (Nominativ).",
            "en": "Sein: To be. (Nominative).",
            "tr": "Sein: Ser/Estar. (Nominativ).",
            "de": "Sein: Nominativ-Verb."
        },
        "explanation": {
            "es": "Dativo neutro. Artículo 'dem', adjetivo débil '-en'.",
            "en": "Neuter Dative. Article 'dem', weak adjective '-en'.",
            "tr": "Nötr Dativ. Tanımlayıcı 'dem', zayıf sıfat '-en'.",
            "de": "Neutrum Dativ. Artikel 'dem', Adjektiv '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "em",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 75,
        "level": "B2",
        "case": "Nom",
        "category": "Adjetivo Mixto",
        "text": "___ fremd___ Frau {hat} angerufen.",
        "noun": "Frau (f)",
        "verbDesc": {
            "es": "Haben: Tener. (Akkusativ).",
            "en": "Haben: To have. (Accusative).",
            "tr": "Haben: Tener. (Akkusativ).",
            "de": "Haben: Akkusativ-Verb."
        },
        "explanation": {
            "es": "Nominativo femenino. Artículo 'eine', adjetivo mixto '-e'.",
            "en": "Feminine Nominative. Article 'eine', mixed adjective '-e'.",
            "tr": "Dişil Nominativ. Tanımlayıcı 'eine', karışık sıfat '-e'.",
            "de": "Feminin Nominativ. Artikel 'eine', Adjektiv '-e'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "Eine",
                "options": [
                    "Ein",
                    "Eine",
                    "Einer",
                    "Einen"
                ]
            },
            {
                "type": "adj",
                "answer": "e",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 76,
        "level": "B2",
        "case": "Akk",
        "category": "Verbo con Preposición Fija",
        "text": "Ich {warte} auf d___ nächst___ Bus.",
        "noun": "Bus (m)",
        "verbDesc": {
            "es": "Warten auf: Esperar a. Rige siempre Akkusativ.",
            "en": "Warten auf: To wait for. Always takes Accusative.",
            "tr": "Warten auf: Bir şeyi/birini beklemek. Daima Akkusativ alır.",
            "de": "Warten auf + Akkusativ."
        },
        "explanation": {
            "es": "Preposición fija 'auf' + Akkusativ. Masculino 'den', adjetivo débil '-en'.",
            "en": "Fixed preposition 'auf' + Accusative. Masculine 'den', weak adjective '-en'.",
            "tr": "Sabit edat 'auf' + Akkusativ. Eril 'den', zayıf sıfat '-en'.",
            "de": "Präposition 'auf' verlangt Akkusativ. Maskulin 'den', Adjektiv '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "en",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 77,
        "level": "B2",
        "case": "Dat",
        "category": "Verbo con Preposición Fija",
        "text": "Er {träumt} von ein___ groß___ Haus.",
        "noun": "Haus (n)",
        "verbDesc": {
            "es": "Träumen von: Soñar con. Rige siempre Dativo.",
            "en": "Träumen von: To dream of. Always takes Dative.",
            "tr": "Träumen von: Hayalini kurmak/Rüyasında görmek. Daima Dativ alır.",
            "de": "Träumen von + Dativ."
        },
        "explanation": {
            "es": "Preposición fija 'von' + Dativo. Neutro 'einem', adjetivo mixto '-en'.",
            "en": "Fixed preposition 'von' + Dative. Neuter 'einem', mixed adjective '-en'.",
            "tr": "Sabit edat 'von' + Dativ. Nötr 'einem', karışık sıfat '-en'.",
            "de": "Präposition 'von' verlangt Dativ. Neutrum 'einem', Adjektiv '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "em",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 78,
        "level": "C1",
        "case": "Gen",
        "category": "Preposición Genitiva",
        "text": "Außerhalb d___ klein___ Stadt {ist} es ruhig.",
        "noun": "Stadt (f)",
        "verbDesc": {
            "es": "Sein: Ser/Estar. (Nominativ).",
            "en": "Sein: To be. (Nominative).",
            "tr": "Sein: Ser/Estar. (Nominativ).",
            "de": "Sein: Nominativ-Verb."
        },
        "explanation": {
            "es": "Genitivo femenino. Artículo 'der', adjetivo débil '-en'.",
            "en": "Feminine Genitive. Article 'der', weak adjective '-en'.",
            "tr": "Dişil Genitiv. Tanımlayıcı 'der', zayıf sıfat '-en'.",
            "de": "Feminin Genitiv. Artikel 'der', Adjektiv '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "er",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 79,
        "level": "C1",
        "case": "Nom",
        "category": "Adjetivación Sustantivada",
        "text": "Es {gibt} nichts Interessant___ zu berichten.",
        "noun": "Neues (n)",
        "verbDesc": {
            "es": "Es gibt: Hay. Rige Akkusativ.",
            "en": "Es gibt: There is/are. Takes Acc.",
            "tr": "Es gibt: There is/are. Takes Acc.",
            "de": "Es gibt: Akkusativ."
        },
        "explanation": {
            "es": "Después de 'nichts', el adjetivo se sustantiva y lleva terminación '-es' (fuerte).",
            "en": "After 'nichts', the adjective becomes a noun with '-es' (strong ending).",
            "tr": "'Nichts'ten sonra sıfat '-es' (güçlü) eki alarak isimleşir.",
            "de": "Nach 'nichts' folgt die starke Endung '-es'."
        },
        "slots": [
            {
                "type": "adj",
                "answer": "es",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 80,
        "level": "C1",
        "case": "Nom",
        "category": "Participio I como Adjetivo",
        "text": "Lachend___ Kinder {spielen} im Garten.",
        "noun": "Kinder (pl)",
        "verbDesc": {
            "es": "Spielen: Jugar.",
            "en": "Spielen: To play.",
            "tr": "Spielen: To play.",
            "de": "Spielen."
        },
        "explanation": {
            "es": "Nominativo plural sin artículo. Declinación fuerte '-e'.",
            "en": "Plural Nominative without article. Strong ending '-e'.",
            "tr": "Tanımlayıcısız çoğul Nominativ. Güçlü ek '-e'.",
            "de": "Plural Nominativ ohne Artikel. Starke Endung '-e'."
        },
        "slots": [
            {
                "type": "adj",
                "answer": "e",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 81,
        "level": "B2",
        "case": "Akk",
        "category": "Preposición Akkusativ",
        "text": "Er {geht} durch d___ dunkl___ Park.",
        "noun": "Park (m)",
        "verbDesc": {
            "es": "Gehen: Ir/Funcionar.",
            "en": "Gehen: To go.",
            "tr": "Gehen: To go.",
            "de": "Gehen."
        },
        "explanation": {
            "es": "Akkusativ masculino. Artículo 'den', adjetivo débil '-en'.",
            "en": "Masculine Accusative. Article 'den', weak adjective '-en'.",
            "tr": "Eril Akkusativ. Tanımlayıcı 'den', zayıf sıfat '-en'.",
            "de": "Maskulin Akkusativ. Artikel 'den', Adjektiv '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "en",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 82,
        "level": "C1",
        "case": "Gen",
        "category": "Preposición Genitiva",
        "text": "Anstatt ein___ warm___ Mantels {nahm} er nur einen Pullover.",
        "noun": "Mantel (m)",
        "verbDesc": {
            "es": "Nehmen: Tomar/Coger. (Akkusativ).",
            "en": "Nehmen: To take. (Accusative).",
            "tr": "Nehmen: To take. (Accusative).",
            "de": "Nehmen: Akkusativ-Verb."
        },
        "explanation": {
            "es": "Genitivo masculino. Artículo 'eines', adjetivo mixto '-en'.",
            "en": "Masculine Genitive. Article 'eines', mixed adjective '-en'.",
            "tr": "Eril Genitiv. Tanımlayıcı 'eines', karışık sıfat '-en'.",
            "de": "Maskulin Genitiv. Artikel 'eines', Adjektiv '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "es",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 83,
        "level": "B2",
        "case": "Dat",
        "category": "Sustantivo + Preposición",
        "text": "Ich {habe} Interesse an ___ neu___ Projekt.",
        "noun": "Projekt (n)",
        "verbDesc": {
            "es": "Haben: Tener. (Akkusativ).",
            "en": "Haben: To have. (Accusative).",
            "tr": "Haben: Tener. (Akkusativ).",
            "de": "Haben: Akkusativ-Verb."
        },
        "explanation": {
            "es": "Dativo neutro. Artículo 'diesem', adjetivo débil '-en'.",
            "en": "Neuter Dative. Article 'diesem', weak adjective '-en'.",
            "tr": "Nötr Dativ. Tanımlayıcı 'diesem', zayıf sıfat '-en'.",
            "de": "Neutrum Dativ. Artikel 'diesem', Adjektiv '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "diesem",
                "options": [
                    "dieses",
                    "diesem",
                    "diesen",
                    "dieser"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 84,
        "level": "B2",
        "case": "Akk",
        "category": "Verbo con Preposición Fija",
        "text": "Ich {erinnere} mich an unser___ schön___ Urlaub.",
        "noun": "Urlaub (m)",
        "verbDesc": {
            "es": "Erinnern: Recordar. (Genitiv o An+Akk).",
            "en": "Erinnern: To remember. (Gen or An+Acc).",
            "tr": "Erinnern: Recordar. (Genitiv o An+Akk).",
            "de": "Erinnern: Genitiv."
        },
        "explanation": {
            "es": "Akkusativ masculino. Artículo 'unseren', adjetivo débil '-en'.",
            "en": "Masculine Accusative. Article 'unseren', weak adjective '-en'.",
            "tr": "Eril Akkusativ. Tanımlayıcı 'unseren', zayıf sıfat '-en'.",
            "de": "Maskulin Akkusativ. Artikel 'unseren', Adjektiv '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "en",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 85,
        "level": "C1",
        "case": "Gen",
        "category": "Preposición Genitiva",
        "text": "Innerhalb ein___ einzig___ Woche {muss} die Arbeit fertig sein.",
        "noun": "Woche (f)",
        "verbDesc": {
            "es": "Müssen: Tener que/Deber.",
            "en": "Müssen: Must/Have to.",
            "tr": "Müssen: Must/Have to.",
            "de": "Müssen: Modalverb."
        },
        "explanation": {
            "es": "Genitivo femenino. Artículo 'einer', adjetivo mixto '-en'.",
            "en": "Feminine Genitive. Article 'einer', mixed adjective '-en'.",
            "tr": "Dişil Genitiv. Tanımlayıcı 'einer', karışık sıfat '-en'.",
            "de": "Feminin Genitiv. Artikel 'einer', Adjektiv '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "er",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 86,
        "level": "C1",
        "case": "Dat",
        "category": "Verbo con Dativo (N-Dekl)",
        "text": "Der Arzt {hilft} d___ krank___ Patienten.",
        "noun": "Patient (m)",
        "verbDesc": {
            "es": "Helfen: Ayudar. (Dativo).",
            "en": "Helfen: To help. (Dative).",
            "tr": "Helfen: To help. (Dative).",
            "de": "Helfen: Dativ."
        },
        "explanation": {
            "es": "Dativo masculino. Patient es N-Deklination. Adjetivo débil '-en'.",
            "en": "Masculine Dative. Patient is N-Declension. Weak adjective '-en'.",
            "tr": "Eril Dativ. Patient N-Deklination'dır. Zayıf sıfat '-en'.",
            "de": "Maskulin Dativ. Patient ist N-Deklination. Adjektiv '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "em",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 87,
        "level": "B2",
        "case": "Akk",
        "category": "Adjetivo + Preposición",
        "text": "Ich {bin} dankbar für dein___ groß___ Hilfe.",
        "noun": "Hilfe (f)",
        "verbDesc": {
            "es": "Sein: Ser/Estar. (Nominativ).",
            "en": "Sein: To be. (Nominative).",
            "tr": "Sein: Ser/Estar. (Nominativ).",
            "de": "Sein: Nominativ-Verb."
        },
        "explanation": {
            "es": "Akkusativ femenino. Artículo 'deine', adjetivo mixto '-e'.",
            "en": "Feminine Accusative. Article 'deine', mixed adjective '-e'.",
            "tr": "Dişil Akkusativ. Tanımlayıcı 'deine', karışık sıfat '-e'.",
            "de": "Feminin Akkusativ. Artikel 'deine', Adjektiv '-e'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "e",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "e",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 88,
        "level": "C1",
        "case": "Akk",
        "category": "Verbo con Preposición Fija",
        "text": "Ich {muss} mich an d___ neu___ Klima gewöhnen.",
        "noun": "Klima (n)",
        "verbDesc": {
            "es": "Sich gewöhnen an: Acostumbrarse a. (Akkusativ).",
            "en": "Sich gewöhnen an: To get used to. (Accusative).",
            "tr": "Sich gewöhnen an: To get used to. (Accusative).",
            "de": "Sich gewöhnen: Akk."
        },
        "explanation": {
            "es": "Akkusativ neutro. Artículo 'das', adjetivo débil '-en'.",
            "en": "Neuter Accusative. Article 'das', weak adjective '-en'.",
            "tr": "Nötr Akkusativ. Tanımlayıcı 'das', zayıf sıfat '-en'.",
            "de": "Neutrum Akkusativ. Artikel 'das', Adjektiv '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "as",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "e",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 89,
        "level": "B2",
        "case": "Dat",
        "category": "Adjetivo + Preposición",
        "text": "Er {hat} Angst vor d___ fremd___ Hund.",
        "noun": "Hund (m)",
        "verbDesc": {
            "es": "Haben: Tener. (Akkusativ).",
            "en": "Haben: To have. (Accusative).",
            "tr": "Haben: Tener. (Akkusativ).",
            "de": "Haben: Akkusativ-Verb."
        },
        "explanation": {
            "es": "Dativo masculino. Artículo 'dem', adjetivo débil '-en'.",
            "en": "Masculine Dative. Article 'dem', weak adjective '-en'.",
            "tr": "Eril Dativ. Tanımlayıcı 'dem', zayıf sıfat '-en'.",
            "de": "Maskulin Dativ. Artikel 'dem', Adjektiv '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "em",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 90,
        "level": "C1",
        "case": "Akk",
        "category": "Adjetivo + Preposición",
        "text": "Sie {ist} stolz auf ___ begabt___ Sohn.",
        "noun": "Sohn (m)",
        "verbDesc": {
            "es": "Sein: Ser/Estar. (Nominativ).",
            "en": "Sein: To be. (Nominative).",
            "tr": "Sein: Ser/Estar. (Nominativ).",
            "de": "Sein: Nominativ-Verb."
        },
        "explanation": {
            "es": "Akkusativ masculino. Artículo 'ihren', adjetivo débil '-en'.",
            "en": "Masculine Accusative. Article 'ihren', weak adjective '-en'.",
            "tr": "Eril Akkusativ. Tanımlayıcı 'ihren', zayıf sıfat '-en'.",
            "de": "Maskulin Akkusativ. Artikel 'ihren', Adjektiv '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "ihren",
                "options": [
                    "ihr",
                    "ihren",
                    "ihrem",
                    "ihres"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 91,
        "level": "C1",
        "case": "Akk",
        "category": "Participio II como Adjetivo",
        "text": "Er {liest} ein___ geschrieben___ Buch.",
        "noun": "Buch (n)",
        "verbDesc": {
            "es": "Lesen: Leer. Participio II usado como adjetivo.",
            "en": "Lesen: To read. Participle II as adjective.",
            "tr": "Lesen: To read. Participle II as adjective.",
            "de": "Lesen: Partizip II."
        },
        "explanation": {
            "es": "Akkusativ neutro. Artículo 'ein', adjetivo mixto '-es'.",
            "en": "Neuter Accusative. Article 'ein', mixed adjective '-es'.",
            "tr": "Nötr Akkusativ. Tanımlayıcı 'ein', karışık sıfat '-es'.",
            "de": "Neutrum Akkusativ. Artikel 'ein', Adjektiv '-es'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "-",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "es",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 92,
        "level": "B2",
        "case": "Dat",
        "category": "Adjetivo + Preposición",
        "text": "Ich {bin} überzeugt von ein___ optimal___ Lösung.",
        "noun": "Lösung (f)",
        "verbDesc": {
            "es": "Sein: Ser/Estar. (Nominativ).",
            "en": "Sein: To be. (Nominative).",
            "tr": "Sein: Ser/Estar. (Nominativ).",
            "de": "Sein: Nominativ-Verb."
        },
        "explanation": {
            "es": "Dativo femenino. Artículo 'einer', adjetivo mixto '-en'.",
            "en": "Feminine Dative. Article 'einer', mixed adjective '-en'.",
            "tr": "Dişil Dativ. Tanımlayıcı 'einer', karışık sıfat '-en'.",
            "de": "Feminin Dativ. Artikel 'einer', Adjektiv '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "er",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 93,
        "level": "C1",
        "case": "Dat",
        "category": "Adjetivo + Preposición",
        "text": "Er {ist} abhängig von ___ teur___ Medikament.",
        "noun": "Medikament (n)",
        "verbDesc": {
            "es": "Sein: Ser/Estar. (Nominativ).",
            "en": "Sein: To be. (Nominative).",
            "tr": "Sein: Ser/Estar. (Nominativ).",
            "de": "Sein: Nominativ-Verb."
        },
        "explanation": {
            "es": "Dativo neutro. Artículo 'diesem', adjetivo débil '-en'.",
            "en": "Neuter Dative. Article 'diesem', weak adjective '-en'.",
            "tr": "Nötr Dativ. Tanımlayıcı 'diesem', zayıf sıfat '-en'.",
            "de": "Neutrum Dativ. Artikel 'diesem', Adjektiv '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "diesem",
                "options": [
                    "dieses",
                    "diesem",
                    "diesen",
                    "dieser"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 94,
        "level": "B2",
        "case": "Akk",
        "category": "Adjetivo + Preposición",
        "text": "Sie {ist} verliebt in ein___ nett___ Kollegen.",
        "noun": "Kollege (m)",
        "verbDesc": {
            "es": "Sein: Ser/Estar. (Nominativ).",
            "en": "Sein: To be. (Nominative).",
            "tr": "Sein: Ser/Estar. (Nominativ).",
            "de": "Sein: Nominativ-Verb."
        },
        "explanation": {
            "es": "Akkusativ masculino. Kollege es N-Deklination. Adjetivo mixto '-en'.",
            "en": "Masculine Accusative. Kollege is N-Declension. Mixed adjective '-en'.",
            "tr": "Eril Akkusativ. Kollege N-Deklination'dır. Karışık sıfat '-en'.",
            "de": "Maskulin Akkusativ. Kollege ist N-Deklination. Adjektiv '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "en",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 95,
        "level": "C1",
        "case": "Dat",
        "category": "Verbo con Preposición Fija",
        "text": "Die Gruppe {besteht} aus aktiv___ Mitgliedern.",
        "noun": "Mitglieder (pl)",
        "verbDesc": {
            "es": "Bestehen aus: Consistir en. (Dativo).",
            "en": "Bestehen aus: To consist of. (Dative).",
            "tr": "Bestehen aus: To consist of. (Dative).",
            "de": "Bestehen aus: Dativ."
        },
        "explanation": {
            "es": "Dativo plural. Artículo 'zehn' (sin declinar), adjetivo fuerte '-en'.",
            "en": "Plural Dative. Number 'zehn' (undeclined), strong adjective '-en'.",
            "tr": "Çoğul Dativ. 'Zehn' sayısı (çekimsiz), güçlü sıfat '-en'.",
            "de": "Plural Dativ. Zahlwort 'zehn', starke Endung '-en'."
        },
        "slots": [
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 96,
        "level": "B2",
        "case": "Dat",
        "category": "Verbo con Preposición Fija",
        "text": "Man {kann} das vergleichen mit ein___ ähnlich___ Situation.",
        "noun": "Situation (f)",
        "verbDesc": {
            "es": "Vergleichen mit: Comparar con. Rige Dativo.",
            "en": "Vergleichen mit: To compare with. Takes Dative.",
            "tr": "Vergleichen mit: -le karşılaştırmak. Dativ alır.",
            "de": "Vergleichen mit + Dativ."
        },
        "explanation": {
            "es": "Dativo femenino. Artículo 'einer', adjetivo mixto '-en'.",
            "en": "Feminine Dative. Article 'einer', mixed adjective '-en'.",
            "tr": "Dişil Dativ. Tanımlayıcı 'einer', karışık sıfat '-en'.",
            "de": "Feminin Dativ. Artikel 'einer', Adjektiv '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "er",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 97,
        "level": "C1",
        "case": "Akk",
        "category": "Verbo con Preposición Fija",
        "text": "Die Firma {reagiert} auf d___ neuest___ Trend.",
        "noun": "Trend (m)",
        "verbDesc": {
            "es": "Reagieren: Reaccionar. (Auf + Akkusativ).",
            "en": "Reagieren: To react. (Auf + Acc).",
            "tr": "Reagieren: To react. (Auf + Acc).",
            "de": "Reagieren: Auf + Akk."
        },
        "explanation": {
            "es": "Akkusativ masculino. Artículo 'den', adjetivo débil '-en'.",
            "en": "Masculine Accusative. Article 'den', weak adjective '-en'.",
            "tr": "Eril Akkusativ. Tanımlayıcı 'den', zayıf sıfat '-en'.",
            "de": "Maskulin Akkusativ. Artikel 'den', Adjektiv '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "en",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 98,
        "level": "B2",
        "case": "Akk",
        "category": "Verbo con Preposición Fija",
        "text": "Wir {hoffen} auf ein___ schnell___ Antwort.",
        "noun": "Antwort (f)",
        "verbDesc": {
            "es": "Hoffen auf: Tener esperanza en. Rige Akkusativ.",
            "en": "Hoffen auf: To hope for. Takes Accusative.",
            "tr": "Hoffen auf: -i ummak. Akkusativ alır.",
            "de": "Hoffen auf + Akkusativ."
        },
        "explanation": {
            "es": "Akkusativ femenino. Artículo 'eine', adjetivo mixto '-e'.",
            "en": "Feminine Accusative. Article 'eine', mixed adjective '-e'.",
            "tr": "Dişil Akkusativ. Tanımlayıcı 'eine', karışık sıfat '-e'.",
            "de": "Feminin Akkusativ. Artikel 'eine', Adjektiv '-e'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "e",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "e",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 99,
        "level": "C1",
        "case": "Gen",
        "category": "Preposición Genitiva",
        "text": "Aufgrund ein___ bedauerlich___ Vorfalls {wurde} er entlassen.",
        "noun": "Vorfall (m)",
        "verbDesc": {
            "es": "Werden: Convertirse/Llegar a ser (o Auxiliar Pasiva).",
            "en": "Werden: To become (or Passive Aux).",
            "tr": "Werden: Convertirse/Llegar a ser (o Auxiliar Pasiva).",
            "de": "Werden: Nominativ / Passiv."
        },
        "explanation": {
            "es": "Genitivo masculino. Artículo 'eines', adjetivo mixto '-en'.",
            "en": "Masculine Genitive. Article 'eines', mixed adjective '-en'.",
            "tr": "Eril Genitiv. Tanımlayıcı 'eines', karışık sıfat '-en'.",
            "de": "Maskulin Genitiv. Artikel 'eines', Adjektiv '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "es",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 100,
        "level": "C1",
        "case": "Gen",
        "category": "Preposición Genitiva",
        "text": "Inmitten d___ groß___ Menschenmenge {fühlte} er sich allein.",
        "noun": "Menschenmenge (f)",
        "verbDesc": {
            "es": "Sich fühlen: Sentirse. (Reflexivo).",
            "en": "Sich fühlen: To feel.",
            "tr": "Sich fühlen: To feel.",
            "de": "Sich fühlen."
        },
        "explanation": {
            "es": "Genitivo femenino. Artículo 'der', adjetivo débil '-en'.",
            "en": "Feminine Genitive. Article 'der', weak adjective '-en'.",
            "tr": "Dişil Genitiv. Tanımlayıcı 'der', zayıf sıfat '-en'.",
            "de": "Feminin Genitiv. Artikel 'der', Adjektiv '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "er",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 101,
        "level": "B2",
        "case": "Akk",
        "category": "Reflexivpronomen",
        "text": "Ich {konzentriere} ___ auf die Prüfung.",
        "noun": "Prüfung (f)",
        "verbDesc": {
            "es": "Sich konzentrieren: Concentrarse. (Auf + Akkusativ).",
            "en": "Sich konzentrieren: To concentrate. (Auf + Acc).",
            "tr": "Sich konzentrieren: To concentrate. (Auf + Acc).",
            "de": "Sich konzentrieren: Auf + Akk."
        },
        "explanation": {
            "es": "Verbo reflexivo simple. No hay otro objeto, por lo tanto el pronombre es Akkusativ (mich).",
            "en": "Simple reflexive verb. No other object, so the pronoun is Accusative (mich).",
            "tr": "Basit dönüşlü fiil. Başka nesne yok, bu yüzden zamir Akkusativ'dir (mich).",
            "de": "Einfaches reflexives Verb ohne weiteres Objekt (mich)."
        },
        "slots": [
            {
                "type": "art",
                "answer": "mich",
                "options": [
                    "mich",
                    "mir",
                    "sich",
                    "dich",
                    "ich",
                    "meiner"
                ]
            }
        ]
    },
    {
        "id": 102,
        "level": "B2",
        "case": "Dat",
        "category": "Reflexivpronomen",
        "text": "Ich {putze} ___ die Zähne.",
        "noun": "Zähne (pl)",
        "verbDesc": {
            "es": "Sich putzen: Limpiarse/Lavarse. (Dativo reflexivo).",
            "en": "Sich putzen: To clean oneself. (Dative refl).",
            "tr": "Sich putzen: To clean oneself. (Dative refl).",
            "de": "Sich putzen: Dat."
        },
        "explanation": {
            "es": "Como 'die Zähne' es el objeto directo (Akk), el pronombre reflexivo debe ir en Dativ (mir).",
            "en": "Since 'die Zähne' is the direct object (Akk), the reflexive pronoun must be Dative (mir).",
            "tr": "'Die Zähne' belirtili nesne (Akk) olduğu için dönüşlü zamir Dativ (mir) olmalıdır.",
            "de": "Da 'die Zähne' das Akkusativobjekt ist, steht das Reflexivpronomen im Dativ (mir)."
        },
        "slots": [
            {
                "type": "art",
                "answer": "mir",
                "options": [
                    "mich",
                    "mir",
                    "sich",
                    "uns",
                    "ich",
                    "meiner"
                ]
            }
        ]
    },
    {
        "id": 103,
        "level": "C1",
        "case": "Dat",
        "category": "Reflexivpronomen",
        "text": "Ich {stelle} ___ d___ neuneu___ Projekt vor.",
        "noun": "Projekt (n)",
        "verbDesc": {
            "es": "Sich vorstellen: Imaginarse. (Dativo reflexivo).",
            "en": "Sich vorstellen: To imagine. (Dative refl).",
            "tr": "Sich vorstellen: To imagine. (Dative refl).",
            "de": "Sich vorstellen: Dat."
        },
        "explanation": {
            "es": "Imaginarse algo pide pronombre en Dativ (mir). 'Projekt' es Akkusativ neutro.",
            "en": "Imagining something requires Dative pronoun (mir). 'Projekt' is neuter Accusative.",
            "tr": "Hayal etmek Dativ zamir (mir) ister. 'Projekt' nötr Akkusativ'dir.",
            "de": "Sich etwas vorstellen verlangt Dativ (mir). 'Projekt' ist Neutrum Akkusativ."
        },
        "slots": [
            {
                "type": "art",
                "answer": "mir",
                "options": [
                    "mich",
                    "mir",
                    "sich",
                    "dir",
                    "ich",
                    "meiner"
                ]
            },
            {
                "type": "art",
                "answer": "as",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "e",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 104,
        "level": "B2",
        "case": "Akk",
        "category": "Reflexivpronomen",
        "text": "{Interessierst} du ___ für d___ altalt___ Kunst?",
        "noun": "Kunst (f)",
        "verbDesc": {
            "es": "Sich interessieren: Interesarse. (Für + Akkusativ).",
            "en": "Sich interessieren: To be interested. (Für + Acc).",
            "tr": "Sich interessieren: To be interested. (Für + Acc).",
            "de": "Interessieren: Für + Akk."
        },
        "explanation": {
            "es": "Sujeto 'du' -> pronombre 'dich'. 'Für' exige Akkusativ femenino.",
            "en": "Subject 'du' -> pronoun 'dich'. 'Für' requires feminine Accusative.",
            "tr": "Özne 'du' -> zamir 'dich'. 'Für' dişil Akkusativ gerektirir.",
            "de": "Subjekt 'du' -> 'dich'. 'Für' verlangt Akkusativ feminin."
        },
        "slots": [
            {
                "type": "art",
                "answer": "dich",
                "options": [
                    "dich",
                    "dir",
                    "sich",
                    "euch",
                    "du",
                    "deiner"
                ]
            },
            {
                "type": "art",
                "answer": "ie",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "e",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 105,
        "level": "C1",
        "case": "Dat",
        "category": "Reflexivpronomen",
        "text": "Wir {leisten} ___ d___ teurteur___ Urlaub.",
        "noun": "Urlaub (m)",
        "verbDesc": {
            "es": "Sich leisten: Permitirse. (Dativo reflexivo).",
            "en": "Sich leisten: To afford. (Dative refl).",
            "tr": "Sich leisten: To afford. (Dative refl).",
            "de": "Sich leisten: Dat."
        },
        "explanation": {
            "es": "'Sich leisten' siempre usa pronombre Dativ. El objeto (Urlaub) es Akkusativ.",
            "en": "'Sich leisten' always uses Dative pronoun. The object (Urlaub) is Accusative.",
            "tr": "'Sich leisten' daima Dativ zamir kullanır. Nesne (Urlaub) Akkusativ'dir.",
            "de": "Reflexivpronomen im Dativ (uns). Urlaub ist Akkusativ Maskulin."
        },
        "slots": [
            {
                "type": "art",
                "answer": "uns",
                "options": [
                    "uns",
                    "euch",
                    "sich",
                    "wir",
                    "unser"
                ]
            },
            {
                "type": "art",
                "answer": "en",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 106,
        "level": "B2",
        "case": "Akk",
        "category": "Reflexivpronomen",
        "text": "Ich {freue} ___ auf d___ nächstnächst___ Wochenende.",
        "noun": "Wochenende (n)",
        "verbDesc": {
            "es": "Freuen: Alegrarse. (Auf/Über + Akkusativ).",
            "en": "Freuen: To rejoice. (Auf/Über + Acc).",
            "tr": "Freuen: Alegrarse. (Auf/Über + Akkusativ).",
            "de": "Freuen: Auf/Über + Akk."
        },
        "explanation": {
            "es": "Reflexivo Akkusativ (mich). 'Auf' + Akkusativ neutro.",
            "en": "Accusative reflexive (mich). 'Auf' + neuter Accusative.",
            "tr": "Akkusativ dönüşlü (mich). 'Auf' + nötr Akkusativ.",
            "de": "Mich (Akk). Auf das (Akk) Wochenende."
        },
        "slots": [
            {
                "type": "art",
                "answer": "mich",
                "options": [
                    "mich",
                    "mir",
                    "sich",
                    "dich",
                    "ich",
                    "meiner"
                ]
            },
            {
                "type": "art",
                "answer": "as",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "e",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 107,
        "level": "C1",
        "case": "Dat",
        "category": "Reflexivpronomen",
        "text": "Du {solltest} ___ d___ neuneu___ Wörter merken.",
        "noun": "Wörter (pl)",
        "verbDesc": {
            "es": "Sich merken: Memorizar. (Dativo reflexivo).",
            "en": "Sich merken: To memorize. (Dative refl).",
            "tr": "Sich merken: To memorize. (Dative refl).",
            "de": "Sich merken: Dat."
        },
        "explanation": {
            "es": "Pronombre Dativ (dir). Las palabras son el objeto directo (Akkusativ plural).",
            "en": "Dative pronoun (dir). The words are the direct object (plural Accusative).",
            "tr": "Dativ zamir (dir). Kelimeler belirtili nesnedir (çoğul Akkusativ).",
            "de": "Dir (Dat). Die neuen (Akk Plural) Wörter."
        },
        "slots": [
            {
                "type": "art",
                "answer": "dir",
                "options": [
                    "dich",
                    "dir",
                    "sich",
                    "mir",
                    "du",
                    "deiner"
                ]
            },
            {
                "type": "art",
                "answer": "ie",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 108,
        "level": "B2",
        "case": "Akk",
        "category": "Reflexivpronomen",
        "text": "Wir {verlassen} ___ auf d___ gutgut___ Service.",
        "noun": "Service (m)",
        "verbDesc": {
            "es": "Sich verlassen auf: Confiar en. (Akkusativ).",
            "en": "Sich verlassen auf: To rely on. (Accusative).",
            "tr": "Sich verlassen auf: To rely on. (Accusative).",
            "de": "Sich verlassen: Auf + Akk."
        },
        "explanation": {
            "es": "Pronombre Akkusativ (uns). 'Auf' + Akkusativ masculino.",
            "en": "Accusative pronoun (uns). 'Auf' + masculine Accusative.",
            "tr": "Akkusativ zamir (uns). 'Auf' + eril Akkusativ.",
            "de": "Uns (Akk). Auf den (Akk) Service."
        },
        "slots": [
            {
                "type": "art",
                "answer": "uns",
                "options": [
                    "wir",
                    "uns",
                    "sich",
                    "euch",
                    "unser"
                ]
            },
            {
                "type": "art",
                "answer": "en",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 109,
        "level": "C1",
        "case": "Dat",
        "category": "Reflexivpronomen",
        "text": "Er {sieht} ___ d___ spannendspannend___ Film an.",
        "noun": "Film (m)",
        "verbDesc": {
            "es": "Sehen: Ver. (Akkusativ).",
            "en": "Sehen: To see. (Accusative).",
            "tr": "Sehen: Ver. (Akkusativ).",
            "de": "Sehen: Akkusativ-Verb."
        },
        "explanation": {
            "es": "Pronombre Dativ (sich). El film es objeto directo masculino (Akkusativ).",
            "en": "Dative pronoun (sich). The film is masculine direct object (Accusative).",
            "tr": "Dativ zamir (sich). Film eril belirtili nesnedir (Akkusativ).",
            "de": "Sich (Dat). Den spannenden (Akk) Film."
        },
        "slots": [
            {
                "type": "art",
                "answer": "sich",
                "options": [
                    "sich",
                    "ihn",
                    "ihm",
                    "dir"
                ]
            },
            {
                "type": "art",
                "answer": "en",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 110,
        "level": "B2",
        "case": "Akk",
        "category": "Reflexivpronomen",
        "text": "Ich {entscheide} ___ für d___ blaublau___ Hemd.",
        "noun": "Hemd (n)",
        "verbDesc": {
            "es": "Sich entscheiden: Decidirse. (Für + Akkusativ).",
            "en": "Sich entscheiden: To decide. (Für + Acc).",
            "tr": "Sich entscheiden: To decide. (Für + Acc).",
            "de": "Sich entscheiden: Für + Akk."
        },
        "explanation": {
            "es": "Reflexivo Akkusativ (mich). 'Für' + Akkusativ neutro.",
            "en": "Accusative reflexive (mich). 'Für' + neuter Accusative.",
            "tr": "Akkusativ dönüşlü (mich). 'Für' + nötr Akkusativ.",
            "de": "Mich (Akk). Für das (Akk) Hemd."
        },
        "slots": [
            {
                "type": "art",
                "answer": "mich",
                "options": [
                    "mich",
                    "mir",
                    "sich",
                    "dich",
                    "ich",
                    "meiner"
                ]
            },
            {
                "type": "art",
                "answer": "as",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "e",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 111,
        "level": "C1",
        "case": "Dat",
        "category": "Reflexivpronomen",
        "text": "Ich {wasche} ___ d___ dreckigdreckig___ Hände.",
        "noun": "Hände (pl)",
        "verbDesc": {
            "es": "Sich waschen: Lavarse. (Dativo reflexivo).",
            "en": "Sich waschen: To wash oneself. (Dative refl).",
            "tr": "Sich waschen: To wash oneself. (Dative refl).",
            "de": "Sich waschen: Dat."
        },
        "explanation": {
            "es": "Pronombre Dativ (mir) porque 'las manos' son el Akkusativ.",
            "en": "Dative pronoun (mir) because 'the hands' are the Accusative.",
            "tr": "Dativ zamir (mir) çünkü 'eller' Akkusativ'dir.",
            "de": "Mir (Dat). Die dreckigen (Akk Plural) Hände."
        },
        "slots": [
            {
                "type": "art",
                "answer": "mir",
                "options": [
                    "mich",
                    "mir",
                    "sich",
                    "uns",
                    "ich",
                    "meiner"
                ]
            },
            {
                "type": "art",
                "answer": "ie",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 112,
        "level": "B2",
        "case": "Akk",
        "category": "Reflexivpronomen",
        "text": "Du {ärgerst} ___ über d___ schlechtschlecht___ Service.",
        "noun": "Service (m)",
        "verbDesc": {
            "es": "Sich ärgern: Enfadarse. (Über + Akkusativ).",
            "en": "Sich ärgern: To get angry. (Über + Acc).",
            "tr": "Sich ärgern: To get angry. (Über + Acc).",
            "de": "Sich ärgern: Über + Akk."
        },
        "explanation": {
            "es": "Reflexivo Akkusativ (dich). 'Über' + Akkusativ masculino.",
            "en": "Accusative reflexive (dich). 'Über' + masculine Accusative.",
            "tr": "Akkusativ dönüşlü (dich). 'Über' + eril Akkusativ.",
            "de": "Dich (Akk). Über den (Akk) Service."
        },
        "slots": [
            {
                "type": "art",
                "answer": "dich",
                "options": [
                    "dich",
                    "dir",
                    "sich",
                    "euch",
                    "du",
                    "deiner"
                ]
            },
            {
                "type": "art",
                "answer": "en",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 113,
        "level": "C1",
        "case": "Dat",
        "category": "Reflexivpronomen",
        "text": "{Können} Sie ___ d___ (m) neuneu___ Kollegen vorstellen?",
        "noun": "Kollege (m)",
        "verbDesc": {
            "es": "Können: Poder/Saber.",
            "en": "Können: Can/To be able to.",
            "tr": "Können: Can/To be able to.",
            "de": "Können: Modalverb."
        },
        "explanation": {
            "es": "Pronombre Dativ (mir/uns). Kollege es N-Deklination en Akkusativ.",
            "en": "Dative pronoun (mir/uns). Kollege is Accusative N-Declension.",
            "tr": "Dativ zamir (mir/uns). Kollege Akkusativ N-Deklination'dır.",
            "de": "Mir (Dat). Den neuen (Akk) Kollegen."
        },
        "slots": [
            {
                "type": "art",
                "answer": "mir",
                "options": [
                    "mich",
                    "mir",
                    "sich",
                    "euch",
                    "ich",
                    "meiner"
                ]
            },
            {
                "type": "art",
                "answer": "en",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 114,
        "level": "B2",
        "case": "Akk",
        "category": "Reflexivpronomen",
        "text": "Sie {bereiten} ___ auf d___ wichtigwichtig___ Prüfung vor.",
        "noun": "Prüfung (f)",
        "verbDesc": {
            "es": "Sich vorbereiten: Prepararse. (Auf + Akkusativ).",
            "en": "Sich vorbereiten: To prepare. (Auf + Acc).",
            "tr": "Sich vorbereiten: To prepare. (Auf + Acc).",
            "de": "Sich vorbereiten: Auf + Akk."
        },
        "explanation": {
            "es": "Reflexivo Akkusativ (sich). 'Auf' + Akkusativ femenino.",
            "en": "Accusative reflexive (sich). 'Auf' + feminine Accusative.",
            "tr": "Akkusativ dönüşlü (sich). 'Auf' + dişil Akkusativ.",
            "de": "Sich (Akk). Auf die (Akk) Prüfung."
        },
        "slots": [
            {
                "type": "art",
                "answer": "sich",
                "options": [
                    "sie",
                    "sich",
                    "ihnen",
                    "uns"
                ]
            },
            {
                "type": "art",
                "answer": "ie",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "e",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 115,
        "level": "C1",
        "case": "Dat",
        "category": "Reflexivpronomen",
        "text": "Ich {kämme} ___ d___ langlang___ Haare.",
        "noun": "Haare (pl)",
        "verbDesc": {
            "es": "Sich kämmen: Peinarse. (Dativo reflexivo).",
            "en": "Sich kämmen: To comb. (Dative refl).",
            "tr": "Sich kämmen: To comb. (Dative refl).",
            "de": "Sich kämmen: Dat."
        },
        "explanation": {
            "es": "Pronombre Dativ (mir). 'Haare' es objeto directo plural.",
            "en": "Dative pronoun (mir). 'Haare' is plural direct object.",
            "tr": "Dativ zamir (mir). 'Haare' çoğul belirtili nesnedir.",
            "de": "Mir (Dat). Die langen (Akk Plural) Haare."
        },
        "slots": [
            {
                "type": "art",
                "answer": "mir",
                "options": [
                    "mich",
                    "mir",
                    "sich",
                    "uns",
                    "ich",
                    "meiner"
                ]
            },
            {
                "type": "art",
                "answer": "ie",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 116,
        "level": "B2",
        "case": "Akk",
        "category": "Reflexivpronomen",
        "text": "Er {beschwert} ___ über d___ lautlaut___ Nachbarn.",
        "noun": "Nachbarn (pl)",
        "verbDesc": {
            "es": "Sich beschweren: Quejarse. (Über + Akkusativ).",
            "en": "Sich beschweren: To complain. (Über + Acc).",
            "tr": "Sich beschweren: To complain. (Über + Acc).",
            "de": "Sich beschweren: Über + Akk."
        },
        "explanation": {
            "es": "Reflexivo Akkusativ (sich). 'Über' + Akkusativ plural.",
            "en": "Accusative reflexive (sich). 'Über' + plural Accusative.",
            "tr": "Akkusativ dönüşlü (sich). 'Über' + çoğul Akkusativ.",
            "de": "Sich (Akk). Über die (Akk) Nachbarn."
        },
        "slots": [
            {
                "type": "art",
                "answer": "sich",
                "options": [
                    "sich",
                    "ihn",
                    "ihm",
                    "euch"
                ]
            },
            {
                "type": "art",
                "answer": "ie",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 117,
        "level": "C1",
        "case": "Dat",
        "category": "Reflexivpronomen",
        "text": "Ich {wünsche} ___ ein___ schönerschöner___ Tag.",
        "noun": "Tag (m)",
        "verbDesc": {
            "es": "Sich wünschen: Desear. (Dativo reflexivo).",
            "en": "Sich wünschen: To wish. (Dative refl).",
            "tr": "Sich wünschen: To wish. (Dative refl).",
            "de": "Sich wünschen: Dat."
        },
        "explanation": {
            "es": "Pronombre Dativ (mir). 'Tag' es Akkusativ masculino con adjetivo mixto.",
            "en": "Dative pronoun (mir). 'Tag' is masculine Accusative with mixed adjective.",
            "tr": "Dativ zamir (mir). 'Tag' karma sıfatlı eril Akkusativ'dir.",
            "de": "Mir (Dat). Einen schöneren (Akk) Tag."
        },
        "slots": [
            {
                "type": "art",
                "answer": "mir",
                "options": [
                    "mich",
                    "mir",
                    "sich",
                    "uns",
                    "ich",
                    "meiner"
                ]
            },
            {
                "type": "art",
                "answer": "en",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 118,
        "level": "B2",
        "case": "Akk",
        "category": "Reflexivpronomen",
        "text": "Wir {gewöhnen} ___ an d___ neuneu___ System.",
        "noun": "System (n)",
        "verbDesc": {
            "es": "Sich gewöhnen an: Acostumbrarse a. (Akkusativ).",
            "en": "Sich gewöhnen an: To get used to. (Accusative).",
            "tr": "Sich gewöhnen an: To get used to. (Accusative).",
            "de": "Sich gewöhnen: Akk."
        },
        "explanation": {
            "es": "Reflexivo Akkusativ (uns). 'An' + Akkusativ neutro.",
            "en": "Accusative reflexive (uns). 'An' + neuter Accusative.",
            "tr": "Akkusativ dönüşlü (uns). 'An' + nötr Akkusativ.",
            "de": "Uns (Akk). An das (Akk) System."
        },
        "slots": [
            {
                "type": "art",
                "answer": "uns",
                "options": [
                    "wir",
                    "uns",
                    "sich",
                    "euch",
                    "unser"
                ]
            },
            {
                "type": "art",
                "answer": "as",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "e",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 119,
        "level": "C1",
        "case": "Dat",
        "category": "Reflexivpronomen",
        "text": "Du {solltest} ___ d___ (f) altalt___ Kleidung entledigen.",
        "noun": "Kleidung (f)",
        "verbDesc": {
            "es": "Sich entledigen: Deshacerse de. (Genitivo).",
            "en": "Sich entledigen: To get rid of. (Genitive).",
            "tr": "Sich entledigen: To get rid of. (Genitive).",
            "de": "Sich entledigen: Genitiv."
        },
        "explanation": {
            "es": "Ojo: Entledigen es reflexivo Akkusativ (dich) + complemento Genitivo femenino (der).",
            "en": "Note: Entledigen is Accusative reflexive (dich) + feminine Genitive (der).",
            "tr": "Dikkat: Entledigen Akkusativ dönüşlü (dich) + dişil Genitiv (der) alır.",
            "de": "Dich (Akk). Der alten (Gen) Kleidung."
        },
        "slots": [
            {
                "type": "art",
                "answer": "dich",
                "options": [
                    "dich",
                    "dir",
                    "sich",
                    "mir",
                    "du",
                    "deiner"
                ]
            },
            {
                "type": "art",
                "answer": "er",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 120,
        "level": "B2",
        "case": "Akk",
        "category": "Reflexivpronomen",
        "text": "Ich {entschuldige} ___ für d___ spätspät___ Anruf.",
        "noun": "Anruf (m)",
        "verbDesc": {
            "es": "Sich entschuldigen: Disculparse. (Für + Akkusativ).",
            "en": "Sich entschuldigen: To apologize. (Für + Acc).",
            "tr": "Sich entschuldigen: To apologize. (Für + Acc).",
            "de": "Sich entschuldigen: Für + Akk."
        },
        "explanation": {
            "es": "Reflexivo Akkusativ (mich). 'Für' + Akkusativ masculino.",
            "en": "Accusative reflexive (mich). 'Für' + masculine Accusative.",
            "tr": "Akkusativ dönüşlü (mich). 'Für' + eril Akkusativ.",
            "de": "Mich (Akk). Für den (Akk) Anruf."
        },
        "slots": [
            {
                "type": "art",
                "answer": "mich",
                "options": [
                    "mich",
                    "mir",
                    "sich",
                    "dich",
                    "ich",
                    "meiner"
                ]
            },
            {
                "type": "art",
                "answer": "en",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 121,
        "level": "C1",
        "case": "Dat",
        "category": "Reflexivpronomen",
        "text": "Ich {kaufe} ___ d___ (n) teurteur___ Auto.",
        "noun": "Auto (n)",
        "verbDesc": {
            "es": "Sich kaufen: Comprarse. (Dativo reflexivo).",
            "en": "Sich kaufen: To buy oneself. (Dative refl).",
            "tr": "Sich kaufen: To buy oneself. (Dative refl).",
            "de": "Sich kaufen: Dat."
        },
        "explanation": {
            "es": "Pronombre Dativ (mir). El auto es el objeto directo neutro (Akkusativ).",
            "en": "Dative pronoun (mir). The car is the neuter direct object (Accusative).",
            "tr": "Dativ zamir (mir). Araba nötr belirtili nesnedir (Akkusativ).",
            "de": "Mir (Dat). Das teure (Akk) Auto."
        },
        "slots": [
            {
                "type": "art",
                "answer": "mir",
                "options": [
                    "mich",
                    "mir",
                    "sich",
                    "uns",
                    "ich",
                    "meiner"
                ]
            },
            {
                "type": "art",
                "answer": "as",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "e",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 122,
        "level": "B2",
        "case": "Akk",
        "category": "Reflexivpronomen",
        "text": "Wir {treffen} ___ mit d___ neuneu___ Nachbarn.",
        "noun": "Nachbarn (pl)",
        "verbDesc": {
            "es": "Sich treffen: Reunirse. (Mit + Dativo).",
            "en": "Sich treffen: To meet. (Mit + Dat).",
            "tr": "Sich treffen: To meet. (Mit + Dat).",
            "de": "Sich treffen: Mit + Dat."
        },
        "explanation": {
            "es": "Pronombre Akkusativ (uns). 'Mit' siempre pide Dativo plural.",
            "en": "Accusative pronoun (uns). 'Mit' always takes plural Dative.",
            "tr": "Akkusativ zamir (uns). 'Mit' daima çoğul Dativ ister.",
            "de": "Uns (Akk). Mit den (Dat Plural) Nachbarn."
        },
        "slots": [
            {
                "type": "art",
                "answer": "uns",
                "options": [
                    "wir",
                    "uns",
                    "sich",
                    "euch",
                    "unser"
                ]
            },
            {
                "type": "art",
                "answer": "en",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 123,
        "level": "C1",
        "case": "Dat",
        "category": "Reflexivpronomen",
        "text": "Ich {höre} ___ d___ neuneu___ Podcast an.",
        "noun": "Podcast (m)",
        "verbDesc": {
            "es": "Sich anhören: Escuchar. (Dativo reflexivo).",
            "en": "Sich anhören: To listen to. (Dative refl).",
            "tr": "Sich anhören: To listen to. (Dative refl).",
            "de": "Sich anhören: Dat."
        },
        "explanation": {
            "es": "Pronombre Dativ (mir). El podcast es Akkusativ masculino.",
            "en": "Dative pronoun (mir). The podcast is masculine Accusative.",
            "tr": "Dativ zamir (mir). Podcast eril Akkusativ'dir.",
            "de": "Mir (Dat). Den neuen (Akk) Podcast."
        },
        "slots": [
            {
                "type": "art",
                "answer": "mir",
                "options": [
                    "mich",
                    "mir",
                    "sich",
                    "uns",
                    "ich",
                    "meiner"
                ]
            },
            {
                "type": "art",
                "answer": "en",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 124,
        "level": "B2",
        "case": "Akk",
        "category": "Reflexivpronomen",
        "text": "Er {interessiert} ___ für d___ (m) altalt___ Wagen.",
        "noun": "Wagen (m)",
        "verbDesc": {
            "es": "Sich interessieren für: Interesarse por. Rige Akkusativ.",
            "en": "Sich interessieren für: To be interested in. Takes Accusative.",
            "tr": "Sich interessieren für: -e ilgi duymak. Akkusativ alır.",
            "de": "Sich interessieren für + Akkusativ."
        },
        "explanation": {
            "es": "Pronombre Akkusativ (sich). 'Für' + Akkusativ masculino.",
            "en": "Accusative pronoun (sich). 'Für' + masculine Accusative.",
            "tr": "Akkusativ zamir (sich). 'Für' + eril Akkusativ.",
            "de": "Sich (Akk). Für den (Akk) Wagen."
        },
        "slots": [
            {
                "type": "art",
                "answer": "sich",
                "options": [
                    "sich",
                    "ihn",
                    "ihm",
                    "dir"
                ]
            },
            {
                "type": "art",
                "answer": "en",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 125,
        "level": "C1",
        "case": "Dat",
        "category": "Reflexivpronomen",
        "text": "Ich {sehe} ___ d___ (pl) neuneu___ Fotos an.",
        "noun": "Fotos (pl)",
        "verbDesc": {
            "es": "Sehen: Ver. (Akkusativ).",
            "en": "Sehen: To see. (Accusative).",
            "tr": "Sehen: Ver. (Akkusativ).",
            "de": "Sehen: Akkusativ-Verb."
        },
        "explanation": {
            "es": "Pronombre Dativ (mir). 'Fotos' es Akkusativ plural.",
            "en": "Dative pronoun (mir). 'Fotos' is plural Accusative.",
            "tr": "Dativ zamir (mir). 'Fotos' çoğul Akkusativ'dir.",
            "de": "Mir (Dat). Die neuen (Akk Plural) Fotos."
        },
        "slots": [
            {
                "type": "art",
                "answer": "mir",
                "options": [
                    "mich",
                    "mir",
                    "sich",
                    "uns",
                    "ich",
                    "meiner"
                ]
            },
            {
                "type": "art",
                "answer": "ie",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 126,
        "level": "B2",
        "case": "Dat",
        "category": "Superlativ + Präp",
        "text": "In d___ größt___ (f) Stadt der Welt {ist} es laut.",
        "noun": "Stadt (f)",
        "verbDesc": {
            "es": "Sein: Ser/Estar. (Nominativ).",
            "en": "Sein: To be. (Nominative).",
            "tr": "Sein: Ser/Estar. (Nominativ).",
            "de": "Sein: Nominativ-Verb."
        },
        "explanation": {
            "es": "Ubicación (Wo?) -> Dativo. Femenino 'der'. Superlativo 'groß' -> 'größt' + terminación débil '-en'.",
            "en": "Location (Where?) -> Dative. Feminine 'der'. Superlative 'groß' -> 'größt' + weak ending '-en'.",
            "tr": "Konum (Nerede?) -> Dativ. Dişil 'der'. En üstünlük 'groß' -> 'größt' + zayıf ek '-en'.",
            "de": "Lage (Wo?) -> Dativ. Feminin 'der'. Superlativ 'größt' + schwache Endung '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "er",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 127,
        "level": "B2",
        "case": "Akk",
        "category": "Komparativ + Verbe",
        "text": "Ich {suche} ein___ besser___ (n) Angebot.",
        "noun": "Angebot (n)",
        "verbDesc": {
            "es": "Suchen: Buscar. (Akkusativ).",
            "en": "Suchen: To search. (Accusative).",
            "tr": "Suchen: Buscar. (Akkusativ).",
            "de": "Suchen: Akkusativ-Verb."
        },
        "explanation": {
            "es": "Objeto directo neutro. Artículo 'ein'. Comparativo 'gut' -> 'besser' + terminación mixta '-es'.",
            "en": "Neuter direct object. Article 'ein'. Comparative 'gut' -> 'besser' + mixed ending '-es'.",
            "tr": "Nötr belirtili nesne. Tanımlayıcı 'ein'. Üstünlük 'gut' -> 'besser' + karma ek '-es'.",
            "de": "Neutrum Akkusativ Objekt. Artikel 'ein'. Komparativ 'besser' + gemischte Endung '-es'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "-",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "es",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 128,
        "level": "C1",
        "case": "Dat",
        "category": "Komparativ + Präp",
        "text": "Ich {arbeite} mit mein___ älter___ (m) Bruder zusammen.",
        "noun": "Bruder (m)",
        "verbDesc": {
            "es": "Zusammenarbeiten mit: Colaborar con. Rige Dativo.",
            "en": "Zusammenarbeiten mit: To work together with. Takes Dative.",
            "tr": "Zusammenarbeiten mit: -ile birlikte çalışmak. Dativ alır.",
            "de": "Zusammenarbeiten mit + Dativ."
        },
        "explanation": {
            "es": "Preposición 'mit' -> Dativo. Posesivo 'meinem'. Comparativo 'alt' -> 'älter' + terminación débil '-en'.",
            "en": "Preposition 'mit' -> Dative. Possessive 'meinem'. Comparative 'alt' -> 'älter' + weak ending '-en'.",
            "tr": "Edat 'mit' -> Dativ. İyelik 'meinem'. Üstünlük 'alt' -> 'älter' + zayıf ek '-en'.",
            "de": "Präposition 'mit' -> Dativ. Possessiv 'meinem'. Komparativ 'älter' + schwache Endung '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "em",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 129,
        "level": "C1",
        "case": "Gen",
        "category": "Komparativ + Präp (Gen)",
        "text": "Trotz d___ kälter___ (n) Wetters {sind} wir gewandert.",
        "noun": "Wetter (n)",
        "verbDesc": {
            "es": "Sein: Ser/Estar. (Nominativ).",
            "en": "Sein: To be. (Nominative).",
            "tr": "Sein: Ser/Estar. (Nominativ).",
            "de": "Sein: Nominativ-Verb."
        },
        "explanation": {
            "es": "Preposición 'trotz' -> Genitivo. Neutro 'des'. Comparativo 'kalt' -> 'kälter' + terminación débil '-en'.",
            "en": "Preposition 'trotz' -> Genitive. Neuter 'des'. Comparative 'kalt' -> 'kälter' + weak ending '-en'.",
            "tr": "Edat 'trotz' -> Genitiv. Nötr 'des'. Üstünlük 'kalt' -> 'kälter' + zayıf ek '-en'.",
            "de": "Präposition 'trotz' -> Genitiv. Neutrum 'des'. Komparativ 'kälter' + schwache Endung '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "es",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 130,
        "level": "B2",
        "case": "Akk",
        "category": "Komparativ + Verbe",
        "text": "Er {kauft} kein___ schneller___ (n) Auto.",
        "noun": "Auto (n)",
        "verbDesc": {
            "es": "Kaufen: Comprar. (Dativo + Akkusativ).",
            "en": "Kaufen: To buy. (Dative + Accusative).",
            "tr": "Kaufen: Comprar. (Dativo + Akkusativ).",
            "de": "Kaufen: Dat + Akk."
        },
        "explanation": {
            "es": "Objeto directo neutro negativo. Comparativo 'schnell' -> 'schneller' + terminación mixta '-es'.",
            "en": "Neuter negative direct object. Comparative 'schnell' -> 'schneller' + mixed ending '-es'.",
            "tr": "Nötr olumsuz belirtili nesne. Üstünlük 'schnell' -> 'schneller' + karma ek '-es'.",
            "de": "Neutrum Akkusativ Negation. Komparativ 'schneller' + gemischte Endung '-es'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "-",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "es",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 131,
        "level": "B2",
        "case": "Nom",
        "category": "Superlativ + Artikel",
        "text": "Das {ist} d___ kleinst___ (n) Problem.",
        "noun": "Problem (n)",
        "verbDesc": {
            "es": "Sein: Ser/Estar. (Nominativ).",
            "en": "Sein: To be. (Nominative).",
            "tr": "Sein: Ser/Estar. (Nominativ).",
            "de": "Sein: Nominativ-Verb."
        },
        "explanation": {
            "es": "Sujeto neutro. Superlativo 'klein' -> 'kleinst' + terminación débil '-e'.",
            "en": "Neuter subject. Superlative 'klein' -> 'kleinst' + weak ending '-e'.",
            "tr": "Nötr özne. En üstünlük 'klein' -> 'kleinst' + zayıf ek '-e'.",
            "de": "Neutrum Nominativ. Superlativ 'kleinst' + schwache Endung '-e'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "as",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "e",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 132,
        "level": "C1",
        "case": "Akk",
        "category": "Superlativ + Präp",
        "text": "Wir {spielen} gegen d___ stärkst___ (m) Gegner.",
        "noun": "Gegner (m)",
        "verbDesc": {
            "es": "Spielen gegen: Jugar contra. Rige siempre Akkusativ.",
            "en": "Spielen gegen: To play against. Always takes Accusative.",
            "tr": "Spielen gegen: -e karşı oynamak. Daima Akkusativ alır.",
            "de": "Spielen gegen + Akkusativ."
        },
        "explanation": {
            "es": "Preposición 'gegen' -> Akkusativ masculino. Superlativo 'stark' -> 'stärkst' + terminación débil '-en'.",
            "en": "Preposition 'gegen' -> masculine Accusative. Superlative 'stark' -> 'stärkst' + weak ending '-en'.",
            "tr": "Edat 'gegen' -> eril Akkusativ. En üstünlük 'stark' -> 'stärkst' + zayıf ek '-en'.",
            "de": "Präposition 'gegen' -> Maskulin Akkusativ. Superlativ 'stärkst' + schwache Endung '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "en",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 133,
        "level": "C1",
        "case": "Dat",
        "category": "Komparativ + Präp",
        "text": "Das Buch {ist} von ein___ bekannter___ (m) Autor.",
        "noun": "Autor (m)",
        "verbDesc": {
            "es": "Sein: Ser/Estar. (Nominativ).",
            "en": "Sein: To be. (Nominative).",
            "tr": "Sein: Ser/Estar. (Nominativ).",
            "de": "Sein: Nominativ-Verb."
        },
        "explanation": {
            "es": "Preposición 'von' -> Dativo masculino. Comparativo 'bekannt' -> 'bekannter' + terminación mixta '-en'.",
            "en": "Preposition 'von' -> masculine Dative. Comparative 'bekannt' -> 'bekannter' + mixed ending '-en'.",
            "tr": "Edat 'von' -> eril Dativ. Üstünlük 'bekannt' -> 'bekannter' + karma ek '-en'.",
            "de": "Präposition 'von' -> Maskulin Dativ. Komparativ 'bekannter' + gemischte Endung '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "em",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 134,
        "level": "C1",
        "case": "Gen",
        "category": "Superlativ + Präp (Gen)",
        "text": "Während d___ längst___ (f) Reise {habe} ich viel gelernt.",
        "noun": "Reise (f)",
        "verbDesc": {
            "es": "Haben: Tener. (Akkusativ).",
            "en": "Haben: To have. (Accusative).",
            "tr": "Haben: Tener. (Akkusativ).",
            "de": "Haben: Akkusativ-Verb."
        },
        "explanation": {
            "es": "Preposición 'während' -> Genitivo femenino. Superlativo 'lang' -> 'längst' + terminación débil '-en'.",
            "en": "Preposition 'während' -> feminine Genitive. Superlative 'lang' -> 'längst' + weak ending '-en'.",
            "tr": "Edat 'während' -> dişil Genitiv. En üstünlük 'lang' -> 'längst' + zayıf ek '-en'.",
            "de": "Präposition 'während' -> Feminin Genitiv. Superlativ 'längst' + schwache Endung '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "er",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 135,
        "level": "B2",
        "case": "Akk",
        "category": "Komparativ + Negation",
        "text": "Ich {habe} kein___ besser___ (m) Vorschlag.",
        "noun": "Vorschlag (m)",
        "verbDesc": {
            "es": "Haben: Tener. (Akkusativ).",
            "en": "Haben: To have. (Accusative).",
            "tr": "Haben: Tener. (Akkusativ).",
            "de": "Haben: Akkusativ-Verb."
        },
        "explanation": {
            "es": "Objeto directo masculino negativo. Comparativo 'gut' -> 'besser' + terminación mixta '-en'.",
            "en": "Masculine negative direct object. Comparative 'gut' -> 'besser' + mixed ending '-en'.",
            "tr": "Eril olumsuz belirtili nesne. Üstünlük 'gut' -> 'besser' + karma ek '-en'.",
            "de": "Maskulin Akkusativ Negation. Komparativ 'besser' + gemischte Endung '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "en",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 136,
        "level": "C1",
        "case": "Akk",
        "category": "Komparativ + Präp",
        "text": "Wir {hoffen} auf ein___ schneller___ (f) Lösung.",
        "noun": "Lösung (f)",
        "verbDesc": {
            "es": "Hoffen auf: Tener esperanza en. Rige Akkusativ.",
            "en": "Hoffen auf: To hope for. Takes Accusative.",
            "tr": "Hoffen auf: -i ummak. Akkusativ alır.",
            "de": "Hoffen auf + Akkusativ."
        },
        "explanation": {
            "es": "Preposición 'auf' -> Akkusativ femenino. Comparativo 'schnell' -> 'schneller' + terminación mixta '-e'.",
            "en": "Preposition 'auf' -> feminine Accusative. Comparative 'schnell' -> 'schneller' + mixed ending '-e'.",
            "tr": "Edat 'auf' -> dişil Akkusativ. Üstünlük 'schnell' -> 'schneller' + karma ek '-e'.",
            "de": "Präposition 'auf' -> Feminin Akkusativ. Komparativ 'schneller' + gemischte Endung '-e'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "e",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "e",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 137,
        "level": "B2",
        "case": "Dat",
        "category": "Superlativ + Präp",
        "text": "Er {spricht} mit d___ kleinst___ (pl) Kindern.",
        "noun": "Kinder (pl)",
        "verbDesc": {
            "es": "Sprechen: Hablar. (Mit + Dat / Über + Akk).",
            "en": "Sprechen: To speak. (Mit + Dat).",
            "tr": "Sprechen: Hablar. (Mit + Dat / Über + Akk).",
            "de": "Sprechen: Mit + Dat."
        },
        "explanation": {
            "es": "Preposición 'mit' -> Dativo plural. Superlativo 'klein' -> 'kleinst' + terminación débil '-en'.",
            "en": "Preposition 'mit' -> plural Dative. Superlative 'klein' -> 'kleinst' + weak ending '-en'.",
            "tr": "Edat 'mit' -> çoğul Dativ. En üstünlük 'klein' -> 'kleinst' + zayıf ek '-en'.",
            "de": "Präposition 'mit' -> Plural Dativ. Superlativ 'kleinst' + schwache Endung '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "en",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 138,
        "level": "C1",
        "case": "Akk",
        "category": "Komparativ + Stark",
        "text": "Besser___ Wein {habe} ich noch nie getrunken.",
        "noun": "Wein (m)",
        "verbDesc": {
            "es": "Haben: Tener. (Akkusativ).",
            "en": "Haben: To have. (Accusative).",
            "tr": "Haben: Tener. (Akkusativ).",
            "de": "Haben: Akkusativ-Verb."
        },
        "explanation": {
            "es": "Akkusativ masculino sin artículo (Starke Deklination). Comparativo 'gut' -> 'besser' + terminación fuerte '-en'.",
            "en": "Masculine Accusative without article (Strong declension). Comparative 'gut' -> 'besser' + strong ending '-en'.",
            "tr": "Tanımlayıcısız eril Akkusativ (Güçlü çekim). Üstünlük 'gut' -> 'besser' + güçlü ek '-en'.",
            "de": "Maskulin Akkusativ ohne Artikel (Starke Deklination). Komparativ 'besser' + starke Endung '-en'."
        },
        "slots": [
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 139,
        "level": "B2",
        "case": "Nom",
        "category": "Superlativ + Mixt",
        "text": "Das {war} ein___ schönst___ (m) Tag meines Lebens.",
        "noun": "Tag (m)",
        "verbDesc": {
            "es": "Sein: Ser/Estar. (Präteritum).",
            "en": "Sein: To be. (Past).",
            "tr": "Sein: Ser/Estar. (Präteritum).",
            "de": "Sein: Präteritum."
        },
        "explanation": {
            "es": "Sujeto masculino. Artículo 'ein'. Superlativo 'schön' -> 'schönst' + terminación mixta '-er'.",
            "en": "Masculine subject. Article 'ein'. Superlative 'schön' -> 'schönst' + mixed ending '-er'.",
            "tr": "Eril özne. Tanımlayıcı 'ein'. En üstünlük 'schön' -> 'schönst' + karma ek '-er'.",
            "de": "Maskulin Nominativ. Artikel 'ein'. Superlativ 'schönst' + gemischte Endung '-er'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "-",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "er",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 140,
        "level": "C1",
        "case": "Akk",
        "category": "Komparativ + N-Dekl",
        "text": "Ich {kenne} d___ erfahrener___ (m) Experten.",
        "noun": "Experte (m)",
        "verbDesc": {
            "es": "Kennen: Conocer. Akkusativ.",
            "en": "Kennen: To know. Accusative.",
            "tr": "Kennen: Tanımak. Akkusativ.",
            "de": "Kennen: Akkusativ-Verb."
        },
        "explanation": {
            "es": "Akkusativ masculino. Experte es N-Deklination. Comparativo 'erfahren' -> 'erfahrener' + terminación débil '-en'.",
            "en": "Masculine Accusative. Experte is N-declension. Comparative 'erfahren' -> 'erfahrener' + weak ending '-en'.",
            "tr": "Eril Akkusativ. Experte N-çekimidir. Üstünlük 'erfahren' -> 'erfahrener' + zayıf ek '-en'.",
            "de": "Maskulin Akkusativ. Experte ist N-Deklination. Komparativ 'erfahrener' + schwache Endung '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "en",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 141,
        "level": "B2",
        "case": "Dat",
        "category": "Komparativ + Präp",
        "text": "Seit d___ besser___ (f) Woche {geht} es ihm besser.",
        "noun": "Woche (f)",
        "verbDesc": {
            "es": "Gehen: Ir/Funcionar.",
            "en": "Gehen: To go/work.",
            "tr": "Gehen: To go/work.",
            "de": "Gehen."
        },
        "explanation": {
            "es": "Preposición 'seit' -> Dativo femenino. Comparativo 'gut' -> 'besser' (declinado: 'besserer') + terminación débil '-en'.",
            "en": "Preposition 'seit' -> feminine Dative. Comparative 'gut' -> 'besser' (declined: 'besserer') + weak ending '-en'.",
            "tr": "Edat 'seit' -> dişil Dativ. Üstünlük 'gut' -> 'besser' + zayıf ek '-en'.",
            "de": "Präposition 'seit' -> Feminin Dativ. Komparativ 'besserer' + schwache Endung '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "er",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 142,
        "level": "C1",
        "case": "Gen",
        "category": "Superlativ + Genitiv",
        "text": "Die Qualität d___ neuest___ (n) Produktes {ist} wichtig.",
        "noun": "Produkt (n)",
        "verbDesc": {
            "es": "Sein: Ser/Estar. (Nominativ).",
            "en": "Sein: To be. (Nominative).",
            "tr": "Sein: Ser/Estar. (Nominativ).",
            "de": "Sein: Nominativ-Verb."
        },
        "explanation": {
            "es": "Genitivo neutro. Superlativo 'neu' -> 'neuest' + terminación débil '-en'.",
            "en": "Neuter Genitive. Superlative 'neu' -> 'neuest' + weak ending '-en'.",
            "tr": "Nötr Genitiv. En üstünlük 'neu' -> 'neuest' + zayıf ek '-en'.",
            "de": "Neutrum Genitiv. Superlativ 'neuest' + schwache Endung '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "es",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 143,
        "level": "C1",
        "case": "Akk",
        "category": "Komparativ + Präp",
        "text": "Er {ist} stolz auf ein___ größer___ (m) Erfolg.",
        "noun": "Erfolg (m)",
        "verbDesc": {
            "es": "Sein: Ser/Estar. (Nominativ).",
            "en": "Sein: To be. (Nominative).",
            "tr": "Sein: Ser/Estar. (Nominativ).",
            "de": "Sein: Nominativ-Verb."
        },
        "explanation": {
            "es": "Preposición 'auf' -> Akkusativ masculino. Comparativo 'groß' -> 'größer' + terminación mixta '-en'.",
            "en": "Preposition 'auf' -> masculine Accusative. Comparative 'groß' -> 'größer' + mixed ending '-en'.",
            "tr": "Edat 'auf' -> eril Akkusativ. Üstünlük 'groß' -> 'größer' + karma ek '-en'.",
            "de": "Präposition 'auf' -> Maskulin Akkusativ. Komparativ 'größer' + gemischte Endung '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "en",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 144,
        "level": "B2",
        "case": "Dat",
        "category": "Superlativ + Präp",
        "text": "Wir {wohnen} in d___ ältest___ (n) Haus der Straße.",
        "noun": "Haus (n)",
        "verbDesc": {
            "es": "Wohnen in: Vivir en. Dativo (ubicación).",
            "en": "Wohnen in: To live in. Dative (location).",
            "tr": "Wohnen in: -de yaşamak. Dativ (konum).",
            "de": "Wohnen in + Dativ."
        },
        "explanation": {
            "es": "Preposición 'in' -> Dativo neutro. Superlativo 'alt' -> 'ältest' + terminación débil '-en'.",
            "en": "Preposition 'in' -> neuter Dative. Superlative 'alt' -> 'ältest' + weak ending '-en'.",
            "tr": "Edat 'in' -> nötr Dativ. En üstünlük 'alt' -> 'ältest' + zayıf ek '-en'.",
            "de": "Präposition 'in' -> Neutrum Dativ. Superlativ 'ältest' + schwache Endung '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "em",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 145,
        "level": "C1",
        "case": "Akk",
        "category": "Superlativ + Stark",
        "text": "Leckerst___ Kuchen {habe} ich noch nie gegessen.",
        "noun": "Kuchen (m)",
        "verbDesc": {
            "es": "Haben: Tener. (Akkusativ).",
            "en": "Haben: To have. (Accusative).",
            "tr": "Haben: Tener. (Akkusativ).",
            "de": "Haben: Akkusativ-Verb."
        },
        "explanation": {
            "es": "Akkusativ masculino sin artículo. Superlativo 'lecker' -> 'leckerst' + terminación fuerte '-en'.",
            "en": "Masculine Accusative without article. Superlative 'lecker' -> 'leckerst' + strong ending '-en'.",
            "tr": "Tanımlayıcısız eril Akkusativ. En üstünlük 'lecker' -> 'leckerst' + güçlü ek '-en'.",
            "de": "Maskulin Akkusativ ohne Artikel. Superlativ 'leckerst' + starke Endung '-en'."
        },
        "slots": [
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 146,
        "level": "B2",
        "case": "Nom",
        "category": "Komparativ + Mixt",
        "text": "Sie {ist} ein___ schneller___ (f) Sportlerin.",
        "noun": "Sportlerin (f)",
        "verbDesc": {
            "es": "Sein: Ser/Estar. (Nominativ).",
            "en": "Sein: To be. (Nominative).",
            "tr": "Sein: Ser/Estar. (Nominativ).",
            "de": "Sein: Nominativ-Verb."
        },
        "explanation": {
            "es": "Sujeto femenino. Artículo 'eine'. Comparativo 'schnell' -> 'schneller' + terminación mixta '-e'.",
            "en": "Feminine subject. Article 'eine'. Comparative 'schnell' -> 'schneller' + mixed ending '-e'.",
            "tr": "Dişil özne. Tanımlayıcı 'eine'. Üstünlük 'schnell' -> 'schneller' + karma ek '-e'.",
            "de": "Feminin Nominativ. Artikel 'eine'. Komparativ 'schneller' + gemischte Endung '-e'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "e",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "e",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 147,
        "level": "C1",
        "case": "Dat",
        "category": "Komparativ + Präp",
        "text": "Ich {bin} mit d___ besser___ (n) Ergebnis zufrieden.",
        "noun": "Ergebnis (n)",
        "verbDesc": {
            "es": "Sein: Ser/Estar. (Nominativ).",
            "en": "Sein: To be. (Nominative).",
            "tr": "Sein: Ser/Estar. (Nominativ).",
            "de": "Sein: Nominativ-Verb."
        },
        "explanation": {
            "es": "Preposición 'mit' -> Dativo neutro. Comparativo 'gut' -> 'besser' (declinado: 'besseren') + terminación débil '-en'.",
            "en": "Preposition 'mit' -> neuter Dative. Comparative 'gut' -> 'besser' (declined: 'besseren') + weak ending '-en'.",
            "tr": "Edat 'mit' -> nötr Dativ. Üstünlük 'gut' -> 'besser' + zayıf ek '-en'.",
            "de": "Präposition 'mit' -> Neutrum Dativ. Komparativ 'besseren' + schwache Endung '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "em",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 148,
        "level": "B2",
        "case": "Akk",
        "category": "Superlativ + Artikel",
        "text": "Er {liest} d___ spannendst___ (n) Buch des Jahres.",
        "noun": "Buch (n)",
        "verbDesc": {
            "es": "Lesen: Leer. (Akkusativ).",
            "en": "Lesen: To read. (Accusative).",
            "tr": "Lesen: To read. (Accusative).",
            "de": "Lesen: Akkusativ."
        },
        "explanation": {
            "es": "Objeto directo neutro. Superlativo 'spannend' -> 'spannendst' + terminación débil '-e'.",
            "en": "Neuter direct object. Superlative 'spannend' -> 'spannendst' + weak ending '-e'.",
            "tr": "Nötr belirtili nesne. En üstünlük 'spannend' -> 'spannendst' + zayıf ek '-e'.",
            "de": "Neutrum Akkusativ. Superlativ 'spannendst' + schwache Endung '-e'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "as",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "e",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 149,
        "level": "C1",
        "case": "Gen",
        "category": "Komparativ + Genitiv",
        "text": "Die Hilfe d___ besser___ (m) Freundes {war} rettend.",
        "noun": "Freund (m)",
        "verbDesc": {
            "es": "Sein: Ser/Estar. (Präteritum).",
            "en": "Sein: To be. (Past).",
            "tr": "Sein: Ser/Estar. (Präteritum).",
            "de": "Sein: Präteritum."
        },
        "explanation": {
            "es": "Genitivo masculino. Comparativo 'gut' -> 'besser' + terminación débil '-en'.",
            "en": "Masculine Genitive. Comparative 'gut' -> 'besser' + weak ending '-en'.",
            "tr": "Eril Genitiv. Üstünlük 'gut' -> 'besser' + zayıf ek '-en'.",
            "de": "Maskulin Genitiv. Komparativ 'besser' + schwache Endung '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "es",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 150,
        "level": "C1",
        "case": "Dat",
        "category": "Superlativ + Stark",
        "text": "Mit Größt___ (f) Mühe {hat} er es geschafft.",
        "noun": "Mühe (f)",
        "verbDesc": {
            "es": "Haben: Tener. (Akkusativ).",
            "en": "Haben: To have. (Accusative).",
            "tr": "Haben: Tener. (Akkusativ).",
            "de": "Haben: Akkusativ-Verb."
        },
        "explanation": {
            "es": "Dativo femenino sin artículo. Superlativo 'groß' -> 'größt' + terminación fuerte '-er'.",
            "en": "Feminine Dative without article. Superlative 'groß' -> 'größt' + strong ending '-er'.",
            "tr": "Tanımlayıcısız dişil Dativ. En üstünlük 'groß' -> 'größt' + güçlü ek '-er'.",
            "de": "Feminin Dativ ohne Artikel. Superlativ 'größt' + starke Endung '-er'."
        },
        "slots": [
            {
                "type": "adj",
                "answer": "er",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 151,
        "level": "B2",
        "case": "Akk",
        "category": "Wechselpräposition (Wohin?)",
        "text": "Ich {stelle} die Leiter an d___ weiß___ Wand.",
        "noun": "Wand (f)",
        "verbDesc": {
            "es": "Stellen: Poner (vertical). Indica movimiento/acción hacia un lugar.",
            "en": "Stellen: To place (upright). Indicates motion/action towards a location.",
            "tr": "Stellen: Dik koymak. Bir yere doğru hareketi/eylemi belirtir.",
            "de": "Stellen: Bewegungsverb (Wohin?)."
        },
        "explanation": {
            "es": "Movimiento (Wohin?) -> Akkusativ. Femenino 'die', adjetivo débil '-e'.",
            "en": "Motion (Whereto?) -> Accusative. Feminine 'die', weak adjective '-e'.",
            "tr": "Hareket (Nereye?) -> Akkusativ. Dişil 'die', zayıf sıfat '-e'.",
            "de": "Bewegung (Wohin?) -> Akkusativ. Feminin 'die', Adjektiv '-e'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "ie",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "e",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 152,
        "level": "B2",
        "case": "Dat",
        "category": "Wechselpräposition (Wo?)",
        "text": "Die Leiter {steht} an d___ weiß___ Wand.",
        "noun": "Wand (f)",
        "verbDesc": {
            "es": "Stehen: Estar de pie/situado. (Wo? -> Dativo).",
            "en": "Stehen: To stand. (Wo? -> Dat).",
            "tr": "Stehen: To stand. (Wo? -> Dat).",
            "de": "Stehen: Position (Dativ)."
        },
        "explanation": {
            "es": "Ubicación (Wo?) -> Dativo. Femenino 'der', adjetivo débil '-en'.",
            "en": "Location (Where?) -> Dative. Feminine 'der', weak adjective '-en'.",
            "tr": "Konum (Nerede?) -> Dativ. Dişil 'der', zayıf sıfat '-en'.",
            "de": "Lage (Wo?) -> Dativ. Feminin 'der', Adjektiv '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "er",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 153,
        "level": "C1",
        "case": "Akk",
        "category": "Wechselpräposition (Wohin?)",
        "text": "Er {setzt} sich neben d___ bekannt___ Journalisten.",
        "noun": "Journalist (m)",
        "verbDesc": {
            "es": "Sich setzen: Sentarse. (Akkusativ/Movimiento).",
            "en": "Sich setzen: To sit down.",
            "tr": "Sich setzen: To sit down.",
            "de": "Sich setzen."
        },
        "explanation": {
            "es": "Movimiento -> Akkusativ. Journalist es N-Deklination. Adjetivo débil '-en'.",
            "en": "Motion -> Accusative. Journalist is N-Declension. Weak adjective '-en'.",
            "tr": "Hareket -> Akkusativ. Journalist N-çekimidir. Zayıf sıfat '-en'.",
            "de": "Bewegung -> Akkusativ. Journalist ist N-Deklination. Adjektiv '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "en",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 154,
        "level": "C1",
        "case": "Dat",
        "category": "Wechselpräposition (Wo?)",
        "text": "Er {sitzt} neben d___ bekannt___ Journalisten.",
        "noun": "Journalist (m)",
        "verbDesc": {
            "es": "Sitzen: Estar sentado. Indica posición estática.",
            "en": "Sitzen: To be sitting. Indicates a static position.",
            "tr": "Sitzen: Oturuyor olmak. Statik konumu belirtir.",
            "de": "Sitzen: Statisches Verb (Wo?)."
        },
        "explanation": {
            "es": "Ubicación -> Dativo. Journalist es N-Deklination. Adjetivo débil '-en'.",
            "en": "Location -> Dative. Journalist is N-Declension. Weak adjective '-en'.",
            "tr": "Konum -> Dativ. Journalist N-çekimidir. Zayıf sıfat '-en'.",
            "de": "Lage -> Dativ. Journalist ist N-Deklination. Adjektiv '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "em",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 155,
        "level": "B2",
        "case": "Akk",
        "category": "Wechselpräposition (Wohin?)",
        "text": "Wir {hängen} das Bild über d___ neu___ Sofa.",
        "noun": "Sofa (n)",
        "verbDesc": {
            "es": "Hängen (transitivo): Colgar algo. Indica acción/movimiento.",
            "en": "Hängen (transitive): To hang something. Indicates action/motion.",
            "tr": "Hängen (geçişli): Bir şeyi asmak. Eylem/hareket belirtir.",
            "de": "Hängen: Akkusativ (Wohin?)."
        },
        "explanation": {
            "es": "Movimiento -> Akkusativ neutro. Artículo 'das', adjetivo débil '-e'.",
            "en": "Motion -> Neuter Accusative. Article 'das', weak adjective '-e'.",
            "tr": "Hareket -> Nötr Akkusativ. Tanımlayıcı 'das', zayıf sıfat '-e'.",
            "de": "Bewegung -> Neutrum Akkusativ. Artikel 'das', Adjektiv '-e'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "as",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "e",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 156,
        "level": "B2",
        "case": "Dat",
        "category": "Wechselpräposition (Wo?)",
        "text": "Das Bild {hängt} über d___ neu___ Sofa.",
        "noun": "Sofa (n)",
        "verbDesc": {
            "es": "Hängen: Colgar/Estar colgado. (Wo? -> Dativo).",
            "en": "Hängen: To hang. (Wo? -> Dat).",
            "tr": "Hängen: To hang. (Wo? -> Dat).",
            "de": "Hängen: Position (Dativ)."
        },
        "explanation": {
            "es": "Ubicación -> Dativo neutro. Artículo 'dem', adjetivo débil '-en'.",
            "en": "Location -> Neuter Dative. Article 'dem', weak adjective '-en'.",
            "tr": "Konum -> Nötr Dativ. Tanımlayıcı 'dem', zayıf sıfat '-en'.",
            "de": "Lage -> Neutrum Dativ. Artikel 'dem', Adjektiv '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "em",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 157,
        "level": "C1",
        "case": "Akk",
        "category": "Wechselpräposition (Wohin?)",
        "text": "Die Kinder {laufen} zwischen d___ hoh___ Bäume.",
        "noun": "Bäume (pl)",
        "verbDesc": {
            "es": "Laufen: Correr/Caminar.",
            "en": "Laufen: To run/walk.",
            "tr": "Laufen: To run/walk.",
            "de": "Laufen: Bewegungsverb."
        },
        "explanation": {
            "es": "Movimiento hacia el espacio entre los árboles -> Akkusativ plural 'die'.",
            "en": "Motion into the space between the trees -> Plural Accusative 'die'.",
            "tr": "Ağaçların arasındaki boşluğa doğru hareket -> Çoğul Akkusativ 'die'.",
            "de": "Richtung zwischen die Bäume -> Plural Akkusativ 'die'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "ie",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 158,
        "level": "C1",
        "case": "Dat",
        "category": "Wechselpräposition (Wo?)",
        "text": "Die Kinder {spielen} zwischen d___ hoh___ Bäumen.",
        "noun": "Bäumen (pl)",
        "verbDesc": {
            "es": "Spielen: Jugar.",
            "en": "Spielen: To play.",
            "tr": "Spielen: To play.",
            "de": "Spielen."
        },
        "explanation": {
            "es": "Ubicación -> Dativo plural 'den'. El sustantivo Bäume añade '-n'.",
            "en": "Location -> Plural Dative 'den'. The noun Bäume adds '-n'.",
            "tr": "Konum -> Çoğul Dativ 'den'. Bäume ismi '-n' alır.",
            "de": "Lage -> Plural Dativ 'den'. Substantiv Bäume mit N-Endung."
        },
        "slots": [
            {
                "type": "art",
                "answer": "en",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 159,
        "level": "B2",
        "case": "Akk",
        "category": "Wechselpräposition (Wohin?)",
        "text": "Ich {lege} den Teppich unter d___ groß___ Tisch.",
        "noun": "Tisch (m)",
        "verbDesc": {
            "es": "Legen: Colocar (tumbado). (Movimiento -> Akkusativ).",
            "en": "Legen: To lay/put. (Movement -> Accusative).",
            "tr": "Legen: Colocar (tumbado). (Movimiento -> Akkusativ).",
            "de": "Legen: Aktion (Akkusativ)."
        },
        "explanation": {
            "es": "Movimiento -> Akkusativ masculino. Artículo 'den', adjetivo débil '-en'.",
            "en": "Motion -> Masculine Accusative. Article 'den', weak adjective '-en'.",
            "tr": "Hareket -> Eril Akkusativ. Tanımlayıcı 'den', zayıf sıfat '-en'.",
            "de": "Bewegung -> Maskulin Akkusativ. Artikel 'den', Adjektiv '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "en",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 160,
        "level": "B2",
        "case": "Dat",
        "category": "Wechselpräposition (Wo?)",
        "text": "Der Teppich {liegt} unter d___ groß___ Tisch.",
        "noun": "Tisch (m)",
        "verbDesc": {
            "es": "Liegen: Estar tumbado/situado. (Posición -> Dativo).",
            "en": "Liegen: To lie/be located. (Position -> Dative).",
            "tr": "Liegen: Estar tumbado/situado. (Posición -> Dativo).",
            "de": "Liegen: Position (Dativ)."
        },
        "explanation": {
            "es": "Ubicación -> Dativo masculino. Artículo 'dem', adjetivo débil '-en'.",
            "en": "Location -> Masculine Dative. Article 'dem', weak adjective '-en'.",
            "tr": "Konum -> Eril Dativ. Tanımlayıcı 'dem', zayıf sıfat '-en'.",
            "de": "Lage -> Maskulin Dativ. Artikel 'dem', Adjektiv '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "em",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 161,
        "level": "C1",
        "case": "Akk",
        "category": "Wechselpräposition (Wohin?)",
        "text": "Wir {fahren} hinter d___ langsam___ LKW.",
        "noun": "LKW (m)",
        "verbDesc": {
            "es": "Fahren: Conducir/Ir.",
            "en": "Fahren: To drive/go.",
            "tr": "Fahren: Conducir/Ir.",
            "de": "Fahren: Bewegungsverb."
        },
        "explanation": {
            "es": "Movimiento (poniéndose detrás) -> Akkusativ masculino 'den'.",
            "en": "Motion (getting behind) -> Masculine Accusative 'den'.",
            "tr": "Hareket (arkasına geçme) -> Eril Akkusativ 'den'.",
            "de": "Bewegung (dahinter fahren) -> Maskulin Akkusativ 'den'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "en",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 162,
        "level": "C1",
        "case": "Dat",
        "category": "Wechselpräposition (Wo?)",
        "text": "Wir {stehen} im Stau hinter d___ langsam___ LKW.",
        "noun": "LKW (m)",
        "verbDesc": {
            "es": "Stehen: Estar parado/detenido. Indica ubicación fija.",
            "en": "Stehen: To stand/be stopped. Indicates fixed location.",
            "tr": "Stehen: Durmak. Sabit konumu belirtir.",
            "de": "Stehen: Statisch (Wo?)."
        },
        "explanation": {
            "es": "Ubicación (atrapado detrás) -> Dativo masculino 'dem'.",
            "en": "Location (stuck behind) -> Masculine Dative 'dem'.",
            "tr": "Konum (arkasında kalmış) -> Eril Dativ 'dem'.",
            "de": "Lage (dahinter stehen) -> Maskulin Dativ 'dem'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "em",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 163,
        "level": "B2",
        "case": "Akk",
        "category": "Wechselpräposition (Wohin?)",
        "text": "Er {wirft} den Brief in d___ gelb___ Briefkasten.",
        "noun": "Briefkasten (m)",
        "verbDesc": {
            "es": "Werfen: Tirar. (Akkusativ).",
            "en": "Werfen: To throw. (Accusative).",
            "tr": "Werfen: To throw. (Accusative).",
            "de": "Werfen: Akkusativ."
        },
        "explanation": {
            "es": "Movimiento hacia adentro -> Akkusativ masculino 'den'.",
            "en": "Motion inwards -> Masculine Accusative 'den'.",
            "tr": "İçeriye doğru hareket -> Eril Akkusativ 'den'.",
            "de": "Bewegung hinein -> Maskulin Akkusativ 'den'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "en",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 164,
        "level": "B2",
        "case": "Dat",
        "category": "Wechselpräposition (Wo?)",
        "text": "Der Brief {liegt} in d___ gelb___ Briefkasten.",
        "noun": "Briefkasten (m)",
        "verbDesc": {
            "es": "Liegen: Estar tumbado/situado. (Posición -> Dativo).",
            "en": "Liegen: To lie/be located. (Position -> Dative).",
            "tr": "Liegen: Estar tumbado/situado. (Posición -> Dativo).",
            "de": "Liegen: Position (Dativ)."
        },
        "explanation": {
            "es": "Ubicación interior -> Dativo masculino 'dem'.",
            "en": "Interior location -> Masculine Dative 'dem'.",
            "tr": "İç konum -> Eril Dativ 'dem'.",
            "de": "Lage darin -> Maskulin Dativ 'dem'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "em",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 165,
        "level": "C1",
        "case": "Akk",
        "category": "Wechselpräposition (Wohin?)",
        "text": "Ich {lehne} den Stock an d___ hölzern___ Zaun.",
        "noun": "Zaun (m)",
        "verbDesc": {
            "es": "Lehnen: Apoyar algo contra una superficie. Indica acción.",
            "en": "Lehnen: To lean something against a surface. Indicates action.",
            "tr": "Lehnen: Bir şeyi bir yüzeye yaslamak. Eylem belirtir.",
            "de": "Lehnen: Akkusativ (Wohin?)."
        },
        "explanation": {
            "es": "Movimiento de apoyo -> Akkusativ masculino 'den'.",
            "en": "Leaning motion -> Masculine Accusative 'den'.",
            "tr": "Yaslama hareketi -> Eril Akkusativ 'den'.",
            "de": "Bewegung (dran lehnen) -> Maskulin Akkusativ 'den'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "en",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 166,
        "level": "C1",
        "case": "Dat",
        "category": "Wechselpräposition (Wo?)",
        "text": "Der Stock {lehnt} an d___ hölzern___ Zaun.",
        "noun": "Zaun (m)",
        "verbDesc": {
            "es": "Lehnen: Estar apoyado. (An + Dativo).",
            "en": "Lehnen: To lean. (An + Dat).",
            "tr": "Lehnen: To lean. (An + Dat).",
            "de": "Lehnen: An + Dat."
        },
        "explanation": {
            "es": "Posición apoyada -> Dativo masculino 'dem'.",
            "en": "Leaning position -> Masculine Dative 'dem'.",
            "tr": "Yaslanmış konum -> Eril Dativ 'dem'.",
            "de": "Lage (dran lehnen) -> Maskulin Dativ 'dem'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "em",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 167,
        "level": "B2",
        "case": "Akk",
        "category": "Wechselpräposition (Wohin?)",
        "text": "Wir {setzen} uns vor d___ groß___ Fernseher.",
        "noun": "Fernseher (m)",
        "verbDesc": {
            "es": "Sich setzen: Sentarse. (Akkusativ/Movimiento).",
            "en": "Sich setzen: To sit down.",
            "tr": "Sich setzen: To sit down.",
            "de": "Sich setzen."
        },
        "explanation": {
            "es": "Movimiento hacia el frente -> Akkusativ masculino 'den'.",
            "en": "Motion to the front -> Masculine Accusative 'den'.",
            "tr": "Öne doğru hareket -> Eril Akkusativ 'den'.",
            "de": "Bewegung (davor setzen) -> Maskulin Akkusativ 'den'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "en",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 168,
        "level": "B2",
        "case": "Dat",
        "category": "Wechselpräposition (Wo?)",
        "text": "Wir {sitzen} vor d___ groß___ Fernseher.",
        "noun": "Fernseher (m)",
        "verbDesc": {
            "es": "Sitzen: Estar sentado. Indica ubicación.",
            "en": "Sitzen: To be sitting. Indicates location.",
            "tr": "Sitzen: Oturuyor olmak. Konumu belirtir.",
            "de": "Sitzen: Dativ (Wo?)."
        },
        "explanation": {
            "es": "Ubicación al frente -> Dativo masculino 'dem'.",
            "en": "Location at the front -> Masculine Dative 'dem'.",
            "tr": "Öndeki konum -> Eril Dativ 'dem'.",
            "de": "Lage (davor sitzen) -> Maskulin Dativ 'dem'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "em",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 169,
        "level": "C1",
        "case": "Akk",
        "category": "Wechselpräposition (Wohin?)",
        "text": "Das Flugzeug {fliegt} über d___ hoh___ Alpen.",
        "noun": "Alpen (pl)",
        "verbDesc": {
            "es": "Fliegen: Volar.",
            "en": "Fliegen: To fly.",
            "tr": "Fliegen: To fly.",
            "de": "Fliegen: Bewegungsverb."
        },
        "explanation": {
            "es": "Movimiento cruzando los Alpes -> Akkusativ plural 'die'.",
            "en": "Motion crossing the Alps -> Plural Accusative 'die'.",
            "tr": "Alpler'i geçen hareket -> Çoğul Akkusativ 'die'.",
            "de": "Bewegung über die Alpen -> Plural Akkusativ 'die'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "ie",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 170,
        "level": "C1",
        "case": "Dat",
        "category": "Wechselpräposition (Wo?)",
        "text": "Die Wolken {schweben} über d___ hoh___ Alpen.",
        "noun": "Alpen (pl)",
        "verbDesc": {
            "es": "Schweben: Flotar/Suspenderse.",
            "en": "Schweben: To float/hover.",
            "tr": "Schweben: To float/hover.",
            "de": "Schweben."
        },
        "explanation": {
            "es": "Ubicación estática encima de -> Dativo plural 'den'.",
            "en": "Static location above -> Plural Dative 'den'.",
            "tr": "Üzerindeki statik konum -> Çoğul Dativ 'den'.",
            "de": "Lage über den Alpen -> Plural Dativ 'den'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "en",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 171,
        "level": "B2",
        "case": "Akk",
        "category": "Wechselpräposition (Wohin?)",
        "text": "Ich {schreibe} die Notiz an d___ grün___ Tafel.",
        "noun": "Tafel (f)",
        "verbDesc": {
            "es": "Schreiben an: Escribir en (superficie vertical). Indica poner información ahí.",
            "en": "Schreiben an: To write on (vertical surface). Indicates putting info there.",
            "tr": "Schreiben an: (Dikey yüzeye) yazmak. Bilgiyi oraya koymayı belirtir.",
            "de": "Schreiben: Akkusativ (Wohin?)."
        },
        "explanation": {
            "es": "Acción de dirigir la escritura hacia -> Akkusativ femenino 'die'.",
            "en": "Action of directing writing towards -> Feminine Accusative 'die'.",
            "tr": "Yazıyı yöneltme eylemi -> Dişil Akkusativ 'die'.",
            "de": "Bewegung (dran schreiben) -> Feminin Akkusativ 'die'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "ie",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "e",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 172,
        "level": "B2",
        "case": "Dat",
        "category": "Wechselpräposition (Wo?)",
        "text": "Die Notiz {steht} an d___ grün___ Tafel.",
        "noun": "Tafel (f)",
        "verbDesc": {
            "es": "Stehen: Estar de pie/situado. (Wo? -> Dativo).",
            "en": "Stehen: To stand. (Wo? -> Dat).",
            "tr": "Stehen: To stand. (Wo? -> Dat).",
            "de": "Stehen: Position (Dativ)."
        },
        "explanation": {
            "es": "Ubicación de lo escrito -> Dativo femenino 'der'.",
            "en": "Location of the writing -> Feminine Dative 'der'.",
            "tr": "Yazının konumu -> Dişil Dativ 'der'.",
            "de": "Lage (dran stehen) -> Feminin Dativ 'der'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "er",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 173,
        "level": "C1",
        "case": "Akk",
        "category": "Wechselpräposition (Wohin?)",
        "text": "Wir {verstecken} uns hinter d___ schwer___ Vorhang.",
        "noun": "Vorhang (m)",
        "verbDesc": {
            "es": "Sich verstecken: Esconderse.",
            "en": "Sich verstecken: To hide.",
            "tr": "Sich verstecken: To hide.",
            "de": "Sich verstecken."
        },
        "explanation": {
            "es": "Movimiento para quedar oculto -> Akkusativ masculino 'den'.",
            "en": "Motion to become hidden -> Masculine Accusative 'den'.",
            "tr": "Gizlenmek için yapılan hareket -> Eril Akkusativ 'den'.",
            "de": "Bewegung (dahinter verstecken) -> Maskulin Akkusativ 'den'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "en",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 174,
        "level": "C1",
        "case": "Dat",
        "category": "Wechselpräposition (Wo?)",
        "text": "Wir {sind} hinter d___ schwer___ Vorhang versteckt.",
        "noun": "Vorhang (m)",
        "verbDesc": {
            "es": "Sein: Ser/Estar. (Nominativ).",
            "en": "Sein: To be. (Nominative).",
            "tr": "Sein: Ser/Estar. (Nominativ).",
            "de": "Sein: Nominativ-Verb."
        },
        "explanation": {
            "es": "Ubicación oculta -> Dativo masculino 'dem'.",
            "en": "Hidden location -> Masculine Dative 'dem'.",
            "tr": "Gizli konum -> Eril Dativ 'dem'.",
            "de": "Lage (dahinter sein) -> Maskulin Dativ 'dem'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "em",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 175,
        "level": "B2",
        "case": "Akk",
        "category": "Wechselpräposition (Wohin?)",
        "text": "Ich {werfe} den Schlüssel vor d___ geschlossen___ Tür.",
        "noun": "Tür (f)",
        "verbDesc": {
            "es": "Werfen: Lanzar. Indica trayectoria hacia un lugar.",
            "en": "Werfen: To throw. Indicates trajectory towards a spot.",
            "tr": "Werfen: Atmak. Bir yere doğru yörüngeyi belirtir.",
            "de": "Werfen: Akkusativ (Wohin?)."
        },
        "explanation": {
            "es": "Movimiento hacia el frente de la puerta -> Akkusativ femenino 'die'.",
            "en": "Motion to the front of the door -> Feminine Accusative 'die'.",
            "tr": "Kapının önüne doğru hareket -> Dişil Akkusativ 'die'.",
            "de": "Bewegung (davor werfen) -> Feminin Akkusativ 'die'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "ie",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "e",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 176,
        "level": "C1",
        "case": "Gen",
        "category": "Preposición Genitiva Culta",
        "text": "Anlässlich d___ fünfzigst___ Jubiläums {gab} es ein Fest.",
        "noun": "Jubiläum (n)",
        "verbDesc": {
            "es": "Geben: Dar. (Es gibt -> Hay + Akkusativ).",
            "en": "Geben: To give. (Es gibt -> There is).",
            "tr": "Geben: To give. (Es gibt -> There is).",
            "de": "Geben: Akkusativ."
        },
        "explanation": {
            "es": "Genitivo neutro. Artículo 'des', adjetivo débil '-en'.",
            "en": "Neuter Genitive. Article 'des', weak adjective '-en'.",
            "tr": "Nötr Genitiv. Tanımlayıcı 'des', zayıf sıfat '-en'.",
            "de": "Neutrum Genitiv. Artikel 'des', Adjektiv '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "es",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 177,
        "level": "C1",
        "case": "Gen",
        "category": "Preposición Genitiva Culta",
        "text": "Infolge d___ lang___ Streiks {fielen} die Züge aus.",
        "noun": "Streik (m)",
        "verbDesc": {
            "es": "Ausfallen: Cancelarse.",
            "en": "Ausfallen: To be cancelled.",
            "tr": "Ausfallen: To be cancelled.",
            "de": "Ausfallen."
        },
        "explanation": {
            "es": "Genitivo masculino. Artículo 'des', adjetivo débil '-en'.",
            "en": "Masculine Genitive. Article 'des', weak adjective '-en'.",
            "tr": "Eril Genitiv. Tanımlayıcı 'des', zayıf sıfat '-en'.",
            "de": "Maskulin Genitiv. Artikel 'des', Adjektiv '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "es",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 178,
        "level": "B2",
        "case": "Nom",
        "category": "Possessivpronomen (Ersatz)",
        "text": "{Ist} das dein Kuli? Nein, das ist mein___.",
        "noun": "Kuli (m)",
        "verbDesc": {
            "es": "Sein: Ser/Estar. (Nominativ).",
            "en": "Sein: To be. (Nominative).",
            "tr": "Sein: Ser/Estar. (Nominativ).",
            "de": "Sein: Nominativ-Verb."
        },
        "explanation": {
            "es": "Sustituye a un masculino en Nominativo. Debe llevar terminación fuerte '-er' (meiner).",
            "en": "Replaces a masculine in Nominative. Must have strong ending '-er' (meiner).",
            "tr": "Nominativ eril bir ismin yerini alır. Güçlü ek '-er' (meiner) almalıdır.",
            "de": "Ersatz für Maskulin Nominativ -> 'meiner'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "er",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            }
        ]
    },
    {
        "id": 179,
        "level": "B2",
        "case": "Akk",
        "category": "Possessivpronomen (Ersatz)",
        "text": "Ich {habe} meinen Kuli vergessen. Darf ich dein___ benutzen?",
        "noun": "Kuli (m)",
        "verbDesc": {
            "es": "Haben: Tener. (Akkusativ).",
            "en": "Haben: To have. (Accusative).",
            "tr": "Haben: Tener. (Akkusativ).",
            "de": "Haben: Akkusativ-Verb."
        },
        "explanation": {
            "es": "Sustituye a un masculino en Akkusativ. Terminación fuerte '-en' (deinen).",
            "en": "Replaces a masculine in Accusative. Strong ending '-en' (deinen).",
            "tr": "Akkusativ eril bir ismin yerini alır. Güçlü ek '-en' (deinen) almalıdır.",
            "de": "Ersatz für Maskulin Akkusativ -> 'deinen'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "en",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            }
        ]
    },
    {
        "id": 180,
        "level": "C1",
        "case": "Gen",
        "category": "Preposición Genitiva",
        "text": "Unweit d___ deutsch___ Grenze {liegt} ein kleines Dorf.",
        "noun": "Grenze (f)",
        "verbDesc": {
            "es": "Liegen: Estar tumbado/situado. (Posición -> Dativo).",
            "en": "Liegen: To lie/be located. (Position -> Dative).",
            "tr": "Liegen: Estar tumbado/situado. (Posición -> Dativo).",
            "de": "Liegen: Position (Dativ)."
        },
        "explanation": {
            "es": "Genitivo femenino. Artículo 'der', adjetivo débil '-en'.",
            "en": "Feminine Genitive. Article 'der', weak adjective '-en'.",
            "tr": "Dişil Genitiv. Tanımlayıcı 'der', zayıf sıfat '-en'.",
            "de": "Feminin Genitiv. Artikel 'der', Adjektiv '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "er",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 181,
        "level": "C1",
        "case": "Gen",
        "category": "Preposición Genitiva Culta",
        "text": "Abseits d___ vorgegeben___ Weges {fanden} wir Ruhe.",
        "noun": "Weg (m)",
        "verbDesc": {
            "es": "Finden: Encontrar. (Akkusativ).",
            "en": "Finden: To find. (Accusative).",
            "tr": "Finden: To find. (Accusative).",
            "de": "Finden: Akkusativ."
        },
        "explanation": {
            "es": "Genitivo masculino. Artículo 'des', adjetivo débil '-en'.",
            "en": "Masculine Genitive. Article 'des', weak adjective '-en'.",
            "tr": "Eril Genitiv. Tanımlayıcı 'des', zayıf sıfat '-en'.",
            "de": "Maskulin Genitiv. Artikel 'des', Adjektiv '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "es",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 182,
        "level": "B2",
        "case": "Dat",
        "category": "Verbo con Dativo (N-Dekl)",
        "text": "Ich {vertraue} mein___ neu___ Experten.",
        "noun": "Experte (m)",
        "verbDesc": {
            "es": "Vertrauen: Confiar. (Dativo).",
            "en": "Vertrauen: To trust. (Dative).",
            "tr": "Vertrauen: Confiar. (Dativo).",
            "de": "Vertrauen: Dativ-Verb."
        },
        "explanation": {
            "es": "Dativo masculino. Experte es N-Deklination. Posesivo 'meinem', adjetivo débil '-en'.",
            "en": "Masculine Dative. Experte is N-declension. Possessive 'meinem', weak adjective '-en'.",
            "tr": "Eril Dativ. Experte N-çekimidir. İyelik 'meinem', zayıf sıfat '-en'.",
            "de": "Maskulin Dativ. Experte ist N-Deklination. Adjektiv '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "em",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 183,
        "level": "C1",
        "case": "Gen",
        "category": "Preposición Genitiva Culta",
        "text": "Ungeachtet d___ offiziell___ Warnung {ging} er ins Wasser.",
        "noun": "Warnung (f)",
        "verbDesc": {
            "es": "Gehen: Ir/Funcionar.",
            "en": "Gehen: To go/work.",
            "tr": "Gehen: To go/work.",
            "de": "Gehen."
        },
        "explanation": {
            "es": "Genitivo femenino. Artículo 'der', adjetivo débil '-en'.",
            "en": "Feminine Genitive. Article 'der', weak adjective '-en'.",
            "tr": "Dişil Genitiv. Tanımlayıcı 'der', zayıf sıfat '-en'.",
            "de": "Feminin Genitiv. Artikel 'der', Adjektiv '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "er",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 184,
        "level": "C1",
        "case": "Nom",
        "category": "Adjetivo tras cuantificador",
        "text": "Es {gibt} etwas Wichtig___ zu feiern.",
        "noun": "Gutes (n)",
        "verbDesc": {
            "es": "Es gibt: Hay. (Akkusativ).",
            "en": "Es gibt: There is. (Acc).",
            "tr": "Es gibt: There is. (Acc).",
            "de": "Es gibt: Akk."
        },
        "explanation": {
            "es": "Tras 'etwas' el adjetivo lleva terminación fuerte neutra '-es'.",
            "en": "After 'etwas' the adjective takes the strong neuter ending '-es'.",
            "tr": "'Etwas'tan sonra sıfat güçlü nötr ek '-es' alır.",
            "de": "Starke Neutrum-Endung '-es'."
        },
        "slots": [
            {
                "type": "adj",
                "answer": "es",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 185,
        "level": "B2",
        "case": "Akk",
        "category": "Preposición Akkusativ",
        "text": "Gegen mein___ Willen {handelte} er.",
        "noun": "Wille (m)",
        "verbDesc": {
            "es": "Handeln: Actuar/Tratar.",
            "en": "Handeln: To act/deal.",
            "tr": "Handeln: To act/deal.",
            "de": "Handeln."
        },
        "explanation": {
            "es": "Akkusativ masculino. Wille es N-Deklination (Willen). Posesivo 'meinen'.",
            "en": "Masculine Accusative. Wille is N-declension. Possessive 'meinen'.",
            "tr": "Eril Akkusativ. Wille N-çekimidir. İyelik 'meinen'.",
            "de": "Maskulin Akkusativ. Wille ist N-Deklination (Willen). Posesiv 'meinen'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "en",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            }
        ]
    },
    {
        "id": 186,
        "level": "C1",
        "case": "Gen",
        "category": "Preposición Genitiva Culta",
        "text": "Mithilfe ein___ mutig___ Zeugen {wurde} der Dieb gefasst.",
        "noun": "Zeuge (m)",
        "verbDesc": {
            "es": "Werden: Convertirse/Llegar a ser (o Auxiliar Pasiva).",
            "en": "Werden: To become (or Passive Aux).",
            "tr": "Werden: Convertirse/Llegar a ser (o Auxiliar Pasiva).",
            "de": "Werden: Nominativ / Passiv."
        },
        "explanation": {
            "es": "Genitivo masculino. Zeuge es N-Deklination. Artículo 'eines', adjetivo mixto '-en'.",
            "en": "Masculine Genitive. Zeuge is N-declension. Article 'eines', mixed adjective '-en'.",
            "tr": "Eril Genitiv. Zeuge N-çekimidir. Tanımlayıcı 'eines', karma sıfat '-en'.",
            "de": "Maskulin Genitiv. Zeuge ist N-Deklination. Adjektiv '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "es",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 187,
        "level": "B2",
        "case": "Nom",
        "category": "Possessivpronomen (Ersatz)",
        "text": "{Ist} das dein Buch? Nein, das ist mein___.",
        "noun": "Buch (n)",
        "verbDesc": {
            "es": "Sein: Ser/Estar. (Nominativ).",
            "en": "Sein: To be. (Nominative).",
            "tr": "Sein: Ser/Estar. (Nominativ).",
            "de": "Sein: Nominativ-Verb."
        },
        "explanation": {
            "es": "Sustituye a un neutro en Nominativo. Terminación fuerte '-es' (meines/meins).",
            "en": "Replaces a neuter in Nominative. Strong ending '-es' (meines/meins).",
            "tr": "Nominativ nötr bir ismin yerini alır. Güçlü ek '-es' alır.",
            "de": "Ersatz für Neutrum Nominativ -> 'meines' oder 'meins'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "es",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            }
        ]
    },
    {
        "id": 188,
        "level": "C1",
        "case": "Gen",
        "category": "Preposición Genitiva Culta",
        "text": "Angesichts d___ wirtschaftlich___ Krise {muss} gespart werden.",
        "noun": "Krise (f)",
        "verbDesc": {
            "es": "Müssen: Tener que/Deber.",
            "en": "Müssen: Must/Have to.",
            "tr": "Müssen: Must/Have to.",
            "de": "Müssen: Modalverb."
        },
        "explanation": {
            "es": "Genitivo femenino. Artículo 'der', adjetivo débil '-en'.",
            "en": "Feminine Genitive. Article 'der', weak adjective '-en'.",
            "tr": "Dişil Genitiv. Tanımlayıcı 'der', zayıf sıfat '-en'.",
            "de": "Feminin Genitiv. Artikel 'der', Adjektiv '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "er",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 189,
        "level": "C1",
        "case": "Gen",
        "category": "Preposición Genitiva Culta",
        "text": "Bezüglich Ihr___ letzt___ Schreibens {habe} ich eine Frage.",
        "noun": "Schreiben (n)",
        "verbDesc": {
            "es": "Haben: Tener. (Akkusativ).",
            "en": "Haben: To have. (Accusative).",
            "tr": "Haben: Tener. (Akkusativ).",
            "de": "Haben: Akkusativ-Verb."
        },
        "explanation": {
            "es": "Genitivo neutro. Posesivo 'Ihres', adjetivo débil '-en'.",
            "en": "Neuter Genitive. Possessive 'Ihres', weak adjective '-en'.",
            "tr": "Nötr Genitiv. İyelik 'Ihres', zayıf sıfat '-en'.",
            "de": "Neutrum Genitiv. Possessiv 'Ihres', Adjektiv '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "es",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 190,
        "level": "B2",
        "case": "Dat",
        "category": "Verbo con Dativo",
        "text": "Ich {gratuliere} dein___ jünger___ Bruder.",
        "noun": "Bruder (m)",
        "verbDesc": {
            "es": "Gratulieren: Felicitar. (Dativo).",
            "en": "Gratulieren: To congratulate. (Dative).",
            "tr": "Gratulieren: Felicitar. (Dativo).",
            "de": "Gratulieren: Dativ-Verb."
        },
        "explanation": {
            "es": "Dativo masculino. Posesivo 'deinem', adjetivo débil '-en'.",
            "en": "Masculine Dative. Possessive 'deinem', weak adjective '-en'.",
            "tr": "Eril Dativ. İyelik 'deinem', zayıf sıfat '-en'.",
            "de": "Maskulin Dativ. Possessiv 'deinem', Adjektiv '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "em",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 191,
        "level": "C1",
        "case": "Gen",
        "category": "Preposición Genitiva Culta",
        "text": "Längs d___ breit___ Flusses {führt} ein Radweg.",
        "noun": "Fluss (m)",
        "verbDesc": {
            "es": "Führen: Conducir/Guiar.",
            "en": "Führen: To lead.",
            "tr": "Führen: To lead.",
            "de": "Führen."
        },
        "explanation": {
            "es": "Genitivo masculino. Artículo 'des', adjetivo débil '-en'.",
            "en": "Masculine Genitive. Article 'des', weak adjective '-en'.",
            "tr": "Eril Genitiv. Tanımlayıcı 'des', zayıf sıfat '-en'.",
            "de": "Maskulin Genitiv. Artikel 'des', Adjektiv '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "es",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 192,
        "level": "B2",
        "case": "Akk",
        "category": "Preposición Akkusativ",
        "text": "Er {arbeitet} ohne unser___ finanziell___ Unterstützung.",
        "noun": "Unterstützung (f)",
        "verbDesc": {
            "es": "Arbeiten: Trabajar.",
            "en": "Arbeiten: To work.",
            "tr": "Arbeiten: To work.",
            "de": "Arbeiten."
        },
        "explanation": {
            "es": "Akkusativ femenino. Posesivo 'unsere', adjetivo débil '-e'.",
            "en": "Feminine Accusative. Possessive 'unsere', weak adjective '-e'.",
            "tr": "Dişil Akkusativ. İyelik 'unsere', zayıf sıfat '-e'.",
            "de": "Feminin Akkusativ. Possessiv 'unsere', Adjektiv '-e'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "e",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "e",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 193,
        "level": "C1",
        "case": "Gen",
        "category": "Preposición Genitiva Culta",
        "text": "Jenseits d___ hoh___ Berge {ist} das Klima anders.",
        "noun": "Berge (pl)",
        "verbDesc": {
            "es": "Sein: Ser/Estar. (Nominativ).",
            "en": "Sein: To be. (Nominative).",
            "tr": "Sein: Ser/Estar. (Nominativ).",
            "de": "Sein: Nominativ-Verb."
        },
        "explanation": {
            "es": "Genitivo plural. Artículo 'der', adjetivo débil '-en'.",
            "en": "Plural Genitive. Article 'der', weak adjective '-en'.",
            "tr": "Çoğul Genitiv. Tanımlayıcı 'der', zayıf sıfat '-en'.",
            "de": "Plural Genitiv. Artikel 'der', Adjektiv '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "er",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 194,
        "level": "B2",
        "case": "Dat",
        "category": "Preposición Dativa",
        "text": "Ich {bin} mit dein___ letzt___ Ergebnis zufrieden.",
        "noun": "Ergebnis (n)",
        "verbDesc": {
            "es": "Sein: Ser/Estar. (Nominativ).",
            "en": "Sein: To be. (Nominative).",
            "tr": "Sein: Ser/Estar. (Nominativ).",
            "de": "Sein: Nominativ-Verb."
        },
        "explanation": {
            "es": "Dativo neutro. Posesivo 'deinem', adjetivo débil '-en'.",
            "en": "Neuter Dative. Possessive 'deinem', weak adjective '-en'.",
            "tr": "Nötr Dativ. İyelik 'deinem', zayıf sıfat '-en'.",
            "de": "Neutrum Dativ. Possessiv 'deinem', Adjektiv '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "em",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 195,
        "level": "C1",
        "case": "Gen",
        "category": "Preposición Genitiva Culta",
        "text": "Zwecks eindeutig___ Identifikation {benötigen} wir Ihren Ausweis.",
        "noun": "Identifikation (f)",
        "verbDesc": {
            "es": "Benötigen: Necesitar/Requerir. (Akkusativ).",
            "en": "Benötigen: To require. (Accusative).",
            "tr": "Benötigen: To require. (Accusative).",
            "de": "Benötigen: Akkusativ."
        },
        "explanation": {
            "es": "Genitivo femenino sin artículo. Declinación fuerte del adjetivo '-er'.",
            "en": "Feminine Genitive without article. Strong adjective ending '-er'.",
            "tr": "Tanımlayıcısız dişil Genitiv. Güçlü sıfat tamlaması '-er'.",
            "de": "Feminin Genitiv ohne Artikel. Starke Adjektivendung '-er'."
        },
        "slots": [
            {
                "type": "adj",
                "answer": "er",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 196,
        "level": "B2",
        "case": "Akk",
        "category": "Verbo con Akkusativ",
        "text": "Ich {besuche} mein___ krank___ Onkel.",
        "noun": "Onkel (m)",
        "verbDesc": {
            "es": "Besuchen: Visitar. Rige Akkusativ.",
            "en": "Besuchen: To visit. Takes Accusative.",
            "tr": "Besuchen: Ziyaret etmek. Akkusativ alır.",
            "de": "Besuchen + Akkusativ."
        },
        "explanation": {
            "es": "Akkusativ masculino. Posesivo 'meinen', adjetivo débil '-en'.",
            "en": "Masculine Accusative. Possessive 'meinen', weak adjective '-en'.",
            "tr": "Eril Akkusativ. İyelik 'meinen', zayıf sıfat '-en'.",
            "de": "Maskulin Akkusativ. Possessiv 'meinen', Adjektiv '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "en",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 197,
        "level": "C1",
        "case": "Gen",
        "category": "Preposición Genitiva Culta",
        "text": "Inmitten d___ groß___ Tumults {bewahrte} sie die Ruhe.",
        "noun": "Tumult (m)",
        "verbDesc": {
            "es": "Bewahren: Conservar/Mantener. (Akkusativ).",
            "en": "Bewahren: To keep/preserve. (Accusative).",
            "tr": "Bewahren: To keep/preserve. (Accusative).",
            "de": "Bewahren: Akkusativ."
        },
        "explanation": {
            "es": "Genitivo masculino. Artículo 'des', adjetivo débil '-en'.",
            "en": "Masculine Genitive. Article 'des', weak adjective '-en'.",
            "tr": "Eril Genitiv. Tanımlayıcı 'des', zayıf sıfat '-en'.",
            "de": "Maskulin Genitiv. Artikel 'des', Adjektiv '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "es",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 198,
        "level": "B2",
        "case": "Dat",
        "category": "Verbo con Dativo",
        "text": "Ich {antworte} mein___ neu___ Chef.",
        "noun": "Chef (m)",
        "verbDesc": {
            "es": "Antworten: Responder. (Dativo).",
            "en": "Antworten: To answer. (Dative).",
            "tr": "Antworten: Responder. (Dativo).",
            "de": "Antworten: Dativ-Verb."
        },
        "explanation": {
            "es": "Dativo masculino. Posesivo 'meinem', adjetivo débil '-en'.",
            "en": "Masculine Dative. Possessive 'meinem', weak adjective '-en'.",
            "tr": "Eril Dativ. İyelik 'meinem', zayıf sıfat '-en'.",
            "de": "Maskulin Dativ. Possessiv 'meinem', Adjektiv '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "em",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 199,
        "level": "C1",
        "case": "Gen",
        "category": "Preposición Genitiva Culta",
        "text": "Ungeachtet d___ schwer___ Verluste {kämpften} sie weiter.",
        "noun": "Verluste (pl)",
        "verbDesc": {
            "es": "Kämpfen: Luchar.",
            "en": "Kämpfen: To fight.",
            "tr": "Kämpfen: To fight.",
            "de": "Kämpfen."
        },
        "explanation": {
            "es": "Genitivo plural. Artículo 'der', adjetivo débil '-en'.",
            "en": "Plural Genitive. Article 'der', weak adjective '-en'.",
            "tr": "Çoğul Genitiv. Tanımlayıcı 'der', zayıf sıfat '-en'.",
            "de": "Plural Genitiv. Artikel 'der', Adjektiv '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "er",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 200,
        "level": "C1",
        "case": "Dat",
        "category": "Preposición Dativa (Cierre)",
        "text": "Wir {haben} uns von unser___ geschätzt___ Kollegen verabschiedet.",
        "noun": "Kollege (m)",
        "verbDesc": {
            "es": "Haben: Tener. (Akkusativ).",
            "en": "Haben: To have. (Accusative).",
            "tr": "Haben: Tener. (Akkusativ).",
            "de": "Haben: Akkusativ-Verb."
        },
        "explanation": {
            "es": "Dativo masculino. Kollege es N-Deklination. Posesivo 'unserem', adjetivo débil '-en'.",
            "en": "Masculine Dative. Kollege is N-declension. Possessive 'unserem', weak adjective '-en'.",
            "tr": "Eril Dativ. Kollege N-çekimidir. İyelik 'unserem', zayıf sıfat '-en'.",
            "de": "Maskulin Dativ. Kollege ist N-Deklination. Adjektiv '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "em",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 201,
        "level": "B2",
        "case": "Akk",
        "category": "La \"A\" Personal",
        "text": "Ich {besuche} mein___ (m) altalt___ Lehrer.",
        "noun": "Lehrer (m)",
        "verbDesc": {
            "es": "Besuchen: Visitar a alguien. (Lo visito -> Akkusativ).",
            "en": "Besuchen: To visit someone. (Accusative).",
            "de": "Besuchen + Akkusativ."
        },
        "explanation": {
            "es": "En español decimos 'a mi profesor', pero es Akkusativ. Masculino 'meinen', adjetivo '-en'.",
            "en": "In Spanish we use 'a', but it's Accusative. Masculine 'meinen', adjective '-en'.",
            "de": "Direktes Objekt (Akk). Maskulin 'meinen', Adjektiv '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "en",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 202,
        "level": "B2",
        "case": "Dat",
        "category": "La \"A\" Personal",
        "text": "Ich {helfe} d___ (m) altalt___ Lehrer.",
        "noun": "Lehrer (m)",
        "verbDesc": {
            "es": "Helfen: Ayudar a alguien. (Le ayudo -> Dativo).",
            "en": "Helfen: To help someone. (Dative).",
            "de": "Helfen + Dativ."
        },
        "explanation": {
            "es": "Helfen es dativo puro. Masculino 'dem', adjetivo '-en'.",
            "en": "Helfen is pure Dative. Masculine 'dem', adjective '-en'.",
            "de": "Dativ-Verb. Maskulin 'dem', Adjektiv '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "em",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 203,
        "level": "C1",
        "case": "Akk",
        "category": "N-Deklination",
        "text": "{Kennst} du d___ (m) neuneu___ Präsidenten?",
        "noun": "Präsident (m)",
        "verbDesc": {
            "es": "Kennen: Conocer. (Akkusativ).",
            "en": "Kennen: To know. (Accusative).",
            "tr": "Kennen: To know. (Accusative).",
            "de": "Kennen: Akkusativ."
        },
        "explanation": {
            "es": "Akkusativ masculino. Präsident es N-Deklination (lleva -en). Adjetivo débil '-en'.",
            "en": "Masculine Accusative. Präsident is N-declension. Weak adjective '-en'.",
            "de": "Maskulin Akkusativ. N-Deklination + schwache Adjektivendung."
        },
        "slots": [
            {
                "type": "art",
                "answer": "en",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 204,
        "level": "B2",
        "case": "Akk",
        "category": "El \"Das\" Problem",
        "text": "Ich {brauche} ein___ (n) neuneu___ Messer.",
        "noun": "Messer (n)",
        "verbDesc": {
            "es": "Brauchen: Necesitar. (Akkusativ).",
            "en": "Brauchen: To need. (Accusative).",
            "tr": "Brauchen: Necesitar. (Akkusativ).",
            "de": "Brauchen: Akkusativ-Verb."
        },
        "explanation": {
            "es": "Cuchillo en alemán es neutro. Akkusativ neutro 'ein', adjetivo mixto '-es'.",
            "en": "Knife is neuter in German. Neuter Accusative 'ein', mixed adjective '-es'.",
            "de": "Neutrum Akkusativ. Artikel 'ein', gemischte Endung '-es'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "-",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "es",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 205,
        "level": "C1",
        "case": "Dat",
        "category": "N-Deklination",
        "text": "Ich {habe} mit ein___ (m) jungjung___ Kunden gesprochen.",
        "noun": "Kunde (m)",
        "verbDesc": {
            "es": "Haben: Tener. (Akkusativ).",
            "en": "Haben: To have. (Accusative).",
            "tr": "Haben: Tener. (Akkusativ).",
            "de": "Haben: Akkusativ-Verb."
        },
        "explanation": {
            "es": "Dativo masculino. Kunde es N-Deklination (añade -n). Posesivo 'einem', adjetivo débil '-en'.",
            "en": "Masculine Dative. Kunde is N-declension. Article 'einem', weak adjective '-en'.",
            "de": "Maskulin Dativ. N-Deklination + schwache Endung."
        },
        "slots": [
            {
                "type": "art",
                "answer": "em",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 206,
        "level": "B2",
        "case": "Akk",
        "category": "La \"A\" Personal",
        "text": "Er {fragt} d___ (m) nettnett___ Polizisten.",
        "noun": "Polizist (m)",
        "verbDesc": {
            "es": "Fragen: Preguntar a alguien. (Lo pregunta -> Akkusativ).",
            "en": "Fragen: To ask someone. (Accusative).",
            "de": "Fragen + Akkusativ."
        },
        "explanation": {
            "es": "En español decimos 'le pregunta', pero en alemán es Akkusativ. Polizist es N-Deklination.",
            "en": "Accusative object. Polizist is N-declension.",
            "de": "Akkusativobjekt. Maskulin 'den', Polizist (N-Dekl)."
        },
        "slots": [
            {
                "type": "art",
                "answer": "en",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 207,
        "level": "C1",
        "case": "Dat",
        "category": "Verbos Dativo Puro",
        "text": "Das {schadet} d___ (m) gesundgesund___ Körper.",
        "noun": "Körper (m)",
        "verbDesc": {
            "es": "Schaden: Dañar/Perjudicar. (Dativo).",
            "en": "Schaden: To harm. (Dative).",
            "tr": "Schaden: Dañar/Perjudicar. (Dativo).",
            "de": "Schaden: Dativ-Verb."
        },
        "explanation": {
            "es": "Dañar 'le' a algo. Dativo masculino 'dem', adjetivo débil '-en'.",
            "en": "Harmful to something (Dative). Masculine 'dem', weak adjective '-en'.",
            "de": "Dativ-Verb. Maskulin 'dem', Adjektiv '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "em",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 208,
        "level": "B2",
        "case": "Akk",
        "category": "El \"Das\" Problem",
        "text": "Ich {sehe} mein___ (n) kleinklein___ Kind.",
        "noun": "Kind (n)",
        "verbDesc": {
            "es": "Sehen: Ver. (Akkusativ).",
            "en": "Sehen: To see. (Accusative).",
            "tr": "Sehen: Ver. (Akkusativ).",
            "de": "Sehen: Akkusativ-Verb."
        },
        "explanation": {
            "es": "Akkusativ neutro. Posesivo 'mein', adjetivo mixto '-es'.",
            "en": "Neuter Accusative. Possessive 'mein', mixed adjective '-es'.",
            "de": "Neutrum Akkusativ. 'mein' + Endung '-es'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "-",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "e",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 209,
        "level": "C1",
        "case": "Gen",
        "category": "Preposiciones Genitivas",
        "text": "Zeit {sein___} Lebens reiste er viel.",
        "noun": "Wissen (n)",
        "verbDesc": {
            "es": "Sein: Ser/Estar. Aquí: 'Zeit seines Lebens' (toda su vida) en Genitivo.",
            "en": "Sein: To be. 'Zeit seines Lebens' (Gen).",
            "tr": "Sein: To be. 'Zeit seines Lebens' (Gen).",
            "de": "Sein: Genitiv."
        },
        "explanation": {
            "es": "Wissen es neutro. Genitivo 'seines', adjetivo mixto '-en'.",
            "en": "Knowledge (Wissen) is neuter. Genitive 'seines', adjective '-en'.",
            "de": "Neutrum Genitiv. 'seines' + '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "es",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "schlechten",
                "options": [
                    "schlechte",
                    "schlechten",
                    "schlechtes",
                    "schlechter"
                ]
            }
        ]
    },
    {
        "id": 210,
        "level": "B2",
        "case": "Dat",
        "category": "La \"A\" Personal",
        "text": "Ich {vertraue} mein___ (m) gutgut___ Freund.",
        "noun": "Freund (m)",
        "verbDesc": {
            "es": "Vertrauen: Confiar. (Dativo).",
            "en": "Vertrauen: To trust. (Dative).",
            "tr": "Vertrauen: Confiar. (Dativo).",
            "de": "Vertrauen: Dativ-Verb."
        },
        "explanation": {
            "es": "Dativo masculino. Posesivo 'meinem', adjetivo débil '-en'.",
            "en": "Masculine Dative. Possessive 'meinem', weak adjective '-en'.",
            "de": "Maskulin Dativ. 'meinem' + '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "em",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 211,
        "level": "C1",
        "case": "Akk",
        "category": "N-Deklination",
        "text": "Ich {habe} ein___ (m) großgroß___ Diamanten verloren.",
        "noun": "Diamant (m)",
        "verbDesc": {
            "es": "Haben: Tener. (Akkusativ).",
            "en": "Haben: To have. (Accusative).",
            "tr": "Haben: Tener. (Akkusativ).",
            "de": "Haben: Akkusativ-Verb."
        },
        "explanation": {
            "es": "Diamant es N-Deklination. Akkusativ masculino 'einen', adjetivo mixto '-en'.",
            "en": "Diamant is N-declension. Masculine 'einen', adjective '-en'.",
            "de": "Maskulin Akkusativ. N-Deklination."
        },
        "slots": [
            {
                "type": "art",
                "answer": "en",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 212,
        "level": "B2",
        "case": "Dat",
        "category": "Doble Objeto",
        "text": "Ich {empfehle} mein___ (f) Freundin ein___ (n) gutgut___ Restaurant.",
        "noun": "Freundin (f), Restaurant (n)",
        "verbDesc": {
            "es": "Empfehlen: Recomendar. (Dativo + Akkusativ).",
            "en": "Empfehlen: To recommend. (Dat + Acc).",
            "tr": "Empfehlen: Recomendar. (Dativo + Akkusativ).",
            "de": "Empfehlen: Dat + Akk."
        },
        "explanation": {
            "es": "¿A quién? (Dativo femenino -> meiner). ¿Qué? (Akkusativ neutro -> ein ... -es).",
            "en": "Who? (Dative). What? (Accusative).",
            "de": "Wem? (Dat). Was? (Akk)."
        },
        "slots": [
            {
                "type": "art",
                "answer": "er",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            },
            {
                "type": "art",
                "answer": "-",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "es",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 213,
        "level": "C1",
        "case": "Gen",
        "category": "Genitivo Posesivo",
        "text": "Das {ist} die Tasche d___ (f) neuneu___ Kollegin.",
        "noun": "Kollegin (f)",
        "verbDesc": {
            "es": "Sein: Ser/Estar. (Nominativ).",
            "en": "Sein: To be. (Nominative).",
            "tr": "Sein: Ser/Estar. (Nominativ).",
            "de": "Sein: Nominativ-Verb."
        },
        "explanation": {
            "es": "Genitivo femenino. Artículo 'der', adjetivo débil '-en'.",
            "en": "Feminine Genitive. Article 'der', weak adjective '-en'.",
            "de": "Feminin Genitiv. 'der' + '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "er",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 214,
        "level": "B2",
        "case": "Dat",
        "category": "Preposiciones Fijas",
        "text": "Ich {bin} mit d___ (m) altalt___ Wagen zufrieden.",
        "noun": "Wagen (m)",
        "verbDesc": {
            "es": "Sein: Ser/Estar. (Nominativ).",
            "en": "Sein: To be. (Nominative).",
            "tr": "Sein: Ser/Estar. (Nominativ).",
            "de": "Sein: Nominativ-Verb."
        },
        "explanation": {
            "es": "Dativo masculino. Artículo 'dem', adjetivo débil '-en'.",
            "en": "Masculine Dative. Article 'dem', weak adjective '-en'.",
            "de": "Maskulin Dativ. 'dem' + '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "em",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 215,
        "level": "C1",
        "case": "Akk",
        "category": "Reflexivos",
        "text": "Ich {gewöhne} mich an d___ (n) kaltkalt___ Wetter.",
        "noun": "Wetter (n)",
        "verbDesc": {
            "es": "Sich gewöhnen an: Acostumbrarse a. (Akkusativ).",
            "en": "Sich gewöhnen an: To get used to. (Accusative).",
            "tr": "Sich gewöhnen an: To get used to. (Accusative).",
            "de": "Sich gewöhnen: Akk."
        },
        "explanation": {
            "es": "Akkusativ neutro. Artículo 'das', adjetivo débil '-en'.",
            "en": "Neuter Accusative. Article 'das', weak adjective '-en'.",
            "de": "Neutrum Akkusativ. 'das' + '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "as",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "e",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 216,
        "level": "B2",
        "case": "Akk",
        "category": "La \"A\" Personal",
        "text": "Ich {suche} mein___ (m) nettnett___ Nachbarn.",
        "noun": "Nachbar (m)",
        "verbDesc": {
            "es": "Suchen: Buscar. (Akkusativ).",
            "en": "Suchen: To search. (Accusative).",
            "tr": "Suchen: Buscar. (Akkusativ).",
            "de": "Suchen: Akkusativ-Verb."
        },
        "explanation": {
            "es": "Nachbar es N-Deklination. Akkusativ masculino 'meinen', adjetivo débil '-en'.",
            "en": "Nachbar is N-declension. Masculine 'meinen', weak adjective '-en'.",
            "de": "Maskulin Akkusativ. 'meinen' + '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "en",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 217,
        "level": "C1",
        "case": "Gen",
        "category": "Preposiciones Genitivas",
        "text": "Infolge ein___ schwer___ Unfalls {war} die Straße gesperrt.",
        "noun": "Unfall (m)",
        "verbDesc": {
            "es": "Sein: Ser/Estar. (Präteritum).",
            "en": "Sein: To be. (Past).",
            "tr": "Sein: Ser/Estar. (Präteritum).",
            "de": "Sein: Präteritum."
        },
        "explanation": {
            "es": "Genitivo masculino. Artículo 'eines', adjetivo mixto '-en'.",
            "en": "Masculine Genitive. Article 'eines', mixed adjective '-en'.",
            "de": "Maskulin Genitiv. 'eines' + '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "es",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 218,
        "level": "B2",
        "case": "Dat",
        "category": "Preposiciones Fijas",
        "text": "Ich {träume} von ein___ groß___ Haus am Meer.",
        "noun": "Haus (n)",
        "verbDesc": {
            "es": "Träumen: Soñar. (Von + Dativo).",
            "en": "Träumen: To dream. (Von + Dat).",
            "tr": "Träumen: Soñar. (Von + Dativo).",
            "de": "Träumen: Von + Dat."
        },
        "explanation": {
            "es": "Dativo neutro. Artículo 'einem', adjetivo mixto '-en'.",
            "en": "Neuter Dative. Article 'einem', mixed adjective '-en'.",
            "de": "Neutrum Dativ. 'einem' + '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "em",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 219,
        "level": "C1",
        "case": "Akk",
        "category": "N-Deklination",
        "text": "{Haben} Sie d___ (m) Patienten schon gesehen?",
        "noun": "Patient (m)",
        "verbDesc": {
            "es": "Haben: Tener. (Akkusativ).",
            "en": "Haben: To have. (Accusative).",
            "tr": "Haben: Tener. (Akkusativ).",
            "de": "Haben: Akkusativ-Verb."
        },
        "explanation": {
            "es": "Patient es N-Deklination. Akkusativ masculino 'den'.",
            "en": "Patient is N-declension. Masculine 'den'.",
            "de": "Maskulin Akkusativ. 'den' + Patient-en."
        },
        "slots": [
            {
                "type": "art",
                "answer": "en",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            }
        ]
    },
    {
        "id": 220,
        "level": "B2",
        "case": "Akk",
        "category": "El \"Das\" Problem",
        "text": "Ich {kaufe} ein___ schön___ Kleid.",
        "noun": "Kleid (n)",
        "verbDesc": {
            "es": "Kaufen: Comprar. Akkusativ.",
            "en": "Kaufen: To buy. Accusative.",
            "de": "Kaufen + Akkusativ."
        },
        "explanation": {
            "es": "Vestido es neutro. Akkusativ neutro 'ein', adjetivo mixto '-es'.",
            "en": "Dress is neuter. Neuter Accusative 'ein', adjective '-es'.",
            "de": "Neutrum Akkusativ. 'ein' + '-es'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "-",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "es",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 221,
        "level": "C1",
        "case": "Gen",
        "category": "Genitivo",
        "text": "Die Hilfe d___ viel___ Menschen {ist} bewundernswert.",
        "noun": "Menschen (pl)",
        "verbDesc": {
            "es": "Sein: Ser/Estar. (Nominativ).",
            "en": "Sein: To be. (Nominative).",
            "tr": "Sein: Ser/Estar. (Nominativ).",
            "de": "Sein: Nominativ-Verb."
        },
        "explanation": {
            "es": "Genitivo plural. Artículo 'der', adjetivo débil '-en'.",
            "en": "Plural Genitive. Article 'der', weak adjective '-en'.",
            "de": "Plural Genitiv. 'der' + '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "er",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 222,
        "level": "B2",
        "case": "Dat",
        "category": "La \"A\" Personal",
        "text": "Das {gehört} d___ (m) kleinklein___ Kind.",
        "noun": "Kind (n)",
        "verbDesc": {
            "es": "Gehören: Pertenecer. (Dativo).",
            "en": "Gehören: To belong. (Dative).",
            "tr": "Gehören: Pertenecer. (Dativo).",
            "de": "Gehören: Dativ-Verb."
        },
        "explanation": {
            "es": "Dativo neutro. Artículo 'dem', adjetivo débil '-en'.",
            "en": "Neuter Dative. Article 'dem', weak adjective '-en'.",
            "de": "Neutrum Dativ. 'dem' + '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "em",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 223,
        "level": "C1",
        "case": "Akk",
        "category": "N-Deklination",
        "text": "Ich {rufe} d___ (m) Experten an.",
        "noun": "Experte (m)",
        "verbDesc": {
            "es": "Anrufen: Llamar por teléfono. Rige Akkusativ.",
            "en": "Anrufen: To call. Accusative.",
            "de": "Anrufen + Akkusativ."
        },
        "explanation": {
            "es": "Experte es N-Deklination. Akkusativ masculino 'den'.",
            "en": "Experte is N-declension. Masculine 'den'.",
            "de": "Maskulin Akkusativ. 'den' + Experte-n."
        },
        "slots": [
            {
                "type": "art",
                "answer": "en",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            }
        ]
    },
    {
        "id": 224,
        "level": "B2",
        "case": "Dat",
        "category": "Preposiciones Fijas",
        "text": "Ich {telefone} mit mein___ best___ Freundin.",
        "noun": "Freundin (f)",
        "verbDesc": {
            "es": "Telefonieren mit: Hablar por teléfono con. Dativo.",
            "en": "Telefonieren mit: To phone someone. Dative.",
            "de": "Telefonieren mit + Dativ."
        },
        "explanation": {
            "es": "Dativo femenino. Posesivo 'meiner', adjetivo débil '-en'.",
            "en": "Feminine Dative. Possessive 'meiner', weak adjective '-en'.",
            "de": "Feminin Dativ. 'meiner' + '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "er",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 225,
        "level": "C1",
        "case": "Gen",
        "category": "Preposiciones Genitivas",
        "text": "Anstatt d___ teur___ Autos {nehme} ich das Fahrrad.",
        "noun": "Auto (n)",
        "verbDesc": {
            "es": "Nehmen: Tomar/Coger. (Akkusativ).",
            "en": "Nehmen: To take. (Accusative).",
            "tr": "Nehmen: To take. (Accusative).",
            "de": "Nehmen: Akkusativ-Verb."
        },
        "explanation": {
            "es": "Genitivo neutro. Artículo 'des', adjetivo débil '-en'.",
            "en": "Neuter Genitive. Article 'des', weak adjective '-en'.",
            "de": "Neutrum Genitiv. 'des' + '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "es",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 226,
        "level": "C1",
        "case": "Dat/Akk/Gen",
        "category": "Triple Declinación",
        "text": "Ich {gebe} d___ neuneu___ Nachbarn d___ Brief mein___ Vaters.",
        "noun": "Nachbar (m), Brief (m), Vater (m)",
        "verbDesc": {
            "es": "Geben: Dar. (Dativo + Akkusativ).",
            "en": "Geben: To give. (Dat + Acc).",
            "tr": "Geben: Dar. (Dativo + Akkusativ).",
            "de": "Geben: Dat + Akk."
        },
        "explanation": {
            "es": "1. ¿A quién? (Dativo Nachbar + N-Dekl). 2. ¿Qué? (Akkusativ Brief). 3. ¿De quién? (Genitivo Vaters).",
            "en": "1. To whom? (Dative + N-decl). 2. What? (Accusative). 3. Whose? (Genitive).",
            "tr": "1. Kime? (Dativ + N-çekimi). 2. Neyi? (Akkusativ). 3. Kimin? (Genitiv).",
            "de": "1. Wem? (Dat). 2. Was? (Akk). 3. Wessen? (Gen)."
        },
        "slots": [
            {
                "type": "art",
                "answer": "em",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            },
            {
                "type": "art",
                "answer": "en",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "art",
                "answer": "es",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            }
        ]
    },
    {
        "id": 227,
        "level": "C1",
        "case": "Gen/Nom/Akk",
        "category": "Preposición Genitiva inicial",
        "text": "Trotz d___ stark___ Regens {kauft} d___ jung___ Student ein___ teur___ Buch.",
        "noun": "Regen (m), Student (m), Buch (n)",
        "verbDesc": {
            "es": "Kaufen: Comprar. (Dativo + Akkusativ).",
            "en": "Kaufen: To buy. (Dative + Accusative).",
            "tr": "Kaufen: Comprar. (Dativo + Akkusativ).",
            "de": "Kaufen: Dat + Akk."
        },
        "explanation": {
            "es": "1. Trotz (Genitivo). 2. Sujeto (Nominativo Student + N-Dekl). 3. Objeto (Akkusativ neutro).",
            "en": "1. Trotz (Genitive). 2. Subject (Nominative). 3. Object (Neuter Accusative).",
            "tr": "1. Trotz (Genitiv). 2. Özne (Nominativ). 3. Nesne (Nötr Akkusativ).",
            "de": "1. Genitiv (Trotz). 2. Nominativ (Subjekt). 3. Akkusativ (Objekt)."
        },
        "slots": [
            {
                "type": "art",
                "answer": "es",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            },
            {
                "type": "art",
                "answer": "er",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "e",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            },
            {
                "type": "art",
                "answer": "-",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "es",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 228,
        "level": "C1",
        "case": "Dat/Akk",
        "category": "Reflexivo Dativ + Adjetivos",
        "text": "Ich {wasche} ___ d___ schmutzigschmutzig___ Hände mit ein___ besonder___ Seife.",
        "noun": "Hände (pl), Seife (f)",
        "verbDesc": {
            "es": "Sich waschen: Lavarse. (Dativo reflexivo).",
            "en": "Sich waschen: To wash oneself. (Dative refl).",
            "tr": "Sich waschen: To wash oneself. (Dative refl).",
            "de": "Sich waschen: Dat."
        },
        "explanation": {
            "es": "1. Pronombre (mir). 2. Objeto (Akkusativ plural). 3. Preposición 'mit' (Dativo femenino).",
            "en": "1. Pronoun (mir). 2. Object (Plural Accusative). 3. Prep 'mit' (Feminine Dative).",
            "tr": "1. Zamir (mir). 2. Nesne (Çoğul Akkusativ). 3. Edat 'mit' (Dişil Dativ).",
            "de": "1. mir (Refl). 2. die schmutzigen (Akk). 3. einer besonderen (Dat)."
        },
        "slots": [
            {
                "type": "art",
                "answer": "mir",
                "options": [
                    "mich",
                    "mir",
                    "sich",
                    "uns",
                    "ich",
                    "meiner"
                ]
            },
            {
                "type": "art",
                "answer": "ie",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            },
            {
                "type": "art",
                "answer": "er",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 229,
        "level": "C1",
        "case": "Dat/Gen",
        "category": "Preposición + Posesión Genitiva",
        "text": "Ich {sitze} in d___ klein___ Zimmer mein___ best___ Freundes.",
        "noun": "Zimmer (n), Freund (m)",
        "verbDesc": {
            "es": "Sitzen in: Estar sentado en. (Wo? -> Dativo).",
            "en": "Sitzen in: To be sitting in. (Where? -> Dative).",
            "tr": "Sitzen in: -de oturmak. (Nerede? -> Dativ).",
            "de": "Sitzen in + Dativ."
        },
        "explanation": {
            "es": "1. Ubicación (Dativo neutro). 2. Posesión (Genitivo masculino).",
            "en": "1. Location (Neuter Dative). 2. Possession (Masculine Genitive).",
            "tr": "1. Konum (Nötr Dativ). 2. İyelik (Eril Genitiv).",
            "de": "1. Dativ (Ort). 2. Genitiv (Besitz)."
        },
        "slots": [
            {
                "type": "art",
                "answer": "em",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            },
            {
                "type": "art",
                "answer": "es",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 230,
        "level": "C1",
        "case": "Akk/Dat",
        "category": "Verbo con Doble Objeto + N-Dekl",
        "text": "Ich {erkläre} d___ neu___ Experten d___ schwierig___ Problem.",
        "noun": "Experte (m), Problem (n)",
        "verbDesc": {
            "es": "Erklären: Explicar. (Dativo + Akkusativ).",
            "en": "Erklären: To explain. (Dat + Acc).",
            "tr": "Erklären: Explicar. (Dativo + Akkusativ).",
            "de": "Erklären: Dat + Akk."
        },
        "explanation": {
            "es": "1. ¿A quién? (Dativo masculino + N-Dekl). 2. ¿Qué? (Akkusativ neutro).",
            "en": "1. To whom? (Masculine Dative + N-decl). 2. What? (Neuter Accusative).",
            "tr": "1. Kime? (Eril Dativ + N-çekimi). 2. Neyi? (Nötr Akkusativ).",
            "de": "1. dem neuen Experten (Dat). 2. das schwierige Problem (Akk)."
        },
        "slots": [
            {
                "type": "art",
                "answer": "em",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            },
            {
                "type": "art",
                "answer": "as",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "e",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 231,
        "level": "C1",
        "case": "Gen/Akk",
        "category": "Preposición Genitiva + Objeto Akkusativ",
        "text": "Wegen ein___ klein___ Fehlers {verlor} er sein___ gut___ Job.",
        "noun": "Fehler (m), Job (m)",
        "verbDesc": {
            "es": "Verlieren: Perder. (Akkusativ).",
            "en": "Verlieren: To lose. (Accusative).",
            "tr": "Verlieren: To lose. (Accusative).",
            "de": "Verlieren: Akkusativ."
        },
        "explanation": {
            "es": "1. Wegen rige Genitivo. 2. Objeto directo masculino (Akkusativ).",
            "en": "1. Wegen requires Genitive. 2. Masculine direct object (Accusative).",
            "tr": "1. Wegen Genitiv ister. 2. Eril belirtili nesne (Akkusativ).",
            "de": "1. Genitiv (Wegen). 2. Akkusativ (Objekt)."
        },
        "slots": [
            {
                "type": "art",
                "answer": "es",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            },
            {
                "type": "art",
                "answer": "en",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "em",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 232,
        "level": "C1",
        "case": "Dat/Gen",
        "category": "Preposición Dativa + Posesivo Genitivo",
        "text": "Ich {fahre} mit d___ neu___ Auto mein___ Chefs.",
        "noun": "Auto (n), Chef (m)",
        "verbDesc": {
            "es": "Fahren: Conducir/Ir. (Akk o Dat con prep).",
            "en": "Fahren: To drive/go. (Acc or Dat with prep).",
            "tr": "Fahren: Conducir/Ir. (Akk o Dat con prep).",
            "de": "Fahren: Bewegungsverb."
        },
        "explanation": {
            "es": "1. Con el coche (Dativo neutro). 2. Del jefe (Genitivo masculino).",
            "en": "1. With the car (Neuter Dative). 2. Of the boss (Masculine Genitive).",
            "tr": "1. Araba ile (Nötr Dativ). 2. Patronun (Eril Genitiv).",
            "de": "1. dem neuen Auto (Dat). 2. meines Chefs (Gen)."
        },
        "slots": [
            {
                "type": "art",
                "answer": "em",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            },
            {
                "type": "art",
                "answer": "es",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            }
        ]
    },
    {
        "id": 233,
        "level": "C1",
        "case": "Nom/Dat/Akk",
        "category": "Sujeto + Receptor + Objeto",
        "text": "___ nett___ Kunde {schenkt} d___ jung___ Frau ein___ teur___ Uhr.",
        "noun": "Kunde (m), Frau (f), Uhr (f)",
        "verbDesc": {
            "es": "Schenken: Regalar. (Dat + Akk).",
            "en": "Schenken: To gift. (Dat + Acc).",
            "tr": "Schenken: To gift. (Dat + Acc).",
            "de": "Schenken: Dat + Akk."
        },
        "explanation": {
            "es": "1. Sujeto (Nom + N-Dekl). 2. Receptora (Dativo femenino). 3. Regalo (Akkusativ femenino).",
            "en": "1. Subject (Nom + N-decl). 2. Recipient (Fem Dative). 3. Gift (Fem Accusative).",
            "tr": "1. Özne (Nom + N-çekimi). 2. Alıcı (Dişil Dativ). 3. Hediye (Dişil Akkusativ).",
            "de": "1. Der nette Kunde (Nom). 2. der jungen Frau (Dat). 3. eine teure Uhr (Akk)."
        },
        "slots": [
            {
                "type": "art",
                "answer": "Der",
                "options": [
                    "Der",
                    "Den",
                    "Dem",
                    "Des"
                ]
            },
            {
                "type": "adj",
                "answer": "e",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            },
            {
                "type": "art",
                "answer": "er",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            },
            {
                "type": "art",
                "answer": "e",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "e",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 234,
        "level": "C1",
        "case": "Gen/Dat",
        "category": "Preposición Genitiva + Dativo Local",
        "text": "Während d___ schrecklich___ Krieges {lebten} sie in ein___ dunkl___ Keller.",
        "noun": "Krieg (m), Keller (m)",
        "verbDesc": {
            "es": "Leben: Vivir.",
            "en": "Leben: To live.",
            "tr": "Leben: To live.",
            "de": "Leben."
        },
        "explanation": {
            "es": "1. Während (Genitivo masculino). 2. Ubicación (Dativo masculino).",
            "en": "1. Während (Masculine Genitive). 2. Location (Masculine Dative).",
            "tr": "1. Während (Eril Genitiv). 2. Konum (Eril Dativ).",
            "de": "1. des schrecklichen Krieges (Gen). 2. einem dunklen Keller (Dat)."
        },
        "slots": [
            {
                "type": "art",
                "answer": "es",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            },
            {
                "type": "art",
                "answer": "em",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 235,
        "level": "C1",
        "case": "Dat/Akk/Gen",
        "category": "Reflexivo Dativ + Triple",
        "text": "Ich {leihe} mein___ best___ (m) Freund ein___ alt___ Buch dein___ Schwester.",
        "noun": "Freund (m), Buch (n), Schwester (f)",
        "verbDesc": {
            "es": "Leihen: Prestar. (Dativo + Akkusativ).",
            "en": "Leihen: To lend. (Dat + Acc).",
            "tr": "Leihen: Prestar. (Dativo + Akkusativ).",
            "de": "Leihen: Dat + Akk."
        },
        "explanation": {
            "es": "1. Receptor (Dativo). 2. Objeto (Akkusativ). 3. Poseedor (Genitivo femenino).",
            "en": "1. Recipient (Dative). 2. Object (Accusative). 3. Possessor (Feminine Genitive).",
            "tr": "1. Alıcı (Dativ). 2. Nesne (Akkusativ). 3. İyelik (Dişil Genitiv).",
            "de": "1. meinem besten Freund (Dat). 2. ein altes Buch (Akk). 3. deiner Schwester (Gen)."
        },
        "slots": [
            {
                "type": "art",
                "answer": "em",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            },
            {
                "type": "art",
                "answer": "-",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "es",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            },
            {
                "type": "art",
                "answer": "er",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            }
        ]
    },
    {
        "id": 236,
        "level": "C1",
        "case": "Nom/Dat",
        "category": "Participio II + N-Deklination",
        "text": "___ ___ gelöste Aufgabe {gehört} d___ fleißig___ Studenten.",
        "noun": "Aufgabe (f), Student (m)",
        "verbDesc": {
            "es": "Gehören: Pertenecer. (Dativo).",
            "en": "Gehören: To belong. (Dative).",
            "tr": "Gehören: Pertenecer. (Dativo).",
            "de": "Gehören: Dativ-Verb."
        },
        "explanation": {
            "es": "1. Sujeto (Nominativo femenino). 2. Receptor (Dativo masculino + N-Deklination).",
            "en": "1. Subject (Fem Nominative). 2. Recipient (Masc Dative + N-decl).",
            "de": "1. Nom (Fem). 2. Dat (Mask + N-Dekl)."
        },
        "slots": [
            {
                "type": "art",
                "answer": "Die",
                "options": [
                    "Die",
                    "Der",
                    "Das",
                    "Den"
                ]
            },
            {
                "type": "adj",
                "answer": "neu",
                "options": [
                    "neu",
                    "neue",
                    "neuen",
                    "neuer"
                ]
            },
            {
                "type": "art",
                "answer": "em",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 237,
        "level": "C1",
        "case": "Akk/Dat/Gen",
        "category": "Participio I + Anidada",
        "text": "Ich {sehe} d___ lachenden Kinder in d___ groß___ Park d___ Stadt.",
        "noun": "Kinder (pl), Park (m), Stadt (f)",
        "verbDesc": {
            "es": "Sehen: Ver. (Akkusativ).",
            "en": "Sehen: To see. (Accusative).",
            "tr": "Sehen: Ver. (Akkusativ).",
            "de": "Sehen: Akkusativ-Verb."
        },
        "explanation": {
            "es": "1. Niños riendo (Akk Plural). 2. Ubicación (Dat Masculino). 3. Posesión (Gen Femenino).",
            "en": "1. Laughing children (Acc Pl). 2. Location (Dat Masc). 3. Possession (Gen Fem).",
            "de": "1. Akk Plural. 2. Dat Maskulin. 3. Gen Feminin."
        },
        "slots": [
            {
                "type": "art",
                "answer": "ie",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "art",
                "answer": "em",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            },
            {
                "type": "art",
                "answer": "er",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            }
        ]
    },
    {
        "id": 238,
        "level": "C1",
        "case": "Gen/Akk",
        "category": "Participio II + Genitivo",
        "text": "Trotz d___ verloren___ verlorenen Schlüssels {fand} er ein___ passend___ Lösung.",
        "noun": "Schlüssel (m), Lösung (f)",
        "verbDesc": {
            "es": "Finden: Encontrar. (Akkusativ).",
            "en": "Finden: To find. (Accusative).",
            "tr": "Finden: To find. (Accusative).",
            "de": "Finden: Akkusativ-Verb."
        },
        "explanation": {
            "es": "1. Llave perdida (Gen Masculino). 2. Una solución (Akk Femenino).",
            "en": "1. Lost key (Gen Masc). 2. A solution (Acc Fem).",
            "de": "1. Gen Maskulin. 2. Akk Feminin."
        },
        "slots": [
            {
                "type": "art",
                "answer": "es",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            },
            {
                "type": "art",
                "answer": "e",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "e",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 239,
        "level": "C1",
        "case": "Dat/Akk/Gen",
        "category": "Reflexivo Dativ + Part. II",
        "text": "Ich {sehe} ___ d___ empfohlene Video empfohlen___ d___ Professors an.",
        "noun": "Video (n), Professor (m)",
        "verbDesc": {
            "es": "Sehen: Ver. (Akkusativ).",
            "en": "Sehen: To see. (Accusative).",
            "tr": "Sehen: Ver. (Akkusativ).",
            "de": "Sehen: Akkusativ-Verb."
        },
        "explanation": {
            "es": "1. Pronombre (mir). 2. Video recomendado (Akk Neutro). 3. Del profesor (Gen Masculino).",
            "en": "1. Pronoun (mir). 2. Recommended video (Acc Neut). 3. Of the professor (Gen Masc).",
            "de": "1. mir (Refl). 2. das empfohlene Video (Akk). 3. des Professors (Gen)."
        },
        "slots": [
            {
                "type": "art",
                "answer": "mir",
                "options": [
                    "mich",
                    "mir",
                    "sich",
                    "uns",
                    "ich",
                    "meiner"
                ]
            },
            {
                "type": "art",
                "answer": "as",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "e",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            },
            {
                "type": "art",
                "answer": "es",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            }
        ]
    },
    {
        "id": 240,
        "level": "C1",
        "case": "Akk",
        "category": "N-Deklination + Participio II",
        "text": "Ich {befrage} d___ verhaftet___ verhafteten Polizisten.",
        "noun": "Polizist (m)",
        "verbDesc": {
            "es": "Befragen: Interrogar. Rige Akkusativ.",
            "en": "Befragen: To question. Takes Accusative.",
            "de": "Befragen + Akkusativ."
        },
        "explanation": {
            "es": "Objeto directo masculino. Polizist (N-Dekl en Akk). Participio II como adjetivo.",
            "en": "Masc Acc object. Polizist (N-decl). Participle II as adjective.",
            "de": "Maskulin Akkusativ + N-Deklination."
        },
        "slots": [
            {
                "type": "art",
                "answer": "en",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 241,
        "level": "C1",
        "case": "Dat",
        "category": "Preposición + Participio I",
        "text": "Ich {spreche} mit d___ weinend___ weinenden Frau.",
        "noun": "Frau (f)",
        "verbDesc": {
            "es": "Sprechen mit: Hablar con. Rige Dativo.",
            "en": "Sprechen mit: To speak with. Takes Dative.",
            "de": "Mit + Dativ."
        },
        "explanation": {
            "es": "Con la mujer que está llorando ahora (Participio I). Dativo femenino.",
            "en": "With the woman crying now (Participle I). Fem Dative.",
            "de": "Feminin Dativ + Partizip I."
        },
        "slots": [
            {
                "type": "art",
                "answer": "er",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 242,
        "level": "C1",
        "case": "Gen/Dat",
        "category": "Genitivo + N-Deklination",
        "text": "Anlässlich d___ kurz___ Besuchs d___ Präsidenten {war} alles bereit.",
        "noun": "Besuch (m), Präsident (m)",
        "verbDesc": {
            "es": "Sein: Ser/Estar.",
            "en": "Sein: To be.",
            "tr": "Sein: To be.",
            "de": "Sein."
        },
        "explanation": {
            "es": "1. Motivo (Gen Masculino). 2. Del presidente (Gen Masculino + N-Dekl).",
            "en": "1. Occasion (Gen Masc). 2. Of the president (Gen Masc + N-decl).",
            "de": "1. des Besuchs (Gen). 2. des Präsidenten (Gen)."
        },
        "slots": [
            {
                "type": "art",
                "answer": "es",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            },
            {
                "type": "art",
                "answer": "es",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            }
        ]
    },
    {
        "id": 243,
        "level": "C1",
        "case": "Nom/Dat/Akk",
        "category": "Doble Objeto + Participio II",
        "text": "___ Mann {schickt} d___ Frau d___ geschrieben___ geschriebenen Brief.",
        "noun": "Mann (m), Frau (f), Brief (m)",
        "verbDesc": {
            "es": "Schicken: Enviar. (Dat + Akk).",
            "en": "Schicken: To send. (Dat + Acc).",
            "tr": "Schicken: To send. (Dat + Acc).",
            "de": "Schicken: Dat + Akk."
        },
        "explanation": {
            "es": "1. Sujeto. 2. Receptora (Dat). 3. Carta escrita (Akk).",
            "en": "1. Subject. 2. Recipient (Dat). 3. Written letter (Acc).",
            "de": "1. Der alte Mann (Nom). 2. der Frau (Dat). 3. den geschriebenen Brief (Akk)."
        },
        "slots": [
            {
                "type": "art",
                "answer": "Der",
                "options": [
                    "Der",
                    "Den",
                    "Dem",
                    "Des"
                ]
            },
            {
                "type": "art",
                "answer": "er",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "art",
                "answer": "en",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 244,
        "level": "C1",
        "case": "Dat/Akk",
        "category": "Reflexivo Dativ + Participio II",
        "text": "Ich {habe} ___ d___ gekocht___ gekochte Essen bestellt.",
        "noun": "Essen (n)",
        "verbDesc": {
            "es": "Haben: Tener. (Akkusativ).",
            "en": "Haben: To have. (Accusative).",
            "tr": "Haben: Tener. (Akkusativ).",
            "de": "Haben: Akkusativ-Verb."
        },
        "explanation": {
            "es": "Pronombre (mir). Comida cocinada (Akk Neutro).",
            "en": "Pronoun (mir). Cooked food (Acc Neut).",
            "de": "Mir (Dat). Das gekochte Essen (Akk)."
        },
        "slots": [
            {
                "type": "art",
                "answer": "mir",
                "options": [
                    "mich",
                    "mir",
                    "sich",
                    "euch",
                    "ich",
                    "meiner"
                ]
            },
            {
                "type": "art",
                "answer": "as",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "e",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 245,
        "level": "C1",
        "case": "Gen",
        "category": "Preposición Genitiva + Participio II",
        "text": "Ungeachtet d___ getroffen___ getroffenen Entscheidung {machten} wir weiter.",
        "noun": "Entscheidung (f)",
        "verbDesc": {
            "es": "Weitermachen: Continuar.",
            "en": "Weitermachen: To continue.",
            "tr": "Weitermachen: To continue.",
            "de": "Weitermachen."
        },
        "explanation": {
            "es": "Pese a la decisión tomada (Participio II). Genitivo femenino.",
            "en": "Regardless of the decision made. Fem Genitive.",
            "de": "Feminin Genitiv + Partizip II."
        },
        "slots": [
            {
                "type": "art",
                "answer": "er",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 246,
        "level": "C1",
        "case": "Akk/Gen",
        "category": "Objeto + Posesión",
        "text": "Ich {verstehe} d___ d___ Sinn gesagt___ gesagten Worte.",
        "noun": "Sinn (m), Worte (pl)",
        "verbDesc": {
            "es": "Verstehen: Entender (Akk). Genitivo posesivo.",
            "en": "Verstehen: To understand.",
            "de": "Verstehen (Akk) + Genitiv."
        },
        "explanation": {
            "es": "1. El sentido (Akk Masculino). 2. De las palabras dichas (Gen Plural).",
            "en": "1. The sense (Acc Masc). 2. Of the words said (Gen Pl).",
            "de": "1. den Sinn (Akk). 2. der gesagten Worte (Gen)."
        },
        "slots": [
            {
                "type": "art",
                "answer": "en",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "art",
                "answer": "er",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 247,
        "level": "C1",
        "case": "Dat",
        "category": "Verbo Dativo + Participio I",
        "text": "Ich {folge} d___ fliehend___ fliehenden Dieb.",
        "noun": "Dieb (m)",
        "verbDesc": {
            "es": "Folgen: Seguir. (Dativo).",
            "en": "Folgen: To follow. (Dative).",
            "tr": "Folgen: Seguir. (Dativo).",
            "de": "Folgen: Dativ-Verb."
        },
        "explanation": {
            "es": "Sigo al ladrón que huye ahora (Participio I). Dativo masculino.",
            "en": "I follow the thief fleeing now. Masc Dative.",
            "de": "Maskulin Dativ + Partizip I."
        },
        "slots": [
            {
                "type": "art",
                "answer": "em",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 248,
        "level": "C1",
        "case": "Gen",
        "category": "N-Deklination + Genitivo",
        "text": "Die Meinung d___ bekannt___ Experten {ist} gefragt.",
        "noun": "Experte (m)",
        "verbDesc": {
            "es": "Sein: Ser/Estar. (Nominativ).",
            "en": "Sein: To be. (Nominative).",
            "tr": "Sein: Ser/Estar. (Nominativ).",
            "de": "Sein: Nominativ-Verb."
        },
        "explanation": {
            "es": "La opinión del experto. Genitivo masculino + N-Deklination.",
            "en": "The expert's opinion. Masc Genitive + N-decl.",
            "de": "Maskulin Genitiv + N-Deklination."
        },
        "slots": [
            {
                "type": "art",
                "answer": "es",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 249,
        "level": "C1",
        "case": "Nom/Dat/Akk",
        "category": "Triple + Participio II",
        "text": "___ Vater {zeigt} d___ Kind d___ repariert___ reparierte Spielzeug.",
        "noun": "Vater (m), Kind (n), Spielzeug (n)",
        "verbDesc": {
            "es": "Zeigen: Mostrar. (Dativo + Akkusativ).",
            "en": "Zeigen: To show. (Dat + Acc).",
            "tr": "Zeigen: Mostrar. (Dativo + Akkusativ).",
            "de": "Zeigen: Dat + Akk."
        },
        "explanation": {
            "es": "1. Sujeto. 2. Receptor (Dat Neutro). 3. Juguete reparado (Akk Neutro).",
            "en": "1. Subject. 2. Recipient (Dat). 3. Repaired toy (Acc).",
            "de": "1. Der Vater (Nom). 2. dem Kind (Dat). 3. das reparierte Spielzeug (Akk)."
        },
        "slots": [
            {
                "type": "art",
                "answer": "Der",
                "options": [
                    "Der",
                    "Den",
                    "Dem",
                    "Des"
                ]
            },
            {
                "type": "art",
                "answer": "em",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "art",
                "answer": "as",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "e",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 250,
        "level": "C1",
        "case": "Gen/Dat/Akk",
        "category": "Grand Finale: Anidada Total",
        "text": "Wegen d___ unerträglich___ Lärms {reicht} d___ Nachbar d___ geschrieben___ geschriebene Beschwerde ein.",
        "noun": "Lärm (m), Nachbar (m), Beschwerde (f)",
        "verbDesc": {
            "es": "Einreichen: Presentar/Entregar.",
            "en": "Einreichen: To submit.",
            "tr": "Einreichen: To submit.",
            "de": "Einreichen."
        },
        "explanation": {
            "es": "1. Debido al ruido (Gen). 2. El vecino (Nom + N-Dekl). 3. Queja escrita (Akk).",
            "en": "1. Due to noise (Gen). 2. The neighbor (Nom + N-decl). 3. Written complaint (Acc).",
            "de": "1. Gen (Wegen). 2. Nom (Subjekt). 3. Akk (Objekt)."
        },
        "slots": [
            {
                "type": "art",
                "answer": "es",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            },
            {
                "type": "art",
                "answer": "er",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "art",
                "answer": "ie",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "e",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 251,
        "level": "C2",
        "case": "Gen",
        "category": "Verbo con Complemento Genitivo",
        "text": "Der Angeklagte {entzieht} sich d___ strafrechtlich___ Verantwortung.",
        "noun": "Verantwortung (f)",
        "verbDesc": {
            "es": "Sich entziehen: Eludir. (Dativo).",
            "en": "Sich entziehen: To evade. (Dative).",
            "tr": "Sich entziehen: To evade. (Dative).",
            "de": "Sich entziehen: Dativ."
        },
        "explanation": {
            "es": "Estructura culta. Eludir la responsabilidad exige Genitivo femenino 'der'.",
            "en": "Formal structure. Evading responsibility requires feminine Genitive 'der'.",
            "de": "Gehobene Sprache. Feminin Genitiv 'der'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "er",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 252,
        "level": "C2",
        "case": "Nom",
        "category": "Atributo Participial Extendido",
        "text": "___ von d___ erstellt___ Experten erstellte Gutachten {liegt} vor.",
        "noun": "Gutachten (n), Experte (m)",
        "verbDesc": {
            "es": "Liegen: Estar tumbado/situado. (Posición -> Dativo).",
            "en": "Liegen: To lie/be located. (Position -> Dative).",
            "tr": "Liegen: Estar tumbado/situado. (Posición -> Dativo).",
            "de": "Liegen: Position (Dativ)."
        },
        "explanation": {
            "es": "1. Sujeto neutro 'Das'. 2. Dativo tras 'von' (N-Dekl). 3. Adjetivo declinado 'erstellte'.",
            "en": "1. Neuter subject 'Das'. 2. Dative after 'von'. 3. Declined adjective 'erstellte'.",
            "de": "1. Das (Nom). 2. dem Experten (Dat). 3. erstellte (Adj-Endung)."
        },
        "slots": [
            {
                "type": "art",
                "answer": "Das",
                "options": [
                    "Das",
                    "Der",
                    "Die",
                    "Den"
                ]
            },
            {
                "type": "art",
                "answer": "em",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "e",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 253,
        "level": "C2",
        "case": "Gen",
        "category": "Preposición Genitiva Rara",
        "text": "Unbeschadet d___ vorgebracht___ Einwände {wird} das Gesetz verabschiedet.",
        "noun": "Einwände (pl)",
        "verbDesc": {
            "es": "Werden: Convertirse/Ser (Pasiva).",
            "en": "Werden: To become/be.",
            "tr": "Werden: To become/be.",
            "de": "Werden."
        },
        "explanation": {
            "es": "Uso administrativo/legal. Genitivo plural 'der', adjetivo débil '-en'.",
            "en": "Legal usage. Plural Genitive 'der', weak adjective '-en'.",
            "de": "Amtssprache. Plural Genitiv 'der', Adjektiv '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "er",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 254,
        "level": "C2",
        "case": "Gen",
        "category": "Sustantivo Especial (Herz)",
        "text": "Das {ist} eine Angelegenheit mein___ gut___ Herzens.",
        "noun": "Herz (n)",
        "verbDesc": {
            "es": "Sein: Ser/Estar. (Nominativ).",
            "en": "Sein: To be. (Nominative).",
            "tr": "Sein: Ser/Estar. (Nominativ).",
            "de": "Sein: Nominativ-Verb."
        },
        "explanation": {
            "es": "El Genitivo de Herz es 'des Herzens'. Posesivo 'meines', adjetivo mixto '-en'.",
            "en": "The Genitive of Herz is 'des Herzens'. Possessive 'meines', adjective '-en'.",
            "de": "Unregelmäßiger Genitiv: des Herzens."
        },
        "slots": [
            {
                "type": "art",
                "answer": "es",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 255,
        "level": "C2",
        "case": "Gen",
        "category": "Verbo con Complemento Genitivo",
        "text": "Wir {gedenken} d___ zahlreich___ Opfer des Krieges.",
        "noun": "Opfer (pl)",
        "verbDesc": {
            "es": "Gedenken: Conmemorar / Recordar solemnemente. Rige Genitivo.",
            "en": "Gedenken: To commemorate. Takes Genitive.",
            "de": "Gedenken + Genitiv."
        },
        "explanation": {
            "es": "Verbo de alta cultura. Genitivo plural 'der', adjetivo débil '-en'.",
            "en": "Formal verb. Plural Genitive 'der', weak adjective '-en'.",
            "de": "Gehobene Sprache. Plural Genitiv 'der'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "er",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 256,
        "level": "C2",
        "case": "Dat",
        "category": "Adjetivo con Complemento Dativo",
        "text": "Er {ist} d___ ewig___ Sache überdrüssig.",
        "noun": "Sache (f)",
        "verbDesc": {
            "es": "Sein: Ser/Estar. (Nominativ).",
            "en": "Sein: To be. (Nominative).",
            "tr": "Sein: Ser/Estar. (Nominativ).",
            "de": "Sein: Nominativ-Verb."
        },
        "explanation": {
            "es": "Estar hastiado de la situación. Dativo femenino 'der'.",
            "en": "Weary of the situation. Feminine Dative 'der'.",
            "de": "Dativ Feminin 'der'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "er",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 257,
        "level": "C2",
        "case": "Gen",
        "category": "Preposición Genitiva (Hinsichtlich)",
        "text": "Hinsichtlich d___ wirtschaftlich___ Entwicklung {gibt} es Bedenken.",
        "noun": "Entwicklung (f)",
        "verbDesc": {
            "es": "Es gibt: Hay. (Akkusativ).",
            "en": "Es gibt: There is.",
            "tr": "Es gibt: There is.",
            "de": "Es gibt: Akk."
        },
        "explanation": {
            "es": "Genitivo femenino. Artículo 'der', adjetivo débil '-en'.",
            "en": "Feminine Genitive. Article 'der', weak adjective '-en'.",
            "de": "Feminin Genitiv 'der' + '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "er",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 258,
        "level": "C2",
        "case": "Nom",
        "category": "Atributo Participial (Partizip I)",
        "text": "___ lächelnd___ lächelnde Patient {wurde} entlassen.",
        "noun": "Patient (m)",
        "verbDesc": {
            "es": "Werden: Convertirse/Llegar a ser (o Auxiliar Pasiva).",
            "en": "Werden: To become (or Passive Aux).",
            "tr": "Werden: Convertirse/Llegar a ser (o Auxiliar Pasiva).",
            "de": "Werden: Nominativ / Passiv."
        },
        "explanation": {
            "es": "Sujeto masculino. Patient (N-Dekl). Adjetivo 'stets' (adverbio) + 'lächelnde'.",
            "en": "Masculine subject. Patient (N-decl). Adverb 'stets' + adjective 'lächelnde'.",
            "de": "Maskulin Nominativ + N-Deklination."
        },
        "slots": [
            {
                "type": "art",
                "answer": "Der",
                "options": [
                    "Der",
                    "Den",
                    "Dem",
                    "Des"
                ]
            },
            {
                "type": "adj",
                "answer": "e",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 259,
        "level": "C2",
        "case": "Gen",
        "category": "Verbo con Complemento Genitivo",
        "text": "Er {rühmt} sich sein___ groß___ Erfolge.",
        "noun": "Erfolge (pl)",
        "verbDesc": {
            "es": "Sich rühmen: Jactarse. (Genitivo).",
            "en": "Sich rühmen: To boast. (Genitive).",
            "tr": "Sich rühmen: To boast. (Genitive).",
            "de": "Sich rühmen: Genitiv."
        },
        "explanation": {
            "es": "Alardear de sus éxitos. Genitivo plural 'seiner'.",
            "en": "Boasting of his successes. Plural Genitive 'seiner'.",
            "de": "Plural Genitiv 'seiner' + '-en' (Adj)."
        },
        "slots": [
            {
                "type": "art",
                "answer": "er",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 260,
        "level": "C2",
        "case": "Dat",
        "category": "Zufolge (Postposición)",
        "text": "d___ offiziell___ Bericht zufolge {ist} die Lage stabil.",
        "noun": "Bericht (m)",
        "verbDesc": {
            "es": "Sein: Ser/Estar. (Nominativ).",
            "en": "Sein: To be. (Nominative).",
            "tr": "Sein: Ser/Estar. (Nominativ).",
            "de": "Sein: Nominativ-Verb."
        },
        "explanation": {
            "es": "Estructura de prensa. Dativo masculino 'dem'.",
            "en": "Journalistic structure. Masculine Dative 'dem'.",
            "de": "Maskulin Dativ 'dem'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "em",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 261,
        "level": "C2",
        "case": "Gen",
        "category": "Preposición Genitiva (Kraft)",
        "text": "Kraft mein___ hoh___ Amtes {entscheide} ich das.",
        "noun": "Amt (n)",
        "verbDesc": {
            "es": "Entscheiden: Decidir.",
            "en": "Entscheiden: To decide.",
            "tr": "Entscheiden: To decide.",
            "de": "Entscheiden."
        },
        "explanation": {
            "es": "Uso oficial. Genitivo neutro 'meines'.",
            "en": "Official usage. Neuter Genitive 'meines'.",
            "de": "Neutrum Genitiv 'meines'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "es",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 262,
        "level": "C2",
        "case": "Gen",
        "category": "Verbo con Complemento Genitivo",
        "text": "Sie {bedürfen} unser___ dringend___ Hilfe.",
        "noun": "Hilfe (f)",
        "verbDesc": {
            "es": "Bedürfen: Requerir / Tener necesidad de. Rige Genitivo.",
            "en": "Bedürfen: To require/need. Takes Genitive.",
            "de": "Bedürfen + Genitiv."
        },
        "explanation": {
            "es": "Registro muy formal. Genitivo femenino 'unserer'.",
            "en": "Highly formal register. Feminine Genitive 'unserer'.",
            "de": "Feminin Genitiv 'unserer'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "er",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 263,
        "level": "C2",
        "case": "Akk",
        "category": "Atributo Participial II Extendido",
        "text": "Ich {lese} d___ von d___ verfasst___ Autor verfassten Artikel.",
        "noun": "Autor (m), Artikel (m)",
        "verbDesc": {
            "es": "Lesen: Leer. Partizip I (lesend) als Adjektiv.",
            "en": "Lesen: To read. Participle I.",
            "tr": "Lesen: To read. Participle I.",
            "de": "Lesen: Partizip I."
        },
        "explanation": {
            "es": "1. Artículo 'den' (Akk Masc). 2. 'dem' (Dat Masc tras von + N-Dekl). 3. Adjetivo 'verfassten'.",
            "en": "1. Article 'den' (Acc Masc). 2. 'dem' (Dat Masc). 3. Adjective 'verfassten'.",
            "de": "1. den (Akk). 2. dem Autor (Dat). 3. verfassten (Adj)."
        },
        "slots": [
            {
                "type": "art",
                "answer": "en",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "art",
                "answer": "em",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 264,
        "level": "C2",
        "case": "Gen",
        "category": "Verbo con Complemento Genitivo",
        "text": "Ich {bin} mir d___ eigen___ Schuld bewusst.",
        "noun": "Schuld (f)",
        "verbDesc": {
            "es": "Sein: Ser/Estar. (Nominativ).",
            "en": "Sein: To be. (Nominative).",
            "tr": "Sein: Ser/Estar. (Nominativ).",
            "de": "Sein: Nominativ-Verb."
        },
        "explanation": {
            "es": "Ser consciente 'de la' culpa. Genitivo femenino 'der'.",
            "en": "Aware of the guilt. Feminine Genitive 'der'.",
            "de": "Feminin Genitiv 'der'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "er",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 265,
        "level": "C2",
        "case": "Gen",
        "category": "Preposición Genitiva (Ob)",
        "text": "Ob d___ stürmisch___ Wetters {blieb} er zu Hause.",
        "noun": "Wetter (n)",
        "verbDesc": {
            "es": "Bleiben: Quedarse/Permanecer.",
            "en": "Bleiben: To stay.",
            "tr": "Bleiben: To stay.",
            "de": "Bleiben."
        },
        "explanation": {
            "es": "Uso literario. Genitivo neutro 'des'.",
            "en": "Literary usage. Neuter Genitive 'des'.",
            "de": "Neutrum Genitiv 'des'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "es",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 266,
        "level": "C2",
        "case": "Gen",
        "category": "Verbo con Complemento Genitivo",
        "text": "Er {wurde} sein___ wichtig___ Amtes enthoben.",
        "noun": "Amt (n)",
        "verbDesc": {
            "es": "Werden: Convertirse/Llegar a ser (o Auxiliar Pasiva).",
            "en": "Werden: To become (or Passive Aux).",
            "tr": "Werden: Convertirse/Llegar a ser (o Auxiliar Pasiva).",
            "de": "Werden: Nominativ / Passiv."
        },
        "explanation": {
            "es": "Voz pasiva con complemento genitivo neutro 'seines'.",
            "en": "Passive voice with neuter genitive complement 'seines'.",
            "de": "Neutrum Genitiv 'seines'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "es",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 267,
        "level": "C2",
        "case": "Gen",
        "category": "Preposición Genitiva (Vermittelst)",
        "text": "Vermittelst ein___ speziell___ Werkzeugs {gelang} die Reparatur.",
        "noun": "Werkzeug (n)",
        "verbDesc": {
            "es": "Gelingen: Lograrse/Salir bien. (Dativo).",
            "en": "Gelingen: To succeed. (Dative).",
            "tr": "Gelingen: To succeed. (Dative).",
            "de": "Gelingen: Dativ."
        },
        "explanation": {
            "es": "Uso técnico antiguo. Genitivo neutro 'eines'.",
            "en": "Old technical usage. Neuter Genitive 'eines'.",
            "de": "Neutrum Genitiv 'eines'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "es",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 268,
        "level": "C2",
        "case": "Gen",
        "category": "Adjetivo con Complemento Genitivo",
        "text": "Ich {bin} mir mein___ baldig___ Erfolgs gewiss.",
        "noun": "Erfolg (m)",
        "verbDesc": {
            "es": "Sein: Ser/Estar. (Nominativ).",
            "en": "Sein: To be. (Nominative).",
            "tr": "Sein: Ser/Estar. (Nominativ).",
            "de": "Sein: Nominativ-Verb."
        },
        "explanation": {
            "es": "Seguro de su éxito. Genitivo masculino 'meines'.",
            "en": "Certain of my success. Masculine Genitive 'meines'.",
            "de": "Maskulin Genitiv 'meines'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "es",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 269,
        "level": "C2",
        "case": "Gen",
        "category": "Preposición Genitiva (Zeit)",
        "text": "Zeit {sein___} Lebens...",
        "noun": "Leben (n)",
        "verbDesc": {
            "es": "Sein: Ser/Estar. 'Zeit seines Lebens' -> Genitivo.",
            "en": "Sein: To be.",
            "tr": "Sein: To be.",
            "de": "Sein."
        },
        "explanation": {
            "es": "A lo largo de su vida. Genitivo neutro 'seines'.",
            "en": "Throughout his life. Neuter Genitive 'seines'.",
            "de": "Neutrum Genitiv 'seines'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "es",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "ganzen",
                "options": [
                    "ganze",
                    "ganzen",
                    "ganzer",
                    "ganzes"
                ]
            }
        ]
    },
    {
        "id": 270,
        "level": "C2",
        "case": "Gen",
        "category": "Verbo con Complemento Genitivo",
        "text": "Er {erbarmt} sich d___ Armen.",
        "noun": "Armen (pl)",
        "verbDesc": {
            "es": "Sich erbarmen: Apiadarse. (Genitivo).",
            "en": "Sich erbarmen: To have mercy. (Genitive).",
            "tr": "Sich erbarmen: To have mercy. (Genitive).",
            "de": "Sich erbarmen: Genitiv."
        },
        "explanation": {
            "es": "Uso literario/bíblico. Genitivo plural 'der'.",
            "en": "Literary/Biblical usage. Plural Genitive 'der'.",
            "de": "Plural Genitiv 'der'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "er",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            }
        ]
    },
    {
        "id": 271,
        "level": "C2",
        "case": "Gen",
        "category": "Preposición Genitiva (Zwecks)",
        "text": "Zwecks eindeutig___ Identifizierung {kamen} sie zur Polizei.",
        "noun": "Identifizierung (f)",
        "verbDesc": {
            "es": "Kommen: Venir.",
            "en": "Kommen: To come.",
            "tr": "Kommen: To come.",
            "de": "Kommen."
        },
        "explanation": {
            "es": "Uso administrativo. Genitivo femenino sin artículo (declinación fuerte '-er').",
            "en": "Administrative usage. Feminine Genitive without article (strong declension '-er').",
            "de": "Feminin Genitiv ohne Artikel."
        },
        "slots": [
            {
                "type": "adj",
                "answer": "er",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 272,
        "level": "C2",
        "case": "Gen",
        "category": "Verbo con Complemento Genitivo",
        "text": "Man {bezichtigte} ihn ein___ grausam___ Mordes.",
        "noun": "Mord (m)",
        "verbDesc": {
            "es": "Bezichtigen: Acusar/Culpar de algo. Rige Genitivo.",
            "en": "Bezichtigen: To accuse of. Takes Genitive.",
            "de": "Jemanden eines Verbrechens bezichtigen."
        },
        "explanation": {
            "es": "Acusar de un asesinato. Genitivo masculino 'eines'.",
            "en": "Accuse of a murder. Masculine Genitive 'eines'.",
            "de": "Maskulin Genitiv 'eines'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "es",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 273,
        "level": "C2",
        "case": "Gen",
        "category": "Preposición Genitiva (Halber)",
        "text": "d___ gut___ Ordnung halber {machen} wir das.",
        "noun": "Ordnung (f)",
        "verbDesc": {
            "es": "Machen: Hacer. (Akkusativ).",
            "en": "Machen: To make/do. (Accusative).",
            "tr": "Machen: To make/do. (Accusative).",
            "de": "Machen: Akkusativ-Verb."
        },
        "explanation": {
            "es": "Por amor al orden. Genitivo femenino 'der'.",
            "en": "For the sake of order. Feminine Genitive 'der'.",
            "de": "Feminin Genitiv 'der'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "er",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 274,
        "level": "C2",
        "case": "Gen",
        "category": "Verbo con Complemento Genitivo",
        "text": "Ich {entbehre} jeglich___ Worte.",
        "noun": "Worte (pl)",
        "verbDesc": {
            "es": "Entbehren: Carecer de / No tener (referido a algo abstracto). Rige Genitivo.",
            "en": "Entbehren: To lack. Takes Genitive.",
            "de": "Entbehren + Genitiv."
        },
        "explanation": {
            "es": "Carecer de palabras (quedarse mudo). Genitivo plural 'jeglicher'.",
            "en": "Lacking any words. Plural Genitive 'jeglicher'.",
            "de": "Plural Genitiv 'jeglicher'."
        },
        "slots": [
            {
                "type": "adj",
                "answer": "er",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 275,
        "level": "C2",
        "case": "Gen",
        "category": "Preposición Genitiva (Binnen)",
        "text": "Binnen ein___ kalendrisch___ Monats {muss} es fertig sein.",
        "noun": "Monat (m)",
        "verbDesc": {
            "es": "Müssen: Tener que/Deber.",
            "en": "Müssen: Must/Have to.",
            "tr": "Müssen: Must/Have to.",
            "de": "Müssen: Modalverb."
        },
        "explanation": {
            "es": "Plazo temporal. Genitivo masculino 'eines'.",
            "en": "Time limit. Masculine Genitive 'eines'.",
            "de": "Maskulin Genitiv 'eines'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "es",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 276,
        "level": "C2",
        "case": "Gen",
        "category": "Verbo con Complemento Genitivo",
        "text": "Man {klagte} ___ d___ schwer___ Diebstahls an.",
        "noun": "Diebstahl (m)",
        "verbDesc": {
            "es": "Anklagen: Acusar. (Akk + Genitiv).",
            "en": "Anklagen: To accuse. (Acc + Gen).",
            "tr": "Anklagen: Acusar. (Akk + Genitiv).",
            "de": "Anklagen: Akk + Gen."
        },
        "explanation": {
            "es": "Acusar 'del' robo. Genitivo masculino 'des'.",
            "en": "Accused of the theft. Masculine Genitive 'des'.",
            "de": "Maskulin Genitiv 'des' + '-en' (Adj)."
        },
        "slots": [
            {
                "type": "art",
                "answer": "ihn",
                "options": [
                    "er",
                    "ihn",
                    "ihm",
                    "seiner"
                ]
            },
            {
                "type": "art",
                "answer": "es",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 277,
        "level": "C2",
        "case": "Nom",
        "category": "Gerundivum (zu + Partizip I)",
        "text": "___ ___ zu lösenden Probleme {sind} komplex.",
        "noun": "Probleme (pl)",
        "verbDesc": {
            "es": "Sein: Ser/Estar. (Nominativ).",
            "en": "Sein: To be. (Nominative).",
            "tr": "Sein: Ser/Estar. (Nominativ).",
            "de": "Sein: Nominativ-Verb."
        },
        "explanation": {
            "es": "Los problemas 'que deben ser resueltos'. Nominativo plural, declinación débil '-en'.",
            "en": "The problems to be solved. Plural Nominative, weak declension '-en'.",
            "de": "Plural Nominativ, schwache Adjektivendung."
        },
        "slots": [
            {
                "type": "art",
                "answer": "Die",
                "options": [
                    "Die",
                    "Der",
                    "Das",
                    "Den"
                ]
            },
            {
                "type": "adj",
                "answer": "schnell",
                "options": [
                    "schnell",
                    "schnelle",
                    "schnellen",
                    "schneller"
                ]
            }
        ]
    },
    {
        "id": 278,
        "level": "C2",
        "case": "Gen",
        "category": "Adjetivo con Genitivo",
        "text": "Er {ist} d___ deutsch___ Sprache mächtig.",
        "noun": "Sprache (f)",
        "verbDesc": {
            "es": "Sein: Ser/Estar. (Nominativ).",
            "en": "Sein: To be. (Nominative).",
            "tr": "Sein: Ser/Estar. (Nominativ).",
            "de": "Sein: Nominativ-Verb."
        },
        "explanation": {
            "es": "Dominar el idioma. Genitivo femenino 'der'.",
            "en": "Mastering the language. Feminine Genitive 'der'.",
            "de": "Feminin Genitiv 'der'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "er",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 279,
        "level": "C2",
        "case": "Gen",
        "category": "Preposición Genitiva (Mangels)",
        "text": "Mangels eindeutig___ Beweise {wurde} er freigesprochen.",
        "noun": "Beweise (pl)",
        "verbDesc": {
            "es": "Werden: Convertirse/Llegar a ser (o Auxiliar Pasiva).",
            "en": "Werden: To become (or Passive Aux).",
            "tr": "Werden: Convertirse/Llegar a ser (o Auxiliar Pasiva).",
            "de": "Werden: Nominativ / Passiv."
        },
        "explanation": {
            "es": "Por falta de pruebas claras. Genitivo plural 'der'.",
            "en": "For lack of clear evidence. Plural Genitive 'der'.",
            "de": "Plural Genitiv 'der'."
        },
        "slots": [
            {
                "type": "adj",
                "answer": "er",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 280,
        "level": "C2",
        "case": "Gen",
        "category": "Preposición Genitiva (Eingedenk)",
        "text": "Eingedenk {sein___} Versprechens...",
        "noun": "Worte (pl)",
        "verbDesc": {
            "es": "Sein: Ser. 'Eingedenk' rige Genitivo. (Recordando su promesa).",
            "en": "Sein: To be.",
            "tr": "Sein: To be.",
            "de": "Sein."
        },
        "explanation": {
            "es": "Recordando sus palabras. Genitivo plural 'seiner'.",
            "en": "Mindful of his words. Plural Genitive 'seiner'.",
            "de": "Plural Genitiv 'seiner'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "er",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "letzten",
                "options": [
                    "letzte",
                    "letzten",
                    "letzter",
                    "letztes"
                ]
            }
        ]
    },
    {
        "id": 281,
        "level": "C2",
        "case": "Gen",
        "category": "Verbo con Complemento Genitivo",
        "text": "Wir {harren} d___ Dinge, die da kommen.",
        "noun": "Dinge (pl)",
        "verbDesc": {
            "es": "Harren: Aguardar. (Genitiv).",
            "en": "Harren: To await. (Genitive).",
            "tr": "Harren: To await. (Genitive).",
            "de": "Harren: Genitiv."
        },
        "explanation": {
            "es": "Frase hecha: 'Aguardar los acontecimientos'. Genitivo plural 'der'.",
            "en": "Idiom: 'To await the things to come'. Plural Genitive 'der'.",
            "de": "Gehobener Stil. Plural Genitiv 'der'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "er",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            }
        ]
    },
    {
        "id": 282,
        "level": "C2",
        "case": "Gen",
        "category": "Verbo con Complemento Genitivo",
        "text": "Er {begeht} ein___ bewaffnet___ Raubes.",
        "noun": "Raub (m)",
        "verbDesc": {
            "es": "Begehen: Cometer (un crimen).",
            "en": "Begehen: To commit.",
            "tr": "Begehen: To commit.",
            "de": "Begehen."
        },
        "explanation": {
            "es": "Acusado de robo a mano armada. Genitivo masculino 'eines'.",
            "en": "Accused of armed robbery. Masculine Genitive 'eines'.",
            "de": "Maskulin Genitiv 'eines'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "es",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 283,
        "level": "C2",
        "case": "Gen",
        "category": "Adjetivo con Genitivo",
        "text": "Sie {ist} d___ höchst___ Lobes würdig.",
        "noun": "Lob (n)",
        "verbDesc": {
            "es": "Sein: Ser/Estar. (Nominativ).",
            "en": "Sein: To be. (Nominative).",
            "tr": "Sein: Ser/Estar. (Nominativ).",
            "de": "Sein: Nominativ-Verb."
        },
        "explanation": {
            "es": "Digna del mayor elogio. Genitivo neutro 'des'.",
            "en": "Worthy of the highest praise. Neuter Genitive 'des'.",
            "de": "Neutrum Genitiv 'des' + '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "es",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 284,
        "level": "C2",
        "case": "Gen",
        "category": "Preposición Genitiva (Behufs)",
        "text": "Behufs d___ genau___ Prüfung {werden} alle Daten gesammelt.",
        "noun": "Prüfung (f)",
        "verbDesc": {
            "es": "Werden: Convertirse/Ser (Pasiva).",
            "en": "Werden: To become/be.",
            "tr": "Werden: To become/be.",
            "de": "Werden."
        },
        "explanation": {
            "es": "Uso administrativo extremo. Genitivo femenino 'der'.",
            "en": "Extreme administrative usage. Feminine Genitive 'der'.",
            "de": "Kanzleisprache. Feminin Genitiv 'der'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "er",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 285,
        "level": "C2",
        "case": "Gen",
        "category": "Idiomatismo Genitivo",
        "text": "Ich {bin} gut___ Mutes.",
        "noun": "Mut (m)",
        "verbDesc": {
            "es": "Sein: Ser/Estar. (Nominativ).",
            "en": "Sein: To be. (Nominative).",
            "tr": "Sein: Ser/Estar. (Nominativ).",
            "de": "Sein: Nominativ-Verb."
        },
        "explanation": {
            "es": "Frase hecha en Genitivo masculino. Adjetivo fuerte '-en'.",
            "en": "Idiomatic masculine Genitive. Strong adjective ending '-en'.",
            "de": "Maskulin Genitiv ohne Artikel."
        },
        "slots": [
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 286,
        "level": "C2",
        "case": "Dat",
        "category": "Verbo con Complemento Dativo Arcaico",
        "text": "Es {mangelt} d___ nötig___ (n) Geld.",
        "noun": "Geld (n)",
        "verbDesc": {
            "es": "Mangeln an: Carecer de. Rige Dativo.",
            "en": "Mangeln an: To lack. Takes Dative.",
            "de": "An etwas (Dat) mangeln."
        },
        "explanation": {
            "es": "Carecer de dinero suficiente. Dativo neutro 'am' (an dem).",
            "en": "Lack of sufficient money. Neuter Dative 'am'.",
            "de": "Neutrum Dativ 'dem'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "em",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 287,
        "level": "C2",
        "case": "Gen",
        "category": "Verbo con Complemento Genitivo",
        "text": "Die Stadt {ermangelt} d___ modern___ Infrastruktur.",
        "noun": "Infrastruktur (f)",
        "verbDesc": {
            "es": "Ermangeln: Carecer de. (Genitiv).",
            "en": "Ermangeln: To lack. (Genitive).",
            "tr": "Ermangeln: To lack. (Genitive).",
            "de": "Ermangeln: Genitiv."
        },
        "explanation": {
            "es": "Carecer de infraestructura moderna. Genitivo femenino 'der'.",
            "en": "Lack of modern infrastructure. Feminine Genitive 'der'.",
            "de": "Gehobener Stil. Feminin Genitiv 'der'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "er",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 288,
        "level": "C2",
        "case": "Gen",
        "category": "Adjetivo con Genitivo",
        "text": "Er {erachtete} sein___ Pflicht ledig.",
        "noun": "Pflicht (f)",
        "verbDesc": {
            "es": "Erachten: Considerar. (Akkusativ).",
            "en": "Erachten: To consider.",
            "tr": "Erachten: To consider.",
            "de": "Erachten."
        },
        "explanation": {
            "es": "Libre de su deber. Genitivo femenino 'seiner'.",
            "en": "Free from his duty. Feminine Genitive 'seiner'.",
            "de": "Feminin Genitiv 'seiner'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "er",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            }
        ]
    },
    {
        "id": 289,
        "level": "C2",
        "case": "Akk",
        "category": "Atributo Participial (Partizip II)",
        "text": "___ ein___ gegebene Versprechen {band} ihn.",
        "noun": "Versprechen (n)",
        "verbDesc": {
            "es": "Binden: Atar/Obligar. (Akkusativ).",
            "en": "Binden: To bind. (Accusative).",
            "tr": "Binden: To bind. (Accusative).",
            "de": "Binden: Akkusativ."
        },
        "explanation": {
            "es": "La promesa dada. Sujeto neutro 'Das'.",
            "en": "The given promise. Neuter subject 'Das'.",
            "de": "Neutrum Nominativ."
        },
        "slots": [
            {
                "type": "art",
                "answer": "Das",
                "options": [
                    "Das",
                    "Der",
                    "Die",
                    "Den"
                ]
            },
            {
                "type": "adj",
                "answer": "mal",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            }
        ]
    },
    {
        "id": 290,
        "level": "C2",
        "case": "Gen",
        "category": "Preposición Genitiva (Seitens)",
        "text": "Seitens d___ Regierung {gibt} es keine Kritik.",
        "noun": "Regierung (f)",
        "verbDesc": {
            "es": "Es gibt: Hay. (Akkusativ).",
            "en": "Es gibt: There is.",
            "tr": "Es gibt: There is.",
            "de": "Es gibt: Akk."
        },
        "explanation": {
            "es": "Por parte del gobierno. Genitivo femenino 'der'.",
            "en": "On the part of the government. Feminine Genitive 'der'.",
            "de": "Feminin Genitiv 'der'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "er",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            }
        ]
    },
    {
        "id": 291,
        "level": "C2",
        "case": "Gen",
        "category": "Verbo con Complemento Genitivo",
        "text": "Er {wurde} d___ grausam___ Verbrechens überführt.",
        "noun": "Verbrechen (n)",
        "verbDesc": {
            "es": "Werden: Convertirse/Llegar a ser (o Auxiliar Pasiva).",
            "en": "Werden: To become (or Passive Aux).",
            "tr": "Werden: Convertirse/Llegar a ser (o Auxiliar Pasiva).",
            "de": "Werden: Nominativ / Passiv."
        },
        "explanation": {
            "es": "Declarado culpable del crimen. Genitivo neutro 'des'.",
            "en": "Convicted of the crime. Neuter Genitive 'des'.",
            "de": "Neutrum Genitiv 'des'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "es",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 292,
        "level": "C2",
        "case": "Gen",
        "category": "Preposición Genitiva (Mangels)",
        "text": "Mangels d___ öffentlich___ Interesses {fiel} die Wahl aus.",
        "noun": "Interesse (n)",
        "verbDesc": {
            "es": "Ausfallen: Cancelarse/Resultar.",
            "en": "Ausfallen: To be cancelled/turn out.",
            "tr": "Ausfallen: To be cancelled/turn out.",
            "de": "Ausfallen."
        },
        "explanation": {
            "es": "Por falta de interés público. Genitivo neutro 'des'.",
            "en": "For lack of public interest. Neuter Genitive 'des'.",
            "de": "Neutrum Genitiv 'des'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "es",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 293,
        "level": "C2",
        "case": "Gen",
        "category": "Verbo con Complemento Genitivo",
        "text": "Ich {entbehre} jeglich___ Beweise.",
        "noun": "Beweise (pl)",
        "verbDesc": {
            "es": "Entbehren: Carecer de (abstracciones). Rige Genitivo.",
            "en": "Entbehren: To lack. Takes Genitive.",
            "de": "Einer Sache (Gen) entbehren."
        },
        "explanation": {
            "es": "Carece de toda prueba. Genitivo plural 'jeglicher'.",
            "en": "Lacks any proof. Plural Genitive 'jeglicher'.",
            "de": "Plural Genitiv 'jeglicher'."
        },
        "slots": [
            {
                "type": "adj",
                "answer": "er",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 294,
        "level": "C2",
        "case": "Nom",
        "category": "Atributo Participial Extendido",
        "text": "___ vom Minister vorgelegte Gesetzentwurf {wurde} abgelehnt.",
        "noun": "Gesetzentwurf (m)",
        "verbDesc": {
            "es": "Werden: Convertirse/Ser (Pasiva).",
            "en": "Werden: To become/be.",
            "tr": "Werden: To become/be.",
            "de": "Werden."
        },
        "explanation": {
            "es": "El proyecto de ley presentado por el ministro. Nominativo masculino 'Der'.",
            "en": "The bill presented by the minister. Masculine Nominative 'Der'.",
            "de": "Maskulin Nominativ."
        },
        "slots": [
            {
                "type": "art",
                "answer": "Der",
                "options": [
                    "Der",
                    "Den",
                    "Dem",
                    "Des"
                ]
            },
            {
                "type": "adj",
                "answer": "neu",
                "options": [
                    "neu",
                    "neue",
                    "neuen",
                    "neuer"
                ]
            }
        ]
    },
    {
        "id": 295,
        "level": "C2",
        "case": "Gen",
        "category": "Adjetivo con Genitivo",
        "text": "Er {ist} d___ dringend___ Hilfe bedürftig.",
        "noun": "Hilfe (f)",
        "verbDesc": {
            "es": "Sein: Ser/Estar. (Nominativ).",
            "en": "Sein: To be. (Nominative).",
            "tr": "Sein: Ser/Estar. (Nominativ).",
            "de": "Sein: Nominativ-Verb."
        },
        "explanation": {
            "es": "Necesitado de ayuda urgente. Genitivo femenino 'der'.",
            "en": "In need of urgent help. Feminine Genitive 'der'.",
            "de": "Feminin Genitiv 'der' + '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "er",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 296,
        "level": "C2",
        "case": "Gen",
        "category": "Preposición Genitiva (Behufs)",
        "text": "Behufs d___ zusätzlich___ Auskunft {rief} er an.",
        "noun": "Auskunft (f)",
        "verbDesc": {
            "es": "Anrufen: Llamar (teléfono). (Akkusativ).",
            "en": "Anrufen: To call. (Accusative).",
            "tr": "Anrufen: To call. (Accusative).",
            "de": "Anrufen: Akkusativ."
        },
        "explanation": {
            "es": "A efectos de obtener información adicional. Genitivo femenino 'der'.",
            "en": "For the purpose of additional information. Feminine Genitive 'der'.",
            "de": "Feminin Genitiv 'der'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "er",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 297,
        "level": "C2",
        "case": "Gen",
        "category": "Verbo con Complemento Genitivo",
        "text": "Sie {sind} ___ offiziell___ Amtes enthoben.",
        "noun": "Amt (n)",
        "verbDesc": {
            "es": "Sein: Ser/Estar. (Nominativ).",
            "en": "Sein: To be. (Nominative).",
            "tr": "Sein: Ser/Estar. (Nominativ).",
            "de": "Sein: Nominativ-Verb."
        },
        "explanation": {
            "es": "Relevado de su cargo oficial. Genitivo neutro 'ihres'.",
            "en": "Relieved of their official office. Neuter Genitive 'ihres'.",
            "de": "Neutrum Genitiv 'ihres'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "ihres",
                "options": [
                    "ihr",
                    "ihren",
                    "ihrem",
                    "ihres"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 298,
        "level": "C2",
        "case": "Gen",
        "category": "Adjetivo con Genitivo",
        "text": "Ich {bin} mir d___ bevorstehend___ Risikos bewusst.",
        "noun": "Risiko (n)",
        "verbDesc": {
            "es": "Sein: Ser/Estar. (Nominativ).",
            "en": "Sein: To be. (Nominative).",
            "tr": "Sein: Ser/Estar. (Nominativ).",
            "de": "Sein: Nominativ-Verb."
        },
        "explanation": {
            "es": "Soy consciente del riesgo inminente. Genitivo neutro 'des'.",
            "en": "I am aware of the imminent risk. Neuter Genitive 'des'.",
            "de": "Neutrum Genitiv 'des' + '-en'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "es",
                "options": [
                    "er",
                    "ie",
                    "as",
                    "en",
                    "em",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    },
    {
        "id": 299,
        "level": "C2",
        "case": "Gen",
        "category": "Preposición Genitiva (Zeit)",
        "text": "Zeit {sein___} Lebens...",
        "noun": "Leben (n)",
        "verbDesc": {
            "es": "Sein: Ser. 'Zeit seines Lebens'.",
            "en": "Sein: To be.",
            "tr": "Sein: To be.",
            "de": "Sein."
        },
        "explanation": {
            "es": "A lo largo de toda su vida. Genitivo neutro 'seines'.",
            "en": "Throughout his entire life. Neuter Genitive 'seines'.",
            "de": "Neutrum Genitiv 'seines'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "es",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "ganzen",
                "options": [
                    "ganze",
                    "ganzen",
                    "ganzer",
                    "ganzes"
                ]
            }
        ]
    },
    {
        "id": 300,
        "level": "C2",
        "case": "Gen",
        "category": "Verbo con Complemento Genitivo (Final)",
        "text": "Er {rühmt} sich sein___ außerordentlich___ Erfolge.",
        "noun": "Erfolge (pl)",
        "verbDesc": {
            "es": "Sich rühmen: Jactarse. (Genitivo).",
            "en": "Sich rühmen: To boast. (Genitive).",
            "tr": "Sich rühmen: To boast. (Genitive).",
            "de": "Sich rühmen: Genitiv."
        },
        "explanation": {
            "es": "Se jacta de sus extraordinarios éxitos. Genitivo plural 'seiner'.",
            "en": "He boasts of his extraordinary successes. Plural Genitive 'seiner'.",
            "de": "Plural Genitiv 'seiner'."
        },
        "slots": [
            {
                "type": "art",
                "answer": "er",
                "options": [
                    "-",
                    "e",
                    "en",
                    "em",
                    "er",
                    "es"
                ]
            },
            {
                "type": "adj",
                "answer": "en",
                "options": [
                    "e",
                    "en",
                    "er",
                    "es",
                    "em"
                ]
            }
        ]
    }
];