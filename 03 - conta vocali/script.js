/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function numeroVocali(string) {

    
    let vocali = ["a", "e", "i", "o", "u",];

    let contaVocali = 0;
    
    for (let i = 0; i < string.length; i++) {
        const element = string[i];

        if (vocali.includes(element)) {
            // incremeto il contatore di 1
            contaVocali++;
            console.log(element);
        } 
    }
    
    console.log(contaVocali);
}

// Invoca la funzione qui e stampa il risultato in console
numeroVocali(word);


//Risultato atteso se si passa 'javascript': 3 (a, a, i)