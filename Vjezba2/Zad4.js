const komunutativnost = (val, cb, cb2) => {
  if (cb(cb2(val)) == cb2(cb(val))) return true;
  else return false;
};

const pomnoziSa2 = (val) => {
  return val * 2;
};

const promijeniPredznak = (val) => {
  return -val;
};

value = 2;

console.log(komunutativnost(value, pomnoziSa2, promijeniPredznak));
