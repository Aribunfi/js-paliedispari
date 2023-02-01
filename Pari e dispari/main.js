// L'utente sceglie pari o dispari 

const userChoice = prompt ("Scrivi 'pari' o 'dispari'");

    console.log(userChoice);

//e inserisce un numero da 1 a 5.

const userNumber = parseInt(prompt ("Inserisci un numero da 1 a 5"));

    console.log(userNumber);


// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

const pcNumber = randomPcNumber(1,5);



function randomPcNumber (min, max) {
    const pcNumber = Math.floor(Math.random()*(max - min +1)) + min;

    console.log(pcNumber);

    return pcNumber;

}
// Sommiamo i due numeri

let gameTotal = userNumber + pcNumber; 

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

let evenGameTotal = isEven(gameTotal);

function isEven(num) {
    if(num % 2 == 0) {
        console.log ("La somma dei due numeri è pari");
        return true;
    }
        console.log ("La somma dei due numeri è dispari");
    return false;
}

// Dichiariamo chi ha vinto.