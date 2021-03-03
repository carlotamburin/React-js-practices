let imenica = "Prijatelj";

function DodajGlagol(imenica) {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve(imenica + " Programira");
    }, 3000);
  });
}

async function Poruka(imenica) {
  const msg = await DodajGlagol(imenica);
  console.log(msg);
}

Poruka(imenica);
