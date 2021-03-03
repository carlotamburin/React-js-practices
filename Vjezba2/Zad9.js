const ogranicenoPonavljanj = () => {
  counter = 0;
  interval = setInterval(function () {
    console.log("Hej za sada");
    counter += 1;
    if (counter == 5) {
      clearInterval(interval);
    }
  }, 1000);
};

ogranicenoPonavljanj();
