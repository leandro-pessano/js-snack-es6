//Utilizzando const e/o let. Inserire un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

const num = parseInt(prompt('Inserire numero'));
if (num % 2 != 0) {
  console.log(num+1);
} else {
  console.log(num);
}
