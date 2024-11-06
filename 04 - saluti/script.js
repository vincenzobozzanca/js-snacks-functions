/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = 'Mario';


// Dichiara la funzione qui.

let saluti = (word) => `Ciao ${word}`;

// Invoca la funzione qui e stampa il risultato in console

console.log(saluti(name));
//Risultato atteso se si passa 'Mario': // ciao Mario