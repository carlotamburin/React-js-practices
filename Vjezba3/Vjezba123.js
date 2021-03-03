//// Zad 1
console.log("Prvi Zadatak");
const sumaElemenata = (niz) => {
  let suma = 0;
  for (let i = 0; i < niz.length; i++) {
    suma = suma + niz[i];
  }
  return suma;
};
nekiNIz = [1, 3, 5, 7, 9];

Suma = sumaElemenata(nekiNIz);
console.log(Suma);

/////// Zad 2
console.log("////////////////");
console.log("Drugi Zadatak");

function iterator(niz) {
  let i = 0;
  function inner() {
    i++;
    element = niz[i];
    return `${element} je ${i} clan niza`;
  }
  return inner;
}

const rezultat = iterator(nekiNIz);

console.log(rezultat());
console.log(rezultat());
console.log(rezultat());
console.log(rezultat());

//////// Zad 3
console.log("////////////////");
console.log("Treci Zadatak");

function iterator2(niz) {
  let i = 0;

  const inner = {
    next: function () {
      const element = [];
      element.push(i, niz[i]);
      i++;
      return element;
    },
  };
  return inner;
}

const rezultat20 = iterator2(nekiNIz);
const rezultat12 = rezultat20.next();
const rezultat22 = rezultat20.next();
const rezultat32 = rezultat20.next();
const rezultat42 = rezultat20.next();
const rezultat52 = rezultat20.next();
const rezultat62 = rezultat20.next();

console.log(rezultat12);
console.log(rezultat22);
console.log(rezultat32);
console.log(rezultat42);
console.log(rezultat52);
