/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
console.log(
  "ESERCIZIO 1 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino."
);
const stringa = "QUESTA E' UNA STRINGA"; //Si intende per String un "contenitore" con un determinato valore di tipo Testo.
const stringa1 = "1"; // anche questo viene interpetato come testo, poi che racchiuso tra virgolette singole e/o doppie
console.log(
  "Es.1 - STRINGA - Si intende per String un (contenitore) con un determinato valore di tipo Testo."
);
console.log(stringa);
console.log(stringa1);
console.log(
  stringa1 +
    " in realta l'uno è inteso come testo e non come numero"
);
console.log(
  "ES.2 - NUMBER - Si esprimono tutti i valori decimali"
);
const numero = 5; // Si esprimono tutti i valori decimali
console.log(numero);
// Se vollessimo sostituire il valore assegnato ad una stringa e/o una valore numerico
//ESEMPIO BOOLEAN*******************************************+*/
console.log("ES.3 - BOOLEAN - VERO O FALSO");
const vero = true;
const falso = false;
console.log(vero, falso); // STAMPA DI TIPO TRUE E FALSE
//ESEMIPO DI TIPPO UNDEFINED***************************/
console.log("ES.4 - UNEFINED - Valori da definire");
const nonDefinito = undefined;
console.log(nonDefinito);
//ESEMIO DI TIPO NULL***********************************/
console.log("ES.5 - NULL - contenitore vuoto");
console.log();
let stringa3 = "Amare";
stringa3 = null;
console.log(
  "abbiamo sostituito la striga - odiare con un valore Null"
);
console.log(stringa3);
stringa3 = "Odiare";
console.log(stringa3);
//ESEMPIO CON NUMERO//****************************************************/
let numero1 = 15;
console.log(numero1);
console.log("numero da sostiture 15");
numero1 = 20;
console.log("numero sostituito 15 con valore 20");
console.log(numero1);

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
console.log(
  "ESERCIZIO 2 Crea una variable chiamata (myName)e assegna ad essa il tuo nome, sotto forma di stringa."
);
const myName = "Teo";
console.log(myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
console.log(
  "ESERCIZIO 3 Scrivi il codice necessario ad effettuare un addizione una somma dei numeri 12 e 20."
);

const valore1 = 12;
const valore2 = 20;
const totale = valore1 + valore2;

console.log(totale);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

console.log(
  "ESERCIZIO 4 Crea una variable di nome - x e assegna ad essa il numero 12."
);
let x = 12;
console.log(x);

console.log(
  "ESERCIZIO 5 Riassegna un nuovo valore alla variabile - myName già esistente: il tuo cognome.Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const"
);

/* ESERCIZIO 5
    Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
    Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
  */
console.log("Vedi le note");
// myName = Todor;
// console.log(myName);

/* ESERCIZIO 6
Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
console.log(
  "ESERCIZIO 6 Esegui una sottrazione tra i numeri 4 e la variable - x appena dichiarata (che contiene il numero 12)."
);
const x1 = 4;
console.log("valore scelo è: ", x1);
console.log(x - x1);

/* ESERCIZIO 7
Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
console.log(
  " ESERCIZIO 7 - Crea due variabili: -name1- e -name2-. Assegna a name1 la stringa - john -, e assegna a name2 la stringa - John - (con la J maiuscola!).Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa.EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase - senza cambiare il valore di name2!"
);
const name1 = "john";
const name2 = "John";
console.log(name1 === name2);
console.log(name1 < name2);
console.log(!(name1 === name2));
console.log(!(name1 < name2));
