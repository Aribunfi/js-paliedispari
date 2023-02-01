//Chiedere all'utente di inserire una parola
const string = prompt('Inserisci una parola:');

// funzione che verifica la presenza delle stesse lettere da sin a dx e viceversa

function checkPalindrome(string) {

    
    const len = string.length;

    for (let i = 0; i < len / 2; i++) {

        if (string[i] !== string[len - 1 - i]) {
            alert("No, non è palindroma");
            return 'No, la parola non è palindroma';
            
        }
    }
    alert("Sì, è palindroma");
    return 'Sì, la parola è palindroma';
    
}



// invocare la funzione
const value = checkPalindrome(string);

console.log(value);