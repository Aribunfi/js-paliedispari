// L'utente sceglie pari o dispari 

const userChoice = parseInt(prompt ("Scrivi 'pari' o 'dispari'"));

//e inserisce un numero da 1 a 5.

const userNumber = parseInt(prompt ("Inserisci un numero da 1 a 5"));


// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

const pcNumber = randomPcNumber(1,5);



function randomPcNumber (min, max) {
    const randomNumber = Math.floor(Math.random()*(massimo - minimo +1)) + minimo;

    return randomNumber;
}
// Sommiamo i due numeri

let gameTotal = userNumber + randomPcNumber; 

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

let evenGameTotal = isEven(gameTotal);

function isEven(num) {
    if(num % 2 == 0) {
        return true;
    }

    return false;
}

// Dichiariamo chi ha vinto.