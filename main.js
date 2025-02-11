/* pari o dispari:
chiedere all'utente se vuole pari o dispari e un numero intero compreso tra 1 e 9. 
Generare un numero casuale compreso tra 1 e 9, che sarà la giocata del computer. 
Stabilire e comunicare chi ha vinto secondo le regole di pari o dispari.

tools used
- prompt for even/uneven
- prompt fot number
- const/let
- math random,math floor to generate a  number
- if/else
- module operator "%"
- log || alert
*/
const userChoice = prompt("choose even or uneven [even, uneven]")
console.log(userChoice);

const userNumber = Number(prompt("choose a number between 1 and 9"))
console.log(userNumber);

//Generare un numero casuale compreso tra 1 e 9, che sarà la giocata del computer.
const pcNumber = Math.floor(Math.random() * 9) + 1;
console.log(pcNumber);
//Somma tra usernumber and randonm number
const sum = userNumber + pcNumber
console.log(sum);
//Verificare se il numero è pari (utente pari utente vince) altimenti (vince pc)
if (sum % 2 === 0 && userChoice === "even") {
    let evenWins = "U Win!"
    alert(evenWins);

}
else if (sum % 2 !== 0 && userChoice === "even") {
    let evenLost = "U Lost!"
    alert(evenLost);

}
else if (sum % 2 !== 0 && userChoice === "uneven") {
    let unevenWins = "U Win!"
    alert(unevenWins)
}
else if (sum % 2 === 0 && userChoice === "uneven") {
    let unevenLost = "U Lost!"
    alert(unevenLost);
}

/* quanto manca:  Stabilire l'ora attuale e attraverso una operazione matematica stabilire i minuti mancanti allo scoccare della prossima ora.  Oltre a Math ci sono anche altre funzionalitá di javascript (built-in) che possaimo usare senza installazioni come ad esempio le funzioni dell'oggetto Date. */


const oraMinuti = 60

const now = new Date();
console.log(oraMinuti - now.getMinutes());

const remaining = oraMinuti - now.getMinutes()
console.log(`remaining time of the hour ${remaining} minutes`);
