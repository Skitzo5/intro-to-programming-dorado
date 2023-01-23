new Date(1 / 10 / 2023)

const today = getFullYear

//this will select the "footer" in the document
const footer = document.querySelector("footer");

//this will create a new paragraph in the document and store it in variable
const copyright = document.createElement("p");

//set the inner HTML to the copyright element previously created to display my name and year
document.querySelector("footer").innerHTML = "©" + thisYear + "Louie Mendoza";
