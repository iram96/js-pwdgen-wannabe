console.log("JS OK");

/*
Creo una password con le informazioni inserite dall'utente
*/


// Chiedo nome

const firstName = prompt("Qual'è il tuo nome?");
console.log(`name: ${firstName}`);
// Chiedo Cognome
const surname = prompt("Qual'è il tuo cognome?");
console.log(`surname: ${surname}`);
// Chiedo Colore preferito
const favColor = prompt("Qual'è il tuo colore preferito");
console.log(`favorite color: ${favColor}`);
const currentYear = 2021
// cerco doc element
let pswGenerator = `La tua password è: ${firstName}${surname}${favColor}${currentYear}`
const pswText = document.getElementById('safe-password');
pswText.innerHTML = pswGenerator;

// inserisco valore in element