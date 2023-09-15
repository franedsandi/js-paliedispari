/* 
1. creare un promt per inserire una parola y
2. function palindromo 
  a. comparare la prima letera con la ultima e cosi fino al centro
  b. se non sono uguali = false
  c. se sono uguali = true
3. output;la parola (parola) e un palindromo / non e un palindromo 
===
4. creare un promt per inserire un numero
5. creare un promt per scelgiere pari o dispari (select e option)
6. generare un numero randon con funzione random generator
7. sumare entrambi numeri (utente e random)
8. con funzione paridispari leggere la somma
9. if somma e pari stampare la soma di (numero utente) + (numero random) e pari
10. else stampare la somma di (numero utente) + (numero random) e dispari
11. dichiarare se ha vinto o ha perso l'utente al dichiarare se il risultato sara pari o dispari  
*/




// 1.
const parola = prompt('Inserisci una parola palindromo');
// 4.
const numero = parseInt(prompt('Inserisci un numero'));
// 5.
const paridispari = prompt('Scegli tra pari o dispari');

// 3.
let message = '';
if (esPalindromo(parola)) {
  console.log(`La parola ${parola} è un palindromo.`);
  message = `La parola ${parola} è un palindromo.`;
} else {
  console.log(`La parola ${parola} non è un palindromo.`);
  message = `La parola ${parola} non è un palindromo.`;
}
document.getElementById('palindromoverificator').innerHTML = message;
// 7.
const somma = numero + randomizer(1, 9);
const numeroRandom = somma - numero;
let secondMessage = `La somma tra ${numero} e ${numeroRandom} è: ${somma}`;

// 9.
if (esPari(somma)) {
  secondMessage += ' ed è un numero pari.';
  // 11.
  if (paridispari === 'pari') {
    secondMessage += ' Hai vinto!';
  } else if (paridispari === 'dispari') {
    secondMessage += ' Hai perso!';
  } else {
    secondMessage += ' Ma tu non hai scelto nulla...';
  }
// 10.
} else {
  secondMessage += ' ed è un numero dispari.';
  // 11.
  if (paridispari === 'dispari') {
    secondMessage += ' Hai vinto!';
  } else if (paridispari === 'pari') {
    secondMessage += ' Hai perso!';
  } else {
    secondMessage += ' Ma tu non hai scelto nulla...';
  }
}
console.log(secondMessage);
document.getElementById('output').innerHTML = secondMessage;



// 2.
function esPalindromo(parola) {
  const pLength = parola.length;
  // a.
  for (let i = 0; i < pLength / 2; i++) {
    // b.
    if (parola[i] !== parola[pLength - 1 - i]) {
      return false;}}
  // c.
  return true;
}

// 6.
function randomizer(min, max) {
  const random = Math.floor(Math.random() * (max - min + 1) + min);
  return random;
}

// 8.
function esPari(numero) {
  return numero % 2 === 0;
}