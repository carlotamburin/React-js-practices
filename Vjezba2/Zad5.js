const dodaj1 = (val) => {
  return val + 1;
};

const promijeniPredznak = (val) => {
  return -val;
};

const pomnoziSa2 = (val) => {
  return val * 2;
};

var nizFunkcija = [dodaj1, promijeniPredznak, pomnoziSa2];

const pipe = (nizF, val) => {
  element = val;
  for (let i = 0; i < nizF.length; i++) {
    element = nizF[i](element);
  }
  return element;
};

console.log(pipe(nizFunkcija, 6));
