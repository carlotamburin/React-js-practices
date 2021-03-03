let myPromise = new Promise((resolve) => {
  setTimeout(function () {
    resolve("Resolved");
  }, 1000);
});

myPromise.then((PorukaIzResolva) => {
  console.log("Message:" + PorukaIzResolva);
});
