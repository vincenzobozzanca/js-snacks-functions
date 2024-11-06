/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.


let charSelector = (array, character) => {
    let new_array = [];
    
    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        // creo una variabile per gli elementi che iniziano con il carattere A
        let specificChar = element.startsWith(character);

        // se iniziano con il carattere specifico
        if (specificChar) {   
            // pusha l'elemento dentro al new_array
            new_array.push(element);
        }
    }

    return new_array;
}

console.log(charSelector(names, "A"));
// Invoca la funzione qui e stampa il risultato in console


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]