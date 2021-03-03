let myPromise = new Promise((resolve) => {
  setTimeout(function () {
    resolve("Promise has been resolved!");
  }, 0);
});

myPromise.then(() => console.log("Promise has been resolved"));

console.log("I am not promise!");
