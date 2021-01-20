// Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal.

const listaBici = [
  {
    nome : 'Bici1',
    peso : 20
  },
  {
    nome : 'Bici2',
    peso : 12
  },
  {
    nome : 'Bici3',
    peso : 10
  },
  {
    nome : 'Bici4',
    peso : 15
  },
  {
    nome : 'Bici5',
    peso : 18
  },
];

let temp = listaBici[0];
listaBici.forEach((e) => {
  if (e.peso < temp.peso) {
    temp = e;
  }
});
console.log(`La bici più leggera è: ${temp.nome} e pesa ${temp.peso}`);
