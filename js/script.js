/* 1. creare un promt per inserire una parola y
2. function palindromo y
  a.eliminare spazi a mayuscula y
  b.invertire la parola y
  c.comparare la parola con parolaInversa y
3. if parola = !parolainversa = false
4. else = palindromo = true
5. output;la parola (parola) e un palindromo / non e un palindromo y
===
1. creare un promt per inserire un numero
1. creare un promt per scelgiere pari o dispari (select e option)
1. generare un numero randon con funzione random generator
1. sumare entrambi numeri (utente e random)
1. con funzione paridispari leggere la somma
1. if somma e pari stampare la soma di (numero utente) + (numero random) e pari
1. else stampare la somma di (numero utente) + (numero random) e dispari
1. dichiarare se ha vinto o ha perso l'utente al dichiarare se il risultato sara pari o dispari */




//1.
const parola = prompt('Inserisci una parola palindromo');
let message='';
const numero = parseInt(prompt('Inserisci un numero'));
const paridispari = prompt('scelgie tra pari o dispari');

//3.
if (esPalindromo(parola)) {
  //5
  console.log(`La parola ${parola} e un palindromo.`);
  message=`La parola ${parola} e un palindromo.`;
  document.getElementById('palindromoverificator').innerHTML = message;
//4.
} else {
  //5
  console.log(`La parola ${parola} non e es un palindromo.`);
  message=`La parola ${parola} non e es un palindromo.`;
  document.getElementById('palindromoverificator').innerHTML = message;
}



//2
function esPalindromo(parola) {
  //a
  parola = parola.toLowerCase().replace(/ /g, '');
  const pLenght = parola.length;
  //b e c
  for (let i = 0; i < pLenght / 2; i++) {
    if (parola[i] !== parola[pLenght - 1 - i]) {
      return false;
    }else{
      return true;}}}

const somma = numero + randomizer(1,9);
const numeroRandom = somma - numero;
let secondMessage =`la somma tra ${numero} e ${numeroRandom} è : ${somma} `
console.log(secondMessage);
document.getElementById('output').innerHTML = secondMessage;


min=0
max=9
function randomizer(min, max){
  const random = Math.floor(Math.random() * (max - min + 1) + min ) 
  return random
}

