Biglietto del Treno
===
Esercizio 13/11/2024
## Consegna
Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

L’**output** del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

## Svolgimento
Per realizzare l'esercizio possiamo procedere secondo i seguenti step:
1. Riportiamo i dati iniziali presenti nella consegna, assegnado a ciascuno una variabile che riporterà la parola chiave (const o let) e il nome descrittivo in camelCase.

2. Inseriamo i prompt che ci servono per ottenere i dati necessari dell'utente. Ogni prompt è preceduto da **parsInt** in modo tale da ottenere un dato che sia un numero intero

3. Ricaviamo i dati necessari per calcolare i prezzi della tratta creando nuove variabili attraverso la combinazione di quelle iniziali con quelle inserite dall'utente.

4. Procediamo a configurare i diversi output attraverso dei *consol.log* situati all'interno delle Istruzioni Condizionali (IF, ELSE IF, ELSE) che modificheranno il messaggio ottenuto in base ai dati inseriti dall'utente.