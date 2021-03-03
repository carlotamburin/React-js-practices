const grupiraj = (niz, cb) => {
  trueiliFalse = false;
  const nasobjekt = {};

  for (let i = 0; i < niz.length; i++) {
    trueiliFalse = cb(niz[i]);
    if (!nasobjekt.hasOwnProperty(trueiliFalse)) {
      nasobjekt[trueiliFalse] = [];
    }

    nasobjekt[trueiliFalse].push(niz[i]);
  }

  return nasobjekt;
};

const parniBroj = (el) => {
  if (el % 2 == 0) return true;
  else return false;
};

niz = [1, 2, 3, 4, 5, 6, 8, 7];

console.log(grupiraj(niz, parniBroj));
