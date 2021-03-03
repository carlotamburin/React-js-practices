let myPromise = new Promise((resolve, reject) => {
  setTimeout(function () {
    let i = 0;
    try {
      if (i == 0) throw new Error("Kriva vrijednost od:" + i);
    } catch (error) {
      reject("Error");
    }
  }, 1000);
});

myPromise.then(
  (PorukaIzResolva) => {
    console.log("Message:" + PorukaIzResolva);
  },
  (PorukaIzRejecta) => {
    console.log("Message: " + PorukaIzRejecta);
  }
);
