/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
let firstletter = (array) => {

    let new_array = [];

    for (let i = 0; i < array.length; i++) {
        const first_letter = array[i][0];
        new_array.push(first_letter);
    }

    return new_array;
};


// Invoca la funzione qui e stampa il risultato in console
console.log(firstletter(names));


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]