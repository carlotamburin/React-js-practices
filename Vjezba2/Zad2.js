const prioritize = (niz, cb) => {
  noviniz = [];
  for (let i = 0; i < niz.length; i++) {
    if (cb(niz[i])) noviniz.unshift(niz[i]);
    else noviniz.push(niz[i]);
  }
  return noviniz;
};

const parniBroj = (el) => {
  if (el % 2 == 0) return true;
  else return false;
};

niz = [1, 2, 3, 4, 5, 6, 8, 7];

console.log(prioritize(niz, parniBroj));
