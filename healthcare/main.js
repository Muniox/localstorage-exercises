//pobieram buttony
const feelGoodButton = document.getElementById("good");
const feelBadButton = document.getElementById("bad");

//pobieram elemeny w których mają się wyświetlać wyniki
const outputGood = document.getElementById("feelGood");
const outputBad = document.getElementById("feelBad");

//jeśli nie ma klucza "health" w localStorage to stwórz go
if (!localStorage.getItem("health")) {
  const healthInfo = {
    good: 0,
    bad: 0,
  };
  localStorage.setItem("health", JSON.stringify(healthInfo));
}

//pobierz wartość klucza health z localStorage
const getHealth = JSON.parse(localStorage.getItem("health"));

//wyświetl wyniki w odpowiednich polach tabeli, wyświetli wyniki zapisane w localStorage przy załadowaniu strony
outputGood.textContent = Number(getHealth.good);
outputBad.textContent = Number(getHealth.bad);

/*
 *   funkcja healthCounter która przyjmuje 3 parametry(klucz z localStorage, parametr z obiektu klucza jako string
 *   oraz element w którym ma się wyświetlać)
 *
 ****/
const healthCounter = (isFeel, param, output) => {
  isFeel[param] = ++isFeel[param];
  localStorage.setItem("health", JSON.stringify(isFeel));
  output.textContent = isFeel[param];
};

//wyzwól funckje podczas naciśnięcia odpowiedniego buttona
feelGoodButton.addEventListener("click", () => healthCounter(getHealth, "good", outputGood));
feelBadButton.addEventListener("click", () => healthCounter(getHealth, "bad", outputBad));

//-----------------------------------------------------------------------------------
//zadanie 3
//Niestety zrobione na szybko ;p
const arraySum = document.getElementById("arraySum");
const sumButton = document.getElementById("sumThis");

if (!localStorage.getItem("array")) {
  const array = [];
  localStorage.setItem("array", JSON.stringify(array));
}

const getArray = JSON.parse(localStorage.getItem("array"));
let counter = 0;
getArray.map((element) => (counter += element));
arraySum.textContent = counter;

const sumAll = () => {
  let counter = 0;
  const number = Number(prompt("dodaj liczbę do tablicy"));
  if (!isNaN(number)) {
    getArray.push(number);
    getArray.map((element) => (counter += element));
    arraySum.textContent = counter;
    localStorage.setItem("array", JSON.stringify(getArray));
    return counter;
  } else {
    alert("podaj prawidłową liczbę");
  }
};

sumButton.addEventListener("click", () => sumAll());
