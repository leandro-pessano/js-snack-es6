// Partendo da un array creiamone uno nuovo con solo i valori che hanno la posizione compresa tra i due numeri inseriti dall'utente
// Usiamo i nuovi metodi degli array foreach o filter

const array = ['primo', 'secondo', 'terzo', 'quarto', 'quinto'];
const numeroUno = parseInt(prompt('Inserire primo numero'));
const numeroDue = parseInt(prompt('Inserire secondo numero'));

const array2 = array.filter((e, i) =>
{
  return i >= numeroUno && i <= numeroDue
});

console.log(array2);
