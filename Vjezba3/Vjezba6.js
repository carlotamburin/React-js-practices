let str = "Ovo je nas nasa funkcija i ona je generator bok";
let words = str.split(" ");

function* myGen(rijeci) {
  yield* rijeci;
}

const gen = myGen(words);

const start = setInterval(function () {
  var next = gen.next();
  if (next.done) {
    clearInterval(start);
  } else if (next.value == "generator") {
    console.log("hej");
  } else {
    console.log("besmislica");
  }
}, 3000);
