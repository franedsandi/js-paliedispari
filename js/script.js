function esPalindromo(parola) {
  // Elimina los espacios en blanco y convierte a minúsculas
  parola = parola.toLowerCase().replace(/ /g, '');

  // Invierte la palabra
  const parolaInversa = parola.split('').reverse().join('');

  // Compara la palabra original con la invertida
  if (parola === parolaInversa) {
    return true;
  } else {
    return false;
  }
}

const parola = prompt('Inserisci una parola palindromo');
if (esPalindromo(parola)) {
  console.log(`La parola ${parola} e un palindromo.`);
} else {
  console.log(`La parola ${parola} non e es un palindromo.`);
}