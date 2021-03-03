const delayCounter = (target, wait) => {
  function vracenaFunkcija() {
    for (let i = 1; i < target; i++) {
      setTimeout(function () {
        console.log(i);
      }, wait);
    }
  }
  return vracenaFunkcija;
};
const pozivFunkcije = delayCounter(5, 1000);
pozivFunkcije();
