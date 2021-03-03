/// Zadatak 4

function iterator2(string) {
  let i = 0;
  let element = "";
  const inner = {
    next: function () {
      element = string[i];
      ++i;
      return element;
    },
  };
  return inner;
}

let str = "Ovo je nas string";
let words = str.split(" ");

pozivFunkcije = iterator2(words);
console.log(pozivFunkcije.next());
console.log(pozivFunkcije.next());
console.log(pozivFunkcije.next());
console.log(pozivFunkcije.next());

/// Zadatak 5
function generatorFunkcija(string) {
  function* inner() {
    //yield* Array.from(string);   1. nacin
    // yield* string              2. nacin
    for (let i = 0; i < string.length; i++) {
      const element = string[i];
      yield element;
    }
  }
  return inner();
}

pozivGeneratorFunkcije = generatorFunkcija(words);
console.log(pozivGeneratorFunkcije.next());
console.log(pozivGeneratorFunkcije.next());
console.log(pozivGeneratorFunkcije.next());
console.log(pozivGeneratorFunkcije.next());
