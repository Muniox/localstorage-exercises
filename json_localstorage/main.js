const personInfo = localStorage.getItem("personInfo");
const h1 = document.getElementsByTagName("h1");

if (personInfo === null) {
  const name = prompt("What is your name");
  const surname = prompt("What is your lastname?");

  const person = {
    name,
    surname,
  };

  localStorage.setItem("personInfo", JSON.stringify(person));
} else {
  const person = JSON.parse(personInfo);
  const { name, surname } = person;
  h1[0].textContent = `Witaj ${name} ${surname}`;
}
