// Utilizzando const e/o let. Dare la possibilità di inserire due parole. Verificare se le due parole hanno la stessa lunghezza. Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

const parola1 = prompt('Inserire parola numero 1');
const parola2 = prompt('Inserire parola numero 2');

if (parola1.length > parola2.length) {
  console.log(parola1);
} else if (parola2.length > parola1.length) {
  console.log(parola2);
} else {
  console.log(`${parola1} ${parola2}`);
}
