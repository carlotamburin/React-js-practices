const vecina = (niz, cb) => {
  brojacT = 0;
  brojacF = 0;
  rezultat = 0;

  for (let i = 0; i < niz.length; i++) {
    if (cb(niz[i])) brojacT += 1;
    else brojacF += 1;
    rezultat = brojacT / niz.length;
  }
  if (rezultat > 0.5) return true;

  if (brojacT <= brojacF) return false;
  else return true;
};

const parniBroj = (el) => {
  if (el % 2 == 0) return true;
  else return false;
};

niz = [1, 2, 3, 4, 5, 6, 8, 7];

vecina(niz, parniBroj);
console.log(vecina(niz, parniBroj));
